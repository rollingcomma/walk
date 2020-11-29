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

  const handleOnPressViewProfile = () => {
    navigation.navigate("WalkerProfile");

  }
  
  const handleCompleteRequest = async (requestId) => {
    const request = requests.filter(req => req.id === requestId);
    const newRequest = request.value
    newRequest.status = "completed";
    if(await updateRequest(requestId, newRequest)) {
      setIsActive(false);
    }
  }

  const handleOnPressActive = (requestId) => {
    navigation.navigate("Dashboard", {requestId: requestId, handleCompleteRequest:handleCompleteRequest});
    setIsActive(true);
  }

  const handleOnPressDecline = async (requestId) => {
    const request = requests.filter(req => req.id === requestId);
    const newRequest = request.value
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
                image1={{uri:userState.user.type="walker"?request.value.walkerAvatarUrl:request.value.ownerAvatarUrl}}
                width={64}
                height={64}/>
                <AvatarViewProfile
                textName={userState.user.type="walker"?request.value.walkerName:request.value.ownerName}
                textView={"View Profile"}
                text={request.value.message}
                index = {item.id}
                onPress={handleOnPressViewProfile}
                />
                <View style={styles.buttons}>
                 {request.status != "active" && <ActivateButton onPress={handleOnPressActive}/>}
                  <DeclineButton index={item.id} isDeclined={isDeclined || request.status === "declined"} onPress={handleOnPressDecline}/>
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