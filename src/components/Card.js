import { CardAnimationContext } from '@react-navigation/stack';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Modal } from 'react-native';
import  Colors  from './Colors';
import Button from './AppButton';
import FormModal from './FormModal';

export default Card = ({
  name, 
  profileImageUrl,
  imageUrl}) => {

  const [modalVisible, setModalVisible] = useState(false);
  return(
    <>
      <View style={styles.card}>
        <View style={styles.header}>
          <ProfileImage source={profileImageUrl} />
          <Text>{name}</Text>
        </View>
        <Image style={styles.image} source={imageUrl} />
        <View style={styles.footer}>
          <View>
            <Heart />
            <MessageIcon />
          </View>
          <Button 
            title="Send Walk Request"
            instructions={() => console.log("open modal clicked")}
            containerStyle={styles.btnContainerStyle}
            textStyle={styles.btnTextStyle}/>
        </View>
        
      </View>
    </>
    
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: Colors.white,
    marginBottom: 10
  },
  header: {
    flexDirection:"row",
    justifyContent:"flex-start",
    margin:10,
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
  btnContainerStyle: {
    margin: 10,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: Colors.secondary
  },
  btnTextStyle: {
    textAlign: "center",
    color: Colors.white,
    fontSize: 16,
    fontWeight: "bold"
  }
})