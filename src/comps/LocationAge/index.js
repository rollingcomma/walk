import React from "react";
import styled from "styled-components/native";
import { View, Text, StyleSheet} from "react-native";

// const TextCont = styled.View`
//   display: flex;
//   /* margin-left: auto;
//   margin-right: auto; */
//   /* margin-left: 20px; */
//   padding-top: 30px;
// `;

// const Title = styled.Text`
 
// `;

// const Locationtext = styled.Text`
//   font-weight: 400;
//   padding-left: 30px;
//   color: #565555;
// `;

// const LocationCont = styled.Text`
//   display:flex;
//   flex-direction: column;
//   padding-bottom: 5px;
// `;

// const AgeTitle = styled.Text`
//   /* font-weight: 500; */
// `;

// const Agetext = styled.Text`
//   /* font-weight: 400; */
//   padding-left: 60px;
//   color: #565555;
  
// `;

// const AgeCont = styled.Text`
//   flex-direction: row;
// `;

const styles = StyleSheet.create({ 
  container:{
    flexDirection:"row",
  },
  titlecont: {
    justifyContent:"center",
    height:70,
    width:100,
  },
  description: {
    justifyContent:"center",
  },
});


const LocationAge = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titlecont} >
        <Text style={{fontWeight:"bold", fontSize:18}}>Location</Text>
        <Text style={{fontWeight:"bold", fontSize:18}}>Age</Text>
      </View>

      <View  style={styles.description} >
        <Text style={{fontSize:16}}>Burnaby, BC</Text>
        <Text style={{fontSize:16}}>22</Text>
      </View>




        {/* <LocationCont>
          <Title>
            <Text style={{fontWeight:"bold"}}>Location</Text>
            <Text style={{fontWeight:"bold"}}>Age</Text>
         </Title>
        </LocationCont>

        <AgeCont>
          <AgeTitle>
          <Locationtext>
            <Text >Burnaby, BC</Text>
          </Locationtext>
            
          </AgeTitle>
          <Agetext>
            <Text>22</Text>
          </Agetext>
        </AgeCont> */}
      
    </View>
  );
};

export default LocationAge;
