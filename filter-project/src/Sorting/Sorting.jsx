import React, { useEffect, useState } from 'react';
import './Sorting.css'
const Sorting = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])
	//first-line
    const [currentPage, setCurrentPage] = useState(1)
	//second line
    const [limit, setLimite] = useState(3)
	//11th line
    const [pageNumberlimit, setPageNumberlimit] = useState(5)
	//12th line
    const [maxPageNumberlimit, setMaxPageNumberlimit] = useState(5)
	//13th line
    const [minPageNumberlimit, setMinPageNumberlimit] = useState(0)

	//3rd line
    const pages = []
	//4th line
    for (let i = 1; i <= Math.ceil(items.length / limit); i++) {
        pages.push(i)
    }
	
	
	//9th line
    const handleClick = (e) => {
        setCurrentPage(Number(e.target.id))
    }

   //5th line just li // 10 th line not included if //14 th line use if
    const renderPageNumber = pages.map((number) => {
        if (number < maxPageNumberlimit + 1 && number > minPageNumberlimit) {
            return (
                <li key={number} id={number} onClick={handleClick}
                    className={currentPage == number ? "active" : null}
                >
                    {number}
                </li>
            )
        }
        else {
            return null
        }

    })
	//6th line
    const indexOfLastItem = currentPage * limit;
	//7th line
    const indexOfFirstItem = indexOfLastItem - limit;
	//8th line
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

	//17th line
    const handleNexBtn = () =>{
        setCurrentPage(currentPage+1)

        if(currentPage+1 > maxPageNumberlimit){
            setMaxPageNumberlimit(maxPageNumberlimit+pageNumberlimit) 
            setMinPageNumberlimit(minPageNumberlimit+pageNumberlimit) 
        }
    }

	//18th line
    const handlePrevBtn = () =>{
        setCurrentPage(currentPage-1)

        if((currentPage-1) % pageNumberlimit == 0){
            setMaxPageNumberlimit(maxPageNumberlimit-pageNumberlimit) 
            setMinPageNumberlimit(minPageNumberlimit-pageNumberlimit) 
        }
    }
	
	//19th line
    let pagesIncrementBtn = null;
    if(pages.length > maxPageNumberlimit){
        pagesIncrementBtn = <li onClick={handleNexBtn}> ...</li>
    }

	//20th line
    let pagesDicrementBtn = null;
    if(minPageNumberlimit >= 1){
        pagesDicrementBtn = <li onClick={handlePrevBtn}> ...</li>
    }

    return (
        <div className='px-20 py-8'>


            <div className="px-12 py-20 grid grid-cols-4 gap-4">

                {
                    currentItems.map((item, index) => <div key={index}
                        className=" px-4 py-2 border text-center"
                    >

                        <h2>{item.name}</h2>
                        <p>{item.job}</p>
                        <p>{item.categore}</p>

                    </div>)
                }



            </div>

            <div className='flex  list-none pageNumder cursor-pointer'>
			//15th line just button
                <li>
                    <button onClick={handlePrevBtn} disabled={currentPage == pages[0] ? true: false}>Prev</button>
                </li>
                {pagesDicrementBtn}
                {renderPageNumber}
                {pagesIncrementBtn}
				//16 line th just button
                <li>
                    <button onClick={handleNexBtn} disabled={currentPage == pages[pages.length-1] ? true: false}>Next</button>
                </li>
            </div>

        </div>
    );
};

export default Sorting;