import React from 'react';

const ALLBooking = (props) => {
    const deletUser = props.deletUser;
    const updateStatus = props.updateStatus;
    // distructuring booking data
    const { _id, Destination, Name, TourStartDate, Status, Email } = props.booking;
    return (
        <tr className='border-2 w-1/2'>
            <td className='p-2 border-2 '><span className='font-bold'>{Name}</span> <br />{Email} </td>
            <td className='p-2 border-2 '>{Destination}</td>
            <td className='p-2 border-2 text-green-900 bg-green-300 font-bold'>{Status}</td>
            <td className='p-2 border-2 '>{TourStartDate}</td>
            <td className='p-2 border-2 '>
                {
                    Status === 'Done' ?
                        <div className='flex justify-center'>
                            <button onClick={() => deletUser(_id)} className='text-red-600  hover:text-red-800 text-lg text-center'><i class="far fa-trash-alt"></i></button>
                        </div> :
                        <div className='flex justify-center'>
                            <button onClick={() => updateStatus(_id)} className='text-green-600 text-center text-lg hover:text-green-800 mr-5'><i class="far fa-check-circle"></i></button>
                            <button onClick={() => deletUser(_id)} className='text-red-600  hover:text-red-800 text-lg text-center'><i class="far fa-trash-alt"></i></button>
                        </div>
                }
            </td>
        </tr>
    );
};

export default ALLBooking;