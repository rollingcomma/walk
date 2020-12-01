import React, {useState} from 'react';
import {
  View, 
  Platform, 
  StyleSheet, 
  TouchableOpacity, 
  Text
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function CusDateTimePicker({ defaultDate, mode, handleClosePicker, handleSelected}) {
  const [date, setDate] = useState(defaultDate || new Date());
  const [modeState] = useState(mode || 'date');
  
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    //handleClosePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const handleConfirm = () => {
    handleSelected(date);
    handleClosePicker();
  }
  
  return (
    <View style={styles.pickerContainer}>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={modeState}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      
      {   Platform.OS === 'ios' &&
      <View style={styles.container}>
        <TouchableOpacity
          onPress={handleConfirm}
          style={styles.textConfirm}
        >
          <Text>Confirm</Text>
        </TouchableOpacity>
      </View>
    }
    </View>
     
  );
};

const styles = StyleSheet.create({
  pickerContainer:{
   width:"80%",
  },
  container:{
    width:"100%",
    display:"flex",
    alignItems:"flex-end",
    paddingTop:10
  },
  
  textConfirm: {
    width:80,
    height:30,
    fontSize:18,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#97D7DA",
    borderRadius:4
  }
})