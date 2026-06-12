import { browseData } from '@/lib/api/data';
import React from 'react';
import Card from './Card';

const AllCards = async () => {

    const data = await browseData()
    console.log(data)

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-[80%] mx-auto'>
            {
                data.map(v => <Card key={v._id} event={v}></Card>)
            }
        </div>
    );
};

export default AllCards;