import { Icon } from '@iconify/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useFetcher, useNavigate } from 'react-router-dom';
const Header = () => {




    const menuList = [
        {
            title: "Home",
            route: "/home",
            icon: <Icon icon="majesticons:home" />
        },
        {
            title: "Account",
            route: "/auth",
            icon : <Icon icon="mdi:account" />
        },
        {
            title: "FAQS",
            route: "/faqs",
            icon : <Icon icon="wpf:faq" />
        },
        {
            title: "Blog",
            route: "/blog",
            icon : <Icon icon="uil:blogger" />
        },
        {
            title: "About Us",
            route: "/about-us",
            icon : <Icon icon="mdi:about" />
        },
        {
            title: "API",
            route: "/api",
            icon : <Icon icon="ic:twotone-api" />
        },
        {
            title: "Contact Us",
            route: "/contact-us",
            icon : <Icon icon="entypo:network" />
        },
        {
            title: "Services",
            route: "/services",
            icon : <Icon icon="fluent:data-pie-24-filled" />
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
                                {item.icon}
                                <span>
                                    {item.title}
                                </span>
                            </li>
                        })
                    }
                </ul>
            </div>
        </header>
    )
}

export default Header