import React, {useState} from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";

const MainCont = styled.View`
  width: 304px;
  height: 80%;
  display: flex;
  /* background-color:#DBD; */
  /* margin:30px 30px; */
 justify-content:center;
 
`;
const Cont = styled.View`
  width:100%;
  height:93%;
  display:flex;
  flex-direction:row;
`;
const Month = styled.View`
  flex:3;
  /* background-color:#DCD; */
  display:flex;
  align-items:center;
  flex-direction:column;
`;
const ChildMonth = styled.View`
  width: 108px;
  height: 34px;
  background-color: #FFFFFF;
  border: 1px solid #E5E5E5;
  border-radius: 4px;
  display:flex;
  align-items:flex-end;
  justify-content:center;
`;
const MonthDrop = styled.View`
  width:108px;
  height:280px;
  /* background-color:#BCB; */
  display:${props=>props.expandM ? "none" : "inline-flex"};
  flex-direction:column;
`;
const MonthOption = styled.View`
  flex:1;
  background-color: white;
  border:.5px solid lightgrey;
`;
const Day = styled.View`
  flex:2;
  /* background-color:#DAD; */
  display:flex;
  align-items:center;
`;
const ChildDay = styled.View`
  width: 66px;
  height: 34px;
  background-color: #FFFFFF;
  border: 1px solid #E5E5E5;
  border-radius: 4px;
  display:flex;
  align-items:flex-end;
  justify-content:center;
`;
const DayDrop = styled.View`
  width:66px;
  height:280px;
  /* background-color:#BCB; */
  display:${props=>props.expandD ? "none" : "inline-flex"};
  flex-direction:column;
  /* overflow:scroll; */
  background-color: #FFFFFF;
`;
const DayOption = styled.View`
  height:30px;
  background-color: #FFFFFF;
  border:.5px solid lightgrey;
  display:flex;
  justify-content:center;
`;
const Year = styled.View`
  flex:3;
  /* background-color:#FCD; */
  display:flex;
  align-items:center;
`;
const ChildYear = styled.View`
  width: 108px;
  height: 34px;
  background-color: #FFFFFF;
  border: 1px solid #E5E5E5;
  border-radius: 4px;
  display:flex;
  align-items:flex-end;
  justify-content:center;
`;
const YearDrop = styled.View`
  width:108px;
  height:280px;
  /* background-color:#BCB; */
  display:${props=>props.expandY ? "none" : "inline-flex"};
  flex-direction:column;
  /* overflow:scroll; */
  background-color: #FFFFFF;
 
`;
const YearOption = styled.View`
  width:108px;
  height:30px;
  background-color: #FFFFFF;
  border:.5px solid lightgrey;
  display:flex;
  justify-content:center;
`;
const ImgCont = styled.TouchableOpacity`
  width:15px;
  height:8px;
  margin-right:8px;
  margin-top:6px;
`;
const Arrow = styled.Image`
width:100%;
height:100%;
`;
const downarrow = require("./downarrow.png");
const Birthday = ({onPress}) => {
  const [expandM, setExpandM] = useState(true)
  const [expandD, setExpandD] = useState(true)
  const [expandY, setExpandY] = useState(true)
  
  return (
    <View>
      <MainCont>
        <Text>Birthday</Text>
        <Cont>
        <Month>
          <ChildMonth>
            <ImgCont onPress={()=>{
              setExpandM(!expandM);
            }}>
              <Arrow source={downarrow} />
            </ImgCont>
          </ChildMonth>
          <MonthDrop expandM={expandM}>
            <MonthOption><Text>January</Text></MonthOption>
            <MonthOption><Text>February</Text></MonthOption>
            <MonthOption><Text>March</Text></MonthOption>
            <MonthOption><Text>April</Text></MonthOption>
            <MonthOption><Text>May</Text></MonthOption>
            <MonthOption><Text>June</Text></MonthOption>
            <MonthOption><Text>July</Text></MonthOption>
            <MonthOption><Text>August</Text></MonthOption>
            <MonthOption><Text>September</Text></MonthOption>
            <MonthOption><Text>October</Text></MonthOption>
            <MonthOption><Text>November</Text></MonthOption>
            <MonthOption><Text>December</Text></MonthOption>
          </MonthDrop>
        </Month>
        <Day>
          <ChildDay>
            <ImgCont onPress={()=>{
              setExpandD(!expandD);
            }}>
              <Arrow source={downarrow} />
            </ImgCont>
          </ChildDay>
          <DayDrop expandD={expandD}>
            <DayOption><Text>1</Text></DayOption>
            <DayOption><Text>2</Text></DayOption>
            <DayOption><Text>3</Text></DayOption>
            <DayOption><Text>4</Text></DayOption>
            <DayOption><Text>5</Text></DayOption>
            <DayOption><Text>6</Text></DayOption>
            <DayOption><Text>7</Text></DayOption>
            <DayOption><Text>8</Text></DayOption>
            <DayOption><Text>9</Text></DayOption>
            <DayOption><Text>10</Text></DayOption>
            <DayOption><Text>11</Text></DayOption>
            <DayOption><Text>12</Text></DayOption>
            <DayOption><Text>13</Text></DayOption>
            <DayOption><Text>14</Text></DayOption>
            <DayOption><Text>15</Text></DayOption>
            <DayOption><Text>16</Text></DayOption>
            <DayOption><Text>17</Text></DayOption>
            <DayOption><Text>18</Text></DayOption>
            <DayOption><Text>19</Text></DayOption>
            <DayOption><Text>20</Text></DayOption>
            <DayOption><Text>21</Text></DayOption>
            <DayOption><Text>22</Text></DayOption>
            <DayOption><Text>23</Text></DayOption>
            <DayOption><Text>24</Text></DayOption>
            <DayOption><Text>25</Text></DayOption>
            <DayOption><Text>26</Text></DayOption>
            <DayOption><Text>27</Text></DayOption>
            <DayOption><Text>28</Text></DayOption>
            <DayOption><Text>29</Text></DayOption>
            <DayOption><Text>30</Text></DayOption>
            <DayOption><Text>31</Text></DayOption>
          </DayDrop>
        </Day>
        <Year>
          <ChildYear>
            <ImgCont onPress={()=>{
              setExpandY(!expandY);
            }}>
            <Arrow source={downarrow} />
            </ImgCont>
          </ChildYear>
          <YearDrop expandY={expandY}>
            <YearOption><Text>2002</Text></YearOption>
            <YearOption><Text>2001</Text></YearOption>
            <YearOption><Text>2000</Text></YearOption>
            <YearOption><Text>1999</Text></YearOption>
            <YearOption><Text>1998</Text></YearOption>
            <YearOption><Text>1997</Text></YearOption>
            <YearOption><Text>1996</Text></YearOption>
            <YearOption><Text>1995</Text></YearOption>
            <YearOption><Text>1994</Text></YearOption>
            <YearOption><Text>1993</Text></YearOption>
            <YearOption><Text>1992</Text></YearOption>
            <YearOption><Text>1991</Text></YearOption>
            <YearOption><Text>1990</Text></YearOption>
            <YearOption><Text>1989</Text></YearOption>
            <YearOption><Text>1987</Text></YearOption>
            <YearOption><Text>1986</Text></YearOption>
            <YearOption><Text>1985</Text></YearOption>
            <YearOption><Text>1984</Text></YearOption>
            <YearOption><Text>1983</Text></YearOption>
            <YearOption><Text>1982</Text></YearOption>
            <YearOption><Text>1981</Text></YearOption>
            <YearOption><Text>1980</Text></YearOption>
            <YearOption><Text>1979</Text></YearOption>
            <YearOption><Text>1978</Text></YearOption>
            <YearOption><Text>1977</Text></YearOption>
            <YearOption><Text>1976</Text></YearOption>
            <YearOption><Text>1975</Text></YearOption>
          </YearDrop>
        </Year>
        </Cont>
      </MainCont>
    </View>
  );
};

Birthday.defaultProps = {
  
};
export default Birthday;
