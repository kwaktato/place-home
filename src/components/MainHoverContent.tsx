import React from "react";
import styled from "styled-components";

const StoryContentWrapper = styled.div`
  background-image: url("images/Home/story_bgr.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 37vh;
  border-radius: 5%;
  position: relative;

  &:hover .StoryContentAccount {
    transform: translateY(0);
  }
  overflow: hidden;
`;

const StoryContentHeart = styled.div``;

const StoryContentHeartImg = styled.img`
  height: 7%;
  position: absolute;
  top: 5%;
  right: 5%;
`;

const StoryContentAccount = styled.div`
  position: absolute;
  bottom: 7%;
  left: 7%;
  margin-bottom: 5px;

  transition: 0.5s;
  transform: translateY(18vh);
`;

const StoryContentAccountImg = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 50%;
`;

const StoryContentAccountName = styled.p`
  margin: 0;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 17px;
  color: #ffffff;
  margin-top: 7px;
`;

const StoryContentAccountLocation = styled.p`
  margin: 0;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 13px;
  color: #c4c4c4;
  margin-top: 5px;
`;

function MainStoryHoverContent({ img, name, location }: any) {
  return (
    <StoryContentWrapper>
      <StoryContentHeart>
        <StoryContentHeartImg src="/Images/Home/heart.png" />
      </StoryContentHeart>
      <StoryContentAccount className="StoryContentAccount">
        <StoryContentAccountImg src={img} />
        <StoryContentAccountName>{name}</StoryContentAccountName>
        <StoryContentAccountLocation>{location}</StoryContentAccountLocation>
      </StoryContentAccount>
    </StoryContentWrapper>
  );
}

export default MainStoryHoverContent;
