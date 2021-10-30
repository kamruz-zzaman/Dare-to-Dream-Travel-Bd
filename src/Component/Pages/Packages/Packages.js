import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Package from './Package';

const Packages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, []);
    return (
        <div>
            <div className='text-center m-5'>
                <span className=' text-2xl font-bold border-b-2 border-yellow-500'>Tour Packages</span>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 items-center mx-16 my-5'>
                {
                    packages.slice(0, 6).map(pakage =>
                        <Package
                            key={pakage._id}
                            package={pakage}
                        >
                        </Package>)
                }
            </div>
            <div className='flex justify-center items-center mt-20'>
                <Link to='/package'><button className=' hover:bg-yellow-400 text-black border font-bold border-yellow-400 px-3 py-2 rounded-xl bg-white transition ease-in duration-300 '>More Packages...</button></Link>
            </div>
        </div>
    );
};

export default Packages;