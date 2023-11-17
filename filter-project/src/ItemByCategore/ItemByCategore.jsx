import React, { useEffect, useState } from 'react';
import './ItemByCategore.css'

const ItemByCategore = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])

    const [toggle, setToggle] = useState(1)
    const toggleTab = (index) => {
        setToggle(index)
    }


    const devFont = items.filter((item) => item.categore === 'font')
    const devBack = items.filter((item) => item.categore === 'back')
    const devJunior = items.filter((item) => item.categore === 'junior')



    return (
        <div className='px-20 py-8'>
            <h2 className='text-center font-semibold text-4xl'>Filter By Category</h2>

            <div className='flex items-center space-x-4 cursor-pointer'>
                <button
                    onClick={() => toggleTab(1)}
                    className={toggle === 1 ? "tabs active-tabs" : "px-4 py-2 text-white bg-green-400 tabs"}

                >All</button>

                <button
                    onClick={() => toggleTab(2)}
                    className={toggle === 2 ? "tabs active-tabs" : "px-4 py-2 text-white bg-green-400 tabs"}>FontEnd</button>

                <button
                    onClick={() => toggleTab(3)}
                    className={toggle === 3 ? "tabs active-tabs" : "px-4 py-2 text-white bg-green-400 tabs"}
                >BackEnd</button>

                <button
                    onClick={() => toggleTab(4)}
                    className={toggleTab === 4 ? "tabs active-tabs" : "px-4 py-2 text-white bg-green-400 tabs"}

                >Junior</button>
            </div>

            <div className="px-12 py-12 flex items-center justify-center gap-5 flex-wrap">

                <div className={toggle === 1 ? "content active-content" : "content"}>
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

                <div className={toggle === 2 ? "content active-content" : "content"}>
                    <div className="px-12 py-12 flex items-center justify-center gap-5 flex-wrap">

                        {
                            devFont.map((item, index) => <div key={index}
                                className=" px-4 py-2 border text-center"
                            >

                                <h2>{item.name}</h2>
                                <p>{item.job}</p>
                                <p>{item.categore}</p>

                            </div>)
                        }



                    </div>
                </div>

                <div className={toggle === 3 ? "content active-content" : "content"}>
                    <div className="px-12 py-12 flex items-center justify-center gap-5 flex-wrap">

                        {
                            devBack.map((item, index) => <div key={index}
                                className=" px-4 py-2 border text-center"
                            >

                                <h2>{item.name}</h2>
                                <p>{item.job}</p>
                                <p>{item.categore}</p>

                            </div>)
                        }



                    </div>
                </div>

                <div className={toggle === 4 ? "content active-content" : "content"}>
                    <h2>this is four part</h2>
                </div>


            </div>
        </div>
    );
};

export default ItemByCategore;