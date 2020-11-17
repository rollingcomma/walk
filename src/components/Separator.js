import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import colors from '../styles/colors';
import AppText from './AppText';

export default Separator = ({ text }) => {
  return(
    <View style={styles.container}>
      <View style={styles.line}/>
      {text? (<AppText>{text}</AppText>) : null}
      <View style={styles.line}/>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    marginVertical:10
  },
  line: {
    borderBottomColor: colors.secondary,
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});

