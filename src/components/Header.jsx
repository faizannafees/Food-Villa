import { logo } from "../../assests/indes.js";

//named export
export const Title = () => {
    return (
        <a href="/">
        <img  className="logo" src={logo} alt="logo" />
        </a>
    );
}

//export default
const Header = () =>(
    <div className="header">
        <Title />
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>    
)

export default Header;