import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import Description from "../../comps/Description";
import Dropdown from "../../comps/Dropdown";
import Input from "../../comps/Input";
import Likes from "../../comps/Likes";
import Popup from "../../comps/Popup";
import Texting from "../../comps/Texting";
import Post from "../../comps/Post";
import WalkerProfile from "../../comps/WalkerProfile";
import MsgSent from "../../comps/MsgSent";
import MsgSelection from "../../comps/MsgSelection";
import Birthday from "../../comps/Birthday";
import MsgRecieved from "../../comps/MsgRecieved";
import DashDog from "../../comps/DashDog";
import DashOwner from "../../comps/DashOwner";
import AddImage from "../../comps/AddImage";
import Spacer from "../../comps/Spacer";
import TopBar from "../../comps/TopBar";
import AvatarWithName from "../../comps/Avatar/AvatarWithName";
import AvatarEdit from "../../comps/Avatar/AvatarEdit";
// import FooterBar from "../../comps/FooterBar";
import Avatar06 from "../../comps/Avatar/Avatar06";
import Province from "../../comps/Province";
import Button from "../../comps/Button";
import BasicButton from "../../comps/WButton/BasicButton";

const styles = StyleSheet.create({
  Main: {
    width: 375,
    height: 812,
    flexDirection: "column"
    // backgroundColor: "red"
  },
  MainCont: {
    width: "100%",
    height: 812
  },
  FooterCont: {
    width: 375,
    position: "absolute",
    bottom: "0"
  },
  Cont: {
    width: "100%",
    height: "86%",
    // backgroundColor: "blue",
    overflow: "scroll",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  InfoCont: {
    // backgroundColor: "#ddd",
    width: "100%",
    height: 295,
    flexDirection: "row"
  },
  Info: {
    width: "50%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  ImgCont: {
    width: 137,
    height: 137,
    borderRadius: 80
    // backgroundColor: "red"
  },
  Bottom: {
    // backgroundColor: "red",
    width: "100%",
    height: 100,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center"
  },
  Top: {
    // backgroundColor: "blue",
    width: "100%",
    height: 100,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center"
  }
});
// const leftarrow = require("./leftarrow.png");
const ViewDogProfile = ({
  likeone,
  liketwo,
  likethree,
  dislikeone,
  disliketwo,
  dislikethree,
  dogname,
  dogbreed,
  dogage,
  image1,
  backgroundColor
}) => {
  const [isLoading, setIsLoading] = useState(true);
  return isLoading? 
    (
      <Loading />
    ) 
    : 
    (
    <View>
      <View style={styles.Main}>
        <View style={styles.MainCont}>
          {/* not sure how to get image for imageLeft1 */}
          <TopBar title="Dog Profile" imageLeft1="" />
          <View style={styles.Cont}>
            <View style={styles.InfoCont}>
              <View style={styles.Info}>
                <View style={styles.Top}>
                  {/* get image1 prop from comps/avatar06 */}
                  <View style={styles.ImgCont}>{image1}</View>
                </View>
                <View style={styles.Bottom}>
                  <Text style={{ fontSize: "16px", fontWeight: 500 }}>Likes</Text>
                  {/* props from "likes" from "OwnerEditProfile" */}
                  <Text>{likeone}</Text>
                  <Text>{liketwo}</Text>
                  <Text>{likethree}</Text>
                </View>
              </View>
              <View style={styles.Info}>
                <View style={styles.Top}>
                  {/* props for dog name, breed, and age from "OwnerEditProfile" */}
                  <Text style={{ fontSize: "28px", fontWeight: 500 }}>
                    {dogname}
                  </Text>
                  <Text style={{ fontSize: "16px" }}>{dogbreed}</Text>
                  <Text style={{ fontSize: "16px" }}>{dogage}</Text>
                  {/* bgcolor not working */}
                  <BasicButton
                    text="Activate Walk"
                    backgroundColor="#38BC64"
                    height={26}
                    width={91}
                    size={14}
                  />
                </View>
                <View style={styles.Bottom}>
                  <View style={styles.Bottom}>
                    <Text style={{ fontSize: "16px", fontWeight: 500 }}>
                      Dislikes
                    </Text>
                    {/* props from "dislikes" from "OwnerEditPage" */}
                    <Text>{dislikeone}</Text>
                    <Text>{disliketwo}</Text>
                    <Text>{dislikethree}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          {/* <View style={styles.FooterCont}>
            <FooterBar />
          </View> */}
        </View>
      </View>
    </View>
  );
};
ViewDogProfile.defaultProps = {
  maintext: "default",
  likeone: "catch",
  liketwo: "swim",
  likethree: "run",
  dislikeone: "catch",
  disliketwo: "swim",
  dislikethree: "run",
  dogname: "Lucky",
  dogbreed: "golden retreiver",
  dogage: "3",
  image1: null
};
export default ViewDogProfile;
