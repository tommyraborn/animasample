import React from "react";
import FilmThumbMobile from "../FilmThumbMobile";
import styled from "styled-components";
import { WorksansMediumWhite16px } from "../../styledMixins";


function Property1filmGridMobile(props) {
  const {
    title,
    filmThumbMobile1Props,
    filmThumbMobile2Props,
    filmThumbMobile3Props,
    filmThumbMobile4Props,
    filmThumbMobile5Props,
    filmThumbMobile6Props,
    filmThumbMobile7Props,
    filmThumbMobile8Props,
    filmThumbMobile9Props,
    filmThumbMobile10Props,
    filmThumbMobile11Props,
    filmThumbMobile12Props,
  } = props;

  return (
    <ContainerFilms1>
      <Title>{title}</Title>
      <FlexRow>
        <FilmThumbContainer>
          <FilmThumbMobile src={filmThumbMobile1Props.src} />
          <FilmThumbMobile src={filmThumbMobile2Props.src} />
          <FilmThumbMobile src={filmThumbMobile3Props.src} />
          <FilmThumbMobile src={filmThumbMobile4Props.src} />
        </FilmThumbContainer>
        <FilmThumbContainer>
          <FilmThumbMobile src={filmThumbMobile5Props.src} className={filmThumbMobile5Props.className} />
          <FilmThumbMobile src={filmThumbMobile6Props.src} className={filmThumbMobile6Props.className} />
          <FilmThumbMobile src={filmThumbMobile7Props.src} />
          <FilmThumbMobile src={filmThumbMobile8Props.src} />
        </FilmThumbContainer>
        <FilmThumbContainer>
          <FilmThumbMobile src={filmThumbMobile9Props.src} />
          <FilmThumbMobile src={filmThumbMobile10Props.src} />
          <FilmThumbMobile src={filmThumbMobile11Props.src} className={filmThumbMobile11Props.className} />
          <FilmThumbMobile src={filmThumbMobile12Props.src} className={filmThumbMobile12Props.className} />
        </FilmThumbContainer>
      </FlexRow>
    </ContainerFilms1>
  );
}

const ContainerFilms1 = styled.div`
  width: 323px;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 706px;
`;

const Title = styled.div`
  ${WorksansMediumWhite16px}
  width: 323px;
  min-height: 49px;
  margin-top: 38px;
  letter-spacing: 0;
  line-height: 22px;
`;

const FlexRow = styled.div`
  height: 621px;
  display: flex;
  align-items: flex-start;
  min-width: 321px;
  gap: 10px;
`;

const FilmThumbContainer = styled.div`
  width: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 621px;
  gap: 7px;
`;

export default Property1filmGridMobile;
