import React, {useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import Cart from '../components/Cart'
import { useStoreContext } from '../utils/GlobalState'
import {
    REMOVE_FROM_CART,
    UPDATE_CART_QUANTITY,
    ADD_TO_CART,
    UPDATE_LISTINGS,
} from '../utils/actions';
import { QUERY_LISTINGS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import DisplayBigImage from "../components/BigImage";
import BigImage from '../components/BigImage'
import spinner from '../assets/loading.webp'


function viewListing() {
    const [state, dispatch] = useStoreContext()
    const { id } = useParams()

    const [currentListing,  setCurrentListing] = useState({});

    const { loading, data } = useQuery(QUERY_LISTINGS);

    const { listings, cart } = state;

    useEffect(() => {
        if (listings.length) {
            setCurrentListing(listings.find((listing) => listing._id === id))
        } 

        else if (data) {
            dispatch({
                type: UPDATE_LISTINGS,
                listings: data.listings,
            });

            data.listings.forEach((listing) => {
                idbPromise('listings', 'put', listing);
            });
        }

        else if (!loading) {
            idbPromise('listings', 'get').then((indexedListings) => {
                dispatch({
                    type: UPDATE_LISTINGS,
                    listings: indexedListings,
                })
            })
        }
    }, [listings, data, loading, dispatch, id]);

    const addToCart = () => {
        const itemInCart = card.find((cartItem) => cartItem._id === id);
        if (itemInCart) {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: id,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
            });
            idbPromise('cart', 'put', {
                ...itemInCart,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
            })
        } else {
            dispatch({
                type: ADD_TO_CART,
                listing: { ...currentListing, purchaseQuantity: 1 },
            });
            idbPromise('cart', 'put', {...currentListing, purchaseQuantity: 1 });
        }
    }

    const removeFromCart = () => {
        dispatch({
            type: REMOVE_FROM_CART,
            _id: currentProduct._id,
        });

        idbPromise('cart', 'delete', { ...currentProduct });
    };

    return (
        <>
        {currentProduct && cart ? (
        <div className='container my-1'>
            <Link to="/">← Back to Listings</Link>
            <div className='card'>
                <div className='titleField'>
                    <h2>{currentListing.title}</h2>
                </div>
                
                <div className='photo'>
                    <BigImage>
                        {DisplayBigImage('')}
                    </BigImage>
                </div>
            </div>
            <div className='card'>
                <div className='categoryField'>
                    <p id='category'>{category}</p>
                </div>
                <div className='priceField'>
                    <strong id="price">{Price}</strong>
                </div>
                <div className='conditionSelect'>
                    <p id="condition">{Condition}</p>
                </div>
            </div>
            <button onClick={addToCart}>Add to Cart</button>
            <button
                disabled={!cart.find((p) => p._id === currentListing._id)}
                onClick={removeFromCart}
                >
                    Remove from Cart
                </button>
        </div>
        ) : null}
        {loading ? <img src={spinner} alt="loading..." /> : null}
        <Cart />
        </>
    )
}

export default viewListing