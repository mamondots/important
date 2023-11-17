import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Password = () => {
    const [show,setShow] = useState(false)
     const handleClick = () =>{
        setShow(!show)
     }
    return (
        <div className="flex flex-col items-center justify-center py-40">
            <h2 className="text-xl font-medium py-8">This is password show and hide tutorial </h2>
            <div className='flex items-center justify-between'>
                 <input className="py-2 px-4 border w-[60vh]" type={show ? "text":"password"} placeholder="Enter your password" />
                 <p onClick={handleClick} className='ml-[-5vh] text-xl cursor-pointer hover:text-[red] duration-300'>{show ? <AiOutlineEyeInvisible></AiOutlineEyeInvisible>:<AiOutlineEye></AiOutlineEye>}</p>
            </div>
        </div>
    );
};

export default Password;