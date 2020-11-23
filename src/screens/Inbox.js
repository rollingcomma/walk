import React from "react";
import { Container, Tab, Tabs } from "native-base";
import  Request from "./Request";
import MessageBox from "./MessageBox"
import { ActivatePage, RequestPage } from "../Pages"
export default Inbox = () => {
  return(
    <Container>
      <Tabs>
        <Tab
          heading="Messages">
          <ActivatePage />
        </Tab>
        <Tab
          heading="Requests">
          <RequestPage />
        </Tab>
      </Tabs>
    </Container>
  )
}