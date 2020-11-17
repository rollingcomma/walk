export const uids = {
  uid1: "goUizOwXY4SzXYGhLtFPguDTfQC3",
  uid2: "nyu0mD8lTvQDH85orbcglhe3elf2",
  uid3: "goUizOwXY4SzXYGhLtFPgGDifQC3",
  uid4: "nyu0mD8lTvQDh75orbcglhe3elf2",
  uid5: "goUioooXY4SzXYGhLtFPguDTfQC3",
  uid6: "Ynu0mD8lTvQDH85orbcglhe3elf2",
  uid7: "uyu0nD8lTvQDH85orbcglhe3elf2",
  uid8: "Ynu0mD8lTvQDH99orbcglhe3elf2",
  uid9: "eCx3sm3nJPVO4SEYLpyhIaKXIl33",
  uid10: "ddUizOwXY4SzXYGhLtFPguDTfQC3"
};

export const users = {
  uid1: {
    uid:uids.uid1,
    username: "Sherlyn",
    email:"shallowgrass@gmail.com",
    type:"dog owner",
    createAt: new Date(),
  },
  uid2: {
    uid:uids.uid2,
    username: "Alex",
    email:"shallowgrass@gmail.com",
    type:"dog owner",
    createAt: new Date(),
  },
  uid3: {
    uid: uids.uid3,
    username: "Lucy",
    email:"test@gmail.com",
    type:"dog owner",
    createAt: new Date(2019, 12, 15),
  },
  uid4:
  {
    uid: uids.uid4,
    username: "Ethan",
    email: "test1@gmail.com",
    createdAt: new Date(2020, 2, 15),
  },
  uid5:
  {
    uid: uids.uid5,
    username: "Jim",
    email: "test2@gmail.com",
    createdAt: new Date(2020, 3, 1),
  },
  uid6:
  {
    uid: uids.uid6,
    username: "Tim",
    email: "test3@example.ca",
    createdAt: new Date(2020, 7, 10)
  },
  uid7:
  {
    uid: uids.uid7,
    username: "Jarry",
    email: "test4@example.ca",
    createdAt: new Date(2020, 10, 10)
  },
  uid8: {
    uid: uids.uid8,
    username:"Bob",
    email:"bobfake@gmail.com",
    type:"walker",
    createAt: new Date(2020, 9, 10)
  },
  uid9:{
    uid: uids.uid9,
    username:"Josh",
    email:"joshtester2222@gmail.com",
    type:"walker",
    createAt: new Date(2020, 10, 8)
  },
  uid10:{
    uid: uids.uid10,
    username:"Katy",
    email:"katyfake@gmail.com",
    type:"walker",
    channels:[],
    createAt: new Date(2020, 7, 7)
  }

};

