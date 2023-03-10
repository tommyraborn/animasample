import React from "react";
import Property1btnSubmitDesktop from "../Property1btnSubmitDesktop";
import styled from "styled-components";
import { WorksansLightWhite15px } from "../../styledMixins";


function Property1containerPromoDesktop(props) {
  const { title, paragraph, inputType, inputPlaceholder, gifCinema, property1btnSubmitDesktopProps } = props;

  return (
    <ContainerPromotion>
      <StayConncted>
        <StayConnectedText>
          <Title>{title}</Title>
          <Paragraph>{paragraph}</Paragraph>
        </StayConnectedText>
        <StayConnectedForm>
          <EmailInput>
            <Email name="email" placeholder={inputPlaceholder} type={inputType} />
            <Underline></Underline>
          </EmailInput>
          <Property1btnSubmitDesktop className={property1btnSubmitDesktopProps.className} />
        </StayConnectedForm>
      </StayConncted>
      <GifCinema style={{ backgroundImage: `url(${gifCinema})` }}></GifCinema>
    </ContainerPromotion>
  );
}

const ContainerPromotion = styled.div`
  z-index: 1;
  flex: 1;
  max-height: 386px;
  height: 386px;
  display: flex;
  justify-content: flex-end;
  gap: 219px;
  background-color: var(--cod-gray);
`;

const StayConncted = styled.div`
  margin-top: 83px;
  width: 562px;
  height: 220px;
  margin-left: 158px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 46px;
`;

const StayConnectedText = styled.div`
  height: 138px;
  width: 562px;
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const Title = styled.div`
  width: 517px;
  height: 44px;
  font-family: var(--font-family-work_sans);
  font-weight: 800;
  color: var(--white);
  font-size: var(--font-size-40px);
  letter-spacing: 0;
  line-height: 25.3px;
`;

const Paragraph = styled.p`
  ${WorksansLightWhite15px}
  height: 72px;
  letter-spacing: 0;
  line-height: 26px;
`;

const StayConnectedForm = styled.div`
  margin-left: -211px;
  width: 351px;
  position: relative;
  display: flex;
  gap: 16px;
`;

const EmailInput = styled.div`
  width: 252px;
  height: 36px;
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

const Email = styled.input`
  ${WorksansLightWhite15px}
  width: 250px;
  height: 34px;
  background-color: transparent;
  letter-spacing: 0;
  line-height: 26px;
  border: 0;
  padding: 0;

  &::placeholder {
    color: #ffffff99;
  }
`;

const Underline = styled.div`
  width: 250px;
  height: 1px;
  background-color: var(--white);
`;

const GifCinema = styled.div`
  width: 500px;
  margin-right: 1px;
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

export default Property1containerPromoDesktop;
