import { useState } from "react";
import './Model.css'

const Model = () => {
    const [model, setModel] = useState(false)
    const toggle = () => setModel(!model)
    return (
        <div>
            <button onClick={() => toggle()}>Model</button>
            {
                model ?
                    <div className={`modelContent ${model? "model":""}`} onClick={() => toggle()}>
                        <div className="model" onClick={(e) => e.stopPropagation()}>
                            <div>
                                <button className="bg-red-500 px-4 py-2" onClick={() => toggle()}>Close</button>
                                <h2>This is model</h2>
                            </div>
                            <div className="footer py-2 flex items-center space-x-4">
                                <button onClick={() => toggle()} className="bg-red-500 px-4 py-2">Close</button>
                                <button className="bg-red-500 px-4 py-2">Submite</button>
                            </div>
                        </div>
                    </div>


                    : null
            }
        </div>
    );
};

export default Model;