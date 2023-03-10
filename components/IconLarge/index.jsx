import React from "react";
import styled from "styled-components";
import { IconsPackRegularNormalWhite17px, ValignTextMiddle } from "../../styledMixins";


function IconLarge(props) {
  const { iconId, className } = props;

  return (
    <MenuIcoDesktop className={`menu-ico-desktop ${className || ""}`}>
      <SearchIcon className="search-icon">{iconId}</SearchIcon>
    </MenuIcoDesktop>
  );
}

const MenuIcoDesktop = styled.div`
  height: 41px;
  width: 41px;
  margin-top: 25.5px;
  display: flex;
`;

const SearchIcon = styled.div`
  ${ValignTextMiddle}
  ${IconsPackRegularNormalWhite17px}
            margin-top: 12px;
  width: 18px;
  height: 17px;
  margin-left: 11px;
  transition: all 0.2s ease;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;

  &:hover {
    color: #ff4e4e;
  }
`;

const MenuIcoDesktop1 = styled.div`
  .menu-ico-desktop & {
    margin-top: 26px;
  }
`;

const MenuIcoDesktop2 = styled.div`
  .menu-ico-desktop & {
    margin-top: 27px;
  }
`;

export default IconLarge;