export const dogProfiles = {
  dogProfile1: 
  {
    owner: uids.uid1,
    name: "Milly",
    avatarUrl: "https://firebasestorage.googleapis.com/v0/b/walk-dccd4.appspot.com/o/profileImages%2Fprofile1.jpeg?alt=media&token=2903d149-aad0-4768-b9a0-cda1120a54b3",
    age: 6,
    breed: "Border Collie",
    bio: "testing purpose description",
    likes: ["Swimming", "Playing Catch", ""],
    dislikes: ["Touching her paws", "Smell of Oranges", ""],
    phone:"778-999-9999",
    province: "BC",
    city: "Surrey",
    address: "15930 Fraser Hwy",
    postalCode: "V4N 0X8",
    createdAt: new Date(2019, 8, 19),
  },
  dogProfile2:
  {
    owner: uids.uid2,
    name: "Mole",
    avatarUrl: "https://firebasestorage.googleapis.com/v0/b/walk-dccd4.appspot.com/o/profileImages%2Fprofile2.jpg?alt=media&token=ed3b8457-927e-4bf7-8119-04030f09edd2",
    age: 3,
    breed: "Golden Retriever",
    bio: "testing purpose description",
    likes: ["Swimming", "Playing Catch", ""],
    dislikes: ["Touching her paws", "Smell of Oranges", ""],
    phone:"604-111-1111",
    province: "BC",
    city: "Burnaby",
    address: "8683 10th Ave",
    postalCode: "V3N 2S9",
    createdAt: new Date(2019, 10, 10),
  },
  dogProfile3:
  {
    owner: uids.uid3,
    name: "Coco",
    avatarUrl: "https://firebasestorage.googleapis.com/v0/b/walk-dccd4.appspot.com/o/profileImages%2Fprofile3.jpg?alt=media&token=0a492293-2646-4f56-88a6-79c4361f682a",
    age: 3,
    breed: "Beagle",
    bio: "testing purpose description",
    likes: ["Swimming", "Discovering in woods", ""],
    dislikes: ["Touching her paws", "Smell of Oranges", ""],
    phone:"604-111-1111",
    province: "BC",
    city: "Burnaby",
    address: "4208 Dawson St",
    postalCode: "V5C 0A4",
    createdAt: new Date(2020, 2, 15),
  },
  dogProfile4: 
  {
    owner: uids.uid4,
    name: "Ace",
    avatarUrl: "https://firebasestorage.googleapis.com/v0/b/walk-dccd4.appspot.com/o/profileImages%2Fprofile4.jpg?alt=media&token=aee1d77e-1647-48b4-9727-3f1a262007f8",
    age: 5,
    breed: "Golden Retriever",
    bio: "testing purpose description",
    likes: ["Swimming", "Discovering in woods", ""],
    dislikes: ["Touching her paws", "Smell of Oranges", ""],
    phone:"604-111-1111",
    province: "BC",
    city: "Vancouver",
    address: "650 W 41st Ave",
    postalCode: "V5Z 2M9",
    createdAt: new Date(2020, 2, 28),
  },
  dogProfile5:
  {
    owner: uids.uid5,
    name: "Finn",
    avatarUrl: "https://firebasestorage.googleapis.com/v0/b/walk-dccd4.appspot.com/o/profileImages%2Fprofile5.jpeg?alt=media&token=d57d9d54-41b5-47a3-9e36-b6f2bee0ddcc",
    age: 3,
    breed: "bolognese",
    bio: "testing purpose description",
    likes: ["Swimming", "Discovering in woods", ""],
    dislikes: ["Touching her paws", "Smell of Oranges", ""],
    phone:"604-111-1111",
    province: "BC",
    city: "Richmond",
    address: "2351 No 6 Rd #170",
    postalCode: "V6V 1P3",
    createdAt: new Date(2020, 5, 28),
  },
  dogProfile6:
  {
    owner: uids.uid6,
    name: "Rocky",
    avatarUrl: "https://firebasestorage.googleapis.com/v0/b/walk-dccd4.appspot.com/o/profileImages%2Fprofile6.jpeg?alt=media&token=924d0868-6dc3-45a9-b806-197b1fdff2f1",
    age: 5,
    breed: "corgi",
    bio: "testing purpose description",
    likes: ["Swimming", "Discovering in woods", ""],
    dislikes: ["Touching her paws", "Smell of Oranges", ""],
    phone:"604-111-1111",
    province: "BC",
    city: "Surrey",
    address: "7350 120 St",
    postalCode: "V3W 3M9",
    createdAt: new Date(2020, 7, 10),
  },
  dogProfile7: 
  {
    owner: uids.uid7,
    name: "Boomer",
    avatarUrl: "https://firebasestorage.googleapis.com/v0/b/walk-dccd4.appspot.com/o/profileImages%2Fprofile7.jpg?alt=media&token=ed6e5a8e-a0db-45a3-9b6a-a6c22482060a",
    age: 2,
    breed: "pug",
    bio: "testing purpose description",
    likes: ["Swimming", "Discovering in woods", ""],
    dislikes: ["Touching her paws", "Smell of Oranges", ""],
    phone:"604-111-1111",
    province: "BC",
    city: "Maple Ridge",
    address: "11811 224 St",
    postalCode: "V2X 0P1",
    createdAt: new Date(2020, 10, 10),
  }
};

export const dogIds = {
  dogId1: "eC3Dofgik4VlUIfD28jY",
  dogId2: "aZBYkMwmSl4S0B5QEL0f",
  dogId3: "gvSEqX5S2qWsprot0z0c",
  dogId4: "3PiFet5BcRa4JQqzPQoD",
  dogId5: "b4JYVYIvS10vemZS10TS",
  dogId6: "vt1vjCpaxdKBcGAyI2sY",
  dogId7: "ZUZ9YYc78OdeL8mQX4kJ",
};

