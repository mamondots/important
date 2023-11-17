import { useEffect, useState } from "react";


const Home = () => {
    const [items, setItems] = useState([])
    const [visible, setVisible] = useState(6)
   
    useEffect(() =>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data =>{
            setItems(data)
        })
    },[])

    //when we want to search by letter

    const mapData = () =>{
        const filterData = items.filter((item) =>{
            return item.name.includes('Emily')
        })
        setItems(filterData)
    }

    //load more data

    const moreData = () =>{
        setVisible((prevValue) => prevValue + 3)
    }

        //search bar

        const searchBar = (e) =>{
            const search = e.target.value.toLowerCase()
            const filterSearch = items.filter((item) => item.name.toLowerCase().includes(search))
            setItems(filterSearch)
        }

        const fontCate = () =>{
            const stFont = items.filter((item) =>item.categore ==='font')
            setItems(stFont)
        }
        const juniorCate = () =>{
            const jpFont = items.filter((item) =>item.categore ==='junior')
            setItems(jpFont)
        }
  

    return (
        <div className="px-20 py-20 flex items-center justify-center gap-5 flex-wrap">

            {
               items.slice(0,visible).map(item =><div key={item.id} className=" px-4 py-2 border text-center">
               <h2>{item.name}</h2>
               <p>{item.job}</p>
               <p>{item.categore}</p>
           </div>) 
            }

            <button onClick={mapData} className="px-4 py-2 border bg-[red] text-white">Serarc</button>
            <button onClick={moreData} className="px-4 py-2 border bg-[red] text-white">More data</button>
            <div>
                 <input onChange={(e) =>searchBar(e)} type="text" className="border py-2 px-2 " placeholder="search item" />
                 <button className="bg-[pink] px-2 py-2">Search Item</button>
                 <button onClick={fontCate} className="px-4 py-2 bg-[red] text-white ml-12">fontend</button>

                 <button onClick={juniorCate} className="px-4 py-2 bg-[red] text-white ml-12">junior</button>

                 
            </div>
            
        </div>
    );
};

export default Home;