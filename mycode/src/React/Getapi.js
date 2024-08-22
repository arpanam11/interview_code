import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Getapi = () => {

    const [data, setData] = useState([]);

    const Getdata = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            setData(response.data); // Set the fetched data to state
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        Getdata();
    }, []); 

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        {item.title} - ${item.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Getapi;
