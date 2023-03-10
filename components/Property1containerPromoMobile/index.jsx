import React from "react";
import Property1btnSubmitDesktop from "../Property1btnSubmitDesktop";
import styled from "styled-components";
import { WorksansLightWhite10px, WorksansNormalWhite10px } from "../../styledMixins";


function Property1containerPromoMobile(props) {
  const { containerPromotion, title, paragraph, inputType, inputPlaceholder } = props;

  return (
    <ContainerPromotion style={{ backgroundImage: `url(${containerPromotion})` }}>
      <Title>{title}</Title>
      <Paragraph>{paragraph}</Paragraph>
      <EmailInput>
        <YourEmail name="youremail" placeholder={inputPlaceholder} type={inputType} />
        <Underline></Underline>
      </EmailInput>
      <Property1btnSubmitDesktop />
    </ContainerPromotion>
  );
}

const ContainerPromotion = styled.div`
  flex: 1;
  max-height: 305px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-position: 50% 50%;
`;

const Title = styled.div`
  margin-left: 21px;
  height: 44px;
  width: 342px;
  margin-top: 37px;
  font-family: var(--font-family-work_sans);
  font-weight: 800;
  color: var(--white);
  font-size: 25px;
  letter-spacing: 0;
  line-height: 25.3px;
`;

const Paragraph = styled.p`
  ${WorksansLightWhite10px}
  margin-left: -88px;
  height: 72px;
  width: 233px;
  margin-top: 6px;
  letter-spacing: 0;
  line-height: 18px;
`;

const EmailInput = styled.div`
  margin-left: -110px;
  height: 35px;
  width: 211px;
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const YourEmail = styled.input`
  ${WorksansNormalWhite10px}
  margin-left: -2px;
  height: 34px;
  width: 209px;
  background-color: transparent;
  letter-spacing: 0;
  line-height: 15px;
  border: 0;
  padding: 0;

  &::placeholder {
    color: #ffffff99;
  }
`;

const Underline = styled.div`
  margin-left: -3.7px;
  height: 1px;
  width: 207.3280029296875px;
  background-color: var(--white);
`;

export default Property1containerPromoMobile;
