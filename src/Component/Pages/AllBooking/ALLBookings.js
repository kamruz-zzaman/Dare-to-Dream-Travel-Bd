import React, { useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner';
import ALLBooking from './ALLBooking';

const ALLBookings = () => {
    const [myBooking, SetBooking] = useState([]);
    useEffect(() => {
        fetch('https://dark-tomb-38660.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => SetBooking(data));
    }, []);

    const handleDeletUser = (id) => {
        const delet = window.confirm('Are Your Sure For Delation?');
        if (delet) {
            fetch(`https://dark-tomb-38660.herokuapp.com/booking/${id}`, {
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
            fetch(`https://dark-tomb-38660.herokuapp.com/booking/${id}`, {
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
            {
                myBooking[0] ?
                    myBooking.length === 0 ? <Spinner></Spinner> :
                        <div className='overflow-x-auto'>
                            <table class="table-auto mx-5 mt-10 ">
                                <thead>
                                    <tr>
                                        <th class="w-1/2 sm:text-xs ">Name</th>
                                        <th class="w-1/4 sm:text-xs">DESTINATION</th>
                                        <th class="w-1/8 sm:text-xs">STATUS</th>
                                        <th class="w-1/4 sm:text-xs">Tour Start Date</th>
                                        <th class="w-1/8 sm:text-xs">ACTIONS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        myBooking.map(booking =>
                                            <ALLBooking
                                                key={booking._id}
                                                booking={booking}
                                                deletUser={handleDeletUser}
                                                updateStatus={handleUpdateUser}
                                            >
                                            </ALLBooking>
                                        )
                                    }

                                </tbody>
                            </table>
                        </div>
                    :
                    <div className='h-96 text-gray-400'>
                        <p className='text-center text-6xl '>No Booking Added</p>
                    </div>

            }



        </>
    );
};

export default ALLBookings;