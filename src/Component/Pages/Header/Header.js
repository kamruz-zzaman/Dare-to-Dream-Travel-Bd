import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../Images/Header-logo.png'

const Header = () => {
    return (
        <>
            <header className="text-gray-600 body-font bg-yellow-400">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src={img} className='' alt="" />
                    </Link>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link className="mr-5 text-black font-bold hover:bg-white px-5 py-2 rounded-md">First Link</Link>
                        <Link className="mr-5 text-black font-bold hover:bg-white px-5 py-2 rounded-md">Second Link</Link>
                        <Link className="mr-5 text-black font-bold hover:bg-white px-5 py-2 rounded-md">Third Link</Link>
                        <Link className="mr-5 text-black font-bold hover:bg-white px-5 py-2 rounded-md">Fourth Link</Link>
                    </nav>
                    <Link to='/login'><button className="inline-flex items-center text-black font-bold bg-white hover:bg-yellow-400 px-5 py-2 rounded-md">Login</button></Link>
                </div>
            </header>
        </>
    );
};

export default Header;