import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StoryContentWrapper = styled.div`
  background-image: url("images/Home/story_bgr.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 21.25rem;
  border-radius: 5%;
  position: relative;
`;

const StoryContentHeart = styled.div``;

const StoryContentHeartImg = styled.img`
  height: 7%;
  position: absolute;
  top: 5%;
  right: 5%;
  cursor: pointer;
`;

const StoryContentAccount = styled.div`
  position: absolute;
  bottom: 7%;
  left: 7%;
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

function MainStoryContent({ img, name, location }: any) {
  const [like, setLike] = useState(false);

  const toggleLike = () => {
    setLike(!like);
  };

  return (
    <StoryContentWrapper>
      <StoryContentHeart>
        <StoryContentHeartImg
          src={like ? "/Images/Home/heart_full.png" : "/Images/Home/heart.png"}
          onClick={toggleLike}
        />
      </StoryContentHeart>
      <StoryContentAccount>
        <StoryContentAccountImg src={img} />
        <StoryContentAccountName>{name}</StoryContentAccountName>
        <StoryContentAccountLocation>{location}</StoryContentAccountLocation>
      </StoryContentAccount>
    </StoryContentWrapper>
  );
}

export default MainStoryContent;
