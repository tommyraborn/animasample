
import { css } from "styled-components";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import IndiMobile375 from "./components/IndiMobile375";
import IndiDesktop1440 from "./components/IndiDesktop1440";
import IndiTablet768 from "./components/IndiTablet768";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/indi-mobile-375">
          <IndiMobile375
            property1heroMobileProps={indiMobile375Data.property1heroMobileProps}
            property1filmGridMobile1Props={indiMobile375Data.property1filmGridMobile1Props}
            property1filmGridMobile2Props={indiMobile375Data.property1filmGridMobile2Props}
            property1containerPromoMobileProps={indiMobile375Data.property1containerPromoMobileProps}
          />
        </Route>
        <Route path="/:path(|indi-desktop-1440)">
          <IndiDesktop1440
            property1heroDesktopProps={indiDesktop1440Data.property1heroDesktopProps}
            property1filmGridDesktop1Props={indiDesktop1440Data.property1filmGridDesktop1Props}
            property1filmGridDesktop2Props={indiDesktop1440Data.property1filmGridDesktop2Props}
            property1containerPromoDesktopProps={indiDesktop1440Data.property1containerPromoDesktopProps}
          />
        </Route>
        <Route path="/indi-tablet-768">
          <IndiTablet768
            property1heroTabletProps={indiTablet768Data.property1heroTabletProps}
            filmGridTablet1Props={indiTablet768Data.filmGridTablet1Props}
            filmGridTablet2Props={indiTablet768Data.filmGridTablet2Props}
            property1containerPromoTabletProps={indiTablet768Data.property1containerPromoTabletProps}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const property1btnWatchMobileData = {
    btnWatch: "/img/btn-watch@2x.png",
    watchNow: "Watch Now",
};

const property1heroMobileData = {
    filmPreview: "https://cdn.animaapp.com/projects/6202849b5e1915b58277544f/files/trailer-m-1-cut-1.webp",
    indiLogo: "/img/indi-logo@2x.png",
    title: "SAM AWAY",
    filmInfo: "Adventure, Fantasy  |  2019  |  136 Min.",
    filmAbout: <React.Fragment>When a tornado hits through City of Peaceville,<br />Samantha (Jenny Loifer) and her dog, Ricko, <br />are whisked away in their house to an amazing journey.</React.Fragment>,
    filmCredits: <React.Fragment>Director: Todd Burns<br />Cast: Jenny Loifer, Sarah Obrien, Larry Moss Jr.</React.Fragment>,
    property1btnWatchMobileProps: property1btnWatchMobileData,
};

const filmThumbMobile1Data = {
    src: "/img/film-thumb@2x.png",
};

const filmThumbMobile2Data = {
    src: "/img/film-thumb-1@2x.png",
};

const filmThumbMobile3Data = {
    src: "/img/film-thumb-6@2x.png",
};

const filmThumbMobile4Data = {
    src: "/img/film-thumb-7@2x.png",
};

const filmThumbMobile5Data = {
    src: "/img/film-thumb-2@2x.png",
    className: "film-thumb-2",
};

const filmThumbMobile6Data = {
    src: "/img/film-thumb-3@2x.png",
    className: "film-thumb-3",
};

const filmThumbMobile7Data = {
    src: "/img/film-thumb-8@2x.png",
};

const filmThumbMobile8Data = {
    src: "/img/film-thumb-10@2x.png",
};

const filmThumbMobile9Data = {
    src: "/img/film-thumb-4@2x.png",
};

const filmThumbMobile10Data = {
    src: "/img/film-thumb-5@2x.png",
};

const filmThumbMobile11Data = {
    src: "/img/film-thumb-9@2x.png",
    className: "film-thumb-4",
};

const filmThumbMobile12Data = {
    src: "/img/film-thumb-11@2x.png",
    className: "film-thumb-5",
};

