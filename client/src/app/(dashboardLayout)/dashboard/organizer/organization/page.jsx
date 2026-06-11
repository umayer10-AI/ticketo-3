import FormSubmittedShowing from '@/component/organizerDashbaord/FormSubmittedShowing';
import OrganizerOrganization from '@/component/organizerDashbaord/OrganizerOrganization';
import { myOrganization } from '@/lib/api/data';
import { ServerSession } from '@/lib/api/server';
import React from 'react';

const page = async () => {

    const user = await ServerSession()
    const exist = await myOrganization(user?.email)
    console.log(exist.org)

    let show;
    if(exist.org){
        show = <FormSubmittedShowing></FormSubmittedShowing>
    }
    else{
        show = <OrganizerOrganization></OrganizerOrganization>
    }

    return (
        <div>
            <h2 className='text-3xl font-bold mb-10'>Hello Organization</h2>
            
            {show}
            {/* <OrganizerOrganization></OrganizerOrganization> */}
        </div>
    );
};

export default page;