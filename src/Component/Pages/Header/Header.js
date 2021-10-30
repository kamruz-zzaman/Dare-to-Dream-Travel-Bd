import React from 'react';
import { Link } from 'react-router-dom';
import FirebaseAuth from '../../../Hooks/FirebaseAuth';
import img from '../../../Images/Header-logo.png'

const Header = () => {
    const { user, logOut } = FirebaseAuth();
    return (
        <>
            <header className="text-gray-600 body-font bg-yellow-400">
                <div className=" mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src={img} className='' alt="" />
                    </Link>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link to='/home' className="mr-1 text-black font-bold hover:bg-white px-5 py-1 rounded-md">Home</Link>
                        <Link to='/package' className="mr-1 text-black font-bold hover:bg-white px-2 py-2 rounded-md">Packages</Link>
                        <Link to='' className="mr-1 text-black font-bold hover:bg-white px-2 py-2 rounded-md">About</Link>
                        <Link to='/gellery' className="mr-1 text-black font-bold hover:bg-white px-2 py-2 rounded-md">Gellary</Link>
                        <Link to='/contuct' className="mr-1 text-black font-bold hover:bg-white px-2 py-2 rounded-md">Contact</Link>
                        <Link to='/contuct' className="mr-1 text-black font-bold hover:bg-white px-2 py-2 rounded-md">My Booking</Link>
                        <Link to='/contuct' className="mr-1 text-black font-bold hover:bg-white px-2 py-2 rounded-md">All Booking</Link>
                        <Link to='/addpackage' className=" text-black font-bold hover:bg-white px-2 py-2 rounded-md">Add Package</Link>

                    </nav>
                    {
                        user.email ?
                            <div className='flex items-center'>
                                <img className='rounded-full  w-8 h-8 mr-1' src={user.photoURL} alt="" />
                                <p className='mr-2 font-bold'>{user.displayName}</p>
                                <button onClick={logOut} className="inline-flex items-center text-black font-bold bg-white hover:bg-yellow-400 px-5 py-2 rounded-md">Logout</button>
                            </div>
                            :
                            <Link to='/login'><button className="inline-flex items-center text-black font-bold bg-white hover:bg-yellow-400 px-2 py-1 rounded-md border-2">Login</button></Link>
                    }
                </div>
            </header>
        </>
    );
};

export default Header;