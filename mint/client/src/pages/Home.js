import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Auth from '../utils/auth'

const Home = () => {
  if(Auth.loggedIn()) {
  return (
    <header class="jumbotron jumbotron-fluid">
    <div id="header" class="container">

      <div class="row ">
        <div id="img" class="col-12 col-md-6">
          <img class='img-fluid' src="images/pokemon.jpeg" alt="pokemon cards" />
        </div>
        <div id="section" class="col-12 col-md-6">
          <h1>Welcome to Mint!</h1>
          <p>Are you a collector who enjoys collecting that rare item that everyone's trying to find?
            Here at Mint you are able to buy and sell collector's items. Our categories range from 
            trading cards, comic books, antiques, to vintage clothing. Whatever collector's item you 
            are into Mint will have it for you!
          </p>
        
        </div>
      </div>
    </div>
  </header>
    );
    } else {
      <header class="jumbotron jumbotron-fluid">
      <div id="header" class="container">
  
        <div class="row ">
          <div id="img" class="col-12 col-md-6">
            <img class='img-fluid' src="images/pokemon.jpeg" alt="pokemon cards" />
          </div>
          <div id="section" class="col-12 col-md-6">
            <h1>Welcome to Mint!</h1>
            <p>Are you a collector who enjoys collecting that rare item that everyone's trying to find?
              Here at Mint you are able to buy and sell collector's items. Our categories range from 
              trading cards, comic books, antiques, to vintage clothing. Whatever collector's item you 
              are into Mint will have it for you!
            </p>
            <a href="/login" class="mt-5 btn btn-primary">Get Started!</a>
          </div>
        </div>
      </div>
    </header>
    }


};

export default Home;

{/* <Container
fluid
style={{ background: "rgb(248, 247, 245)" }}
className="-center"
>
<Row
  className=" justify-content-center"
  style={{
    color: "rgb(128, 209, 128)",
    fontSize: "50px",
    fontFamily: "fantasy",
  }}
>
  Featured Items
</Row>

<Row className="justify-content-center">
  <Card
    className="m-3 pt-3"
    style={{ width: "18rem", background: "rgb(204, 221, 224)" }}
  >
    <Card.Img
      className="m-2 align-items-center"
      variant="top"
      src="holder.js/100px180"
      style={{ width: 250, height: 150 }}
    />
    <Card.Body>
      <Card.Title>Antiques</Card.Title>
      <Card.Text>info on Antiques</Card.Text>
      <Button
        shadow="none"
        size=""
        className=""
        style={{ background: "rgb(128, 209, 128)" }}
      >
        See Antiques
      </Button>
    </Card.Body>
  </Card>

  <Card
    className="m-3 pt-3"
    style={{ width: "18rem", background: "rgb(204, 221, 224)" }}
  >
    <Card.Img
      className="m-2 align-items-center"
      variant="top"
      src="holder.js/100px180"
      style={{ width: 250, height: 150 }}
    />
    <Card.Body>
      <Card.Title>Antiques</Card.Title>
      <Card.Text>info on Antiques</Card.Text>
      <Button
        shadow="none"
        size=""
        className=""
        style={{ background: "rgb(128, 209, 128)" }}
      >
        See Antiques
      </Button>
    </Card.Body>
  </Card>

  <Card
    className="m-3 pt-3"
    style={{ width: "18rem", background: "rgb(204, 221, 224)" }}
  >
    <Card.Img
      className="m-2 align-items-center"
      variant="top"
      src="holder.js/100px180"
      style={{ width: 250, height: 150 }}
    />
    <Card.Body>
      <Card.Title>Antiques</Card.Title>
      <Card.Text>info on Antiques</Card.Text>
      <Button
        shadow="none"
        size=""
        className=""
        style={{ background: "rgb(128, 209, 128)" }}
      >
        See Antiques
      </Button>
    </Card.Body>
  </Card>
</Row>

<Row className="justify-content-center">
  <Card
    className="m-3 pt-3"
    style={{ width: "18rem", background: "rgb(204, 221, 224)" }}
  >
    <Card.Img
      className="m-2 align-items-center"
      variant="top"
      src="holder.js/100px180"
      style={{ width: 250, height: 150 }}
    />
    <Card.Body>
      <Card.Title>Antiques</Card.Title>
      <Card.Text>info on Antiques</Card.Text>
      <Button
        shadow="none"
        size=""
        className=""
        style={{ background: "rgb(128, 209, 128)" }}
      >
        See Antiques
      </Button>
    </Card.Body>
  </Card>

  <Card
    className="m-3 pt-3"
    style={{ width: "18rem", background: "rgb(204, 221, 224)" }}
  >
    <Card.Img
      className="m-2 align-items-center"
      variant="top"
      src="holder.js/100px180"
      style={{ width: 250, height: 150 }}
    />
    <Card.Body>
      <Card.Title>Antiques</Card.Title>
      <Card.Text>info on Antiques</Card.Text>
      <Button
        shadow="none"
        size=""
        className=""
        style={{ background: "rgb(128, 209, 128)" }}
      >
        See Antiques
      </Button>
    </Card.Body>
  </Card>

  <Card
    className="m-3 pt-3"
    style={{ width: "18rem", background: "rgb(204, 221, 224)" }}
  >
    <Card.Img
      className="m-2 align-items-center"
      variant="top"
      src="holder.js/100px180"
      style={{ width: 250, height: 150 }}
    />
    <Card.Body>
      <Card.Title>Antiques</Card.Title>
      <Card.Text>info on Antiques</Card.Text>
      <Button
        shadow="none"
        size=""
        className=""
        style={{ background: "rgb(128, 209, 128)" }}
      >
        See Antiques
      </Button>
    </Card.Body>
  </Card>
</Row>
</Container> */}