
import { BsFillMoonFill } from 'react-icons/bs';
import './About.css'
import { useState } from 'react';
const About = () => {
    const [toggle,setToggle] = useState(false)
    const bgback = () =>{
        setToggle(!toggle)
        console.log('hmmm')
    }
    return (
        <div className={toggle? "px-20 py-20 dark-mode":"light-mode px-20 py-20"}>
            <h2 className='py-2'>MamonDots</h2>
            <p onClick={bgback} className='cursor-pointer text-xl text-[#262626]'><BsFillMoonFill></BsFillMoonFill></p>
            <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fuga nostrum aliquid officia excepturi impedit voluptates cum est pariatur veritatis, quidem aliquam atque. Recusandae repudiandae voluptatum quis harum dignissimos amet fugiat eius explicabo adipisci consectetur, labore, laborum ipsum fugit quasi ab temporibus error accusamus repellendus!</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fuga nostrum aliquid officia excepturi impedit voluptates cum est pariatur veritatis, quidem aliquam atque. Recusandae repudiandae voluptatum quis harum dignissimos amet fugiat eius explicabo adipisci consectetur, labore, laborum ipsum fugit quasi ab temporibus error accusamus repellendus!</p>

        </div>
    );
};

export default About;