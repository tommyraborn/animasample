import React from "react";
import Property1heroDesktop from "../Property1heroDesktop";
import Property1filmGridDesktop from "../Property1filmGridDesktop";
import MenuDesktop from "../MenuDesktop";
import Property1containerPromoDesktop from "../Property1containerPromoDesktop";
import styled from "styled-components";
import "./IndiDesktop1440.css";

function IndiDesktop1440(props) {
  const {
    property1heroDesktopProps,
    property1filmGridDesktop1Props,
    property1filmGridDesktop2Props,
    property1containerPromoDesktopProps,
  } = props;

  return (
    <div className="indi-desktop-1440 screen">
      <Group7>
        <Property1heroDesktop
          heroContainer={property1heroDesktopProps.heroContainer}
          mainTitle={property1heroDesktopProps.mainTitle}
          filmInfo={property1heroDesktopProps.filmInfo}
          filmAbout={property1heroDesktopProps.filmAbout}
          filmCredits={property1heroDesktopProps.filmCredits}
          property1btnWatchDesktopProps={property1heroDesktopProps.property1btnWatchDesktopProps}
        />
        <Property1filmGridDesktop {...property1filmGridDesktop1Props} />
        <Property1filmGridDesktop {...property1filmGridDesktop2Props} />
      </Group7>
      <MenuDesktop />
      <Property1containerPromoDesktop
        title={property1containerPromoDesktopProps.title}
        paragraph={property1containerPromoDesktopProps.paragraph}
        inputType={property1containerPromoDesktopProps.inputType}
        inputPlaceholder={property1containerPromoDesktopProps.inputPlaceholder}
        gifCinema={property1containerPromoDesktopProps.gifCinema}
        property1btnSubmitDesktopProps={property1containerPromoDesktopProps.property1btnSubmitDesktopProps}
      />
    </div>
  );
}

const Group7 = styled.div`
  z-index: 2;
  margin-left: 109px;
  flex: 1;
  max-height: 1974px;
  position: relative;
  height: 1974px;
  display: flex;
  flex-direction: column;
`;

export default IndiDesktop1440;
