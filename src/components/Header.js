

import {
  Container, Row, Col, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, //UncontrolledDropdown,
  //DropdownToggle, //DropdownMenu, //DropdownItem
} from 'reactstrap';

const AVATAR = 'https://p7.hiclipart.com/preview/391/852/862/pokemon-go-computer-icons-poke-ball-pokemon-go.jpg';

const Header = () => (
  <header>
    <Navbar fixed="top" color="danger" dark expand="xs" className="border-bottom border-grey" style={{ height: 80 }}>

      <Container>
        <Row noGutters className="position-relative w-100 align-items-center">

          <Col className="d-none d-lg-flex justify-content-start">
            <Nav className="mrx-auto" navbar>

              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/">
                  <img src={AVATAR} alt="avatar" className="img-fluid rounded-circle" style={{ width: 36 }} />
                </NavLink>
              </NavItem>

              <NavItem  className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/">Home</NavLink>
              </NavItem>

              
              {/* <UncontrolledDropdown className="d-flex align-items-center" nav inNavbar>
                <DropdownToggle className="font-weight-bold" nav caret>Learn</DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem className="font-weight-bold text-secondary text-uppercase" header disabled>Learn React</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Documentation</DropdownItem>
                  <DropdownItem>Tutorials</DropdownItem>
                  <DropdownItem>Courses</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */
              } 

            </Nav>
          </Col>

          <Col className="d-flex justify-content-xs-start justify-content-lg-center">
            <NavbarBrand className="d-inline-block p-0" href="/" style={{ width: 80 }}>
              
            </NavbarBrand>
          </Col>

          <Col className="d-none d-lg-flex justify-content-end">
            
              <Input type="search" className="mr-3" placeholder="Who's that Pokemon?!" />
              <Button type="submit"  color="primary" >Search</Button>
            
          </Col>

        </Row>
      </Container>

    </Navbar>
  </header>
);

export default Header;