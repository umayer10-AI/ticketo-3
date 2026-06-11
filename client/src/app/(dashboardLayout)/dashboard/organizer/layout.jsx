import OrganizerSidebar from '@/component/organizerDashbaord/OrganizerSidebar';
import React from 'react';

const layout = ({children}) => {
    
    return (
        <div className='flex'>
            <OrganizerSidebar></OrganizerSidebar>
            
            <div className='w-full ml-10 mt-10'>
                {children}
            </div>
        </div>
    );
};

export default layout;