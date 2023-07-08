import { Icon } from '@iconify/react';
const Header = () => {
    return (
        <header>
            <div className="left">
                <img src={require("../../../images/header/logo.png")} alt="" className="logo" />
            </div>
            <div className="right">
                <ul className="menu">
                    <li>Home</li>
                    <li>Contact us</li>
                    <li>About us</li>
                    <li>Faqs</li>
                    <li>Blog</li>
                    <li>API</li>
                    <li>Services</li>
                    <li>Login</li>
                    <li className="selected">
                        <Icon icon="carbon:user-filled" />
                        Sign Up
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header