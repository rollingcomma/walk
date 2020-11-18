import React from "react";
import { View, StyleSheet } from "react-native";
import styled from "styled-components/native";
import ReviewStars from "../../comps/ReviewStars";
import YourReview from "../../comps/YourReview";
import ShareFeedback from "../../comps/ShareFeedback";
import FooterBar from "../../comps/FooterBar";
import TopBar from "../../comps/TopBar";
import Description from "../../comps/Description";
import AvatarForm05 from "../../comps/AvatarForm/AvatarForm05";
import BasicButton from "../../comps/WButton/BasicButton";

const PostButtonCont = styled.View`
  /* background-color: blue; */
`;

const CancelButtonCont = styled.View`
  /* background-color: blue; */
`;

const ButtonCont = styled.View`
  flex-direction: row;
  width: 345px;
  justify-content: space-between;
`;

const StarsCont = styled.View`
  margin-left: 160px;
`;

const WalkerStars = styled.View`
  flex-direction: row;
`;

const Header = styled.View``;

const TypeCont = styled.View`
  margin-top: 20px;
`;

const ShareFeedbackCont = styled.View`
  margin-top: 70px;
  margin-right: 60px;
`;

const AvatarCont = styled.View`
  margin-top: 40px;
`;

const YourReviewCont = styled.View`
  margin-top: 120px;
  margin-right: 200px;
`;

const Main = styled.View`
  width: 375px;
  height: 812px;
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  align-items: center;
`;

const MainCont = styled.View`
  width: 100%;
  height: 812px;
`;

const FooterCont = styled.View`
  width: 375px;
  position: absolute;
  bottom: 0;
`;

const Cont = styled.View`
  width: 100%;
  height: 86%;
  /* background-color: blue; */
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LeaveReview = () => {
  return (
    <View>
      <Main>
        <MainCont>
          <Header>
            <TopBar title="Leave a Review" />
          </Header>
          <Cont>
            <WalkerStars>
              <AvatarCont>
                <AvatarForm05 text="Mason K" />

                <StarsCont>
                  <ReviewStars />
                </StarsCont>
              </AvatarCont>
            </WalkerStars>

            <YourReviewCont>
              <YourReview numstar={3} />
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
                  // backgroundColor="#EAF6F7"
                  // color="#565555"
                  height={45}
                  width={137}
                />
              </CancelButtonCont>
              <PostButtonCont>
                <BasicButton
                  text="Post Review"
                  // backgroundColor="#565555"
                  height={45}
                  width={137}
                />
              </PostButtonCont>
            </ButtonCont>
          </Cont>

          <FooterCont>
            <FooterBar />
          </FooterCont>
        </MainCont>
      </Main>
    </View>
  );
};

export default LeaveReview;
