import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default Separator = ({ text }) => {
  return(
    <View style={styles.container}>
      <View style={styles.line}/>
      {text? (<Text>{text}</Text>) : null}
      <View style={styles.line}/>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    marginVertical:10
  },
  line: {
    borderBottomColor: "darkgray",
    borderBottomWidth:StyleSheet.hairlineWidth
  },
  text: {
    color:"#a2a2a2",
  }

});

