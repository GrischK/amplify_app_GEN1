import React, {useEffect, useState} from 'react';
import {generateClient} from "aws-amplify/api";

const client = generateClient();
import {
  withAuthenticator,
  Button,
  Heading,
  Text,
  TextField,
  View,
  Image,
  Input
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import {useParams} from "react-router-dom";
import {type Dog} from './API';
import {getDog, listDogs} from "./graphql/queries.ts";
import {getUrl} from "aws-amplify/storage";
import {createDogFriend} from './graphql/mutations';

const Dog = () => {
  const {dogId} = useParams();
  const [dog, setDog] = useState<Dog>()
  const [dogs, setDogs] = useState<Dog[]>([])
  const [dogFriends, setDogFriends] = useState<Dog[]>([])

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
                return data.getDog;
              }
              return null;
            })
        );
        setDogFriends(friendsDetails.filter((friend): friend is Dog => !!friend));
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

  async function addDogFriend(dogId: string, friendId: string) {
    await client.graphql({
      query: createDogFriend,
      variables: {
        input: {dogId: dogId, friendId: friendId}
      }
    });
    fetchDogDetails(dogId)
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
              <Heading>{dog?.name}</Heading>
              {dog.picture && (
                  <Image src={dog.picture} alt={`${dog.name} picture`} style={styles.dogImg}/>
              )}
            </>
        )}
        {dogId && dogs.map((dog, index) => (
            <View key={dog.id ? dog.id : index}>
              {dog.name}
              <Button onClick={() => addDogFriend(dogId, dog.id)}>Add</Button>
            </View>
        ))}
        <View>
          <Heading level={2}>Ses amis :</Heading>
          {dogFriends.length > 0 && dogFriends.map((friend) => (
              <Text key={friend.id}>
                {friend.name}
              </Text>
          ))}
        </View>
      </View>
  );
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
  }
} as const;

export default (Dog);