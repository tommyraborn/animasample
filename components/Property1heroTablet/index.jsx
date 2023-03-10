import React from "react";
import Property1btnWatchTablet from "../Property1btnWatchTablet";
import styled from "styled-components";
import {
  WorksansLightWhite11px,
  WorksansNormalWhite10px,
  HeadlineTablet50px,
  ValignTextMiddle,
} from "../../styledMixins";


function Property1heroTablet(props) {
  const { heroContainer, title, filmInfo, filmAbout, filmCredits, property1btnWatchTabletProps } = props;

  return (
    <HeroContainer style={{ backgroundImage: `url(${heroContainer})` }}>
      <Title>{title}</Title>
      <FilmInfo>{filmInfo}</FilmInfo>
      <FilmAbout>{filmAbout}</FilmAbout>
      <FilmCredits>{filmCredits}</FilmCredits>
      <Property1btnWatchTablet
        btnWatch={property1btnWatchTabletProps.btnWatch}
        watchNow={property1btnWatchTabletProps.watchNow}
      />
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
  flex: 1;
  max-height: 365px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-position: 50% 50%;
`;

const Title = styled.h1`
  ${ValignTextMiddle}
  ${HeadlineTablet50px}
            margin-left: -436px;
  height: 74px;
  width: 202px;
  margin-top: 23px;
  font-weight: 400;
  color: var(--white);
  line-height: 73.4px;
  white-space: nowrap;
`;

const FilmInfo = styled.p`
  margin-left: -451px;
  height: 19px;
  width: 187px;
  margin-top: 1px;
  font-family: var(--font-family-work_sans);
  font-weight: 400;
  color: var(--sonic-silver);
  font-size: var(--font-size-m);
  letter-spacing: 0;
  line-height: 19px;
  white-space: nowrap;
`;

const FilmAbout = styled.p`
  ${WorksansLightWhite11px}
  margin-left: -355px;
  height: 66px;
  width: 283px;
  margin-top: 14px;
  letter-spacing: 0;
  line-height: 22px;
`;

const FilmCredits = styled.p`
  ${WorksansNormalWhite10px}
  margin-left: -407px;
  height: 38px;
  width: 231px;
  margin-top: 16px;
  letter-spacing: 0;
  line-height: 19px;
`;

export default Property1heroTablet;
