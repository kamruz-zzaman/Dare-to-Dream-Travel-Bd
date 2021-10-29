import React, { useEffect, useState } from 'react';
import Package from './Package';

const Packages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, [])
    console.log(packages);
    return (
        <div>
            <div className='text-center m-5'>
                <span className=' text-2xl font-bold border-b-2 border-yellow-500'>Tour Packages</span>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 items-center mx-16 my-5'>
                {
                    packages.map(pakage =>
                        <Package
                            key={pakage.Key}
                            package={pakage}
                        >
                        </Package>)
                }
            </div>

        </div>
    );
};

export default Packages;