import { useIdentifyRef } from 'react-firebase-hooks/auth/dist/util';
import { firestore } from '../firebase';
import { user, dogProfile, walkerProfile} from './DBUtils';

const usersRef = firestore.collection('users');
const walkerProfileRef = firestore.collection("walkerProfiles");

const postsRef = firestore.collection("posts");
const requestRef = firestore.collection("requests");
const chatChannelsRef = firestore.collection("channels");
const eventsRef = firestore.collection("events");

const user1 =
  {
    username: "Ethan",
    email: "rollingcomma@gmail.com",
    createdAt: new Date(),
  }


const newDogProfile1 = 
  {
    owner: uid,
    name: "Milly",
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
    owner: uid,
    name: "Mole",
    age: 3,
    breed: "Border Collie",
    bio: "testing purpose description",
    likes: ["Swimming", "Playing Catch", ""],
    dislikes: ["Touching her paws", "Smell of Oranges", ""],
    phone:"778-999-9999",
    province: "BC",
    Address: "1234, 123A ave Burnaby",
    postalCode: "M1M 9Q9",
    createdAt: new Date(),
  }




const newWalkerProfile1 = 
  {
    walker: uid,
    name: "Ethan P.",
    age: 24,
    bio: "Hi there! My name is Ethan and I love all animals. Dogs, cates, birds, you name it. I really love...",
    phone: "778-999-9999",
    province: "BC",
    country: "CA",
    Address: "1234, 123A ave Burnaby",
    postalCode: "M1M 9Q9",
    birthday: "03-01-1996",
    emergencyContactPerson: "Bob Ross",
    emergencyContactTel: "604-123-4567",
    createdAt: new Date(),
  }


const dogProfile = 
  {
    dogProfileId:dogProfileID,
    pictures:["", "", ""],
  }

const newPost =
  {
    dogProfileId: dogProfileID,
    pictures:["", "", ""],
    liked:[],
    messageChannel:[],
  }



const request =
  {
    owner: dogProfileId,
    walker: walerProfileId,
    message:"Cute pup! I want to walk him/her!",
    timeStamp: new Date(),
    status:"active"
  }



const msg = 
{
    sender: uid,
    receiver: uid,
    message: "testing",
    timeStamp: new Date(),
  }



const event =
  {
    organizer: uid,
    address: "21801 Allard Crescent",
    city: "Langley",
    startTime: "1:00pm",
    endTime: "3:00pm",
    date: new Date("November 10, 2020"),
    timeStamp: new Date(),
    picture: "pic.jpg"
  }

