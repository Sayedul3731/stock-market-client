import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='py-5 shadow-md'>
            <ul className='flex justify-center items-center gap-5 font-semibold'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/add-new-stock">Add Stock</NavLink>
            </ul>
        </div>
    );
};

export default Navbar;