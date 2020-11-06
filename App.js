import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Index from './src/screens/Index';
import ImageUpload from './src/components/ImageUpload';
import { 
  dogProfile, 
  walkerProfile, 
  getAllPosts,
  getPostsByUid,
  post,
  request,
  getRequestReceived,
  getAllEvents,
  event,
  getAllChannelsByUid,
  channel,
  getChannelByUid
} from './src/db/DBUtils';
const uid1 = "goUizOwXY4SzXYGhLtFPguDTfQC3";
const uid2 = "nyu0mD8lTvQDH85orbcglhe3elf2";

const newDogProfile1 = 
  {
    owner: uid1,
    name: "Milly",
    photoUrl: "",
    age: 6,
    breed: "Border Collie",
    bio: "testing purpose description",
    likes: ["Swimming", "Playing Catch", ""],
    dislikes: ["Touching her paws", "Smell of Oranges", ""],
    phone:"778-999-9999",
    province: "BC",
    Address: "1234, 123A ave Burnaby",
    postalCode: "M1M 9Q9",
    createdAt: new Date(),
  };

  const newDogProfile2 = 
  {
    owner: uid2,
    name: "Mole",
    photoUrl: "",
    age: 3,
    breed: "Border Collie",
    bio: "testing purpose description",
    likes: ["Swimming", "Playing Catch", ""],
    dislikes: ["Touching her paws", "Smell of Oranges", ""],
    phone:"604-111-1111",
    province: "BC",
    Address: "1234, 123A ave Burnaby",
    postalCode: "M1M 9Q9",
    createdAt: new Date(),
  }

export default App= () => {
  useEffect(() => {
    async function testDb( ) {
      console.log("app loading");
      const profile = await dogProfile(uid2, newDogProfile2);
      console.log(profile);
    }
    // testDb();
  }, [])

  return (
    // <View></View>
    // <Index />
    <ImageUpload />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