export const walkerProfiles = {
  walkerProfile1:
  {
    uid:uids.uid8,
    name: "Bob P.",
    age: 48,
    avatarUrl:"https://firebasestorage.googleapis.com/v0/b/walk-dccd4.appspot.com/o/profileImages%2Fwalker1.jpg?alt=media&token=e924f6b9-1b23-4155-99a9-d6b844c1369e",
    bio: "Hi there! My name is Ethan and I love all animals. Dogs, cates, birds, you name it. I really love...",
    phone: "778-999-9999",
    province: "BC",
    country: "CA",
    city: "Surrey",
    address: "15146 100 Ave #101",
    postalCode: "V3R 0J8",
    birthday: "03-01-1972",
    emergencyContactPerson: "Bob Ross",
    emergencyContactTel: "604-123-4567",
    createdAt: new Date(2020, 9, 10),
  },
  walkerProfile2:
  {
    uid: uids.uid9,
    name: "Josh M",
    age: 24,
    avatarUrl:"https://firebasestorage.googleapis.com/v0/b/walk-dccd4.appspot.com/o/profileImages%2Fwalker2.jpg?alt=media&token=94f35d65-9b84-4e72-a749-2235355f9005",
    bio: "Hi there! My name is Josh. ",
    phone: "778-999-9999",
    province: "BC",
    country: "CA",
    city: "Burnaby",
    address: "4886 Marine Dr",
    postalCode: "V5J 3G6",
    birthday: "03-01-1996",
    emergencyContactPerson: "Bob Ross",
    emergencyContactTel: "604-123-4567",
    createdAt: new Date(2020, 10, 8),
  },
  walkerProfile3:
  {
    uid: uids.uid10,
    name: "Katy Lee",
    age: 25,
    avatarUrl:"https://firebasestorage.googleapis.com/v0/b/walk-dccd4.appspot.com/o/profileImages%2Fwalker3.jpg?alt=media&token=d9ec8c4e-5d0b-4793-8db8-cb685b6f1ce2",
    bio: "Hi there! I'm katy. ",
    phone: "778-999-9999",
    province: "BC",
    country: "CA",
    city: "Richmond",
    Address: "8291 Ackroyd Rd Unit 100",
    postalCode: "V6X 3K5",
    birthday: "03-01-1995",
    emergencyContactPerson: "Bob Ross",
    emergencyContactTel: "604-123-4567",
    createdAt: new Date(2020, 7, 7),
  }
};

