import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import Loading from "../../components/Loading";
import {format} from "date-fns/";
import Post from "../../comps/Post";
import AvatarEdit from "../../comps/Avatar/AvatarEdit";

import { getAllPosts, getPostsUpdate } from "../../db/DBUtils"

const Main = styled.View`
  width:100%;
  height: 100%;
  margin-top:20px;
`;
const Cont = styled.View`
  margin-bottom:70px;
`;

const Feed = () => {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    const newPosts = await getPostsUpdate(posts[0].value.createdAt);
    if(newPosts) {
      setPosts([...newPosts, ...posts]);
    }
    setRefreshing(false);
  }

  useEffect(() => {
    const fetchData = async () =>{
      const res = await getAllPosts();
      if(res) setPosts(res);
      setIsLoading(false);
    };
    fetchData();
  },[])

  return isLoading? 
    (
      <Loading />
    ) 
    : 
    (
    <Main>
        <FlatList
        data={posts}
        extraData={posts}
        keyExtractor={post => post.id.toString()}
        renderItem={( { item })=> 
          <Cont>
            <Post 
              post={item.value}
              distance={3}
            />
          </Cont>
        }
        refreshing={refreshing}
        onRefresh={()=> {
          handleRefresh();
        }}
      />
    </Main>
  );
};

export default Feed;