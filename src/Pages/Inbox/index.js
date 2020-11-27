import React from "react";
import { Container, Tab, Tabs } from "native-base";
import ActivatePage from "../ActivatePage"
import RequestPage from "../RequestPage"

export default Inbox = () => {
  return(
    <Container>
      <Tabs>
        <Tab
          heading="General"
          tabStyle={{flex:1, backgroundColor:"#ffffff"}}
          activeTabStyle={{backgroundColor:"#97D7DA"}}
          >
          <RequestPage />
        </Tab>
        <Tab
          heading="Requests"
          tabStyle={{flex:1, backgroundColor:"#ffffff"}}
          activeTabStyle={{backgroundColor:"#97D7DA"}}>
          <ActivatePage />
        </Tab>
      </Tabs>
    </Container>
  )
}