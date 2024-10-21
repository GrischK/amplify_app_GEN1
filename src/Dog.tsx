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
import {getDog} from "./graphql/queries.ts";
import {getUrl} from "aws-amplify/storage";

const Dog = () => {
  const {dogId} = useParams();
  const [dog, setDog] = useState<Dog>()

  useEffect(() => {
    if (dogId) {
      fetchDogDetails(dogId)
    }
  }, [dogId]);

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