import Category from './Category/Category';
import Colors from './Colors/Colors';
import Price from './Price/Price';
import './Sidebar.css'

const Sidebar = ({ handleChange }) => {
    return (
        <div>
            <section className="sidebar">
                <div className="logo-container">
                    <h1>🛒</h1>
                </div>
                <Category handleChange={handleChange}></Category>
                <Colors handleChange={handleChange}></Colors>
                <Price handleChange={handleChange}></Price>
            </section>
        </div>
    );
};

export default Sidebar;