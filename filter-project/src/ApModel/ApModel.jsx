import React, { useEffect, useState } from 'react';
import './ApModel.css'

const ApModel = () => {

    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])

    const [popupContent, setPopupContent] = useState([])
    const [popupTogle, setPopupTogle] = useState(false)
    const changeContent = (item) => {
        setPopupContent([item])
        setPopupTogle(!popupTogle)
    }

    return (
        <div className='px-20 py-8'>

            <h2>Display model by id</h2>

            <div className="px-12 py-20 grid grid-cols-4 gap-4">

                {
                    items.slice(0, 6).map((item, index) => <div key={index}
                        className=" px-4 py-2 border text-center"
                    >

                        <h2>{item.name}</h2>
                        <p>{item.job}</p>
                        <p>{item.categore}</p>
                        <p>{item.id}</p>
                        <button onClick={() => changeContent(item)} className='px-4 py-2 bg-red-500 text-white cursor-pointer'>Details</button>

                    </div>)
                }



            </div>

            {
                popupTogle && <div className='popup-container' onClick={changeContent}>
                    <div className='popup-body' onClick={(e) => e.stopPropagation()}>
                        <div className='popup-header'>
                            <button onClick={changeContent} className='px-4 py-2 bg-red-500 text-white cursor-pointer'>close</button>
                        </div>
                        <div className='popup-content'>
                            {
                                popupContent.map((pop, index) => {
                                    return (
                                        <div key={index}>
                                            <h2>{pop.name}</h2>
                                            <p>{pop.job}</p>
                                            <p>{pop.categore}</p>
                                            <p>{pop.id}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            }



        </div>
    );
};

export default ApModel;