import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Booking from '../Booking/Booking';

const BookNow = () => {
    const { id } = useParams();
    const [bookData, setBookData] = useState([]);
    // fetching packages by id
    useEffect(() => {
        fetch(`https://dark-tomb-38660.herokuapp.com/packages/${id}`)
            .then(res => res.json())
            .then(data => setBookData(data))
    }, []);
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