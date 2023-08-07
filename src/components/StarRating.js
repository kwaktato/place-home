import { useState } from "react";
import StarInput from "./StarInput";
import { styled } from "styled-components";

const Base = styled.section`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Name = styled.span`
  font-size: 1.4rem;
  line-height: 100%;
`;

const RatingValue = styled.span`
  font-size: 1.2rem;
  line-height: 100%;
`;

const RatingField = styled.fieldset`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  border: none;
  transform: translateY(2px);

  input:checked ~ label,
  labeL:hover,
  labeL:hover ~ label {
    transition: 0.2s;
    color: orange;
  }
`;

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleClickRating = (value) => {
    setRating(value);
  };

  return (
    <Base>
      <Name>별점</Name>
      <RatingField>
        <StarInput onClickRating={handleClickRating} value={5} isHalf={false} />
        <StarInput
          onClickRating={handleClickRating}
          value={4.5}
          isHalf={true}
        />
        <StarInput onClickRating={handleClickRating} value={4} isHalf={false} />
        <StarInput
          onClickRating={handleClickRating}
          value={3.5}
          isHalf={true}
        />
        <StarInput onClickRating={handleClickRating} value={3} isHalf={false} />
        <StarInput
          onClickRating={handleClickRating}
          value={2.5}
          isHalf={true}
        />
        <StarInput onClickRating={handleClickRating} value={2} isHalf={false} />
        <StarInput
          onClickRating={handleClickRating}
          value={1.5}
          isHalf={true}
        />
        <StarInput onClickRating={handleClickRating} value={1} isHalf={false} />
        <StarInput
          onClickRating={handleClickRating}
          value={0.5}
          isHalf={true}
        />
      </RatingField>
      <RatingValue>{rating}</RatingValue>
    </Base>
  );
};

export default StarRating;