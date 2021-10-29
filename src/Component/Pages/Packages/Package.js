import React from 'react';
import { Link } from 'react-router-dom';

const Package = (props) => {
    const { Img, Name, Description, Price, OfferPrice, Time } = props.package;
    return (
        <div className=' mt-10 shadow-2xl border hover:border-yellow-400 h-full rounded-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
            <div>
                <div className="h-4/5">
                    <div>
                        <img className='rounded-lg ' src={Img} alt="" />
                    </div>
                    <div className='p-3 h-80'>
                        <div >
                            <p className='text-xl font-bold text-center my-5'><span></span>{Name}</p>
                            <p className='font-normal '><span></span>{Description}</p>
                            <p className='font-medium'><span className='font-bold'>Price: </span>BDT <s className='font-medium'>{Price}</s>/-</p>
                            <p className='font-medium'><span className='font-bold'>Offer Price: </span>BDT {OfferPrice}/-</p>
                            <p className='font-normal'><span className='font-bold'>Duration: </span><span className='border-b-2 border-blue-400'>{Time}</span></p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='fixed bottom-5'>
                            <Link to=''><button className=' bg-yellow-400 text-black border font-bold border-yellow-400 px-3 py-2 rounded-xl hover:bg-white transition ease-in duration-300 '>Book Now</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Package;