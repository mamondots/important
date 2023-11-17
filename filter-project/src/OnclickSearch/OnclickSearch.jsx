import React, { useEffect, useState } from 'react';

const OnclickSearch = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])

    const handleSearch = (e) =>{
        e.preventDefault()
        const search = e.target.value.toLowerCase()
        const filterSearch = items.filter((item) => item.name.toLowerCase().includes(search))
        setItems(filterSearch)
    }
    return (
        <div className='px-20 py-8'>
            <h2 className='text-center font-semibold text-4xl'>Onclick Search item by filter</h2>

            <div className='w-full  pt-12 px-20'>
               <form onSubmit={(e) =>handleSearch(e)} className='flex items-center space-x-2'>
               <input type="text" className="border py-2 px-12 w-full" placeholder="search item" />
               <button className='py-2 px-8 text-white bg-red-600'>search</button>
               </form>
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

export default OnclickSearch;