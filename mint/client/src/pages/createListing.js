import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useMutation } from '@apollo/client'
import { ADD_LISTING } from '../utils/mutations'
// import Auth from '../utils/auth'
 

function CreateListing() {
    // const [formData, setFormData] = useState({
    //     title: '',
    //     image: '',
    //     category: '',
    //     price: '',
    //     description: ''
    // });

    // cosnt [addListing, { error }] = useMutation(ADD_LISTING);

    // const handleFormSubmit = async (event) => {
    //     event.preventDefault();

    //     try {
    //         const { data } = addListing({
    //             variables: {...formData},
    //         });

    //         window.location.reload()
    //     } catch (err) {
    //         console.error(err)
    //     }
    // }

    // const handleInputChange = (event) => {
    //     const { name, value } = event.target;

       
    // }






   
    // let navigate = useNavigate();

    const [addListing, { error }] = useMutation(ADD_LISTING);
    const [formData, setFormData] = useState({
        title: '',
        image: '',
        category: '',
        price: 0.00,
        description: ''
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formData)
        try {
            const { data } = addListing({
                variables: { ...formData, price: parseFloat(formData.price) },
            });

            if(!data) {
                console.log({ error } + 'Error adding listing')
            }

            // navigate(`/listing/${data.addListing._id}`);
        } catch(err) {
            console.log(err)
        }

        setFormData({
        title: '',
        image: '',
        category: '',
        price: 0.00,
        description: ''
        })
    }


    return (
        <form onSubmit={handleFormSubmit}>
            <div className='card'>
                <div className='titleField'>
                    <label >Title</label>
                    <input className='title' id='listingTitle' name='title' onChange={handleInputChange}/>
                </div>
                <div className='photoUpload'>
                    <label >Add a Photo</label>
                    <input
                        type='text'
                        id='image'
                        name='image'
                        onChange={handleInputChange}
                    />
                   
                </div>
            </div>
            <div className='card'>
                <div className='categorySelect'>
                    <label>Category</label>
                    <select class='category' id='listingCategory' name='category' onChange={handleInputChange}>
                        <option value="" disabled selected>Select category</option>
                        <option value='6337c142fcb24b52cc3011af'>Antiques</option>
                        <option value=''></option>
                        <option value=''></option>
                        <option value=''></option>
                        <option value=''></option>
                        <option value=''></option>
                        <option value=''></option>
                    </select>
                </div>
                <div className='priceField'>
                    <label>Price</label>
                    <input className='price' id='listingPrice' name='price' onChange={handleInputChange}/>
                </div>
                <div className='descriptionField'>
                    <label for='description'>Description</label>
                    <textarea className='description' id='listingDescription' name='description' onChange={handleInputChange}></textarea>
                </div>
                <button>Submit</button>
            </div>
        </form>
    )
}

export default CreateListing