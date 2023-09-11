import { Icon } from '@iconify/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useFetcher, useLocation, useNavigate } from 'react-router-dom';
const Header = (
    {
        userPanelMenuState,
        setUserPanelMenuState,
        mainMenuState,
        setMainMenuState
    }

) => {






    const menuList = [
        {
            title: "Home",
            route: "/home",
            icon: <Icon icon="majesticons:home" />
        },
        {
            title: "Account",
            route: "/auth",
            icon: <Icon icon="mdi:account" />
        },
        {
            title: "FAQS",
            route: "/faqs",
            icon: <Icon icon="wpf:faq" />
        },
        {
            title: "Blog",
            route: "/blog",
            icon: <Icon icon="uil:blogger" />
        },
        {
            title: "About Us",
            route: "/about-us",
            icon: <Icon icon="mdi:about" />
        },
        {
            title: "API",
            route: "/api",
            icon: <Icon icon="ic:twotone-api" />
        },
        {
            title: "Contact Us",
            route: "/contact-us",
            icon: <Icon icon="entypo:network" />
        },
        {
            title: "Services",
            route: "/services",
            icon: <Icon icon="fluent:data-pie-24-filled" />
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

    useEffect(() => {
        setMainMenuState(false)
    }, [
        currentPage
    ])


    function changePage(item) {
        navigator(item.route)
        setCurrentPage(item.title)
    }



    const headerStyle = {
        borderRadius: scrollPosition > 100 ? "0 0 10rem 10rem" : "0",
        backgroundColor: scrollPosition > 100 ? "#3165f3" : "transparent"
    }



    const location = useLocation().pathname;


    const toggleMenu = () => {

        if (location === "/user/dashboard") {
            setUserPanelMenuState(!userPanelMenuState)
        }
        else {
            setMainMenuState(!mainMenuState)
        }

    }



    return (
        <header style={headerStyle}>
            <div className="left">
                <img
                    src={require("../../../images/header/logo.png")}
                    className="logo" />
            </div>
            <div className={`right right-${mainMenuState}`}>
                <ul className={`menu`}>
                    <Icon
                        onClick={() => setMainMenuState(false)}
                        className='menu-close'
                        icon="zondicons:close-solid" />
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
            <Icon
                onClick={toggleMenu}
                className='menu-icon'
                icon="ep:menu" />



        </header>
    )
}

export default Header