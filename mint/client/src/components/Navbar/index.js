import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsFillCartFill } from "react-icons/bs";

function Naviagation() {
  return (
    <Navbar
      // expand="lg"
      style={{
        backgroundColor: "rgb(204, 221, 224)",
        height: "150px",
        fontSize: "20px",
        color: "white",
      }}
    >
      <Nav className="navbar">
      <Navbar sticky="top" />
      <Container>
        <Navbar.Brand to="/Home">Mint</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Antiques</NavDropdown.Item>
              <NavDropdown.Item href="#">Vinyl Records</NavDropdown.Item>
              <NavDropdown.Item href="#">Comic Books</NavDropdown.Item>
              <NavDropdown.Item href="#">Vintage Clothes</NavDropdown.Item>
              <NavDropdown.Item href="#">Trading Cards</NavDropdown.Item>
              <NavDropdown.Item href="#">Toys and Figurines</NavDropdown.Item>
              <NavDropdown.Item href="#">Stamps</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link to="/createListing">Create Listing</Nav.Link>
            <Nav.Link to="MyListings">My Listings</Nav.Link>
            <Nav.Link to="WishList">Wish List</Nav.Link>
            <Nav.Link to="#">
              Cart <BsFillCartFill />
            </Nav.Link>
        {/* </Navbar.Collapse> */}
      </Container>
      </Nav>

    </Navbar>
  );
}

export default Naviagation;
