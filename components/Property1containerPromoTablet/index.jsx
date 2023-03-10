import React from "react";
import Property1btnSubmitDesktop from "../Property1btnSubmitDesktop";
import styled from "styled-components";
import { WorksansNormalWhite12px, WorksansLightWhite11px } from "../../styledMixins";


function Property1containerPromoTablet(props) {
  const { title, paragraph, inputType, inputPlaceholder, gifCinema, property1btnSubmitDesktopProps } = props;

  return (
    <ContainerPromotion>
      <StayConnected>
        <StayConnectedText>
          <Title>{title}</Title>
          <Paragraph>{paragraph}</Paragraph>
        </StayConnectedText>
        <StayConnectedForm>
          <EmailInput>
            <YourEmail name="youremail" placeholder={inputPlaceholder} type={inputType} />
            <Underline></Underline>
          </EmailInput>
          <Property1btnSubmitDesktop className={property1btnSubmitDesktopProps.className} />
        </StayConnectedForm>
      </StayConnected>
      <GifCinema style={{ backgroundImage: `url(${gifCinema})` }}></GifCinema>
    </ContainerPromotion>
  );
}

const ContainerPromotion = styled.div`
  z-index: 2;
  margin-left: 64px;
  flex: 1;
  max-height: 270px;
  height: 270px;
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  background-color: var(--cod-gray);
`;

const StayConnected = styled.div`
  margin-top: 37px;
  width: 371px;
  height: 169px;
  margin-left: 33px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

const StayConnectedText = styled.div`
  height: 132px;
  width: 371px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.div`
  height: 44px;
  font-family: var(--font-family-work_sans);
  font-weight: 800;
  color: var(--white);
  font-size: 30px;
  letter-spacing: 0;
  line-height: 25.3px;
`;

const Paragraph = styled.p`
  ${WorksansLightWhite11px}
  height: 72px;
  letter-spacing: 0;
  line-height: 22px;
`;

const StayConnectedForm = styled.div`
  margin-left: -68px;
  width: 303px;
  position: relative;
  display: flex;
  gap: 9px;
`;

const EmailInput = styled.div`
  width: 211px;
  height: 35px;
  display: flex;
  flex-direction: column;
`;

const YourEmail = styled.input`
  ${WorksansNormalWhite12px}
  width: 209px;
  height: 34px;
  background-color: transparent;
  letter-spacing: 0;
  line-height: 19px;
  border: 0;
  padding: 0;

  &::placeholder {
    color: #ffffff99;
  }
`;

const Underline = styled.div`
  width: 207.3280029296875px;
  height: 1px;
  background-color: var(--white);
`;

const GifCinema = styled.div`
  width: 284px;
  background-size: cover;
  background-position: 50% 50%;

  video {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  img {
    object-fit: cover;
  }
`;

export default Property1containerPromoTablet;
