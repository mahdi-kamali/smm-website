import { Icon } from '@iconify/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useFetcher, useNavigate } from 'react-router-dom';
const Header = () => {


    const [currentPage, setCurrentPage] = useState("main-page")
    const navigator = useNavigate()


    const [scrollPosition, setScrollPosition] = useState(0);



    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };



    useEffect(
        () => {
            window.addEventListener("scroll", handleScroll, { passive: true })
        },
        [])


    function changePage(pageName) {
        navigator(pageName)
        setCurrentPage(pageName)
    }



    function createMenu(pageName) {

        return (
            <li
                className=
                {currentPage === pageName ? "selected" : ""}
                onClick={() => { changePage(pageName) }}
            >
                {pageName}
            </li>
        )
    }


    const headerStyle = {
        borderRadius: scrollPosition > 100 ? "0 0 10rem 10rem" : "0" ,
        backgroundColor : scrollPosition > 100 ? "#3165f3" : "transparent" 
    }



    return (
        <header style={headerStyle}>
            <div className="left">
                <img src={require("../../../images/header/logo.png")} alt="" className="logo" />
            </div>
            <div className="right">
                <ul className="menu">
                    {createMenu("services")}
                    {createMenu("Contact us")}
                    {createMenu("About us")}
                    {createMenu("Login")}
                    {createMenu("Sign-Up")}
                    {createMenu("home")}
                </ul>
            </div>
        </header>
    )
}

export default Header