const property1filmGridMobile1Data = {
    title: "Recently Added Films",
    filmThumbMobile1Props: filmThumbMobile1Data,
    filmThumbMobile2Props: filmThumbMobile2Data,
    filmThumbMobile3Props: filmThumbMobile3Data,
    filmThumbMobile4Props: filmThumbMobile4Data,
    filmThumbMobile5Props: filmThumbMobile5Data,
    filmThumbMobile6Props: filmThumbMobile6Data,
    filmThumbMobile7Props: filmThumbMobile7Data,
    filmThumbMobile8Props: filmThumbMobile8Data,
    filmThumbMobile9Props: filmThumbMobile9Data,
    filmThumbMobile10Props: filmThumbMobile10Data,
    filmThumbMobile11Props: filmThumbMobile11Data,
    filmThumbMobile12Props: filmThumbMobile12Data,
};

const filmThumbMobile13Data = {
    src: "/img/film-thumb-12@2x.png",
};

const filmThumbMobile14Data = {
    src: "/img/film-thumb-13@2x.png",
};

const filmThumbMobile15Data = {
    src: "/img/film-thumb-18@2x.png",
};

const filmThumbMobile16Data = {
    src: "/img/film-thumb-19@2x.png",
};

const filmThumbMobile17Data = {
    src: "/img/film-thumb-14@2x.png",
    className: "film-thumb-6",
};

const filmThumbMobile18Data = {
    src: "/img/film-thumb-15@2x.png",
    className: "film-thumb-7",
};

const filmThumbMobile19Data = {
    src: "/img/film-thumb-20@2x.png",
};

const filmThumbMobile20Data = {
    src: "/img/film-thumb-22@2x.png",
};

const filmThumbMobile21Data = {
    src: "/img/film-thumb-16@2x.png",
};

const filmThumbMobile22Data = {
    src: "/img/film-thumb-17@2x.png",
};

const filmThumbMobile23Data = {
    src: "/img/film-thumb-21@2x.png",
    className: "film-thumb-8",
};

const filmThumbMobile24Data = {
    src: "/img/film-thumb-23@2x.png",
    className: "film-thumb-9",
};

const property1filmGridMobile2Data = {
    title: "Top Rated Films",
    filmThumbMobile1Props: filmThumbMobile13Data,
    filmThumbMobile2Props: filmThumbMobile14Data,
    filmThumbMobile3Props: filmThumbMobile15Data,
    filmThumbMobile4Props: filmThumbMobile16Data,
    filmThumbMobile5Props: filmThumbMobile17Data,
    filmThumbMobile6Props: filmThumbMobile18Data,
    filmThumbMobile7Props: filmThumbMobile19Data,
    filmThumbMobile8Props: filmThumbMobile20Data,
    filmThumbMobile9Props: filmThumbMobile21Data,
    filmThumbMobile10Props: filmThumbMobile22Data,
    filmThumbMobile11Props: filmThumbMobile23Data,
    filmThumbMobile12Props: filmThumbMobile24Data,
};

const property1containerPromoMobileData = {
    containerPromotion: "https://media.giphy.com/media/l6mBchxYZc7Sw/giphy.gif",
    title: "Stay Connected",
    paragraph: <React.Fragment>From cult classics to modern masterpieces.<br />Stay updated with the latest movies, news and articles from INDI.</React.Fragment>,
    inputType: "email",
    inputPlaceholder: "Your Email",
};

const indiMobile375Data = {
    property1heroMobileProps: property1heroMobileData,
    property1filmGridMobile1Props: property1filmGridMobile1Data,
    property1filmGridMobile2Props: property1filmGridMobile2Data,
    property1containerPromoMobileProps: property1containerPromoMobileData,
};

const property1btnWatchDesktopData = {
    btnWatch: "/img/btn-watch-1@2x.png",
    watchNow: "Watch Now",
};