export const posts ={
  post1: 
  {
    dogId: dogIds.dogId1,
    name: "Milly",
    avatarUrl: "https://firebasestorage.googleapis.com/v0/b/walk-dccd4.appspot.com/o/profileImages%2Fprofile1.jpeg?alt=media&token=2903d149-aad0-4768-b9a0-cda1120a54b3",
    picsUrl: "https://firebasestorage.googleapis.com/v0/b/walk-dccd4.appspot.com/o/postImages%2Fpost1.jpeg?alt=media&token=28fad765-6247-4925-83f6-7ae58436ead5",
    createdAt:new Date(2019, 9, 19),
    likes: [uids.uid2]
  },
  post2:
  {
    dogId: dogIds.dogId2,
    name: "Mole",
    avatarUrl: "https://firebasestorage.googleapis.com/v0/b/walk-dccd4.appspot.com/o/profileImages%2Fprofile2.jpg?alt=media&token=ed3b8457-927e-4bf7-8119-04030f09edd2",
    picsUrl: "https://firebasestorage.googleapis.com/v0/b/walk-dccd4.appspot.com/o/postImages%2Fpost2_1.jpg?alt=media&token=dd440ec7-3b60-46b5-8ca3-6fd774721ea2",
    createdAt:new Date(2020, 3, 19),
    likes: [uids.uid1]
  },
  post3:
  {
    dogId: dogIds.dogId2,
    name: "Mole",
    avatarUrl: "https://firebasestorage.googleapis.com/v0/b/walk-dccd4.appspot.com/o/profileImages%2Fprofile2.jpg?alt=media&token=ed3b8457-927e-4bf7-8119-04030f09edd2",
    picsUrl: "https://firebasestorage.googleapis.com/v0/b/walk-dccd4.appspot.com/o/postImages%2Fpost2_2.jpeg?alt=media&token=265dc309-e6d1-409f-8f41-c868399dd426",
    createdAt:new Date(2020, 5, 19),
    likes: []
  },
  post4:
  {
    dogId: dogIds.dogId3,
    name: "Coco",
    avatarUrl: "https://firebasestorage.googleapis.com/v0/b/walk-dccd4.appspot.com/o/profileImages%2Fprofile3.jpg?alt=media&token=0a492293-2646-4f56-88a6-79c4361f682a",
    picsUrl: "https://firebasestorage.googleapis.com/v0/b/walk-dccd4.appspot.com/o/postImages%2Fpost3_1.jpeg?alt=media&token=66828442-34da-4f71-bb4d-67f3da4afbec",
    createdAt:new Date(2020, 5, 19),
    likes: [uids.uid1]
  },
  post5:
  {
    dogId: dogIds.dogId3,
    name: "Coco",
    avatarUrl: "https://firebasestorage.googleapis.com/v0/b/walk-dccd4.appspot.com/o/profileImages%2Fprofile3.jpg?alt=media&token=0a492293-2646-4f56-88a6-79c4361f682a",
    picsUrl: "https://firebasestorage.googleapis.com/v0/b/walk-dccd4.appspot.com/o/postImages%2Fpost3_2.jpg?alt=media&token=92d8c1b2-01a9-4224-8279-9d60dbb11390",
    createdAt:new Date(2020, 3, 10),
    likes: []
  },
  post6:
  {
    dogId: dogIds.dogId4,
    name: "Ace",
    avatarUrl: "https://firebasestorage.googleapis.com/v0/b/walk-dccd4.appspot.com/o/profileImages%2Fprofile4.jpg?alt=media&token=aee1d77e-1647-48b4-9727-3f1a262007f8",
    picsUrl: "https://firebasestorage.googleapis.com/v0/b/walk-dccd4.appspot.com/o/postImages%2Fpost4.jpeg?alt=media&token=b69edfa1-be0d-4b99-8402-cb3af40607f4",
    createdAt:new Date(2020, 5, 10),
    likes: [uids.uid2]
  },
  post7:
  {
    dogId: dogIds.dogId5,
    name: "Finn",
    avatarUrl: "https://firebasestorage.googleapis.com/v0/b/walk-dccd4.appspot.com/o/profileImages%2Fprofile5.jpeg?alt=media&token=d57d9d54-41b5-47a3-9e36-b6f2bee0ddcc",
    picsUrl: "https://firebasestorage.googleapis.com/v0/b/walk-dccd4.appspot.com/o/postImages%2Fpost5.jpg?alt=media&token=87cdc9df-583a-41ad-9349-961c6f4f8876",
    createdAt:new Date(2020, 6, 15),
    likes: []
  },
  post7:
  {
    dogId: dogIds.dogId6,
    name: "Rocky",
    avatarUrl: "https://firebasestorage.googleapis.com/v0/b/walk-dccd4.appspot.com/o/profileImages%2Fprofile6.jpeg?alt=media&token=924d0868-6dc3-45a9-b806-197b1fdff2f1",
    picsUrl: "https://firebasestorage.googleapis.com/v0/b/walk-dccd4.appspot.com/o/postImages%2Fpost6_1.jpg?alt=media&token=5d083bfa-7062-47e4-8be4-7a63c152edbf",
    createdAt:new Date(2020, 7, 15),
    likes: [uids.uid1]
  },
  post8:
  {
    dogId: dogIds.dogId6,
    name: "Rocky",
    avatarUrl: "https://firebasestorage.googleapis.com/v0/b/walk-dccd4.appspot.com/o/profileImages%2Fprofile6.jpeg?alt=media&token=924d0868-6dc3-45a9-b806-197b1fdff2f1",
    picsUrl: "https://firebasestorage.googleapis.com/v0/b/walk-dccd4.appspot.com/o/postImages%2Fpost6_2.jpg?alt=media&token=9b7b8a58-5d0e-4349-b559-9248a54871d0",
    createdAt: new Date(2020, 8, 7),
    likes: []
  },
  post9:
  {
    dogId: dogIds.dogId7,
    name: "Boomer",
    avatarUrl: "https://firebasestorage.googleapis.com/v0/b/walk-dccd4.appspot.com/o/profileImages%2Fprofile7.jpg?alt=media&token=ed6e5a8e-a0db-45a3-9b6a-a6c22482060a",
    picsUrl: "https://firebasestorage.googleapis.com/v0/b/walk-dccd4.appspot.com/o/postImages%2Fpost7.jpg?alt=media&token=6bbd54c0-b12c-4a6e-87d0-1c2aedd42bb5",
    createdAt: new Date(2020, 6, 10),
    likes: []
  },
  post10:
  {
    dogId: dogIds.dogId7,
    name: "Boomer",
    avatarUrl: "https://firebasestorage.googleapis.com/v0/b/walk-dccd4.appspot.com/o/profileImages%2Fprofile7.jpg?alt=media&token=ed6e5a8e-a0db-45a3-9b6a-a6c22482060a",
    picsUrl: "https://firebasestorage.googleapis.com/v0/b/walk-dccd4.appspot.com/o/postImages%2Fpost7_2.jpg?alt=media&token=1b9644ad-a445-4ba5-9d87-a4b2d0c8124f",
    createdAt: new Date(2020, 10, 23),
    likes: [uids.uid2]
  }
};

