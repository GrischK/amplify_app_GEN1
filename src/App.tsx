import {useEffect, useState} from 'react';
import {generateClient} from 'aws-amplify/api';

const client = generateClient();
import {uploadData} from 'aws-amplify/storage';
import * as mutations from './graphql/mutations';
import {createDog} from './graphql/mutations';
import {listDogs} from './graphql/queries';
import {type CreateDogInput, type Dog} from './API';
import {
  withAuthenticator,
  Button,
  Heading,
  Text,
  TextField,
  View
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import {AppProps} from "./types/types.ts";


const initialState: CreateDogInput = {name: '', representative: '', file: null};

// eslint-disable-next-line react-refresh/only-export-components
const App: React.FC<AppProps> = ({signOut, user}) => {
  const [formState, setFormState] = useState<CreateDogInput>(initialState);
  const [todos, setTodos] = useState<Dog[] | CreateDogInput[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const todoData = await client.graphql({
        query: listDogs,
      });
      const todos = todoData.data.listDogs.items;
      setTodos(todos);
    } catch (err) {
      console.log('error fetching todos', err);
    }
  }

  async function uploadFile(file: File, filename: string) {
    try {
      const result = await uploadData({
        path: `public/dogs/${filename}`,
        data: file,
        options: {
          onProgress: ({transferredBytes, totalBytes}) => {
            if (totalBytes) {
              console.log(
                  `Upload progress ${
                      Math.round((transferredBytes / totalBytes) * 100)
                  } %`
              );
            }
          }
        }
      }).result;
      console.log('Path from Response: ', result.path);
    } catch (error) {
      console.log('Error : ', error);
    }
  }


  async function addTodo() {
    try {
      if (!formState.name || !formState.representative) return;
      if (!formState.file) {
        const todo = {...formState};
        setTodos([...todos, todo]);
        setFormState(initialState);
        await client.graphql({
          query: createDog,
          variables: {
            input: todo,
          },
        });
      } else if (formState.file) {
        const filename = `${formState.name}-${Date.now()}`;
        const imageSrc = await uploadFile(formState.file, filename)

        const todo = {...formState, picture: imageSrc};
        setTodos([...todos, todo]);
        setFormState(initialState);

        await client.graphql({
          query: createDog,
          variables: {
            input: todo,
          },
        });
      }

    } catch (err) {
      console.log('error creating todo:', err);
    }
  }

  async function deleteTodo(id: string) {
    await client.graphql({
      query: mutations.deleteDog,
      variables: {input: {id}},
    })
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
      <View style={styles.container}>
        <div style={{...styles.flexCol, ...styles.userInfo}}>
          <Heading level={1}>Hello {user?.username}</Heading>
          <Button style={styles.button} onClick={signOut}>
            Sign out
          </Button>
        </div>
        <div style={{...styles.flexCol, ...styles.createDog}}>
          <Heading level={2}>Amplify Dogs</Heading>
          <TextField
              label=""
              placeholder="Name"
              onChange={(event) =>
                  setFormState({...formState, name: event.target.value})
              }
              style={styles.input}
              value={formState.name}
          />
          <TextField
              label=""
              placeholder="Representative"
              onChange={(event) =>
                  setFormState({...formState, representative: event.target.value})
              }
              style={styles.input}
              value={formState.representative ?? ''}
          />
          <input type="file" onChange={(e) => setFormState({...formState, file: e.target.files?.[0]})}/>
          <Button style={styles.button} onClick={addTodo}>
            Save new dog
          </Button>
        </div>
        <div style={styles.flexCol}>
          {todos.map((todo, index) => (
              <View key={todo.id ? todo.id : index} style={styles.todo}>
                <Text style={styles.todoName}>{todo.name}</Text>
                <Text style={styles.todoDescription}>{todo.representative}</Text>
                <Button style={styles.button} onClick={() => deleteTodo(todo.id!)}>
                  Delete
                </Button>
              </View>
          ))}
        </div>
      </View>
  );
};

const styles = {
  flexCol: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "100vw",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
    padding: 20,
    background: "linear-gradient(180deg, rgb(124, 131, 131), rgb(255, 255, 255))",

  },
  todo: {
    marginBottom: 15,
    border: "1px solid black",
    padding: "6px",
    borderRadius: "12px",
    width: "30vw",
    backgroundColor: "white",
    zIndex: 10
  },
  input: {
    border: "none",
    backgroundColor: "#ddd",
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
  todoName: {fontSize: 20, fontWeight: "bold"},
  todoDescription: {marginBottom: 0},
  button: {
    backgroundColor: "black",
    color: "white",
    outline: "none",
    fontSize: 18,
    padding: "12px 6px",
  },
  createDog: {
    borderBottom: "1px solid black",
    paddingBottom: "12px"
  },
  userInfo: {
    marginBottom: "24px"
  }
} as const;

export default withAuthenticator(App);