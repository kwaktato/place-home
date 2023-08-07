import React, { useState, useEffect } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import styled from "styled-components";

const StarWrapper = styled.div`
  display: flex;
`;

const ARRAY = [0, 1, 2, 3, 4];

function Star() {
  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const handleStarClick = (index) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  return (
    <StarWrapper>
      {ARRAY.map((score, id) => {
        return (
          <FaStar
            className={clicked[score]}
            key={id}
            size="50"
            onClick={() => handleStarClick(score)}
            color={clicked[score] ? "#fcc419" : "gray"}
            style={{ cursor: "pointer" }}
          />
        );
      })}
    </StarWrapper>
  );
}

export default Star;
