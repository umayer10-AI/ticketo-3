import { browseData } from '@/lib/api/data';
import React from 'react';

const AllCards = async () => {

    const data = await browseData()
    console.log(data)

    return (
        <div>
            
        </div>
    );
};

export default AllCards;