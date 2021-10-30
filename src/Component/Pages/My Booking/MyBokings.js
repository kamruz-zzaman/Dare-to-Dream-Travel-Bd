import React, { useEffect, useState } from 'react';
import MyBooking from './MyBooking';

const MyBokings = () => {
    const [myBooking, SetBooking] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/booking')
            .then(res => res.json())
            .then(data => SetBooking(data));
    }, [])
    console.log(myBooking);

    return (
        <>
            <table class="table-fixed mx-5 mt-10">
                <thead>
                    <tr>
                        <th class="w-1/2 ">Name</th>
                        <th class="w-1/4 ">DESTINATION</th>
                        <th class="w-1/8 ">STATUS</th>
                        <th class="w-1/4 ">PRICE</th>
                        <th class="w-1/8 ">ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myBooking.map(booking =>
                            <MyBooking
                                key={booking._id}
                                booking={booking}
                            >
                            </MyBooking>
                        )
                    }

                </tbody>
            </table>
        </>
    );
};

export default MyBokings;