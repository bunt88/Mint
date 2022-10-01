import React from "react"
import { useQuery } from "@apollo/client";
import {useParams} from "react-router-dom";
import { QUERY_LISTINGS } from "../../utils/queries";
import SingleAntique from '../../components/ListingCards/singleAntique';


export default function Antiques() {
    const { id } = useParams()
   
    const { loading, data } = useQuery(QUERY_LISTINGS)
    if (loading) {
      console.log(loading)
    }
    const antiques = data?.listings || {};
    
    if (loading) {
      return (<div>Loading...</div>)
    } else 
    return(
        <div>
           {console.log(id)}
          {antiques &&
            antiques.filter(antique => {
              console.log(antique.category._id, id)
              return antique.category._id === id}).map((antique) => (
              <SingleAntique key={antique._id} antique={antique} />
            ))}
        </div>
      );
    
   
  }; 