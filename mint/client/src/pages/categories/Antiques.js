import React from "react"
import { useQuery } from "@apollo/client";
import { QUERY_LISTINGS } from "../../utils/queries";
import { useParams } from 'react-router-dom';
import ListingCards from '../../components/ListingCards/singleAntique';


// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

export default function Antiques() {
    const { antiquesId } = useParams();
    const { data, loading } = useQuery(QUERY_LISTINGS, {
      variables: {antiquesId: antiquesId}
    })
    const antiques = data?.antiques || {};

    if (loading) {
      return <div>Loading...</div>
    }
    return (
      <div>
        
        <ListingCards antiquesId={antiques._id} />
      </div>
    )
  }; 