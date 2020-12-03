import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList} from "react-native";
import Loading from "../../components/Loading";
import AvatarViewProfile from '../../comps/AvatarForm/AvatarViewProfile';
import BasicAvatar from "../../comps/Avatar/BasicAvatar";
import DeclineButton from "../../comps/WButton/DeclineButton";
import ActivateButton from "../../comps/WButton/ActivateButton";
import Spacer from "../../comps/Spacer";
import { useNavigation } from '@react-navigation/native';
import { useUserState } from "../../hook/useUserState";
import { getRequestsReceived, getRequestsSent, updateRequest } from "../../db/DBUtils";

const styles = StyleSheet.create({
  app: {
    height:"100%",
  },
  container: {
      marginLeft:30,
      flexDirection:"row",
      height:130,
      alignItems:"center"
  },
  buttons: {
    marginLeft:30
  },
  spacer: {
    height:20
  },
});

const RequestPage = ({}) => {
  const navigation = useNavigation();
  const [userState] = useUserState();
  const [isLoading, setIsLoading] = useState(true);
  const [requests, setRequests] = useState(null);
  const [isDeclined, setIsDeclined] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  
  const handleCompleteRequest = async (requestId) => {
    const request = requests.filter(req => req.id === requestId);
    const newRequest = request.value
    newRequest.status = "completed";
    if(await updateRequest(requestId, newRequest)) {
      setIsActive(false);
    }
  }

  const handleOnPressActive = (sender) => {
    navigation.navigate("Dashboard", {sender: sender, handleCompleteRequest:handleCompleteRequest});
    setIsActive(true);
  }

  const handleOnPressDecline = async (requestId) => {
    const request = requests.filter(req => req.id === requestId);
    const newRequest = {...request.value}
    console.log(newRequest);
    newRequest.status = "declined";
    if(await updateRequest(requestId, newRequest)) {
      setIsDeclined(true);
    }
  }
  const handleRefresh = () => {

  }

  useEffect(()=> {
    async function fetchData() {
      let initialRequests = null
      if(userState && userState.user.type == "dog owner") {
        initialRequests = await getRequestsReceived(userState.user.uid);
      }
      else {
        initialRequests = await getRequestsSent(userState.user.uid);
      }
      //console.log("requests", initialRequests);
      setRequests(initialRequests);
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
      <View style={styles.app}>
        <FlatList
          data={requests}
          keyExtractor={request => request.id.toString()}
          renderItem={( { item })=> 
            <>
              <View style={styles.container}>
                <BasicAvatar
                image1={userState.user.type==="walker"?{uri:item.value.ownerAvatarUrl}:{uri:item.value.walkerAvatarUrl}}
                width={64}
                height={64}/>
                <AvatarViewProfile
                textName={userState.user.type==="walker"?item.value.ownerName: item.value.walkerName}
                textView={"View Profile"}
                text={item.value.message}
                profileId={userState.user.type==="walker"?item.value.owner:item.value.walker}
                index = {item.id}
                />
                <View style={styles.buttons}>
                 {item.status !== "active" && !isDeclined && <ActivateButton sender={userState.user.type==="walker"?item.value.owner:item.value.walker} onPress={handleOnPressActive}/>}
                  <DeclineButton index={item.id} isDeclined={isDeclined || item.status === "declined"} onPress={isDeclined? null:handleOnPressDecline}/>
                </View> 
              </View>
              <View style={styles.spacer}>
                <Spacer/> 
              </View>
            </>
          }
          refreshing={refreshing}
          onRefresh={() => {
            handleRefresh();
          }}
        />
      </View>
  );
};

// ActivatePage.defaultProps = {
//     // size: null,
//     text: null,
//     backgroundColor: null,
//     // height: null
// };

export default RequestPage;