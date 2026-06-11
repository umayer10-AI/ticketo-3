import Navbar from '@/component/Navbar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-full'>
                {children}
            </div>
        </div>
    );
};

export default layout;