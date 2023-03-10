import React from "react";
import IconTablet from "../IconTablet";
import styled from "styled-components";


function MenuTablet() {
  return (
    <SidebarMenu>
      <IndiLogo src="/img/indi-logo-2@2x.png" alt="indi-logo" />
      <IconTablet iconId="1" />
      <IconTablet iconId="2" className="menu-ico-tablet-1" />
      <IconTablet iconId="3" className="menu-ico-tablet-2" />
      <IconTablet iconId="4" />
    </SidebarMenu>
  );
}

const SidebarMenu = styled.div`
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  width: 64px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--licorice);
`;

const IndiLogo = styled.img`
  margin-left: 1px;
  height: 25px;
  width: 31px;
  margin-top: 19px;
`;

export default MenuTablet;
