import React, { useEffect, useState } from 'react';

const Acdriom = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('acdiom.json')
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])

    const [clicked,setClicked] = useState(false)
    const toggle = index =>{
        if(clicked === index){
            return setClicked(null)
        }
        else{
            setClicked(index)
        }
    }
    return (
        <div className='py-20 px-20'>
           <h2 className='text-center text-4xl'>Accordiam</h2>

           <div className='space-y-2'>
               {
                items.map((item,index) =><div key={item.id}>

                       <div onClick={() =>toggle(index)}>
                       <h2 className='px-4 py-2 bg-red-500'>{item.quesition}</h2>
                       <span>{clicked === index? "open":"close"}</span>
                       </div>

                       {clicked === index? ( <div>    
                        <p className='px-4 py-8 bg-green-500'>{item.ans}</p>
                        </div>):null}
                       

                </div>)
               }
           </div>
        </div>
    );
};

export default Acdriom;