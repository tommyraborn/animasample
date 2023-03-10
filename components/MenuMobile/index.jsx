import React from "react";
import IconSmall from "../IconSmall";
import styled from "styled-components";


function MenuMobile() {
  return (
    <SidebarMenu>
      <BottomMenuIcons>
        <IconSmall iconId="1" />
        <IconSmall iconId="2" className="menu-ico-mobile-1" />
        <IconSmall iconId="3" className="menu-ico-mobile-2" />
        <IconSmall iconId="4" className="menu-ico-mobile-3" />
      </BottomMenuIcons>
    </SidebarMenu>
  );
}

const SidebarMenu = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  height: 53px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--licorice);
`;

const BottomMenuIcons = styled.div`
  margin-top: -1px;
  height: 40px;
  width: 323px;
  position: relative;
  display: flex;
`;

export default MenuMobile;
