import React from "react";
import styled from "styled-components";
import { ValignTextMiddle } from "../../styledMixins";


function Property1btnWatchMobile(props) {
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
  margin-left: -220.4px;
  height: 32.355812072753906px;
  align-self: center;
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  min-width: 102.60485076904297px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const WatchContainer = styled.div`
  height: 32px;
  display: flex;
  padding: 7.1px 14px;
  align-items: flex-start;
  min-width: 103px;
  gap: 4px;
  background-color: var(--cod-gray);
  border-radius: 29.9px;
  border: 0.7120104432106018px solid;
  border-color: var(--indi-red);
`;

const BtnWatch1 = styled.img`
  width: 12px;
  height: 12px;
  align-self: center;
  margin-bottom: 0.77px;
`;

const WatchNow = styled.div`
  ${ValignTextMiddle}
  height: 18px;
  font-family: var(--font-family-work_sans);
  font-weight: 300;
  color: var(--indi-red);
  font-size: var(--font-size-m);
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
`;

export default Property1btnWatchMobile;
