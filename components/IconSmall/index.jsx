import React from "react";
import styled from "styled-components";
import { IconsPackRegularNormalWhite18px, ValignTextMiddle } from "../../styledMixins";


function IconSmall(props) {
  const { iconId, className } = props;

  return (
    <MenuIcoMobile className={`menu-ico-mobile ${className || ""}`}>
      <FavIcon className="fav-icon">{iconId}</FavIcon>
    </MenuIcoMobile>
  );
}

const MenuIcoMobile = styled.div`
  width: 41px;
  height: 41px;
  margin-left: 0;
  display: flex;
`;

const FavIcon = styled.div`
  ${ValignTextMiddle}
  ${IconsPackRegularNormalWhite18px}
            margin-top: 11.5px;
  width: 19px;
  height: 18px;
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

const MenuIcoMobile1 = styled.div`
  .menu-ico-mobile & {
    margin-top: 0;
    margin-left: 53px;
  }
`;

const MenuIcoMobile2 = styled.div`
  .menu-ico-mobile & {
    margin-left: 54px;
  }
`;

const MenuIcoMobile3 = styled.div`
  .menu-ico-mobile & {
    margin-left: 53px;
  }
`;

export default IconSmall;
