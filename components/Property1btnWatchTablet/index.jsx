import React from "react";
import styled from "styled-components";
import { ValignTextMiddle } from "../../styledMixins";


function Property1btnWatchTablet(props) {
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
  margin-left: -515.6px;
  height: 38.332252502441406px;
  margin-top: 26px;
  display: flex;
  padding: 0 0.3px;
  align-items: flex-start;
  min-width: 122.38066864013672px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const WatchContainer = styled.div`
  height: 39px;
  margin-top: -0.37px;
  display: flex;
  padding: 7.4px 16.9px;
  align-items: flex-start;
  min-width: 117px;
  gap: 4px;
  background-color: var(--cod-gray);
  border-radius: 35.43px;
  border: 0.8435258269309998px solid;
  border-color: var(--indi-red);
`;

const BtnWatch1 = styled.img`
  width: 12px;
  height: 12px;
  align-self: center;
  margin-bottom: 1.1px;
`;

const WatchNow = styled.div`
  ${ValignTextMiddle}
  height: 22px;
  font-family: var(--font-family-work_sans);
  font-weight: 300;
  color: var(--indi-red);
  font-size: var(--font-size-l);
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

export default Property1btnWatchTablet;
