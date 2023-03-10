import React from "react";
import Property1heroTablet from "../Property1heroTablet";
import FilmGridTablet from "../FilmGridTablet";
import MenuTablet from "../MenuTablet";
import Property1containerPromoTablet from "../Property1containerPromoTablet";
import styled from "styled-components";
import "./IndiTablet768.css";

function IndiTablet768(props) {
  const {
    property1heroTabletProps,
    filmGridTablet1Props,
    filmGridTablet2Props,
    property1containerPromoTabletProps,
  } = props;

  return (
    <div className="indi-tablet-768 screen">
      <Content>
        <Property1heroTablet
          heroContainer={property1heroTabletProps.heroContainer}
          title={property1heroTabletProps.title}
          filmInfo={property1heroTabletProps.filmInfo}
          filmAbout={property1heroTabletProps.filmAbout}
          filmCredits={property1heroTabletProps.filmCredits}
          property1btnWatchTabletProps={property1heroTabletProps.property1btnWatchTabletProps}
        />
        <FilmGridTablet {...filmGridTablet1Props} />
        <FilmGridTablet {...filmGridTablet2Props} />
      </Content>
      <MenuTablet />
      <Property1containerPromoTablet
        title={property1containerPromoTabletProps.title}
        paragraph={property1containerPromoTabletProps.paragraph}
        inputType={property1containerPromoTabletProps.inputType}
        inputPlaceholder={property1containerPromoTabletProps.inputPlaceholder}
        gifCinema={property1containerPromoTabletProps.gifCinema}
        property1btnSubmitDesktopProps={property1containerPromoTabletProps.property1btnSubmitDesktopProps}
      />
    </div>
  );
}

const Content = styled.div`
  z-index: 1;
  margin-left: 64px;
  flex: 1;
  max-height: 1889px;
  position: relative;
  height: 1889px;
  display: flex;
  flex-direction: column;
`;

export default IndiTablet768;
