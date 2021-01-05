import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView} from "react-native";
import Loading from "../../components/Loading";
import Channel from "../../comps/AddOn/Channel";
import AvatarFormText from '../../comps/AvatarForm/AvatarFormText';
import BasicAvatar from "../../comps/Avatar/BasicAvatar";
import Spacer from "../../comps/Spacer";
import { useNavigation } from '@react-navigation/native';
import { getAllChannelsByUid, channelCollectionListener, getChannel } from "../../db/DBUtils";
import { useUserState } from "../../hook/useUserState";
import { FlatList } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    height:"100%",
  },
  spacer: {
    height:10
  },
  avatarcont: {
      marginLeft:20,
      flexDirection:"row",
      height:130,
  }
});

const ActivatePage = ({}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [channels, setChannels] = useState(null);
  const [ userState ] = useUserState();

  const handleRefresh = () => {

  }
  const handleUpdateChannels = (channelId, channel) =>{
    const newChs = channels.map(ch => ch.id === channelId? channel : ch )
    setChannels(newChs);
  }
  
  useEffect(()=> {
    async function fetchData() {
      initialChannels= await getAllChannelsByUid(userState.user.uid, 1);
      if(initialChannels) {
        setChannels(initialChannels);
        
        console.log("activate", initialChannels)
      }
      setIsLoading(false);
    }
     fetchData();
  }, [])
  
  return isLoading? 
    (
      <Loading />
    ) 
    : 
    (
    <View style={styles.container}>{
      channels &&
      <FlatList
        data={channels}
        extraData={channels}
        keyExtractor={channel=>channel.id.toString()}
        renderItem={({item}) => 
          <View>
            <Channel item={item} handleUpdateChannels={handleUpdateChannels}/>
          <View style={styles.spacer}>
            <Spacer />
          </View>
        </View>
      }
      refreshing={refreshing}
      onRefresh={() => {
        handleRefresh();
      }}
      />}
    </View>)
  
};

// RequestPage.defaultProps = {
//     // size: null,
//     text: null,
//     backgroundColor: null,
//     // height: null
// };

export default ActivatePage; 