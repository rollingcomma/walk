import React, { useState} from "react";
import { View, StyleSheet, ScrollView, Text, Alert } from "react-native";
import styled from "styled-components/native";
import Loading from "../../components/Loading";
import YourReview from "../../comps/YourReview";
import ShareFeedback from "../../comps/ShareFeedback";

import TopBar from "../../comps/TopBar";
import Description from "../../comps/Description";
import AvatarForm05 from "../../comps/AvatarForm/AvatarForm05";
import BasicButton from "../../comps/WButton/BasicButton";
import UserStateProvider from "../../context/UserStateProvider";
import { useUserState } from "../../hook/useUserState";
import { createReview } from "../../db/DBUtils";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({ 
  app: {
    height:"100%",
  }
});

const Cont = styled.View`
  margin-left:50;
`;

const AvatarCont = styled.View`
  margin-top: 30px;
`;

const YourReviewCont = styled.View`
  margin-top: 40px;
`;
const ShareFeedbackCont = styled.View`
  margin-top: 30px;
`;

const TypeCont = styled.View`
  margin-top: 10px;
`;

const ButtonCont = styled.View`
  flex-direction: row;
  width: 290px;
  justify-content: space-between;
  margin:40px 0 ;
`;

const CancelButtonCont = styled.View`
`;
const PostButtonCont = styled.View`
`;

const LeaveReview = ({route, navigation:{goBack}}) => {
  // const navigation = useNavigation()
  const [review, setReview] = useState('');
  const { profile } = route.params;
  const [userState] = useUserState()
  const [starNum, setStarNum] = useState(5);

  const handleStarSelect = (num) => {
    setStarNum(num);
  }
  
  const handleReviewInput = (msg) =>{
    setReview(msg);
  }

  const handleReviewPost = async() => {
    if(review.length <= 3) {
      alert("Your review is too short!")
    } else {
      const newReview = {
        sender: userState.user.uid,
        stars:starNum,
        review: review,
        createdAt: new Date(),
      }
      if(await createReview(profile.uid, newReview )) {
        Alert.alert("Thank you!","Your review is posted");
        goBack();
      }
    }
  }
    
  return (
        <View  style={styles.app}>
          <ScrollView>
              <Cont>
                <AvatarCont>
                  <AvatarForm05 avatarUrl={{uri:profile.avatarUrl}} name={profile.name} />
                </AvatarCont>

                <YourReviewCont>
                  <YourReview numstar={starNum} handleStarSelect={handleStarSelect}/>
                </YourReviewCont>

                <ShareFeedbackCont>
                  <ShareFeedback />
                </ShareFeedbackCont>

                <TypeCont>
                  <Description 
                    review={review}
                    handleReviewInput={handleReviewInput}/>
                </TypeCont>

                <ButtonCont>
                  <CancelButtonCont>
                    <BasicButton 
                    text="Cancel"
                    backgroundColor="#EAF6F7"
                    color="#565555"
                    height={45}
                    width={137}/>
                  </CancelButtonCont>
                  <PostButtonCont>
                    <BasicButton
                    text="Post Review"
                    backgroundColor="#565555"
                    height={45}
                    width={137}
                    onPress={handleReviewPost}
                    />
                  </PostButtonCont>
                </ButtonCont>
              </Cont>
        </ScrollView>
        {/* <FooterBar/> */}
      </View>

  );
};

export default LeaveReview;