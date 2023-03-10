import React from "react";
import styled from "styled-components";
import { WorksansNormalWhite14px, ValignTextMiddle } from "../../styledMixins";


function Property1btnSubmitDesktop(props) {
  const { className } = props;

  return (
    <BtnSubmit className={`btn-submit ${className || ""}`}>
      <Submit className="submit">Submit</Submit>
    </BtnSubmit>
  );
}

const BtnSubmit = styled.div`
  margin-left: -224px;
  height: 30px;
  width: 97px;
  margin-top: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 32.45px;
  border: 0.7727273106575012px solid;
  border-color: var(--white);
  transition: all 0.2s ease;
  cursor: pointer;

  &.btn-submit.btn-submit-1 {
    margin-top: 6px;
    margin-left: unset;
  }

  &.btn-submit.btn-submit-2 {
    margin-top: 5px;
    margin-left: unset;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const Submit = styled.div`
  ${ValignTextMiddle}
  ${WorksansNormalWhite14px}
            height: 22px;
  margin-left: -1px;
  width: 50px;
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

export default Property1btnSubmitDesktop;
