import React from "react";
import styled from "styled-components";
import { IconsPackRegularNormalWhite14px, ValignTextMiddle } from "../../styledMixins";


function IconTablet(props) {
  const { iconId, className } = props;

  return (
    <MenuIcoTablet className={`menu-ico-tablet ${className || ""}`}>
      <FilmIcon className="film-icon">{iconId}</FilmIcon>
    </MenuIcoTablet>
  );
}

const MenuIcoTablet = styled.div`
  margin-left: 1px;
  height: 33px;
  width: 33px;
  margin-top: 23px;
  display: flex;
`;

const FilmIcon = styled.div`
  ${ValignTextMiddle}
  ${IconsPackRegularNormalWhite14px}
            margin-top: 9.3px;
  width: 19px;
  height: 14px;
  margin-left: 7px;
  transition: all 0.2s ease;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;

  &:hover {
    color: #ff4e4e;
  }
`;

const MenuIcoTablet1 = styled.div`
  .menu-ico-tablet & {
    margin-top: 25px;
  }
`;

const MenuIcoTablet2 = styled.div`
  .menu-ico-tablet & {
    margin-top: 24px;
  }
`;

export default IconTablet;
