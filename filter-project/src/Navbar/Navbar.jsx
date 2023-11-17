import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className='px-20 py-8'>
            <ul className='flex items-center flex-wrap justify-between'>
                <li className='px-2 py-2 text-white bg-red-500'>
                   <Link to='/home'> <a href="">More data</a></Link>
                </li>

                <li className='px-2 py-2 text-white bg-red-500'>
                    <Link to='/searchbyfilter'><a href="">Search Filter</a></Link>
                 </li>
                <li className='px-2 py-2 text-white bg-red-500'>
                    <Link to='/onsearchbyfilter'><a href="">OnSearch Filter</a></Link>
                 </li>

                

                <li className='px-2 py-2 text-white bg-red-500'>
                    <Link to='/bycategory'><a href="">BY Category</a>
                    </Link>
                </li>

                <li className='px-2 py-2 text-white bg-red-500'>
                    <Link to='/listandgird'><a href="">ListandView</a></Link>
                </li>

                <li className='px-2 py-2 text-white bg-red-500'>
                    <Link to='/sorting'><a href="">sorting</a></Link>
                </li>

                <li className='px-2 py-2 text-white bg-red-500'>
                    <Link to='/model'><a href="">Model</a></Link>
                </li>
                <li className='px-2 py-2 text-white bg-red-500'>
                    <Link to='/apmodel'><a href="">ApModel</a></Link>
                </li>
                <li className='px-2 py-2 text-white bg-red-500'>
                    <Link to='/acdriom'><a href="">Acdirom</a></Link>
                </li>
                <li className='px-2 py-2 text-white bg-red-500'>
                    <Link to='/headles'><a href="">headlesModel</a></Link>
                </li>
                <li className='px-2 py-2 text-white bg-red-500'>
                    <Link to='/menubar'><a href="">MenuBar</a></Link>
                </li>
                <li className='px-2 py-2 text-white bg-red-500'>
                    <Link to='/recapture'><a href="">Recapture</a></Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;