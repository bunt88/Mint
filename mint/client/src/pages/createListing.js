import React from "react";
import { useMutation } from '@apollo/client'
import { Link } from 'react-router-dom'
import { ADD_LISTING } from '../utils/mutations'
import Auth from '../utils/auth'
 

function createListing() {


    return (
        <form onSubmit={addListing()}>
            <div className='card'>
                <div className='titleField'>
                    <label for='title'>Title</label>
                    <input class='title' id='listingTitle' name='title'></input>
                </div>
                <div className='photoUpload'>
                    <label for='photo'>Add a Photo</label>
                    <input
                        type='file'
                        id='photo'
                        name='photo'
                        accept="image/*">
                    </input>
                </div>
            </div>
            <div className='card'>
                <div className='categorySelect'>
                    <label for='category'>Category</label>
                    <select class='category' id='listingCategory' name='category'>
                        <option value="" disabled selected>Select category</option>
                        <option value='antiques'>Antiques</option>
                        <option value=''></option>
                        <option value=''></option>
                        <option value=''></option>
                        <option value=''></option>
                        <option value=''></option>
                        <option value=''></option>
                    </select>
                </div>
                <div className='priceField'>
                    <label for='price'>Price</label>
                    <input className='price' id='listingPrice' name='price'>$0.00</input>
                </div>
                <div className='conditionSelect'>
                    <label for='condition'>Condition</label>
                    <select class='condition' id='listingCategory' name='condition'>
                        <option value="" disabled selected>Select condition</option>
                        <option value='mint'>Mint</option>
                        <option value='excellent'>Excellent</option>
                        <option value='good'>Good</option>
                        <option value='fair'>Fair</option>
                        <option value='poor'>Poor</option>
                    </select>
                </div>
                <div className='descriptionField'>
                    <label for='description'>Description</label>
                    <textarea className='description' id='listingDescription' name='description'></textarea>
                </div>
            </div>
        </form>
    )
}

export default createListing