const property1heroDesktopData = {
    heroContainer: "https://cdn.animaapp.com/projects/6202849b5e1915b58277544f/files/trailer-m-1-cut-1.webp",
    mainTitle: "SAM AWAY",
    filmInfo: "Adventure, Fantasy  |  2019  |  136 Min.",
    filmAbout: <React.Fragment>When a tornado hits through City of Peaceville,<br />Samantha (Jenny Loifer) and her dog, Ricko, <br />are whisked away in their house to an amazing journey.</React.Fragment>,
    filmCredits: <React.Fragment>Director: Todd Burns<br />Cast: Jenny Loifer, Sarah Obrien, Larry Moss Jr.</React.Fragment>,
    property1btnWatchDesktopProps: property1btnWatchDesktopData,
};

const filmThumbDesktop1Data = {
    src: "/img/film-thumb-36@2x.png",
};

const filmThumbDesktop2Data = {
    src: "/img/film-thumb-37@2x.png",
};

const filmThumbDesktop3Data = {
    src: "/img/film-thumb-38@2x.png",
};

const filmThumbDesktop4Data = {
    src: "/img/film-thumb-39@2x.png",
};

const filmThumbDesktop5Data = {
    src: "/img/film-thumb-40@2x.png",
};

const filmThumbDesktop6Data = {
    src: "/img/film-thumb-41@2x.png",
};

const filmThumbDesktop7Data = {
    src: "/img/film-thumb-42@2x.png",
};

const filmThumbDesktop8Data = {
    src: "/img/film-thumb-43@2x.png",
};

const filmThumbDesktop9Data = {
    src: "/img/film-thumb-44@2x.png",
};

const filmThumbDesktop10Data = {
    src: "/img/film-thumb-46@2x.png",
};

const filmThumbDesktop11Data = {
    src: "/img/film-thumb-45@2x.png",
};

const filmThumbDesktop12Data = {
    src: "/img/film-thumb-47@2x.png",
};

const property1filmGridDesktop1Data = {
    sectionTitle: "Recently Added Films",
    filmThumbDesktop1Props: filmThumbDesktop1Data,
    filmThumbDesktop2Props: filmThumbDesktop2Data,
    filmThumbDesktop3Props: filmThumbDesktop3Data,
    filmThumbDesktop4Props: filmThumbDesktop4Data,
    filmThumbDesktop5Props: filmThumbDesktop5Data,
    filmThumbDesktop6Props: filmThumbDesktop6Data,
    filmThumbDesktop7Props: filmThumbDesktop7Data,
    filmThumbDesktop8Props: filmThumbDesktop8Data,
    filmThumbDesktop9Props: filmThumbDesktop9Data,
    filmThumbDesktop10Props: filmThumbDesktop10Data,
    filmThumbDesktop11Props: filmThumbDesktop11Data,
    filmThumbDesktop12Props: filmThumbDesktop12Data,
};

const filmThumbDesktop13Data = {
    src: "/img/film-thumb-24@2x.png",
};

const filmThumbDesktop14Data = {
    src: "/img/film-thumb-25@2x.png",
};

const filmThumbDesktop15Data = {
    src: "/img/film-thumb-26@2x.png",
};

const filmThumbDesktop16Data = {
    src: "/img/film-thumb-27@2x.png",
};

const filmThumbDesktop17Data = {
    src: "/img/film-thumb-28@2x.png",
};

const filmThumbDesktop18Data = {
    src: "/img/film-thumb-29@2x.png",
};

const filmThumbDesktop19Data = {
    src: "/img/film-thumb-30@2x.png",
};

const filmThumbDesktop20Data = {
    src: "/img/film-thumb-31@2x.png",
};

const filmThumbDesktop21Data = {
    src: "/img/film-thumb-32@2x.png",
};

const filmThumbDesktop22Data = {
    src: "/img/film-thumb-34@2x.png",
};

const filmThumbDesktop23Data = {
    src: "/img/film-thumb-33@2x.png",
};

const filmThumbDesktop24Data = {
    src: "/img/film-thumb-35@2x.png",
};

