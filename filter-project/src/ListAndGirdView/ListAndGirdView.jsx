import React, { useState } from 'react';
import GirdView from './GirdView/GirdView';
import ListView from './ListView/ListView';

const ListAndGirdView = () => {
    const [view, setView] = useState(false)
    return (
        <div>
            <div className='pt-12 px-40 flex items-center space-x-8 cursor-pointer'>
                
                    <p onClick={() =>setView(false)} className='py-2 px-8 text-white bg-red-500'>Gird View</p>
                   
                    
                    <p onClick={() =>setView(true)} className='py-2 px-8 text-white bg-red-500'>List View</p>


                    <p onClick={() =>setView(true)} className='py-2 px-8 text-white bg-red-500'>2 box</p>
                    
              
            </div>

            {
                view === true ? 
                <>
                <ListView></ListView>
                
                </>
                :
                <>
                <GirdView></GirdView>
                </>
            }
            
            
        </div>
    );
};

export default ListAndGirdView;