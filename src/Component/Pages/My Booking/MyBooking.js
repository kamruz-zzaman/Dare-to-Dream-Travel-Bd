import React from 'react';

const MyBooking = (props) => {

    const { Destination, Name, PhoneNumber, TourStartDate, Satatus } = props.booking;
    return (
        <tr className='border-2 w-1/2'>
            <td className='p-2 border-2 '>{Name}</td>
            <td className='p-2 border-2 '>{Destination}</td>
            <td className='p-2 border-2 '>{PhoneNumber}</td>
            <td className='p-2 border-2 '>{TourStartDate}</td>
            <td className='p-2 border-2 '>{Satatus}</td>
        </tr>
    );
};

export default MyBooking;