const property1filmGridDesktop2Data = {
    sectionTitle: "Top Rated Films",
    className: "container-films-1-2",
    filmThumbDesktop1Props: filmThumbDesktop13Data,
    filmThumbDesktop2Props: filmThumbDesktop14Data,
    filmThumbDesktop3Props: filmThumbDesktop15Data,
    filmThumbDesktop4Props: filmThumbDesktop16Data,
    filmThumbDesktop5Props: filmThumbDesktop17Data,
    filmThumbDesktop6Props: filmThumbDesktop18Data,
    filmThumbDesktop7Props: filmThumbDesktop19Data,
    filmThumbDesktop8Props: filmThumbDesktop20Data,
    filmThumbDesktop9Props: filmThumbDesktop21Data,
    filmThumbDesktop10Props: filmThumbDesktop22Data,
    filmThumbDesktop11Props: filmThumbDesktop23Data,
    filmThumbDesktop12Props: filmThumbDesktop24Data,
};

const property1btnSubmitDesktop2Data = {
    className: "btn-submit-1",
};

const property1containerPromoDesktopData = {
    title: "Stay Connected",
    paragraph: <React.Fragment>From cult classics to modern masterpieces.<br />Stay updated with the latest movies, news and articles from INDI.</React.Fragment>,
    inputType: "email",
    inputPlaceholder: "Your Email",
    gifCinema: "https://media.giphy.com/media/l6mBchxYZc7Sw/giphy.gif",
    property1btnSubmitDesktopProps: property1btnSubmitDesktop2Data,
};

const indiDesktop1440Data = {
    property1heroDesktopProps: property1heroDesktopData,
    property1filmGridDesktop1Props: property1filmGridDesktop1Data,
    property1filmGridDesktop2Props: property1filmGridDesktop2Data,
    property1containerPromoDesktopProps: property1containerPromoDesktopData,
};

const property1btnWatchTabletData = {
    btnWatch: "/img/btn-watch-2@2x.png",
    watchNow: "Watch Now",
};

const property1heroTabletData = {
    heroContainer: "https://cdn.animaapp.com/projects/6202849b5e1915b58277544f/files/trailer-m-1-cut-1.webp",
    title: "SAM AWAY",
    filmInfo: "Adventure, Fantasy  |  2019  |  136 Min.",
    filmAbout: <React.Fragment>When a tornado hits through City of Peaceville,<br />Samantha (Jenny Loifer) and her dog, Ricko, <br />are whisked away in their house to an amazing journey.</React.Fragment>,
    filmCredits: <React.Fragment>Director: Todd Burns<br />Cast: Jenny Loifer, Sarah Obrien, Larry Moss Jr.</React.Fragment>,
    property1btnWatchTabletProps: property1btnWatchTabletData,
};

const filmThumbTablet1Data = {
    src: "/img/film-thumb-48@2x.png",
};

const filmThumbTablet2Data = {
    src: "/img/film-thumb-49@2x.png",
    className: "film-thumb-12",
};

const filmThumbTablet3Data = {
    src: "/img/film-thumb-50@2x.png",
    className: "film-thumb-13",
};

const filmThumbTablet4Data = {
    src: "/img/film-thumb-51@2x.png",
    className: "film-thumb-14",
};

const filmThumbTablet5Data = {
    src: "/img/film-thumb-52@2x.png",
};

const filmThumbTablet6Data = {
    src: "/img/film-thumb-53@2x.png",
    className: "film-thumb-15",
};

const filmThumbTablet7Data = {
    src: "/img/film-thumb-54@2x.png",
    className: "film-thumb-16",
};

const filmThumbTablet8Data = {
    src: "/img/film-thumb-55@2x.png",
    className: "film-thumb-17",
};

const filmThumbTablet9Data = {
    src: "/img/film-thumb-56@2x.png",
    className: "film-thumb-18",
};

const filmThumbTablet10Data = {
    src: "/img/film-thumb-57@2x.png",
    className: "film-thumb-19",
};

