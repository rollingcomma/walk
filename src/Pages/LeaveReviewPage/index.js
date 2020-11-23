import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import styled from "styled-components/native";
import YourReview from "../../comps/YourReview";
import ShareFeedback from "../../comps/ShareFeedback";
// import FooterBar from "../../comps/FooterBar";
import TopBar from "../../comps/TopBar";
import Description from "../../comps/Description";
import AvatarForm05 from "../../comps/AvatarForm/AvatarForm05";
import BasicButton from "../../comps/WButton/BasicButton";

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

const LeaveReview = () => {
  return (
        <View  style={styles.app}>
          <TopBar title="Leave a Review" />
          <ScrollView>
              <Cont>
                <AvatarCont>
                  <AvatarForm05 name="Mason K." />
                </AvatarCont>

                <YourReviewCont>
                  <YourReview numstar={4} />
                </YourReviewCont>

                <ShareFeedbackCont>
                  <ShareFeedback />
                </ShareFeedbackCont>

                <TypeCont>
                  <Description />
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