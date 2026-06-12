import AllCards from '@/component/AllCards';
import React from 'react';

const page = () => {
    return (
        <div>
            <h1 className='text-center text-2xl font-bold my-5'>This Is Browse Page</h1>

            <AllCards></AllCards>
        </div>
    );
};

export default page;