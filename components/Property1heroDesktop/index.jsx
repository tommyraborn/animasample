import React from "react";
import Property1btnWatchDesktop from "../Property1btnWatchDesktop";
import styled from "styled-components";
import {
  WorksansLightWhite15px,
  HeadlineDesktop80px,
  WorksansNormalWhite12px,
  ValignTextMiddle,
} from "../../styledMixins";


function Property1heroDesktop(props) {
  const { heroContainer, mainTitle, filmInfo, filmAbout, filmCredits, property1btnWatchDesktopProps } = props;

  return (
    <HeroContainer style={{ backgroundImage: `url(${heroContainer})` }}>
      <MainTitle>{mainTitle}</MainTitle>
      <FilmInfo>{filmInfo}</FilmInfo>
      <FilmAbout>{filmAbout}</FilmAbout>
      <FilmCredits>{filmCredits}</FilmCredits>
      <Property1btnWatchDesktop
        btnWatch={property1btnWatchDesktopProps.btnWatch}
        watchNow={property1btnWatchDesktopProps.watchNow}
      />
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
  flex: 1;
  max-height: 544px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-position: 50% 50%;
`;

const MainTitle = styled.h1`
  ${ValignTextMiddle}
  ${HeadlineDesktop80px}
            margin-left: -917px;
  height: 117px;
  width: 322px;
  margin-top: 28px;
  font-weight: 400;
  color: var(--white);
  line-height: normal;
`;

const FilmInfo = styled.p`
  margin-left: -1015px;
  height: 24px;
  width: 224px;
  margin-top: 5px;
  font-family: var(--font-family-work_sans);
  font-weight: 400;
  color: var(--sonic-silver);
  font-size: var(--font-size-xl);
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const FilmAbout = styled.p`
  ${WorksansLightWhite15px}
  margin-left: -855px;
  height: 78px;
  width: 386px;
  margin-top: 20px;
  letter-spacing: 0;
  line-height: 26px;
`;

const FilmCredits = styled.p`
  ${WorksansNormalWhite12px}
  margin-left: -961px;
  height: 48px;
  width: 278px;
  margin-top: 24px;
  letter-spacing: 0;
  line-height: 24px;
`;

export default Property1heroDesktop;
