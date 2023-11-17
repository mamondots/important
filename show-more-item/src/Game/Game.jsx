import { useState } from "react";

const option =["cricket","football", "hockey"]
const weeks = ["sunday","monday"]
const Game = () => {
    const [games,setGames] = useState([])
    const [days,setDays] = useState([])
    return (
        <div className="px-40 py-20">
            <div>
            {
                option.map((item,index) => <div key={index}>
                    <input type="radio" name="" value={item} onChange={(e) => setGames(e.target.value)}  />
                    <label className="px-2">{item}</label>
                </div>)
            }
            </div>

            <div>
                <h2>selete day</h2>
            {
                weeks.map((day,index) => <div key={index}>
                    <input type="radio" name="" value={day} onChange={(e) => setDays(e.target.value)}  />
                    <label className="px-2">{day}</label>
                </div>)
            }
            </div>
            <p>Games name:{games} on {days}</p>
        </div>
    );
};

export default Game;