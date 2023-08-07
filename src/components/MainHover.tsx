import React from "react";
import styled from "styled-components";
import MainHoverContent from "./MainHoverContent";

const StoryWrapper = styled.div`
  height: 60vh;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 10vh;
`;

const StoryTitleWrapper = styled.div`
  height: 15vh;
  padding-bottom: 8vh;
`;

const StoryTitleWrapperH1 = styled.h1`
  height: 10vh;
  margin: 0;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 36px;
  color: #484848;
  display: grid;
  justify-items: start;

  &::after {
    content: "";
    display: block;
    width: 140px;
    border-bottom: 6px solid #484848;
    margin-top: 5vh;
    border-radius: 3px;
  }
`;

const StoryTitleWrapperMap = styled.div`
  display: grid;
  justify-items: end;
`;

const StoryTitleWrapperMapImg = styled.img`
  height: auto;
  width: auto;
`;

const StoryContent = styled.div`
  height: 37vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2%;
`;

function MainStory({ text }: any) {
  const AccountData = [
    {
      id: 1,
      name: "가",
      location: "용산구",
      img: "/Images/Home/제리.jpg",
    },
    {
      id: 2,
      name: "나",
      location: "강남구",
      img: "/Images/Home/제리.jpg",
    },
    {
      id: 3,
      name: "다",
      location: "마포구",
      img: "/Images/Home/제리.jpg",
    },
  ];

  return (
    <StoryWrapper>
      <StoryTitleWrapper>
        <StoryTitleWrapperH1>
          {text}
          <br />
          스토리 모아보기
        </StoryTitleWrapperH1>
        <StoryTitleWrapperMap>
          <StoryTitleWrapperMapImg src="/Images/Home/map_btn.png" />
        </StoryTitleWrapperMap>
      </StoryTitleWrapper>
      <StoryContent>
        {AccountData.map((account) => (
          <MainHoverContent
            img={account.img}
            name={account.name}
            location={account.location}
          />
        ))}
      </StoryContent>
    </StoryWrapper>
  );
}

export default MainStory;
