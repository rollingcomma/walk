import React from "react";
import { Container, Tab, Tabs } from "native-base";
import { ActivatePage, RequestPage } from "../"
export default Inbox = () => {
  return(
    <Container>
      <Tabs>
        <Tab
          heading="General">
          <RequestPage />
        </Tab>
        <Tab
          heading="Requests">
          <ActivatePage />
        </Tab>
      </Tabs>
    </Container>
  )
}