import React, { useState } from "react";
import { FontAwesome } from '@expo/vector-icons';
import { Dimensions, Modal, StyleSheet, View, Text } from "react-native"

export default function CusModal({children, modalVisible, handleModalClose, title}) {
  return(
    <Modal 
      transparent
      visible={modalVisible}
      animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.contentContainer}>
            <View style={styles.closeBtn}>
              <FontAwesome.Button
                name="close"
                backgroundColor="transparent"
                size= {20}
                color="tomato"
                onPress={() => handleModalClose()}/>
            </View>
            <Text style={styles.titleText}>{title}</Text>
            
          {children}
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    height: (Dimensions.get("window").height)/2.5,
    width: (Dimensions.get("window").width),
    marginTop:220,
    marginRight: "auto",
    marginLeft:"auto",
    justifyContent:"center",
    alignItems:"center",
    
  },
  closeBtn: {
    width:"100%",
    alignItems:"flex-end",
    marginHorizontal: 15,
    marginVertical: 15,
  },
  contentContainer: {
    width: "80%",
    height:"100%",
    borderRadius:10,
    backgroundColor:"lightgrey",
    flexDirection:"column",
    justifyContent: "center",
    alignItems:"center",
    
  },
  titleText: {
    fontSize:15,
    fontWeight:"bold",

  },

})

