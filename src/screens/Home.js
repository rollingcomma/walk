import React, { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import Card from '../components/Card';
import Screen from '../components/Screen';

export default Home = () => {
  const[posts, setPosts] = useState(null);
  const[refreshing, setRefreshing] = useState(false);
  const handleRefresh = () => {

  };
  return(
    <Screen>
      <FlatList
        data={posts}
        keyExtractor={post => post.id.toString()}
        renderItem={({post})=> 
        <Card 
          name={post.name}
          profileImageUrl={post.profileUrl}
          imageUr={post.imageUrl}
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
  card:
  {
    height:200,
    margin:10,
    borderWidth:1,
    borderColor:'#000',
    borderStyle:'solid',
  }

});