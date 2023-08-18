import {
  Container, Row, Col, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem,} from 'reactstrap';




const LOGO = 'https://p7.hiclipart.com/preview/391/852/862/pokemon-go-computer-icons-poke-ball-pokemon-go.jpg';



const Header = ({onSearch}) => {
  const HandleSearch = () => {
    const searchTerm= document.getElementById("searchInput").value;
    console.log("Search term:", searchTerm);
    onSearch(searchTerm)
  }

  return (
     
    <div className='container-fluid'>
    <Navbar fixed="top" color="danger" light  expand="xs" className="border-bottom border-grey" style={{ height: 115 }}>

      <Container >
        <Row  className="position-fluid w-100 align-items-center">

          <Col className="d-none d-lg-flex justify-content-start">
            <Nav   className="mrx-auto" navbar>

              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/">
                  <img src={LOGO} alt="Logo" className="img-fluid rounded-circle" style={{ width: 36 }} />
                </NavLink>
              </NavItem>

              <NavItem  className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/">Home</NavLink>
              </NavItem>

            </Nav>
          </Col>

          <Col className="d-flex justify-content-xs-start justify-content-lg-center">
            <NavbarBrand className="d-inline-block p-0" href="/" style={{ width: 80 }}>
              
            </NavbarBrand>
          </Col>

          <Col className=" d-none d-lg-flex justify-content-end">
            
              <Input id="searchInput" type="text"  className=" m-1" placeholder="Who's that Pokemon?!" /> 
              <Button onClick={HandleSearch} className="m-1" type="submit"  color="primary" >Search</Button>
            
          </Col>

        </Row>
      </Container>

    </Navbar>
 </div>
  )
}


export default Header;
