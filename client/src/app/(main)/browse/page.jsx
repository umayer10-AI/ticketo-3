import AllCards from '@/component/AllCards';
import { browseData, searchingData } from '@/lib/api/data';
import React from 'react';

const page = async ({searchParams}) => {

    const data = await browseData()
    const {search} = await searchParams
    const filterData = await searchingData(search)
    console.log(filterData)

    return (
        <div>
            <h1 className='text-center text-2xl font-bold my-5'>This Is Browse Page</h1>

            <AllCards data={data} search={search} filterData={filterData}></AllCards>
        </div>
    );
};

export default page;