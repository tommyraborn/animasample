import React from "react";
import Property1btnWatchMobile from "../Property1btnWatchMobile";
import styled from "styled-components";
import { WorksansLightWhite10px, HeadlineMobile40px, ValignTextMiddle } from "../../styledMixins";


function Property1heroMobile(props) {
  const { filmPreview, indiLogo, title, filmInfo, filmAbout, filmCredits, property1btnWatchMobileProps } = props;

  return (
    <HeroContainer>
      <FilmPreview style={{ backgroundImage: `url(${filmPreview})` }}>
        <IndiLogo src={indiLogo} alt="indi-logo" />
      </FilmPreview>
      <Title>{title}</Title>
      <FilmInfo>{filmInfo}</FilmInfo>
      <FilmAbout>{filmAbout}</FilmAbout>
      <FilmCredits>{filmCredits}</FilmCredits>
      <Property1btnWatchMobile
        btnWatch={property1btnWatchMobileProps.btnWatch}
        watchNow={property1btnWatchMobileProps.watchNow}
      />
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
  flex: 1;
  max-height: 534px;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: var(--cod-gray);
`;

const FilmPreview = styled.div`
  flex: 1;
  max-height: 243px;
  display: flex;
  justify-content: center;
  background-size: cover;
  background-position: 50% 50%;
`;

const IndiLogo = styled.img`
  margin-top: 19.8px;
  width: 34px;
  height: 27.04541015625px;
  margin-left: -289px;
`;

const Title = styled.h1`
  ${ValignTextMiddle}
  ${HeadlineMobile40px}
            margin-left: -162px;
  height: 59px;
  width: 161px;
  align-self: center;
  margin-top: 17px;
  font-weight: 400;
  color: var(--white);
  line-height: normal;
`;

const FilmInfo = styled.p`
  margin-left: -173px;
  height: 15px;
  width: 150px;
  align-self: center;
  margin-top: 1px;
  font-family: var(--font-family-work_sans);
  font-weight: 400;
  color: var(--sonic-silver);
  font-size: var(--font-size-s);
  letter-spacing: 0;
  line-height: 15px;
  white-space: nowrap;
`;

const FilmAbout = styled.p`
  ${WorksansLightWhite10px}
  margin-left: -1px;
  height: 65px;
  width: 320px;
  align-self: center;
  margin-top: 9px;
  letter-spacing: 0;
  line-height: 18px;
`;

const FilmCredits = styled.p`
  margin-left: -138px;
  height: 30px;
  width: 185px;
  align-self: center;
  margin-top: 9px;
  font-family: var(--font-family-work_sans);
  font-weight: 400;
  color: var(--white);
  font-size: var(--font-size-s);
  letter-spacing: 0;
  line-height: 15px;
`;

export default Property1heroMobile;
