

// Swiper Js
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';





// Puzzle Man 
import { Icon } from "@iconify/react";
import puzzleMan from "../../../images/services-page/services/search/With Puzzle (Man).svg"



// Search
import SelectSearch from 'react-select-search';
import { useState } from 'react';





const socialIcons = [
    {
        title: "skype",
        svg: require("../../../images/services-page/services/social-icons/skype.png")
    },
    {
        title: "spotify",
        svg: require("../../../images/services-page/services/social-icons/spotify.png")
    },
    {
        title: "telegram",
        svg: require("../../../images/services-page/services/social-icons/telegram.png")
    },
    {
        title: "discord",
        svg: require("../../../images/services-page/services/social-icons/discord.png")
    },
    {
        title: "twitter",
        svg: require("../../../images/services-page/services/social-icons/twitter.png")
    },
    {
        title: "instagram",
        svg: require("../../../images/services-page/services/social-icons/instagram.png")
    },
    {
        title: "whatsapp",
        svg: require("../../../images/services-page/services/social-icons/whatsapp.png")
    },
    {
        title: "snapchat",
        svg: require("../../../images/services-page/services/social-icons/snapchat.png")
    },
]


const options = [
    { name: 'Service-one', value: 'Service-one' },
    { name: 'Service-two', value: 'Service-two' },
    { name: 'Service-three', value: 'Service-three' },
    { name: 'Service-four', value: 'Service-four' },
    { name: 'Service-five', value: 'Service-five' },
    { name: 'Service-six', value: 'Service-six' },
    { name: 'Service-seven', value: 'Service-seven' },
    {
        type: 'group',
        name: 'Group name',
        items: [
            { name: 'Spanish', value: 'es' },
        ]
    },
];









