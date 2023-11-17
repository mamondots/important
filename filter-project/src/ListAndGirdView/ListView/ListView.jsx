import React, { useEffect, useState } from 'react';

const ListView = () => {
    

    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])

    return (
        <div className='px-20 py-8'>
           

            <div className="px-12 pb-8 space-y-8">

                {
                    items.slice(0,6).map((item, index) => <div key={index}
                    className=" px-4 py-2 border text-center"
                    >

                        <h2>{item.name}</h2>
                        <p>{item.job}</p>
                        <p>{item.categore}</p>

                    </div>)
                }

               

            </div>

        </div>
    );
};

export default ListView;