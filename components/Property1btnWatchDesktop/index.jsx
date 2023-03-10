import React from "react";
import styled from "styled-components";
import { ValignTextMiddle } from "../../styledMixins";


function Property1btnWatchDesktop(props) {
  const { btnWatch, watchNow } = props;

  return (
    <BtnWatch>
      <WatchContainer>
        <BtnWatch1 src={btnWatch} alt="btn-watch" />
        <WatchNow>{watchNow}</WatchNow>
      </WatchContainer>
    </BtnWatch>
  );
}

const BtnWatch = styled.div`
  margin-left: -1083.5px;
  height: 43.35908508300781px;
  margin-top: 49px;
  display: flex;
  align-items: flex-start;
  min-width: 155.5006103515625px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const WatchContainer = styled.div`
  height: 44px;
  margin-top: -0.35px;
  display: flex;
  padding: 8.2px 19.5px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 151px;
  gap: 6px;
  background-color: var(--cod-gray);
  border-radius: 40.07px;
  border: 0.9541445374488831px solid;
  border-color: var(--indi-red);
`;

const BtnWatch1 = styled.img`
  width: 12px;
  height: 12px;
  align-self: center;
  margin-bottom: 1.31px;
`;

const WatchNow = styled.div`
  ${ValignTextMiddle}
  height: 26px;
  font-family: var(--font-family-work_sans);
  font-weight: 300;
  color: var(--indi-red);
  font-size: var(--font-size-xxxl);
  letter-spacing: 0;
  line-height: 26px;
  white-space: nowrap;
`;

export default Property1btnWatchDesktop;
