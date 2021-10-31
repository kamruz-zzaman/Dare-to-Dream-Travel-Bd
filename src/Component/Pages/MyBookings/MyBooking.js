import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Spinner from '../Spinner/Spinner';
import MyBookingComp from './MyBookingComp';

const MyBooking = () => {
    const { user } = useAuth();
    const [myBooking, SetBooking] = useState([]);
    useEffect(() => {
        fetch('https://dark-tomb-38660.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => SetBooking(data));
    }, []);
    const handleDeletUser = (id) => {
        const delet = window.confirm('Are Your Sure For Delation?');
        if (delet) {
            fetch(`https://dark-tomb-38660.herokuapp.com/${id}`, {
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

    return (
        <>
            {
                myBooking.length === 0 ? <Spinner></Spinner> :
                    myBooking[0] ?
                        <div className='overflow-x-auto'>
                            <table class="table-fixed mx-5 mt-10 overflow-x-auto">
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
                                        myBooking.filter(data => data.Email === user.email).map(booking =>
                                            <MyBookingComp
                                                key={booking._id}
                                                booking={booking}
                                                deletUser={handleDeletUser}
                                            >
                                            </MyBookingComp>
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

export default MyBooking;