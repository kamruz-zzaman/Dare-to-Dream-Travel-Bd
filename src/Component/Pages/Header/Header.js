import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import img from '../../../Images/Header-logo.png'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <header className="text-gray-600 body-font bg-yellow-400">
                <div className=" mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src={img} className='' alt="" />
                    </Link>
                    {
                        user.email ? <> <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                            <NavLink to='/home' className="mr-1 text-black font-bold hover:bg-white px-5 py-1 rounded-md" activeClassName="bg-white">Home</NavLink>
                            <NavLink to='/package' className="mr-1 text-black font-bold hover:bg-white px-2 py-2 rounded-md" activeClassName="bg-white">Packages</NavLink>
                            <NavLink to='/gellery' className="mr-1 text-black font-bold hover:bg-white px-2 py-2 rounded-md" activeClassName="bg-white">Gellary</NavLink>
                            <NavLink to='/contuct' className="mr-1 text-black font-bold hover:bg-white px-2 py-2 rounded-md" activeClassName="bg-white">Contact</NavLink>
                            <NavLink to='/mybooking' className="mr-1 text-black font-bold hover:bg-white px-2 py-2 rounded-md" activeClassName="bg-white">My Booking</NavLink>
                            <NavLink to='/allBoking' className="mr-1 text-black font-bold hover:bg-white px-2 py-2 rounded-md" activeClassName="bg-white">All Booking</NavLink>
                            <NavLink to='/addpackage' className=" text-black font-bold hover:bg-white px-2 py-2 rounded-md" activeClassName="bg-white">Add Package</NavLink>

                        </nav>
                            <div className='flex items-center'>
                                <img className='rounded-full  w-8 h-8 mr-1' src={user.photoURL} alt="" />
                                <p className='mr-2 font-bold'>{user.displayName}</p>
                                <button onClick={logOut} className="inline-flex items-center text-black font-bold bg-white hover:bg-yellow-400 px-5 py-2 rounded-md">Logout</button>
                            </div></> : <>
                            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                                <NavLink to='/home' className="mr-1 text-black font-bold hover:bg-white px-5 py-1 rounded-md" activeClassName="bg-white">Home</NavLink>
                                <NavLink to='/package' className="mr-1 text-black font-bold hover:bg-white px-2 py-2 rounded-md" activeClassName="bg-white">Packages</NavLink>
                                <NavLink to='/gellery' className="mr-1 text-black font-bold hover:bg-white px-2 py-2 rounded-md" activeClassName="bg-white">Gellary</NavLink>
                                <NavLink to='/contuct' className="mr-1 text-black font-bold hover:bg-white px-2 py-2 rounded-md" activeClassName="bg-white">Contact</NavLink>

                            </nav>
                            <div>
                                <Link to='/login'><button className="inline-flex items-center text-black font-bold bg-white hover:bg-yellow-400 px-2 py-1 rounded-md border-2">Login</button></Link>
                            </div>
                        </>
                    }
                </div>
            </header>
        </>
    );
};

export default Header;