import React, { useEffect, useState } from 'react';
import MyBooking from './MyBooking';

const MyBokings = () => {
    const [myBooking, SetBooking] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/booking')
            .then(res => res.json())
            .then(data => SetBooking(data));
    }, []);

    const handleDeletUser = (id) => {
        const delet = window.confirm('Are Your Sure For Delation?');
        if (delet) {
            fetch(`http://localhost:5000/booking/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('delet successfully')
                        const remainingBooking = myBooking.filter(booking => booking._id !== id)
                        SetBooking(remainingBooking)
                    }
                })
        }
    }
    const handleUpdateUser = (id) => {
        const confirm = window.confirm('Are you sure for Approve Booking?');
        if (confirm) {
            fetch(`http://localhost:5000/booking/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(myBooking)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert('Update Successfull')
                    }
                    window.location.reload();
                })
        }
    }


    return (
        <>
            <table class="table-fixed mx-5 mt-10">
                <thead>
                    <tr>
                        <th class="w-1/2 ">Name</th>
                        <th class="w-1/4 ">DESTINATION</th>
                        <th class="w-1/8 ">STATUS</th>
                        <th class="w-1/4 ">Tour Start Date</th>
                        <th class="w-1/8 ">ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myBooking.map(booking =>
                            <MyBooking
                                key={booking._id}
                                booking={booking}
                                deletUser={handleDeletUser}
                                updateStatus={handleUpdateUser}
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