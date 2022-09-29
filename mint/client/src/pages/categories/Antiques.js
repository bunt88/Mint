import React from "react"
import { useQuery } from "@apollo/client";
import { QUERY_LISTINGS } from "../../utils/queries";
import { useParams } from 'react-router-dom';


import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Antiques() {
    const { categoryId } = useParams();
    const { data, error } = useQuery(QUERY_LISTINGS, {
      variables: {categoryId}
    })
    const antiqueList = data?.listings 

    return(
        <div>
         <Container
      fluid
      style={{ background: "rgb(204, 221, 224)" }}
      className="-center"
    >
      <Row className="justify-content-center">
        <Card
          className="m-3 pt-3 align-items-center"
          style={{ width: "18rem", background: "rgb(248, 247, 245)" }}
        >
          <Card.Img
            className="m-2"
            variant="top"
            // src={antiqueList.image}
            style={{ width: 250, height: 150 }}
          />
          <Card.Body>
            <Card.Title>Antiques</Card.Title>
            <Card.Text>info on Antiques</Card.Text>
            <Button className="" style={{ background: "rgb(204, 221, 224)" }}>
              See Antiques
            </Button>
          </Card.Body>
        </Card>
        <Card
          className="m-3 pt-3 align-items-center"
          style={{ width: "18rem", background: "rgb(248, 247, 245)" }}
        >
          <Card.Img
            className="m-2"
            variant="top"
            src="#"
            style={{ width: 250, height: 150 }}
          />
          <Card.Body>
            <Card.Title>Antiques</Card.Title>
            <Card.Text>info on Antiques</Card.Text>
            <Button className="" style={{ background: "rgb(204, 221, 224)" }}>
              See Antiques
            </Button>
          </Card.Body>
        </Card>
        <Card
          className="m-3 pt-3 align-items-center"
          style={{ width: "18rem", background: "rgb(248, 247, 245)" }}
        >
          <Card.Img
            className="m-2"
            variant="top"
            src="#"
            style={{ width: 250, height: 150 }}
          />
          <Card.Body>
            <Card.Title>Antiques</Card.Title>
            <Card.Text>info on Antiques</Card.Text>
            <Button className="" style={{ background: "rgb(204, 221, 224)" }}>
              See Antiques
            </Button>
          </Card.Body>
        </Card>
      </Row>

      <Row className="justify-content-center">
        <Card
          className="m-3 pt-3 align-items-center"
          style={{ width: "18rem", background: "rgb(248, 247, 245)" }}
        >
          <Card.Img
            className="m-2"
            variant="top"
            src="#"
            style={{ width: 250, height: 150 }}
          />
          <Card.Body>
            <Card.Title>Antiques</Card.Title>
            <Card.Text>info on Antiques</Card.Text>
            <Button className="" style={{ background: "rgb(204, 221, 224)" }}>
              See Antiques
            </Button>
          </Card.Body>
        </Card>
        <Card
          className="m-3 pt-3 align-items-center"
          style={{ width: "18rem", background: "rgb(248, 247, 245)" }}
        >
          <Card.Img
            className="m-2"
            variant="top"
            src="#"
            style={{ width: 250, height: 150 }}
          />
          <Card.Body>
            <Card.Title>Antiques</Card.Title>
            <Card.Text>info on Antiques</Card.Text>
            <Button className="" style={{ background: "rgb(204, 221, 224)" }}>
              See Antiques
            </Button>
          </Card.Body>
        </Card>
        <Card
          className="m-3 pt-3 align-items-center"
          style={{ width: "18rem", background: "rgb(248, 247, 245)" }}
        >
          <Card.Img
            className="m-2"
            variant="top"
            src="#"
            style={{ width: 250, height: 150 }}
          />
          <Card.Body>
            <Card.Title>Antiques</Card.Title>
            <Card.Text>info on Antiques</Card.Text>
            <Button className="" style={{ background: "rgb(204, 221, 224)" }}>
              See Antiques
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
        </div>
    )
}