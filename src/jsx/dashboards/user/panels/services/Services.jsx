import React, { useState } from 'react'



import aniamtion from "../../../../../animations/social-m-2.json"
import Lottie from 'react-lottie-player'



import searchSVG from "../../../../../images/panel/search-service/focus.svg"
import { Icon } from '@iconify/react'
import SelectSearch from 'react-select-search'
import SearchMediaItem from './components/SearchMediaItem'
import { useDispatch, useSelector } from 'react-redux'
import { showCurrencyPopUp, showPopUp } from '../../../../../features/popUpReducer'
import { SELECT_CURRENCY_POP_UP, SELECT_CATEGORY_POP_UP as SELECT_CATEGORY_POP_UP, SELECT_SERVICE_POP_UP } from '../../../../pop-ups/Constaints'
import SelectCurrencyPopUp from '../../../../pop-ups/SelectCurrencyPopUp'
import SelectCategoryPopUp from '../../../../pop-ups/SelectCategoryPopUp'
import SelectServicePopUp from '../../../../pop-ups/SelectServicePopUp'



const Services = () => {


    const dispatcher = useDispatch()











    const searchMediaItems = [
        {
            title: "skype",
            svg: require("../../../../../images/services-page/services/social-icons/skype.png")
        },
        {
            title: "spotify",
            svg: require("../../../../../images/services-page/services/social-icons/spotify.png")
        },
        {
            title: "telegram",
            svg: require("../../../../../images/services-page/services/social-icons/telegram.png")
        },
        {
            title: "discord",
            svg: require("../../../../../images/services-page/services/social-icons/discord.png")
        },
        {
            title: "twitter",
            svg: require("../../../../../images/services-page/services/social-icons/twitter.png")
        },
        {
            title: "instagram",
            svg: require("../../../../../images/services-page/services/social-icons/instagram.png")
        },
        {
            title: "whatsapp",
            svg: require("../../../../../images/services-page/services/social-icons/whatsapp.png")
        },
        {
            title: "snapchat",
            svg: require("../../../../../images/services-page/services/social-icons/snapchat.png")
        },
    ]


    const [selectedMedia, setSelectedMedia] = useState(searchMediaItems[5])
    const [selectedCurrency, setSelectedCurrency] = useState({
        unit: "INR",
        symbol: "₹"
    })
    const [selectedCategory, setSelectedCategory] = useState(
        { symbol: "", title: "All Categories", value: "ID1" },
    );
    const [selectedService, setSelectedService] = useState({
        "Service": "None!",
    },)


    const openCurrencyPopup = () => {
        dispatcher(showPopUp({
            type: SELECT_CURRENCY_POP_UP,
            duration: 2000,
            component: <SelectCurrencyPopUp
                resultFunction={(item) => setSelectedCurrency(item)}
                currentSelected={selectedCurrency} />
        }))
    }


    const openCategoriesFilterPopUp = () => {
        dispatcher(showPopUp({
            type: SELECT_CATEGORY_POP_UP,
            duration: 2000,
            component: <SelectCategoryPopUp
                resultFunction={(item) => setSelectedCategory(item)}
                currentSelected={selectedCategory} />
        }))
    }


    const openSelectServicePopUp = () => {
        dispatcher(showPopUp({
            type: SELECT_SERVICE_POP_UP,
            duration: 2000,
            component: <SelectServicePopUp
                resultFunction={(item) => setSelectedService(item)}
                currentSelected={selectedService} />
        }))
    }




    return (
        <section className='panel-services'>

            <div className="hero">

                <div className="left">
                    <Lottie
                        play
                        loop
                        animationData={aniamtion} />
                </div>
                <div className="right">
                    <div className='slogon'>
                        <span>Find Your </span>
                        <span className='filled'>Social Media Services</span>
                        <span> Explore with SMM Search Services</span>
                    </div>
                </div>
            </div>



            <div className="search-media">
                {
                    searchMediaItems.map((item, index) => {
                        return <SearchMediaItem
                            data={item}
                            key={index}
                            currentSelectedMedia={selectedMedia}
                            clickFunction={() => { setSelectedMedia(item) }}
                        />
                    })
                }
            </div>




            <div className="services">
                <div className="left">
                    <div className="category-search">
                        <fieldset
                            onClick={openCategoriesFilterPopUp} >
                            <legend>
                                <Icon icon="mdi:category-plus" />
                                <span>Category</span>
                            </legend>
                            <div className="content">
                                <span className='id'>
                                    {selectedCategory.value}
                                </span>
                                <button   >
                                    <span >
                                        {selectedCategory.symbol}
                                    </span>
                                    <span>
                                        {selectedCategory.title}
                                    </span>
                                </button>
                                <Icon icon="ic:round-arrow-drop-down-circle" />
                            </div>
                        </fieldset>
                        <fieldset onClick={openCurrencyPopup}>
                            <legend>
                                <Icon icon="ri:currency-fill" />
                                <span>Currency</span>
                            </legend>
                            <div className="content">
                                <span className='id'>
                                    {selectedCurrency.symbol}
                                </span>
                                <button    >
                                    <span>
                                        {selectedCurrency.unit}
                                    </span>
                                </button>
                                <Icon icon="ic:round-arrow-drop-down-circle" />
                            </div>
                        </fieldset>
                        <fieldset onClick={openSelectServicePopUp}>
                            <legend>
                                <Icon icon="ion:rocket" />
                                <span>Services</span>
                            </legend>
                            <div className="content">
                                <span className='id'>
                                    {selectedService?.Service_id}
                                </span>
                                <button>
                                    <span>
                                        {selectedService?.Service}
                                    </span>
                                </button>
                                <Icon icon="ic:round-arrow-drop-down-circle" />
                            </div>
                        </fieldset>
                    </div>

                </div>
                <div className="right">

                </div>
            </div>




            <img
                src={searchSVG}
                className="search-background background" />



        </section >
    )
}

export default Services











