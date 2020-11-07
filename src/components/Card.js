import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import  colors  from '../styles/colors';
import { 
  StyleSheet, 
  View, 
  Image } from 'react-native';
import {
  AppButton,
  FormModal,
  Avatar,
  Heading
} from './index1'
// import AppButton from './AppButton';
// import FormModal from './FormModal';
// import ProfileImage from './Avatar';
// import Heading from './Heading';


export default Card = ({
  name, 
  profileImageUrl,
  imageUrl}) => {

  const [modalVisible, setModalVisible] = useState(false);
  const handleModalClose = () => {
    setModalVisible(!modalVisible);
  }
  return(
    <>
      <View style={styles.card}>
        <View style={styles.header}>
          <Avatar 
            profileImageUrl={profileImageUrl} />
            <View style={styles.profileName}>
              <Heading>{name}</Heading>
              <AppButton 
                title="View Profile"
                onPress={() => console.log("view profile")}
                containerStyle={styles.profileBtnContainerStyle}
                textStyle={styles.requestBtnTextStyle}/>
            </View>
          
        </View>
        <Image style={styles.image} source={{uri:imageUrl}} />
        <View style={styles.footer}>
          <View style={{flexDirection:"row"}}>
            <FontAwesome.Button backgroundColor="transparent" name="heart-o" size={24} color="red" />
            <FontAwesome.Button 
              name="comment-o" 
              size={24} 
              color="black"
              backgroundColor="transparent" 
              onPress={() => {
                console.log("open modal clicked"); 
                setModalVisible(true)}}/>
          </View>
          <AppButton 
            title="Send Walk Request"
            onPress={() => console.log("request send")}
            containerStyle={styles.requestBtnContainerStyle}
            textStyle={styles.requestBtnTextStyle}/>
        </View>
        <FormModal modalVisible={ modalVisible } handleModalClose={handleModalClose} />
      </View>
    </>
    
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: colors.white,
    marginBottom: 10
  },
  header: {
    flexDirection:"row",
    justifyContent:"flex-start",
    margin:10,
  },
  profileName: {
    marginStart: 10,
    justifyContent: "center",
  },
  image:{
    width:"100%",
    height:200,
  },
  footer:{
    flexDirection:"row",
    justifyContent:"space-between",
    margin:10,
  },
  requestBtnContainerStyle: {
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: colors.primary
  },
  requestBtnTextStyle: {
    textAlign: "center",
    color: colors.primary,
    fontSize: 16
  },
  profileBtnContainerStyle: {
    paddingVertical: 10,
    color: colors.primary
  },
  requestBtnTextStyle: {
    marginHorizontal:10,
    textAlign: "center",
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold"
  }
})