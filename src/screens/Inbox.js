import React from "react";
import { Container, Tab, Tabs } from "native-base";
import  Request from "./Request";
import MessageBox from "./MessageBox"
export default Inbox = () => {
  return(
    <Container>
      <Tabs>
        <Tab
          heading="Messages">
          <MessageBox />
        </Tab>
        <Tab
          heading="Requests">
          <Request />
        </Tab>
      </Tabs>
    </Container>
  )
}