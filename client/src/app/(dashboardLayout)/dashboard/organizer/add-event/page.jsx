import OrganizationEvent from '@/component/organizerDashbaord/OrganizationEvent';
import React from 'react';

const page = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold mb-10'>Hello Add Event</h2>

            <OrganizationEvent></OrganizationEvent>
        </div>
    );
};

export default page;