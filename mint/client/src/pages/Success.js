import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Success() {
  // setTimeout(() => {
  //   window.location.assign('/');
  // }, 3000);

  return (
    <Card className="success text-center">
      <Card.Body>
        <Card.Title>Success!</Card.Title>
        <Card.Text>
          Your order of //INSERT ORDER ID// has been completed! Thank you for your purchase.
            You'll be redirected to the homepage to continue browsing.
        </Card.Text>
        {/* <a href='login'>
        <Button className="successBtn">Continue browsing</Button>
        </a> */}
      </Card.Body>
    </Card>
  );
}

export default Success;