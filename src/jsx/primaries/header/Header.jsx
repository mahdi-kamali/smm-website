import { Icon } from '@iconify/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useFetcher, useNavigate } from 'react-router-dom';
const Header = () => {




    const menuList = [
        {
            title: "Home",
            route: "/home",
        },
        {
            title: "Account",
            route: "/auth",
        },
        {
            title: "FAQS",
            route: "/faqs",
        },
        {
            title: "Blog",
            route: "/blog",
        },
        {
            title: "About Us",
            route: "/about-us",
        },
        {
            title: "API",
            route: "/api",
        },
        {
            title: "Contact Us",
            route: "/contact-us",
        },
        {
            title: "Services",
            route: "/services",
        }

    ]



    const [currentPage, setCurrentPage] = useState("main-page")
    const navigator = useNavigate()


    const [scrollPosition, setScrollPosition] = useState(menuList[0]);


    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };



    useEffect(
        () => {
            window.addEventListener("scroll", handleScroll, { passive: true })
        },
        [])


    function changePage(item) {
        navigator(item.route)
        setCurrentPage(item.title)
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
        borderRadius: scrollPosition > 100 ? "0 0 10rem 10rem" : "0",
        backgroundColor: scrollPosition > 100 ? "#3165f3" : "transparent"
    }



    return (
        <header style={headerStyle}>
            <div className="left">
                <img src={require("../../../images/header/logo.png")} alt="" className="logo" />
            </div>
            <div className="right">
                <ul className="menu">
                    {
                        menuList.reverse().map((item, index) => {
                            return <li
                                className=
                                {currentPage === item.title ? "selected" : ""}
                                key={index}
                                onClick={() => { changePage(item) }}
                            >
                                {item.title}
                            </li>
                        })
                    }
                </ul>
            </div>
        </header>
    )
}

export default Header