import React from "react";
import FilmThumbDesktop from "../FilmThumbDesktop";
import styled from "styled-components";
import { WorksansMediumWhite20px } from "../../styledMixins";


function Property1filmGridDesktop(props) {
  const {
    sectionTitle,
    className,
    filmThumbDesktop1Props,
    filmThumbDesktop2Props,
    filmThumbDesktop3Props,
    filmThumbDesktop4Props,
    filmThumbDesktop5Props,
    filmThumbDesktop6Props,
    filmThumbDesktop7Props,
    filmThumbDesktop8Props,
    filmThumbDesktop9Props,
    filmThumbDesktop10Props,
    filmThumbDesktop11Props,
    filmThumbDesktop12Props,
  } = props;

  return (
    <ContainerFilms1 className={`container-films-1-1 ${className || ""}`}>
      <SectionTitle className="section-title">{sectionTitle}</SectionTitle>
      <FlexRow className="flex-row-1">
        <FilmThumbContainer className="film-thumb-container-3">
          <FilmThumbDesktop src={filmThumbDesktop1Props.src} />
          <FilmThumbDesktop src={filmThumbDesktop2Props.src} />
        </FilmThumbContainer>
        <FilmThumbContainer1 className="film-thumb-container-4">
          <FilmThumbDesktop src={filmThumbDesktop3Props.src} />
          <FilmThumbDesktop src={filmThumbDesktop4Props.src} />
        </FilmThumbContainer1>
        <FilmThumbContainer1 className="film-thumb-container-5">
          <FilmThumbDesktop src={filmThumbDesktop5Props.src} />
          <FilmThumbDesktop src={filmThumbDesktop6Props.src} />
        </FilmThumbContainer1>
        <FilmThumbContainer1 className="film-thumb-container-6">
          <FilmThumbDesktop src={filmThumbDesktop7Props.src} />
          <FilmThumbDesktop src={filmThumbDesktop8Props.src} />
        </FilmThumbContainer1>
        <FilmThumbContainer1 className="film-thumb-container-7">
          <FilmThumbDesktop src={filmThumbDesktop9Props.src} />
          <FilmThumbDesktop src={filmThumbDesktop10Props.src} />
        </FilmThumbContainer1>
        <FilmThumbContainer2 className="film-thumb-container-8">
          <FilmThumbDesktop src={filmThumbDesktop11Props.src} />
          <FilmThumbDesktop src={filmThumbDesktop12Props.src} />
        </FilmThumbContainer2>
      </FlexRow>
    </ContainerFilms1>
  );
}

const ContainerFilms1 = styled.div`
  margin-left: 49px;
  margin-right: 50px;
  flex: 1;
  max-height: 715px;
  display: flex;
  flex-direction: column;
  padding: 0.5px 0;
  align-items: flex-start;
  min-height: 715px;
`;

const SectionTitle = styled.div`
  ${WorksansMediumWhite20px}
  width: 1232px;
  min-height: 58px;
  margin-top: 80px;
  letter-spacing: 0;
  line-height: 22px;
`;

const FlexRow = styled.div`
  height: 575px;
  display: flex;
  align-items: flex-start;
  min-width: 1231px;
`;

const FilmThumbContainer = styled.div`
  width: 190px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 575px;
  gap: 15px;
`;

const FilmThumbContainer1 = styled.div`
  width: 190px;
  position: relative;
  margin-left: 18px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 575px;
  gap: 15px;
`;

const FilmThumbContainer2 = styled.div`
  width: 190px;
  position: relative;
  margin-left: 19px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 575px;
  gap: 15px;
`;

const ContainerFilms11 = styled.div`
  .container-films-1-1 & {
    margin-left: 48px;
    margin-right: 51px;
  }
`;

export default Property1filmGridDesktop;
