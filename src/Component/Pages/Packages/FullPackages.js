import React, { useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner';
import Package from './Package';

const FullPackages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://dark-tomb-38660.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, []);
    return (
        <>

            {
                packages.length === 0 ? <Spinner></Spinner> :
                    <div>
                        <div className='text-center text-gray-600 m-5'>
                            <span className=' text-2xl font-bold border-b-2 border-yellow-500'>Tour Packages</span>
                        </div>
                        <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 items-center mx-16 my-5'>
                            {
                                packages.map(pakage =>
                                    <Package
                                        key={pakage._id}
                                        package={pakage}
                                    >
                                    </Package>)
                            }
                        </div>
                    </div>
            }


        </>
    );
};

export default FullPackages;