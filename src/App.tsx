import {useEffect, useState} from 'react';
import {generateClient} from 'aws-amplify/api';
const client = generateClient();
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


const initialState: CreateDogInput = {name: '', representative: ''};

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

    async function addTodo() {
        try {
            if (!formState.name || !formState.representative) return;
            const todo = {...formState};
            setTodos([...todos, todo]);
            setFormState(initialState);
            await client.graphql({
                query: createDog,
                variables: {
                    input: todo,
                },
            });
        } catch (err) {
            console.log('error creating todo:', err);
        }
        console.log(formState)
    }

    async function deleteTodo(id: string) {
        await client.graphql({
            query: mutations.deleteDog,
            variables: {input: {id}},
        })
        setTodos(todos.filter(todo => todo.id !== id));
    }

    console.log(todos)
    return (
        <View style={styles.container}>
            <Heading level={1}>Hello {user?.username}</Heading>
            <Button style={styles.button} onClick={signOut}>
                Sign out
            </Button>
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
            <Button style={styles.button} onClick={addTodo}>
                Save new dog
            </Button>
            {todos.map((todo, index) => (
                <View key={todo.id ? todo.id : index} style={styles.todo}>
                    <Text style={styles.todoName}>{todo.name}</Text>
                    <Text style={styles.todoDescription}>{todo.representative}</Text>
                    <Button style={styles.button} onClick={() => deleteTodo(todo.id!)}>
                        Delete
                    </Button>
                </View>
            ))}
        </View>
    );
};

const styles = {
    container: {
        width: 400,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 20,
    },
    todo: {marginBottom: 15},
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
} as const;

export default withAuthenticator(App);