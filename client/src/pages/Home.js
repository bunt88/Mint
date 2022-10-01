import React from "react";
import Auth from '../utils/auth'
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import Naviagation from "../components/Navbar";

const Home = () => {
  if(Auth.loggedIn()) {
  return (
    <header className=" m-2 jumbotron jumbotron-fluid">
    <div id="header" className="container">

      <div className="row ">
        <div id="img" className="col-12 col-md-6">
          <img className='img-fluid' src="images/pokemon.jpeg" alt="pokemon cards" />
        </div>
        <div id="section" className="col-12 col-md-6">
          <h1>Welcome to Mint!</h1>
          <p>Are you a collector who enjoys collecting that rare item that everyone's trying to find?
            Here at Mint you are able to buy and sell collector's items. Our categories range from 
            trading cards, comic books, antiques, to vintage clothing. Whatever collector's item you 
            are into Mint will have it for you!
          </p>
        
        </div>
      </div>
    </div>
    <main className="container">
    <section className="row">
      <div className="m-5 col-3 card">
        <h5 className=" text-align-center card-header">We have multiple categories to choose from!</h5>
        <div className="card-body">
          <p className="card-text">You name it, we sell it! </p>
          <a href="" className="mt-4 btn btn-secondary">View Categories</a>
        </div>
      </div>
      <div className="m-5 col-3 card">
        <h5 className="card-header">Sell Your Collectibles!</h5>
        <div className="card-body">
          <p className="card-text"> You know you have stuff sitting in your garage that's probably worth some money!</p>
          <a href="/createlisting" className="mt-5 btn btn-secondary">Create a Listing</a>
        </div>
      </div>
    </section>
  </main>
  </header>
    );
    } else {
      return(
      <header class="jumbotron jumbotron-fluid">
      <div id="header" class="container">
  
        <div class="row ">
          <div id="img" class="mt-1 col-12 col-md-6">
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
    )
    }


};

export default Home 







// import React from "react";

// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// // import Naviagation from "../components/Navbar";

// const Home = () => {
//   return (
//     <Container
//       fluid
//       style={{ background: "rgb(248, 247, 245)" }}
//       className="-center"
//     >
//       <Row
//         className=" justify-content-center"
//         style={{
//           color: "rgb(128, 209, 128)",
//           fontSize: "50px",
//           fontFamily: "fantasy",
//         }}
//       >
//         Featured Items
//       </Row>

//       <Row className="justify-content-center">
//         <Card
//           className="m-3 pt-3"
//           style={{ width: "18rem", background: "rgb(204, 221, 224)" }}
//         >
//           <Card.Img
//             className="m-2 align-items-center"
//             variant="top"
//             src="holder.js/100px180"
//             style={{ width: 250, height: 150 }}
//           />
//           <Card.Body>
//             <Card.Title>Antiques</Card.Title>
//             <Card.Text>info on Antiques</Card.Text>
//             <Button
//               shadow="none"
//               size=""
//               className=""
//               style={{ background: "rgb(128, 209, 128)" }}
//             >
//               See Antiques
//             </Button>
//           </Card.Body>
//         </Card>

//         <Card
//           className="m-3 pt-3"
//           style={{ width: "18rem", background: "rgb(204, 221, 224)" }}
//         >
//           <Card.Img
//             className="m-2 align-items-center"
//             variant="top"
//             src="holder.js/100px180"
//             style={{ width: 250, height: 150 }}
//           />
//           <Card.Body>
//             <Card.Title>Antiques</Card.Title>
//             <Card.Text>info on Antiques</Card.Text>
//             <Button
//               shadow="none"
//               size=""
//               className=""
//               style={{ background: "rgb(128, 209, 128)" }}
//             >
//               See Antiques
//             </Button>
//           </Card.Body>
//         </Card>

//         <Card
//           className="m-3 pt-3"
//           style={{ width: "18rem", background: "rgb(204, 221, 224)" }}
//         >
//           <Card.Img
//             className="m-2 align-items-center"
//             variant="top"
//             src="holder.js/100px180"
//             style={{ width: 250, height: 150 }}
//           />
//           <Card.Body>
//             <Card.Title>Antiques</Card.Title>
//             <Card.Text>info on Antiques</Card.Text>
//             <Button
//               shadow="none"
//               size=""
//               className=""
//               style={{ background: "rgb(128, 209, 128)" }}
//             >
//               See Antiques
//             </Button>
//           </Card.Body>
//         </Card>
//       </Row>

//       <Row className="justify-content-center">
//         <Card
//           className="m-3 pt-3"
//           style={{ width: "18rem", background: "rgb(204, 221, 224)" }}
//         >
//           <Card.Img
//             className="m-2 align-items-center"
//             variant="top"
//             src="holder.js/100px180"
//             style={{ width: 250, height: 150 }}
//           />
//           <Card.Body>
//             <Card.Title>Antiques</Card.Title>
//             <Card.Text>info on Antiques</Card.Text>
//             <Button
//               shadow="none"
//               size=""
//               className=""
//               style={{ background: "rgb(128, 209, 128)" }}
//             >
//               See Antiques
//             </Button>
//           </Card.Body>
//         </Card>

//         <Card
//           className="m-3 pt-3"
//           style={{ width: "18rem", background: "rgb(204, 221, 224)" }}
//         >
//           <Card.Img
//             className="m-2 align-items-center"
//             variant="top"
//             src="holder.js/100px180"
//             style={{ width: 250, height: 150 }}
//           />
//           <Card.Body>
//             <Card.Title>Antiques</Card.Title>
//             <Card.Text>info on Antiques</Card.Text>
//             <Button
//               shadow="none"
//               size=""
//               className=""
//               style={{ background: "rgb(128, 209, 128)" }}
//             >
//               See Antiques
//             </Button>
//           </Card.Body>
//         </Card>

//         <Card
//           className="m-3 pt-3"
//           style={{ width: "18rem", background: "rgb(204, 221, 224)" }}
//         >
//           <Card.Img
//             className="m-2 align-items-center"
//             variant="top"
//             src="holder.js/100px180"
//             style={{ width: 250, height: 150 }}
//           />
//           <Card.Body>
//             <Card.Title>Antiques</Card.Title>
//             <Card.Text>info on Antiques</Card.Text>
//             <Button
//               shadow="none"
//               size=""
//               className=""
//               style={{ background: "rgb(128, 209, 128)" }}
//             >
//               See Antiques
//             </Button>
//           </Card.Body>
//         </Card>
//       </Row>
//     </Container>
//   );
// };

// export default Home;
