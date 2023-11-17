import React, { useEffect, useState } from 'react';

const SearchByFilter = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])

    const searchItems = (e) =>{
        const search = e.target.value.toLowerCase()
        const filterSearch = items.filter((item) => item.name.toLowerCase().includes(search))
        setItems(filterSearch)
    }
    return (
        <div className='px-20 py-8'>
            <h2 className='text-center font-semibold text-4xl'>Search item by filter</h2>

            <div className='w-full  pt-12 px-20'>
                <input onChange={(e) =>searchItems(e)}  type="text" className="border py-2 px-12 w-full" placeholder="search item" />
            </div>

            <div className="px-12 py-12 flex items-center justify-center gap-5 flex-wrap">

                {
                    items.map((item, index) => <div key={index}
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

export default SearchByFilter;