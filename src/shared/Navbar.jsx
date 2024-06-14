import React from 'react';

const Navbar = () => {
    return (
        <div className='py-5 shadow-md'>
            <ul className='flex justify-center items-center gap-5 font-semibold'>
                <li>Home</li>
                <li>Items</li>
                <li>Best Selling</li>
            </ul>
        </div>
    );
};

export default Navbar;