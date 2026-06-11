import OrganizationManageEvent from '@/component/organizerDashbaord/OrganizationManageEvent';
import { OrganizationEvents } from '@/lib/api/data';
import { ServerSession } from '@/lib/api/server';
import React from 'react';

const page = async () => {

    const user = await ServerSession()
    const events = await OrganizationEvents(user?.email)
    // console.log(events)

    return (
        <div>
            <h2 className='text-3xl font-bold mb-10'>Hello Manage Event</h2>

            <OrganizationManageEvent events={events}></OrganizationManageEvent>
        </div>
    );
};

export default page;