import React from "react";
import IconLarge from "../IconLarge";
import styled from "styled-components";


function MenuDesktop() {
  return (
    <SidebarMenu>
      <IndiLogo src="/img/indi-logo-1@2x.png" alt="indi-logo" />
      <IconLarge iconId="1" />
      <IconLarge iconId="2" className="menu-ico-desktop-1" />
      <IconLarge iconId="3" className="menu-ico-desktop-2" />
      <IconLarge iconId="4" className="menu-ico-desktop-3" />
    </SidebarMenu>
  );
}

const SidebarMenu = styled.div`
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  width: 109px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--licorice);
`;

const IndiLogo = styled.img`
  margin-left: -1.5px;
  height: 31.489990234375px;
  width: 39.58740234375px;
  margin-top: 30px;
`;

export default MenuDesktop;
