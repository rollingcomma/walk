import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import EventInfo from "../../comps/EventInfo";
import Spacer from "../../comps/Spacer";

import { getAllEvents } from "../../db/DBUtils"

const MainCont = styled.View`
  width: 100%;
  height: 100%;
`;

const Cont = styled.View`
`;

const Section = styled.View`
 margin-top:10px;
  justify-content:center;
flex-direction:row;
`;

const EventsCont = styled.View`
  
  justify-content:center;
  width:170px;
`;

const SpacerCont = styled.View`
  margin-top: 10px;
  padding-bottom: 10px;
`;

const EventImg = styled.View`
`;

const DisplayPic = styled.Image`
  width:200px;
  height:230px;
  justify-content:center;
  align-items:center;
`;

const Events = ({}) => {
  const [events, setEvents] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  
  const handleRefresh = () => {

  }
  useEffect(() => {
    async function fetchData() {
      const res = await getAllEvents();
      if(res) setEvents(res);
    }
    fetchData();
  },[])

  return (

    <MainCont>
      {events && <FlatList
        data={events}
        keyExtractor={event => event.id.toString()}
        renderItem={( { item })=> 
          <Cont>
          <Section>
          <EventsCont>
            <EventInfo
              id={item.id}
              event={item.value}
              title={item.value.name}
              date={item.value.date}
              number={item.value.participants.length}
              time={`${item.value.startTime} - ${item.value.endTime}`}
              detail1={item.value.details[0]}
              detail2={item.value.details[1]}
            />
          </EventsCont>
          <EventImg>
            <DisplayPic source={{uri: item.value.pictureUrl}} />
          </EventImg>
          </Section>
        <SpacerCont>
          <Spacer />
        </SpacerCont>
        </Cont>
        }
        refreshing={refreshing}
        onRefresh={()=> {
          handleRefresh();
        }}
      />}
    </MainCont>
   
  );
};

export default Events;