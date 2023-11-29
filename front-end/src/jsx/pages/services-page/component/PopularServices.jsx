
// Swiper Js
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Icon } from "@iconify/react";
import { useState } from 'react';
import { useFetch } from '../../../../lib/useFetch';
import { API, SERVER } from '../../../../lib/envAccess';


export default function PopularServices({ platforms }) {





    const [popularServices, popularServicesError, popularServicesLoading,
        popularServicesSetUrl, popularServicesRefresh] =
        useFetch(
            API.PUBLIC.SERVICES.POPULAR.GET
        )


    const [carsdCount, setCardsCount] = useState(2)


    const getPlatform = (service) => {
        let temp = undefined
        platforms?.forEach(platform => {
            const category = service.category.toLowerCase().trim()
            const platformName = platform.name.toLowerCase().trim()

            if (category.includes(platformName)) {
                temp = platform
                return
            }
        })

        return temp

    }





    return (
        <section className="suggested-services">
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={20}
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


                breakpoints={{
                    0: {
                        slidesPerView: 1.25,
                    },
                    400: {
                        slidesPerView: 2,
                    },
                    600: {
                        slidesPerView: 2.5,
                    },
                    800: {
                        slidesPerView: 3
                    },
                    1000: {
                        slidesPerView: 3.5
                    },
                    1200: {
                        slidesPerView: 4
                    },
                    1400: {
                        slidesPerView: 5
                    },
                    1600: {
                        slidesPerView: 5.5
                    },
                    1800: {
                        slidesPerView: 6
                    },
                    1900: {
                        slidesPerView: 6.5
                    }
                }}

            >
                <SwiperSlide className='first-slide slide'>
                    <div className="card">
                        <div className="header">
                            <img
                                src={require("../../../../images/services-page/services/suggestions-offers/2.png")} />
                        </div>
                        <div className="body">
                            <h1>POPULAR SERVICES</h1>
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

                {
                    !popularServicesLoading ? popularServices.map(record => {
                        return <SwiperSlide
                            className='normal-slide slide'
                            key={record.service}>
                            <div className="header">
                                <img
                                    src={
                                        SERVER.BASE_URL + getPlatform(record)?.image
                                    } />
                            </div>
                            <div className="body">
                                <p>
                                    {record.name}
                                </p>
                                <ul>
                                    <li>
                                        Service-ID : <span>{record.service}</span>
                                    </li>
                                    <li>
                                        Refill : {`${record.refill}`}
                                    </li>
                                    <li>
                                        Cancel : {`${record.cancel}`}
                                    </li>
                                    <li>
                                        Min Order : {record.min}
                                    </li>
                                    <li>
                                        Max Order : {record.max}
                                    </li>
                                </ul>
                            </div>
                            <div className="button">
                                <h2>
                                    <span>
                                        ${record.rate}
                                    </span>
                                    <small>
                                        PER 1000
                                    </small>
                                </h2>
                                <button>
                                    <span>
                                        BUY
                                    </span>
                                    <Icon icon="clarity:shopping-cart-solid" />
                                </button>

                            </div>
                        </SwiperSlide>
                    }) : ""
                }


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
        </section>
    )
}
