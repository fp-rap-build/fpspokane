import "./Navbar.css";

import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

import React, { useState } from "react";
import logo from "../../../images/familypromiselogo.png";
import { navigate } from "gatsby";

function Navigation() {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  return (
    <>
      <Navbar expand="lg" style={{ margin: 0 }} id="for-shadow">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={logo} style={{ maxWidth: "200px", height: "auto" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="justify-content-end"
              style={{ width: "100%" }}
              navbarScroll
            >
              <NavDropdown
                className="ml-auto"
                title="Who We Are"
                id="navbarScrollingDropdown"
                renderMenuOnMount
                onClick={() => navigate("/whoweare")}
              >
                <NavDropdown.Item
                  className="dropdown-menu-to-hide"
                  href="/mission"
                >
                  MISSION & VISION
                </NavDropdown.Item>
                <NavDropdown.Item href="/core-values">
                  CORE VALUES
                </NavDropdown.Item>
                <NavDropdown.Item href="/history">HISTORY</NavDropdown.Item>
                <NavDropdown.Item href="/staff">STAFF</NavDropdown.Item>
                <NavDropdown.Item href="/board">BOARD</NavDropdown.Item>
                <NavDropdown.Item href="/financials">
                  FINANCIALS
                </NavDropdown.Item>
                <NavDropdown.Item href="/communitypartners">
                  COMMUNITY PARTNERS
                </NavDropdown.Item>
                <NavDropdown.Item href="/stories">STORIES</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="What We Do"
                id="navbarScrollingDropdown"
                renderMenuOnMount
                onClick={() => navigate("/whatwedo")}
              >
                <NavDropdown.Item href="/needHelp">NEED HELP?</NavDropdown.Item>
                <NavDropdown.Item href="/prevent">PREVENT</NavDropdown.Item>
                <NavDropdown.Item href="/hap">
                  HOUSING ASSISTANCE
                </NavDropdown.Item>

                <NavDropdown.Item href="/provide">PROVIDE</NavDropdown.Item>

                <NavDropdown.Item href="/prepare">PREPARE</NavDropdown.Item>

                <NavDropdown.Item href="/covid19response">
                  COVID 19 RESPONSE
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Ways To Give"
                id="navbarScrollingDropdown"
                renderMenuOnMount
                onClick={() => navigate("/give")}
              >
                <NavDropdown.Item href="/goods-items">
                  GOODS & ITEMS
                </NavDropdown.Item>
                <NavDropdown.Item href="/learn">LEARN MORE</NavDropdown.Item>
                <NavDropdown.Item href="/volunteer">VOLUNTEER</NavDropdown.Item>

                <NavDropdown.Item href="/internships">
                  INTERNSHIPS
                </NavDropdown.Item>
                <NavDropdown.Item href="/careers">CAREERS</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                renderMenuOnMount
                title="Events"
                id="navbarScrollingDropdown"
                onClick={() => navigate("/events")}
              >
                <NavDropdown.Item href="/ungala">UnGala 2022</NavDropdown.Item>
                <NavDropdown.Item href="/nightwithoutabed">
                  Night w/o A Bed
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/donate">DONATE</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
