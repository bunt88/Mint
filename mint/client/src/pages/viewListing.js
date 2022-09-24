import React from "react";
import BigImage from '../components/BigImage'


function viewListing() {


    return (
        <div>
            <div className='card'>
                <div className='titleField'>
                    <p>{title}</p>
                </div>
                <div className='photo'>
                    <BigImage />
                </div>
            </div>
            <div className='card'>
                <div className='categoryField'>
                    <p id='category'>{category}</p>
                </div>
                <div className='priceField'>
                    <p id="price">{Price}</p>
                </div>
                <div className='conditionSelect'>
                    <p id="condition">{Condition}</p>
                </div>
                <div className='descriptionField'>
                    <p id='description'>{Description}</p>
                </div>
            </div>
        </div>
    )
}

export default viewListing