const ServicesPage = () => {


    const [carsdCount, setCardsCount] = useState(5)


    return (
        <main className="services-page">
            <section className="poster">
                <div className="left">
                    <img src={require("../../../images/services-page/char.png")} alt="" />
                </div>
                <div className="right">
                    <h1>
                        UNLEASH YOUR <br />
                        SOCIAL MEDIA POTENTIAL <br />
                        WITH OUR <br />
                        PREMIUM SERVICES
                    </h1>
                    <p>
                        Ignite your social media potential with our expert services. Choose from a wide range of options to amplify your brand, connect with your audience, and unlock limitless opportunities. Take charge of your online presence and harness the unparalleled power of social media today.
                    </p>
                    <button>
                        GO DEEPLY
                    </button>
                </div>
            </section>

            <section className="search">
                <div className="left">
                    <img src={puzzleMan} alt="" />
                </div>
                <form className="right" action="#">
                    <div className="form-search">
                        <Icon icon="iconamoon:search" />
                        <input
                            type="text"
                            name="search"
                            placeholder="Instagram services...."
                        />


                    </div>
                    <div className="select-box">
                        <SelectSearch
                            options={options}
                            name="language"
                            placeholder="All Services"
                        />
                        <SelectSearch
                            options={options}
                            name="language"
                            placeholder="USD" />
                    </div>
                </form>
            </section>


            <section className="social-icons">

                {
                    socialIcons.map((item, index) => {

                        return (

                            <div
                                className={`item 
                                ${index === 5 ? `selected` : ``
                                    }`}
                                key={index}>
                                <div
                                    className="item-header">
                                    <img src={item.svg} alt="" />
                                </div>
                                <div
                                    className="item-body">
                                    {item.title}
                                </div>
                            </div>
                        )

                    })
                }



            </section>


            <section className="suggested-services">

                <div className="top-sales list">
                    <Swiper
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={25}
                        slidesPerView={carsdCount}
                        navigation={{
                            nextEl: ".arrow-right",
                            prevEl: ".arrow-left",
                            disabledClass: "arrow-disabled"
                        }}
                        pagination={
                            {
                                clickable: true,
                                el: ".swiper-custom-pagination"
                            }
                        }

                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide className='first-slide slide'>
                            <div className="card">
                                <div className="header">
                                    <img
                                        src={require("../../../images/services-page/services/suggestions-offers/1.png")} />
                                </div>
                                <div className="body">
                                    <h1>NEW SERVICES</h1>
                                    <small>
                                        New Upcoming Services , Ready For Boosting Your Account
                                    </small>
                                </div>
                                <div className="button">
                                    <button>
                                        See all
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='normal-slide slide'>
                            <div className="header">
                                <img
                                    src={require("../../../images/services-page/services/suggestions-offers/icon-2.png")} />
                            </div>
                            <div className="body">
                                <h1>
                                    Instagram - Comment
                                </h1>
                                <ul>
                                    <li>
                                        Video + TV + Reel
                                    </li>
                                    <li>
                                        Instant
                                    </li>
                                    <li>
                                        Working After Update
                                    </li>
                                    <li>
                                        Min Order : 10
                                    </li>
                                    <li>
                                        Max Order : 500000
                                    </li>
                                </ul>
                            </div>
                            <div className="button">
                                <h2>
                                    <span>
                                        $2.85
                                    </span>
                                    <small>
                                        PER 1000
                                    </small>
                                </h2>
                                <button>
                                    <span>
                                        See & Buy
                                    </span>
                                    <Icon icon="clarity:shopping-cart-solid" />
                                </button>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='normal-slide slide'>
                            <div className="header">
                                <img
                                    src={require("../../../images/services-page/services/suggestions-offers/icon-2.png")} />
                            </div>
                            <div className="body">
                                <h1>
                                    Instagram - Comment
                                </h1>
                                <ul>
                                    <li>
                                        Video + TV + Reel
                                    </li>
                                    <li>
                                        Instant
                                    </li>
                                    <li>
                                        Working After Update
                                    </li>
                                    <li>
                                        Min Order : 10
                                    </li>
                                    <li>
                                        Max Order : 500000
                                    </li>
                                </ul>
                            </div>
                            <div className="button">
                                <h2>
                                    <span>
                                        $2.85
                                    </span>
                                    <small>
                                        PER 1000
                                    </small>
                                </h2>
                                <button>
                                    <span>
                                        See & Buy
                                    </span>
                                    <Icon icon="clarity:shopping-cart-solid" />
                                </button>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='normal-slide slide'>
                            <div className="header">
                                <img
                                    src={require("../../../images/services-page/services/suggestions-offers/icon-2.png")} />
                            </div>
                            <div className="body">
                                <h1>
                                    Instagram - Comment
                                </h1>
                                <ul>
                                    <li>
                                        Video + TV + Reel
                                    </li>
                                    <li>
                                        Instant
                                    </li>
                                    <li>
                                        Working After Update
                                    </li>
                                    <li>
                                        Min Order : 10
                                    </li>
                                    <li>
                                        Max Order : 500000
                                    </li>
                                </ul>
                            </div>
                            <div className="button">
                                <h2>
                                    <span>
                                        $2.85
                                    </span>
                                    <small>
                                        PER 1000
                                    </small>
                                </h2>
                                <button>
                                    <span>
                                        See & Buy
                                    </span>
                                    <Icon icon="clarity:shopping-cart-solid" />
                                </button>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='normal-slide slide'>
                            <div className="header">
                                <img
                                    src={require("../../../images/services-page/services/suggestions-offers/icon-2.png")} />
                            </div>
                            <div className="body">
                                <h1>
                                    Instagram - Comment
                                </h1>
                                <ul>
                                    <li>
                                        Video + TV + Reel
                                    </li>
                                    <li>
                                        Instant
                                    </li>
                                    <li>
                                        Working After Update
                                    </li>
                                    <li>
                                        Min Order : 10
                                    </li>
                                    <li>
                                        Max Order : 500000
                                    </li>
                                </ul>
                            </div>
                            <div className="button">
                                <h2>
                                    <span>
                                        $2.85
                                    </span>
                                    <small>
                                        PER 1000
                                    </small>
                                </h2>
                                <button>
                                    <span>
                                        See & Buy
                                    </span>
                                    <Icon icon="clarity:shopping-cart-solid" />
                                </button>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='normal-slide slide'>
                            <div className="header">
                                <img
                                    src={require("../../../images/services-page/services/suggestions-offers/icon-2.png")} />
                            </div>
                            <div className="body">
                                <h1>
                                    Instagram - Comment
                                </h1>
                                <ul>
                                    <li>
                                        Video + TV + Reel
                                    </li>
                                    <li>
                                        Instant
                                    </li>
                                    <li>
                                        Working After Update
                                    </li>
                                    <li>
                                        Min Order : 10
                                    </li>
                                    <li>
                                        Max Order : 500000
                                    </li>
                                </ul>
                            </div>
                            <div className="button">
                                <h2>
                                    <span>
                                        $2.85
                                    </span>
                                    <small>
                                        PER 1000
                                    </small>
                                </h2>
                                <button>
                                    <span>
                                        See & Buy
                                    </span>
                                    <Icon icon="clarity:shopping-cart-solid" />
                                </button>

                            </div>
                        </SwiperSlide>


                        <div className="controlls">
                            <button className="arrow-left arrow">
                                <Icon icon="ri:arrow-left-s-line" />
                            </button>
                            <div className="swiper-custom-pagination">

                            </div>
                            <button className="arrow-right arrow">
                                <Icon icon="ri:arrow-right-s-line" />
                            </button>
                        </div>







                    </Swiper>
                </div>

                <div className="new-services list">
                    <Swiper
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={25}
                        slidesPerView={carsdCount}
                        navigation={{
                            nextEl: ".arrow-right",
                            prevEl: ".arrow-left",
                            disabledClass: "arrow-disabled"
                        }}
                        pagination={
                            {
                                clickable: true,
                                el: ".swiper-custom-pagination"
                            }
                        }

                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide className='first-slide slide'>
                            <div className="card">
                                <div className="header">
                                    <img
                                        src={require("../../../images/services-page/services/suggestions-offers/2.png")} />
                                </div>
                                <div className="body">
                                    <h1>NEW SERVICES</h1>
                                    <small>
                                        New Upcoming Services , Ready For Boosting Your Account
                                    </small>
                                </div>
                                <div className="button">
                                    <button>
                                        See all
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='normal-slide slide'>
                            <div className="header">
                                <img
                                    src={require("../../../images/services-page/services/suggestions-offers/icon-2.png")} />
                            </div>
                            <div className="body">
                                <h1>
                                    Instagram - Comment
                                </h1>
                                <ul>
                                    <li>
                                        Video + TV + Reel
                                    </li>
                                    <li>
                                        Instant
                                    </li>
                                    <li>
                                        Working After Update
                                    </li>
                                    <li>
                                        Min Order : 10
                                    </li>
                                    <li>
                                        Max Order : 500000
                                    </li>
                                </ul>
                            </div>
                            <div className="button">
                                <h2>
                                    <span>
                                        $2.85
                                    </span>
                                    <small>
                                        PER 1000
                                    </small>
                                </h2>
                                <button>
                                    <span>
                                        See & Buy
                                    </span>
                                    <Icon icon="clarity:shopping-cart-solid" />
                                </button>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='normal-slide slide'>
                            <div className="header">
                                <img
                                    src={require("../../../images/services-page/services/suggestions-offers/icon-2.png")} />
                            </div>
                            <div className="body">
                                <h1>
                                    Instagram - Comment
                                </h1>
                                <ul>
                                    <li>
                                        Video + TV + Reel
                                    </li>
                                    <li>
                                        Instant
                                    </li>
                                    <li>
                                        Working After Update
                                    </li>
                                    <li>
                                        Min Order : 10
                                    </li>
                                    <li>
                                        Max Order : 500000
                                    </li>
                                </ul>
                            </div>
                            <div className="button">
                                <h2>
                                    <span>
                                        $2.85
                                    </span>
                                    <small>
                                        PER 1000
                                    </small>
                                </h2>
                                <button>
                                    <span>
                                        See & Buy
                                    </span>
                                    <Icon icon="clarity:shopping-cart-solid" />
                                </button>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='normal-slide slide'>
                            <div className="header">
                                <img
                                    src={require("../../../images/services-page/services/suggestions-offers/icon-2.png")} />
                            </div>
                            <div className="body">
                                <h1>
                                    Instagram - Comment
                                </h1>
                                <ul>
                                    <li>
                                        Video + TV + Reel
                                    </li>
                                    <li>
                                        Instant
                                    </li>
                                    <li>
                                        Working After Update
                                    </li>
                                    <li>
                                        Min Order : 10
                                    </li>
                                    <li>
                                        Max Order : 500000
                                    </li>
                                </ul>
                            </div>
                            <div className="button">
                                <h2>
                                    <span>
                                        $2.85
                                    </span>
                                    <small>
                                        PER 1000
                                    </small>
                                </h2>
                                <button>
                                    <span>
                                        See & Buy
                                    </span>
                                    <Icon icon="clarity:shopping-cart-solid" />
                                </button>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='normal-slide slide'>
                            <div className="header">
                                <img
                                    src={require("../../../images/services-page/services/suggestions-offers/icon-2.png")} />
                            </div>
                            <div className="body">
                                <h1>
                                    Instagram - Comment
                                </h1>
                                <ul>
                                    <li>
                                        Video + TV + Reel
                                    </li>
                                    <li>
                                        Instant
                                    </li>
                                    <li>
                                        Working After Update
                                    </li>
                                    <li>
                                        Min Order : 10
                                    </li>
                                    <li>
                                        Max Order : 500000
                                    </li>
                                </ul>
                            </div>
                            <div className="button">
                                <h2>
                                    <span>
                                        $2.85
                                    </span>
                                    <small>
                                        PER 1000
                                    </small>
                                </h2>
                                <button>
                                    <span>
                                        See & Buy
                                    </span>
                                    <Icon icon="clarity:shopping-cart-solid" />
                                </button>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='normal-slide slide'>
                            <div className="header">
                                <img
                                    src={require("../../../images/services-page/services/suggestions-offers/icon-2.png")} />
                            </div>
                            <div className="body">
                                <h1>
                                    Instagram - Comment
                                </h1>
                                <ul>
                                    <li>
                                        Video + TV + Reel
                                    </li>
                                    <li>
                                        Instant
                                    </li>
                                    <li>
                                        Working After Update
                                    </li>
                                    <li>
                                        Min Order : 10
                                    </li>
                                    <li>
                                        Max Order : 500000
                                    </li>
                                </ul>
                            </div>
                            <div className="button">
                                <h2>
                                    <span>
                                        $2.85
                                    </span>
                                    <small>
                                        PER 1000
                                    </small>
                                </h2>
                                <button>
                                    <span>
                                        See & Buy
                                    </span>
                                    <Icon icon="clarity:shopping-cart-solid" />
                                </button>

                            </div>
                        </SwiperSlide>


                        <div className="controlls">
                            <button className="arrow-left arrow">
                                <Icon icon="ri:arrow-left-s-line" />
                            </button>
                            <div className="swiper-custom-pagination">

                            </div>
                            <button className="arrow-right arrow">
                                <Icon icon="ri:arrow-right-s-line" />
                            </button>
                        </div>







                    </Swiper>
                </div>

                <div className="popular-services list">
                    <Swiper
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={25}
                        slidesPerView={carsdCount}
                        navigation={{
                            nextEl: ".arrow-right",
                            prevEl: ".arrow-left",
                            disabledClass: "arrow-disabled"
                        }}
                        pagination={
                            {
                                clickable: true,
                                el: ".swiper-custom-pagination"
                            }
                        }

                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide className='first-slide slide'>
                            <div className="card">
                                <div className="header">
                                    <img
                                        src={require("../../../images/services-page/services/suggestions-offers/3.png")} />
                                </div>
                                <div className="body">
                                    <h1>NEW SERVICES</h1>
                                    <small>
                                        New Upcoming Services , Ready For Boosting Your Account
                                    </small>
                                </div>
                                <div className="button">
                                    <button>
                                        See all
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='normal-slide slide'>
                            <div className="header">
                                <img
                                    src={require("../../../images/services-page/services/suggestions-offers/icon-2.png")} />
                            </div>
                            <div className="body">
                                <h1>
                                    Instagram - Comment
                                </h1>
                                <ul>
                                    <li>
                                        Video + TV + Reel
                                    </li>
                                    <li>
                                        Instant
                                    </li>
                                    <li>
                                        Working After Update
                                    </li>
                                    <li>
                                        Min Order : 10
                                    </li>
                                    <li>
                                        Max Order : 500000
                                    </li>
                                </ul>
                            </div>
                            <div className="button">
                                <h2>
                                    <span>
                                        $2.85
                                    </span>
                                    <small>
                                        PER 1000
                                    </small>
                                </h2>
                                <button>
                                    <span>
                                        See & Buy
                                    </span>
                                    <Icon icon="clarity:shopping-cart-solid" />
                                </button>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='normal-slide slide'>
                            <div className="header">
                                <img
                                    src={require("../../../images/services-page/services/suggestions-offers/icon-2.png")} />
                            </div>
                            <div className="body">
                                <h1>
                                    Instagram - Comment
                                </h1>
                                <ul>
                                    <li>
                                        Video + TV + Reel
                                    </li>
                                    <li>
                                        Instant
                                    </li>
                                    <li>
                                        Working After Update
                                    </li>
                                    <li>
                                        Min Order : 10
                                    </li>
                                    <li>
                                        Max Order : 500000
                                    </li>
                                </ul>
                            </div>
                            <div className="button">
                                <h2>
                                    <span>
                                        $2.85
                                    </span>
                                    <small>
                                        PER 1000
                                    </small>
                                </h2>
                                <button>
                                    <span>
                                        See & Buy
                                    </span>
                                    <Icon icon="clarity:shopping-cart-solid" />
                                </button>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='normal-slide slide'>
                            <div className="header">
                                <img
                                    src={require("../../../images/services-page/services/suggestions-offers/icon-2.png")} />
                            </div>
                            <div className="body">
                                <h1>
                                    Instagram - Comment
                                </h1>
                                <ul>
                                    <li>
                                        Video + TV + Reel
                                    </li>
                                    <li>
                                        Instant
                                    </li>
                                    <li>
                                        Working After Update
                                    </li>
                                    <li>
                                        Min Order : 10
                                    </li>
                                    <li>
                                        Max Order : 500000
                                    </li>
                                </ul>
                            </div>
                            <div className="button">
                                <h2>
                                    <span>
                                        $2.85
                                    </span>
                                    <small>
                                        PER 1000
                                    </small>
                                </h2>
                                <button>
                                    <span>
                                        See & Buy
                                    </span>
                                    <Icon icon="clarity:shopping-cart-solid" />
                                </button>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='normal-slide slide'>
                            <div className="header">
                                <img
                                    src={require("../../../images/services-page/services/suggestions-offers/icon-2.png")} />
                            </div>
                            <div className="body">
                                <h1>
                                    Instagram - Comment
                                </h1>
                                <ul>
                                    <li>
                                        Video + TV + Reel
                                    </li>
                                    <li>
                                        Instant
                                    </li>
                                    <li>
                                        Working After Update
                                    </li>
                                    <li>
                                        Min Order : 10
                                    </li>
                                    <li>
                                        Max Order : 500000
                                    </li>
                                </ul>
                            </div>
                            <div className="button">
                                <h2>
                                    <span>
                                        $2.85
                                    </span>
                                    <small>
                                        PER 1000
                                    </small>
                                </h2>
                                <button>
                                    <span>
                                        See & Buy
                                    </span>
                                    <Icon icon="clarity:shopping-cart-solid" />
                                </button>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='normal-slide slide'>
                            <div className="header">
                                <img
                                    src={require("../../../images/services-page/services/suggestions-offers/icon-2.png")} />
                            </div>
                            <div className="body">
                                <h1>
                                    Instagram - Comment
                                </h1>
                                <ul>
                                    <li>
                                        Video + TV + Reel
                                    </li>
                                    <li>
                                        Instant
                                    </li>
                                    <li>
                                        Working After Update
                                    </li>
                                    <li>
                                        Min Order : 10
                                    </li>
                                    <li>
                                        Max Order : 500000
                                    </li>
                                </ul>
                            </div>
                            <div className="button">
                                <h2>
                                    <span>
                                        $2.85
                                    </span>
                                    <small>
                                        PER 1000
                                    </small>
                                </h2>
                                <button>
                                    <span>
                                        See & Buy
                                    </span>
                                    <Icon icon="clarity:shopping-cart-solid" />
                                </button>

                            </div>
                        </SwiperSlide>


                        <div className="controlls">
                            <button className="arrow-left arrow">
                                <Icon icon="ri:arrow-left-s-line" />
                            </button>
                            <div className="swiper-custom-pagination">

                            </div>
                            <button className="arrow-right arrow">
                                <Icon icon="ri:arrow-right-s-line" />
                            </button>
                        </div>







                    </Swiper>
                </div>

            </section>



        </main>
    )
}

export default ServicesPage