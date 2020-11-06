import { useIdentifyRef } from 'react-firebase-hooks/auth/dist/util';
import { firestore } from '../firebase';
const uid1 = "goUizOwXY4SzXYGhLtFPguDTfQC3";
const uid2 = "nyu0mD8lTvQDH85orbcglhe3elf2";
const user1 =
  {
    username: "Ethan",
    email: "rollingcomma@gmail.com",
    photoURl:"https://lh3.googleusercontent.com/a-/AOh14Gjl6awFmG57u8JxHrpxUJm_h-WMR1PokxPeqHmD=s96-c",
    createdAt: new Date(),
  }


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

