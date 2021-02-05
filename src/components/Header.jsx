import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import "./style/Header.css";

const Header = ({ myName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Link to="/">
            <NavbarBrand style={{ letterSpacing: "1px" }}>{myName}</NavbarBrand>
          </Link>
          {/* <img className="photo-id" src={antho} alt="photoProfil" /> */}
        </div>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/myportfolio">
                <NavLink>My portfolio</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/resume">
                <NavLink>My resume</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/Anthony-Verges">
                My GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                My projects
              </DropdownToggle>
              <DropdownMenu right>
                <NavLink href="https://wildcodeschool.github.io/btz_p1_lux-raspi/index.html">
                  <DropdownItem>
                    Projet Raspberry Pi version "luxe"
                  </DropdownItem>
                </NavLink>
                <NavLink href="https://wildprogrammerhumor.netlify.app/">
                  <DropdownItem>Projet Wild Programmer Humor</DropdownItem>
                </NavLink>
                <NavLink href="https://github.com/Anthony-Verges/Hackathon-1">
                  <DropdownItem>Hackaton : BlaBlaCalèche</DropdownItem>
                </NavLink>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          {/* </NavLink> */}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
