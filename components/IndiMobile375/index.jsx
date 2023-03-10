import React from "react";
import Property1heroMobile from "../Property1heroMobile";
import Property1filmGridMobile from "../Property1filmGridMobile";
import Property1containerPromoMobile from "../Property1containerPromoMobile";
import MenuMobile from "../MenuMobile";
import styled from "styled-components";
import "./IndiMobile375.css";

function IndiMobile375(props) {
  const {
    property1heroMobileProps,
    property1filmGridMobile1Props,
    property1filmGridMobile2Props,
    property1containerPromoMobileProps,
  } = props;

  return (
    <div className="indi-mobile-375 screen">
      <Content>
        <MainContent>
          <Property1heroMobile
            filmPreview={property1heroMobileProps.filmPreview}
            indiLogo={property1heroMobileProps.indiLogo}
            title={property1heroMobileProps.title}
            filmInfo={property1heroMobileProps.filmInfo}
            filmAbout={property1heroMobileProps.filmAbout}
            filmCredits={property1heroMobileProps.filmCredits}
            property1btnWatchMobileProps={property1heroMobileProps.property1btnWatchMobileProps}
          />
          <Property1filmGridMobile {...property1filmGridMobile1Props} />
          <Property1filmGridMobile {...property1filmGridMobile2Props} />
        </MainContent>
        <Property1containerPromoMobile
          containerPromotion={property1containerPromoMobileProps.containerPromotion}
          title={property1containerPromoMobileProps.title}
          paragraph={property1containerPromoMobileProps.paragraph}
          inputType={property1containerPromoMobileProps.inputType}
          inputPlaceholder={property1containerPromoMobileProps.inputPlaceholder}
        />
      </Content>
      <MenuMobile />
    </div>
  );
}

const Content = styled.div`
  z-index: 1;
  height: 2343px;
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 92px;
`;

const MainContent = styled.div`
  flex: 1;
  max-height: 1946px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export default IndiMobile375;
