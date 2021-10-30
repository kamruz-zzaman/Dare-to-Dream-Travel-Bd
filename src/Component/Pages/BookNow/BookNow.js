import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Booking from '../Booking/Booking';

const BookNow = () => {
    const { id } = useParams();
    console.log(id);
    const [bookData, setBookData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/packages/${id}`)
            .then(res => res.json())
            .then(data => setBookData(data))
    }, [])
    console.log(bookData);
    return (
        <>
            <Booking
                data={bookData}
            >
            </Booking>
        </>
    );
};

export default BookNow;