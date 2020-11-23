import React, { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import Card from '../components/Card';
import Screen from '../components/Screen';
export default Home = ({navigation, route}) => {
  const dummy = [{
    id:1,
    name:"Milly",
    profileImageUrl:"https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2549&q=80",
    imageUrl:"https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2549&q=80"
  }, 
  {
    id:2,
    name:"Alex",
    profileImageUrl:"https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2549&q=80",
    imageUrl:"https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2549&q=80"
  },
  {
    id:3,
    name:"Dodo",
    profileImageUrl:"https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2549&q=80",
    imageUrl:"https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2549&q=80"
  },
  {
    id:4,
    name:"Hoho",
    profileImageUrl:"https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2549&q=80",
    imageUrl:"https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2549&q=80"
  }]

  const[posts, setPosts] = useState(null);
  const[refreshing, setRefreshing] = useState(false);
  const handleRefresh = () => {

  };
  return(
    <Screen>
      <FlatList
        data={dummy}
        keyExtractor={post => post.id.toString()}
        renderItem={( { item })=> 
        <Card 
          name={item.name}
          profileImageUrl={item.profileImageUrl}
          imageUrl={item.imageUrl}
        />}
        refreshing={refreshing}
        onRefresh={()=> {
          handleRefresh();
        }}
      />
    </Screen>
  )
}
const styles = StyleSheet.create({
});