export const requests = {
  req1:
  {
    owner: uids.uid1,
    walker: uids.uid9,
    message:"Cute puppy! I want to walk him/her!",
    timeStamp: new Date(2020, 4, 15),
    status:"active"
  },
  req2:
  {
    owner: uids.uid1,
    walker: uids.uid8,
    message:"So cute, please let me take a walk with him/her!",
    timeStamp: new Date(2020, 6, 10),
    status:"declined"
  },
  req3:
  {
    owner: uids.uid2,
    walker: uids.uid9,
    message:"Cute puppy! I want to walk him/her!",
    timeStamp: new Date(2020, 3, 15),
    status:"active"
  },
  req4:
  {
    owner: uids.uid1,
    walker: uids.uid9,
    message:"Great experience! may I request for another walk",
    timeStamp: new Date(2020, 6, 15),
    status:"active"
  },
}

export const events = {
  event1:
  {
    organizer: uids.uid1,
    name: "Rocky Point Park",
    address: "2800 Murray St",
    city: "Port Moody",
    postalCode:"V3H 1X2",
    startTime: "2:00pm",
    endTime: "3:00pm",
    date: new Date(2020, 11, 15),
    createdAt: new Date(2020, 10, 3),
    pictureUrl: "https://firebasestorage.googleapis.com/v0/b/walk-dccd4.appspot.com/o/eventsImages%2Frocky_point_park.jpg?alt=media&token=5e6c2658-c0ec-4b1d-bed1-e1623affb846",
    status:"active",
    details: "",
    participants: []
  },
  
  event2:
  {
    organizer: uids.uid2,
    name: "Queen Elizabeth Dog Park",
    address: "4600 Cambie St",
    city: "Vancouver",
    postalCode:"V5Z 2Z1",
    startTime: "12:00pm",
    endTime: "3:00pm",
    date: new Date(2020, 11, 10),
    pictureUrl: "https://firebasestorage.googleapis.com/v0/b/walk-dccd4.appspot.com/o/eventsImages%2Fqueen_elizabeth.jpg?alt=media&token=240a187b-1b95-4dc8-9c79-8cefdfab3c16",
    status:"active",
    details: "",
    participants: [],
    createdAt: new Date(2020, 10, 10),
  },
  event3:
  {
    organizer: uids.uid3,
    name: "Derby Reach Regional Park",
    address: "21801 Allard Crescent",
    city: "Langley",
    postalCode:"V1M 3W1",
    startTime: "2:00pm",
    endTime: "3:00pm",
    date: new Date(2020, 11, 10),
    pictureUrl: "https://firebasestorage.googleapis.com/v0/b/walk-dccd4.appspot.com/o/eventsImages%2Fderby_park.jpg?alt=media&token=2e80697a-7360-4d2f-92d8-9f11db319024",
    status:"active",
    details: "",
    participants: [],
    createdAt: new Date(2020, 11, 3),
  }
}

export const channels = {
  ch1: {
    user1: uids.uid9,
    user2: uids.uid1,
    createdAt: new Date(2020, 10, 25)
  },
  ch2: {
    user1: uids.uid10,
    user2: uids.uid2,
    createdAt: new Date(2020, 9, 12)
  }
};

export const messages = 
{
  msg1: {
    sender: uids.uid9,
    message: "Hello, your dog's so cute! I'd like to walk your dog",
    createdAt: new Date("2020-10-25T12:00:00Z"),
  },
  msg2: {
    sender: uids.uid1,
    message: "Hi, thank you. I'm glad you like my boy",
    createdAt: new Date("2020-10-25T12:01:00Z"),
  },
  msg3: {
    sender: uids.uid9,
    message: "When is it convenient for you?",
    createdAt: new Date("2020-10-25T12:02:00Z"),
  },
  msg4: {
    sender: uids.uid9,
    message: "I'm available every day after 7pm",
    createdAt: new Date("2020-10-25T12:03:00Z"),
  },
  msg5: {
    sender: uids.uid1,
    message: "I'm a little busy now, I'll get back to you soon",
    createdAt: new Date("2020-10-25T12:05:00Z"),
  },
}

export const reviews = {
  rv1: {
    sender: uids.uid1,
    stars: 5,
    review: "Josh is very friendly, he is definitely a dog lover.",
    createdAt: new Date(2020, 10, 8)
  },
  rv2: {
    sender: uids.uid2,
    stars: 5,
    review: "Lucky to have Josh help walking my dog, nice guy.",
    createdAt: new Date(2020, 10, 15)
  }
}


