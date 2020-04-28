import React from "react";
import { slide as Menu } from "react-burger-menu";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default (props) => {
  return (
    <Menu {...props}>
      <AnchorLink offset={() => 200} href="#page-wrap">
        Início
      </AnchorLink>
      <AnchorLink offset={() => 200} href="#sobre">
        Sobre
      </AnchorLink>
      <AnchorLink offset={() => 200} href="#jobs">
        Jobs
      </AnchorLink>
      <AnchorLink offset={() => 200} href="#contato">
        Contato
      </AnchorLink>
    </Menu>
  );
};
