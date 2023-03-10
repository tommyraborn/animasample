import React from "react";
import FilmThumbTablet from "../FilmThumbTablet";
import styled from "styled-components";
import { WorksansMediumWhite17px } from "../../styledMixins";


function FilmGridTablet(props) {
  const {
    sectionTitle,
    rowProps,
    rowProps2,
    rowProps3,
    rowProps4,
    rowProps5,
    rowProps6,
    rowProps7,
    rowProps8,
    rowProps9,
    rowProps10,
    rowProps11,
    rowProps12,
  } = props;

  return (
    <ContainerFilms1>
      <SectionTitle>{sectionTitle}</SectionTitle>
      <Row>
        <FilmThumbTablet src={rowProps.src} />
        <FilmThumbTablet src={rowProps2.src} className={rowProps2.className} />
        <FilmThumbTablet src={rowProps3.src} className={rowProps3.className} />
        <FilmThumbTablet src={rowProps4.src} className={rowProps4.className} />
      </Row>
      <Row1>
        <FilmThumbTablet src={rowProps5.src} />
        <FilmThumbTablet src={rowProps6.src} className={rowProps6.className} />
        <FilmThumbTablet src={rowProps7.src} className={rowProps7.className} />
        <FilmThumbTablet src={rowProps8.src} className={rowProps8.className} />
      </Row1>
      <Row1>
        <FilmThumbTablet src={rowProps9.src} className={rowProps9.className} />
        <FilmThumbTablet src={rowProps10.src} className={rowProps10.className} />
        <FilmThumbTablet src={rowProps11.src} className={rowProps11.className} />
        <FilmThumbTablet src={rowProps12.src} className={rowProps12.className} />
      </Row1>
    </ContainerFilms1>
  );
}

const ContainerFilms1 = styled.div`
  margin-left: -32px;
  width: 606px;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 762px;
`;

const SectionTitle = styled.div`
  ${WorksansMediumWhite17px}
  width: 606px;
  min-height: 49px;
  margin-top: 59px;
  letter-spacing: 0;
  line-height: 22px;
`;

const Row = styled.div`
  height: 208px;
  position: relative;
  display: flex;
  align-items: flex-start;
  min-width: 606px;
`;

const Row1 = styled.div`
  height: 208px;
  position: relative;
  margin-top: 15px;
  display: flex;
  align-items: flex-start;
  min-width: 606px;
`;

export default FilmGridTablet;