const filmThumbTablet11Data = {
    src: "/img/film-thumb-58@2x.png",
    className: "film-thumb-20",
};

const filmThumbTablet12Data = {
    src: "/img/film-thumb-59@2x.png",
    className: "film-thumb-21",
};

const filmGridTablet1Data = {
    sectionTitle: "Recently Added Films",
    rowProps: filmThumbTablet1Data,
    rowProps2: filmThumbTablet2Data,
    rowProps3: filmThumbTablet3Data,
    rowProps4: filmThumbTablet4Data,
    rowProps5: filmThumbTablet5Data,
    rowProps6: filmThumbTablet6Data,
    rowProps7: filmThumbTablet7Data,
    rowProps8: filmThumbTablet8Data,
    rowProps9: filmThumbTablet9Data,
    rowProps10: filmThumbTablet10Data,
    rowProps11: filmThumbTablet11Data,
    rowProps12: filmThumbTablet12Data,
};

const filmThumbTablet13Data = {
    src: "/img/film-thumb-60@2x.png",
};

const filmThumbTablet14Data = {
    src: "/img/film-thumb-61@2x.png",
    className: "film-thumb-22",
};

const filmThumbTablet15Data = {
    src: "/img/film-thumb-62@2x.png",
    className: "film-thumb-23",
};

const filmThumbTablet16Data = {
    src: "/img/film-thumb-63@2x.png",
    className: "film-thumb-24",
};

const filmThumbTablet17Data = {
    src: "/img/film-thumb-64@2x.png",
};

const filmThumbTablet18Data = {
    src: "/img/film-thumb-65@2x.png",
    className: "film-thumb-25",
};

const filmThumbTablet19Data = {
    src: "/img/film-thumb-66@2x.png",
    className: "film-thumb-26",
};

const filmThumbTablet20Data = {
    src: "/img/film-thumb-67@2x.png",
    className: "film-thumb-27",
};

const filmThumbTablet21Data = {
    src: "/img/film-thumb-68@2x.png",
    className: "film-thumb-28",
};

const filmThumbTablet22Data = {
    src: "/img/film-thumb-69@2x.png",
    className: "film-thumb-29",
};

const filmThumbTablet23Data = {
    src: "/img/film-thumb-70@2x.png",
    className: "film-thumb-30",
};

const filmThumbTablet24Data = {
    src: "/img/film-thumb-71@2x.png",
    className: "film-thumb-31",
};

const filmGridTablet2Data = {
    sectionTitle: "Top Rated Films",
    rowProps: filmThumbTablet13Data,
    rowProps2: filmThumbTablet14Data,
    rowProps3: filmThumbTablet15Data,
    rowProps4: filmThumbTablet16Data,
    rowProps5: filmThumbTablet17Data,
    rowProps6: filmThumbTablet18Data,
    rowProps7: filmThumbTablet19Data,
    rowProps8: filmThumbTablet20Data,
    rowProps9: filmThumbTablet21Data,
    rowProps10: filmThumbTablet22Data,
    rowProps11: filmThumbTablet23Data,
    rowProps12: filmThumbTablet24Data,
};

const property1btnSubmitDesktop3Data = {
    className: "btn-submit-2",
};

const property1containerPromoTabletData = {
    title: "Stay Connected",
    paragraph: <React.Fragment>From cult classics to modern masterpieces.<br />Stay updated with the latest movies, news and articles from INDI.</React.Fragment>,
    inputType: "email",
    inputPlaceholder: "Your Email",
    gifCinema: "https://media.giphy.com/media/l6mBchxYZc7Sw/giphy.gif",
    property1btnSubmitDesktopProps: property1btnSubmitDesktop3Data,
};

const indiTablet768Data = {
    property1heroTabletProps: property1heroTabletData,
    filmGridTablet1Props: filmGridTablet1Data,
    filmGridTablet2Props: filmGridTablet2Data,
    property1containerPromoTabletProps: property1containerPromoTabletData,
};

