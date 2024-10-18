import React, {useEffect, useState} from 'react';
import {generateClient} from 'aws-amplify/api';

const client = generateClient();
import {uploadData, getUrl} from 'aws-amplify/storage';
import * as mutations from './graphql/mutations';
import {createDog} from './graphql/mutations';
import {listDogs} from './graphql/queries';
import {type Dog} from './API';
import {
  withAuthenticator,
  Button,
  Heading,
  Text,
  TextField,
  View,
  Image
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import {AppProps} from "./types/types.ts";

interface CreateDog {
  name: string,
  representative: string,
  picture: File | null | undefined
}

const initialState: CreateDog = {name: '', representative: '', picture: null};

// eslint-disable-next-line react-refresh/only-export-components
const App: React.FC<AppProps> = ({signOut, user}) => {
  const [formState, setFormState] = useState<CreateDog>(initialState);
  const [dogs, setDogs] = useState<Dog[]>([]);
  console.log(dogs)
  useEffect(() => {
    fetchDogs();
  }, []);

  async function fetchDogs() {
    try {
      const dogData = await client.graphql({
        query: listDogs,
      });
      const dogs = dogData.data.listDogs.items as Dog[];

      // Pour chaque chien, récupérer l'URL de l'image si elle existe
      const dogsWithImages = await Promise.all(
          dogs.map(async (dog) => {
            if (dog.picture) {
              const getUrlResult = await getUrl({
                path: dog.picture,
                options: {
                  expiresIn: 3600, // URL valide pour 1 heure
                },
              });
              return {...dog, picture: getUrlResult.url.toString()};
            }
            return dog;
          })
      );

      setDogs(dogsWithImages);
    } catch (err) {
      console.log('error fetching dogs', err);
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
      return result.path;
    } catch (error) {
      console.log('Error : ', error);
    }
  }

  async function addDog() {
    try {
      if (!formState.name || !formState.representative) return;

      if (!formState.picture) {
        const newDog = {...formState};
        setDogs([...dogs, newDog as Dog]);
        setFormState(initialState);
        await client.graphql({
          query: createDog,
          variables: {
            input: newDog,
          },
        });
      } else if (formState.picture) {
        const filename = `${formState.name}-${Date.now()}`;
        const imageSrc = await uploadFile(formState.picture, filename);

        const newDog = {...formState, picture: imageSrc};
        setDogs([...dogs, newDog as Dog]);
        setFormState(initialState);

        await client.graphql({
          query: createDog,
          variables: {
            input: newDog,
          },
        });
      }

    } catch (err) {
      console.log('error creating dog:', err);
    }
  }

  async function deleteDog(id: string) {
    await client.graphql({
      query: mutations.deleteDog,
      variables: {input: {id}},
    })
    setDogs(dogs.filter(dog => dog.id !== id));
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
          <input type="file" onChange={(e) => setFormState({...formState, picture: e.target.files?.[0]})}/>
          <Button style={styles.button} onClick={addDog}>
            Save new dog
          </Button>
        </div>
        <div style={styles.flexCol}>
          {dogs.map((dog, index) => (
              <View key={dog.id ? dog.id : index} style={styles.todo}>
                <div style={{...styles.flex, ...styles.dogDetails}}>
                  {dog.picture && (
                      <Image src={dog.picture} alt={`${dog.name} picture`} style={styles.dogImg}/>
                  )}
                  <Text style={styles.todoName}>{dog.name}</Text>
                </div>
                <Text style={styles.todoDescription}>{dog.representative}</Text>
                <Button style={styles.button} onClick={() => deleteDog(dog.id!)}>
                  Delete
                </Button>
              </View>
          ))}
        </div>
      </View>
  );
};

const styles = {
  flex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
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
  },
  dogImg: {
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    objectFit: "cover"
  },
  dogDetails: {
    justifyContent: "start",
    gap: "12px"
  }
} as const;

export default withAuthenticator(App);