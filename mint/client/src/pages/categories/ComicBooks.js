import React from "react"
import { useQuery } from "@apollo/client";
import { QUERY_COMICBOOKS } from "../../utils/queries";
import SingleComicBook from '../../components/ListingCards/singleComicBook';

export default function ComicBooks() {
    const { loading, data } = useQuery(QUERY_COMICBOOKS)
    if (loading) {
      console.log(loading)
    }
    const comicbooks = data?.comicbooks || {};
    
    if (loading) {
      return (<div>Loading...</div>)
    } 
    return(
        <div>
          {comicbooks &&
            comicbooks.map((comicbook) => (
              <SingleComicBook key={comicbook._id} comicbook={comicbook} />
            ))}
        </div>
      );
  }; 