import CardDetails from '@/component/CardDetails';
import { browseIdData } from '@/lib/api/data';
import React from 'react';

const page = async ({params}) => {

    const {id} = await params
    const data = await browseIdData(id)
    console.log(data)

    return (
        <div>
            <CardDetails event={data}></CardDetails>
        </div>
    );
};

export default page;