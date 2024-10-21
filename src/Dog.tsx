import React, {useEffect, useState} from 'react';
import {generateClient} from "aws-amplify/api";

const client = generateClient();
import {
  Button,
  Heading,
  Text,
  TextField,
  View,
  Image,
  Input, CheckboxField
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import {useParams} from "react-router-dom";
import {type Dog} from './API';
import {getDog, listDogs} from "./graphql/queries.ts";
import {getUrl} from "aws-amplify/storage";
import {createDogFriend, deleteDogFriend} from './graphql/mutations';

interface DogFriendship {
  dog: Dog,
  relationshipId: string,
}

const Dog = () => {
  const {dogId} = useParams();
  const [dog, setDog] = useState<Dog>()
  const [dogs, setDogs] = useState<Dog[]>([])
  const [dogFriends, setDogFriends] = useState<DogFriendship[]>([])

  console.log(dogs)
  useEffect(() => {
    fetchDogs()
  }, []);

  useEffect(() => {
    if (dogId) {
      fetchDogDetails(dogId)
    }
  }, [dogId]);

  useEffect(() => {
    const fetchFriends = async () => {
      if (dog && dog.friends && dog.friends.items.length > 0) {
        const friendsDetails = await Promise.all(
            dog.friends.items.map(async (friend) => {
              if (friend && friend.friendId) {
                const {data} = await client.graphql({
                  query: getDog,
                  variables: {id: friend.friendId},
                });
                // Ajout de l'id de la relation pour pouvoir la supprimer plus tard si besoin
                return {dog: data.getDog, relationshipId: friend.id};
              }
              return null;
            })
        );
        // Tri des valeurs null
        setDogFriends(friendsDetails.filter((friend): friend is DogFriendship => !!friend));
      }
    };
    fetchFriends();
  }, [dog]);

  async function fetchDogDetails(id: string) {
    try {
      const dogData = await client.graphql({
        query: getDog,
        variables: {id},
      });

      const dog = dogData.data.getDog as Dog;
      if (dog.picture) {
        const getUrlResult = await getUrl({
          path: dog.picture,
          options: {
            expiresIn: 3600,
          },
        });
        dog.picture = getUrlResult.url.toString();
      }
      setDog(dog)
    } catch (err) {
      console.log('Error fetching dog details', err);
    }
  }

  async function handleDogFriend(dogId: string, friendId: string) {
    const existingFriend = dogFriends.find((friend) => friend.dog.id === friendId);
    if (existingFriend) {
      await client.graphql({
        query: deleteDogFriend,
        variables: {
          input: {id: existingFriend.relationshipId},
        },
      });
    } else {
      // Sinon, créer la relation
      await client.graphql({
        query: createDogFriend,
        variables: {
          input: {dogId: dogId, friendId: friendId},
        },
      });
    }
    fetchDogDetails(dogId);
  }

  async function fetchDogs() {
    try {
      const dogData = await client.graphql({
        query: listDogs,
      });
      const dogs = dogData.data.listDogs.items as Dog[];

      setDogs(dogs);
    } catch (err) {
      console.log('error fetching dogs', err);
    }
  }

  return (
      <View style={styles.container}>
        {dog && (
            <>
              <Heading level={1}>{dog?.name}</Heading>
              {dog.picture && (
                  <Image src={dog.picture} alt={`${dog.name} picture`} style={styles.dogImg}/>
              )}
            </>
        )}
        <View style={styles.friendsContainer}>
          <View style={styles.dogsList}>
            {dogId && dogs.filter((dog)=> dog.id !== dogId).map((dog, index) => (
                <CheckboxField
                    key={dog.id ? dog.id : index}
                    label={dog.name}
                    name="addFriend"
                    onChange={() => handleDogFriend(dogId, dog.id)}
                    checked={dogFriends.some((friend) => friend.dog.id === dog.id)}
                />
            ))}
          </View>
          <View style={styles.dogFriendsList}>
            <Heading level={2}>Ses amis :</Heading>
            {dogFriends.length > 0 && dogFriends.map((friend) => (
                <Text key={friend.dog.id}>
                  {friend.dog.name}
                </Text>
            ))}
          </View>
        </View>
      </View>
  )
      ;
};

const styles = {
  container: {
    minHeight: "100vh",
    minWidth: "100vw",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
    padding: 20,
    background: "linear-gradient(180deg, rgb(124, 131, 131), rgb(255, 255, 255))",
  },
  dogImg: {
    height: "200px",
    width: "200px",
    objectFit: "cover",
  },
  dogsList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    width: "70vw",
    alignItems: "center",
    justifyContent: "center",
  },
  friendsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
    gap: "2rem",
    width: "90%",
  },
  dogFriendsList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
} as const;

export default (Dog);