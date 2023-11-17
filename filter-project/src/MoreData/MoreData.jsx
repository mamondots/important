import React, { useEffect, useState } from 'react';

const MoreData = () => {
    const [items, setItems] = useState([])
    const [visible,setVisible] = useState(6)
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])

    const loadItem = () =>{
        setVisible((prevValue) => prevValue + 6)
    }
    return (
        <div className='px-20 py-8'>
            <h2 className='text-center font-semibold text-4xl'>Load data by 6 items</h2>

            <div className="px-12 py-20 flex items-center justify-center gap-5 flex-wrap">

                {
                    items.slice(0,visible).map((item, index) => <div key={index}
                    className=" px-4 py-2 border text-center"
                    >

                        <h2>{item.name}</h2>
                        <p>{item.job}</p>
                        <p>{item.categore}</p>

                    </div>)
                }

                <button onClick={loadItem} className="px-4 py-2 border bg-[red] text-white">More item</button>

            </div>

        </div>
    );
};

export default MoreData;