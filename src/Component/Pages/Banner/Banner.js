import React from 'react';
import img from '../../../Images/Stranded traveler-pana.svg'

const Banner = () => {
    return (
        <div className='m-5'>
            <div className='grid lg:grid-cols-2'>
                <img src={img} alt="" />
                <div className='flex justify-center items-center m-5'>
                    <div className='text-left'>
                        <h1 className='text-5xl font-bold'>Lifelong memories just a few seconds away.</h1>
                        <p className='text-2xl mt-10'>Let's start your journey with us, your dream will come true.</p>
                        <button className='mt-10 bg-yellow-400 rounded-lg px-5 py-3 hover:bg-white font-bold border-2 '>Explore Destination</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Banner;