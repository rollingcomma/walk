import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  Clipboard,
  Image,
  Share,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { uploadImageAsync } from '../db/DBUtils';

export default ImageUpload = () => {
  
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null)

  
  const handleRenderUploadingOverlay = () => {
    if (uploading) {
      return (
        <View
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: 'rgba(0,0,0,0.4)',
              alignItems: 'center',
              justifyContent: 'center',
            },
          ]}>
          <ActivityIndicator color="#fff" animating size="large" />
        </View>
      );
    }
  };

  const handleRenderImage = () => {
    if (!imageUrl) {
      return;
    }

    return (
      <View
        style={{
          marginTop: 30,
          width: 250,
          borderRadius: 3,
          elevation: 2,
        }}>
        <View
          style={{
            borderTopRightRadius: 3,
            borderTopLeftRadius: 3,
            shadowColor: 'rgba(0,0,0,1)',
            shadowOpacity: 0.2,
            shadowOffset: { width: 4, height: 4 },
            shadowRadius: 5,
            overflow: 'hidden',
          }}>
          <Image source={{ uri: imageUrl }} style={{ width: 250, height: 250 }} />
        </View>

        <Text
          onPress={handleCopyToClipboard}
          onLongPress={handleShare}
          style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
          Click to share
        </Text>
      </View>
    );
  };

  const handleShare = () => {
    Share.share({
      message: imageUrl,
      title: 'Check out this photo',
      url: imageUrl,
    });
  };

  const handleCopyToClipboard = () => {
    Clipboard.setString(imageUrl);
    alert('Copied image URL to clipboard');
  };

  const handlePhotoTaking = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA);
    if( !granted ) {
      Alert.alert("You need to enable permission to pick photos")
    } else {
      const pickerResult = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });
       handleImagePicked(pickerResult);
    }
  };

  const handleImagePicking = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if( !granted ) {
      Alert.alert("You need to enable permission to pick photos")
    } else {
      const pickerResult = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });
      handleImagePicked(pickerResult);
    }
  };

  const handleImagePicked = async pickerResult => {
    try {
      setUploading(true);

      if (!pickerResult.cancelled) {
        uploadUrl = await uploadImageAsync(pickerResult.uri);
        console.log(uploadUrl);
        setImageUrl(uploadUrl);
        console.log(imageUrl);
      }
    } catch (e) {
      console.log(e);
      alert('Upload failed, sorry');
    } finally {
      setUploading(false);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {imageUrl ? null : (
        <Text
          style={{
            fontSize: 20,
            marginBottom: 20,
            textAlign: 'center',
            marginHorizontal: 15,
          }}>
          Create a Post
        </Text>
      )}
      <TouchableOpacity
        onPress={handleImagePicking}
        style={{
          fontSize: 18,
          padding:10,
          marginBottom:10,
          color:"#38BC64",
          backgroundColor:"#97D7DA",
          borderRadius:10,
        }}>
          <Text>Pick an image from camera roll</Text>
        </TouchableOpacity>
       <Text > Or </Text> 

      <TouchableOpacity 
        onPress={handlePhotoTaking} 
        style={{
          fontSize: 18,
          padding: 10,
          marginTop:10,
          color:"#38BC64",
          backgroundColor:"#97D7DA",
          borderRadius:10,
        }}>
          <Text>Take a photo</Text>
        </TouchableOpacity>
       

      {handleRenderImage()}
      {handleRenderUploadingOverlay()}

      <StatusBar barStyle="default" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  image:{
    width:"100%",
    height:200,
  }
})
