import React from "react"
import { useQuery } from "@apollo/client";
import { QUERY_ANTIQUES } from "../../utils/queries";
import SingleAntique from '../../components/ListingCards/singleAntique';


export default function Antiques() {
    const { loading, data } = useQuery(QUERY_ANTIQUES)
    if (loading) {
      console.log(loading)
    }
    const antiques = data?.antiques || {};
    
    if (loading) {
      return (<div>Loading...</div>)
    } 
    return(
        <div>
          {antiques &&
            antiques.map((antique) => (
              <SingleAntique key={antique._id} antique={antique} />
            ))}
        </div>
      );
   
  }; 