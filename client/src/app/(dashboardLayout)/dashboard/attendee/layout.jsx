import AttendeeSidebar from '@/component/attendeeDashboard/AttendeeSideBar';
import React from 'react';

const layout = ({children}) => {
    
    return (
        <div className='flex'>
            <AttendeeSidebar></AttendeeSidebar>
            
            <div className='w-full ml-10 mt-10'>
                {children}
            </div>
        </div>
    );
};

export default layout;