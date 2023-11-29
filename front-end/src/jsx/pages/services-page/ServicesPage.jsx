

// Swiper Js
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';





// Puzzle Man 
import { Icon } from "@iconify/react";
import puzzleMan from "../../../images/services-page/services/search/With Puzzle (Man).svg"



// Search
import SelectSearch from 'react-select-search';
import { useState } from 'react';
import Lottie from 'react-lottie-player';



// Animations 
import servicesPoster from "../../../animations/main-page/services-page-poster.json"
import servicesPosterWave from "../../../animations/main-page/services-page-wave.json"
import servicesTextuareBackground from "../../../animations/main-page/services-page-background-animation.json"
import Wave from 'react-wavify';
import Table from '../../cutsome-components/table/Table';
import TableHeader from '../../cutsome-components/table/components/TableHeader';
import ItemHeader from '../../cutsome-components/table/components/ItemHeader';
import TableBody from '../../cutsome-components/table/components/TableBody';
import Row from '../../cutsome-components/table/components/Row';
import Property from '../../cutsome-components/table/components/Property';
import { useEffect } from 'react';
import { useFetch } from '../../../lib/useFetch';
import { API, SERVER } from '../../../lib/envAccess';
import TableCategory from '../../cutsome-components/table/components/TableCategory';
import Select from 'react-select'
import PopularServices from './component/PopularServices';








const headerList = [
    "ID",
    "Service",
    "Per 1000",
    "Min order",
    "Max order",
    "Avg. Time",
    "Details"
]


servicesPoster.fr = 10
servicesPosterWave.fr = 10
servicesTextuareBackground.fr = 5



const ServicesPage = () => {



    const [
        servicesData,
        servicesError,
        servicesLoading,
        servicesSetUrl,
        servicesRefresh
    ] = useFetch(
        API.PUBLIC.SERVICES.GET
    )


    const [
        platformsData,
        platformsError,
        platformsLoading,
        platformsSetUrl,
        platformsRefresh
    ] = useFetch(
        API.PUBLIC.PLATFORMS.GET
    )









    const [sortedServices, setSortedServices] = useState([])
    const [sortedCategories, setSortedCategories] = useState([])
    const [visibleCategories, setVisibleCategoires] = useState([])


    const [carsdCount, setCardsCount] = useState(5)



    const [selectedPlatform, setSelectedPaltfrom] = useState(platformsData[0])
    const [selectedCategory, setSelectedCategory] = useState()



    useEffect(() => {
        setSelectedPaltfrom(platformsData[0])
    }, [platformsData])

    useEffect(() => {
        const catName = selectedPlatform?.name.toLowerCase().trim()



        const temp = servicesData.filter(item => {
            const targetCategory = item.category.toLowerCase().trim()

            if (targetCategory.includes(catName)) {
                return item
            }
        })


        const temCats = temp.map(item => {
            return item.category
        })


        const result = [...new Set(temCats)]


        const tempSortedCategories = result.map(item => {
            return {
                label: item,
                value: item
            }
        })

        tempSortedCategories.unshift({
            label: "All Categories",
            value: "All Categories"
        })

        setSortedCategories(tempSortedCategories)


        const final = result.map(cat => {

            const temp =
                servicesData.filter(ser => {
                    return ser.category === cat
                })

            return {
                category: cat,
                services: temp
            }
        })


        setSortedServices(final)


    }, [selectedPlatform, servicesData])

    useEffect(() => {


        let catName = selectedCategory?.value
        if (catName === "All Categories") {
            const catName = selectedPlatform?.name.toLowerCase().trim()



            const temp = servicesData.filter(item => {
                const targetCategory = item.category.toLowerCase().trim()

                if (targetCategory.includes(catName)) {
                    return item
                }
            })


            const temCats = temp.map(item => {
                return item.category
            })


            const result = [...new Set(temCats)]


            const tempSortedCategories = result.map(item => {
                return {
                    label: item,
                    value: item
                }
            })

            tempSortedCategories.unshift({
                label: "All Categories",
                value: "All Categories"
            })

            setSortedCategories(tempSortedCategories)


            const final = result.map(cat => {

                const temp =
                    servicesData.filter(ser => {
                        return ser.category === cat
                    })

                return {
                    category: cat,
                    services: temp
                }
            })


            setSortedServices(final)
            return
        }

        const temp = servicesData?.filter(item => {
            return item.category.includes(catName)
        })

        setSortedServices([
            {
                category: catName,
                services: temp
            }
        ])


    }, [selectedCategory])





    const onSearchInputChange = (e) => {
        const value = e.target.value.toLowerCase().trim()
        const temp = sortedServices.filter(record => {
            const category = record.category
            const services = record.services
            const findServices = services.filter(service => {
                const serviceName = service.name.toLowerCase().trim()
                return serviceName.includes(value)
            })

            if (findServices.length > 0) {
                return record
            }

        })

        setVisibleCategoires(temp)
    }


    const onPlatformClick = (platform) => {
        setSelectedPaltfrom(platform)
    }




    const customStyles = {
        container: provided => ({
            ...provided,
            width: 300
        })
    };




    return (
        <main className="services-page">
            <section className="poster">

                <div className="left">
                    <Lottie
                        animationData={servicesPoster}
                        play
                        loop />
                </div>

                <div className="right">
                    <h1>
                        UNLEASH YOUR <br />
                        <span> SOCIAL MEDIA</span> POTENTIAL <br />
                        WITH OUR <br />
                        <span>PREMIUM</span> SERVICES
                    </h1>
                    <p>
                        Ignite your social media potential with our expert services. Choose from a wide range of options to amplify your brand, connect with your audience, and unlock limitless opportunities. Take charge of your online presence and harness the unparalleled power of social media today.
                    </p>
                </div>

                <div className="poster-background">
                    <Lottie
                        className='primary-aniamtion'
                        animationData={servicesTextuareBackground}
                        play
                        loop />
                    <Wave fill='#f79902'
                        paused={false}
                        className='wave'
                        options={{
                            height: 100,
                            amplitude: 50,
                            speed: 0.1,
                            points: 5
                        }}
                    />
                </div>

            </section>


            {/* <section className="suggested-services">
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
            </section> */}

            <PopularServices platforms={platformsData} />


            <section className="search">
                <div className="left">
                    <img src={puzzleMan} alt="" />
                </div>
                <form className="right" action="#">
                    <div className="form-search">
                        <Icon icon="iconamoon:search" />
                        <input
                            onChange={onSearchInputChange}
                            type="text"
                            name="search"
                            placeholder="Instagram services...."
                        />


                    </div>
                    <div className="form-select-box">
                        <Select
                            styles={customStyles}

                            options={
                                sortedCategories
                            }
                            placeholder={
                                "------- Select Category ------- "}
                            isSearchable={true}
                            onChange={(e) => { setSelectedCategory(e) }}
                            defaultValue={sortedCategories[0]}
                        >
                        </Select>
                    </div>
                </form>
            </section>

            <section className="social-icons">



                {
                    !platformsLoading ? platformsData.map((platform, index) => {

                        return (

                            <div
                                className={`item ${platform === selectedPlatform}`}
                                key={platform._id}
                                onClick={() => { onPlatformClick(platform) }}
                            >
                                <div
                                    className="item-header">
                                    <img src={SERVER.BASE_URL + platform.image} alt="" />
                                </div>
                                <div
                                    className="item-body">
                                    {platform.name}
                                </div>
                            </div>
                        )

                    }) : <h1>Loading...</h1>
                }



            </section>

            <section className='avilable-services'>
                <Table
                    columnsStyle={"5rem 1fr 5rem 5rem 5rem 5rem 5rem"}
                >
                    <TableHeader>
                        {headerList.map((item, index) => {
                            return <ItemHeader key={index}>
                                {item}
                            </ItemHeader>
                        })}
                    </TableHeader>

                    <TableBody>

                        {
                            sortedServices?.map((cat, index) => {
                                return <TableCategory
                                    key={index}>
                                    <h1>{cat.category}</h1>
                                    {
                                        cat?.services?.map((service) => {
                                            return <Row
                                                headerList={headerList}
                                                key={service.service} >
                                                <Property >
                                                    <div className="property-header">
                                                        {headerList[0]}
                                                    </div>
                                                    <div className="property-body">
                                                        {service.service}
                                                    </div>
                                                </Property>
                                                <Property >
                                                    <div className="property-header">
                                                        {headerList[1]}
                                                    </div>
                                                    <div className="property-body long">
                                                        <p>
                                                            {service.name}
                                                        </p>
                                                    </div>
                                                </Property>
                                                <Property >
                                                    <div className="property-header">
                                                        {headerList[2]}
                                                    </div>
                                                    <div className="property-body">
                                                        ${service.rate}

                                                    </div>
                                                </Property>
                                                <Property >
                                                    <div className="property-header">
                                                        {headerList[3]}
                                                    </div>
                                                    <div className="property-body">
                                                        {service.min}

                                                    </div>
                                                </Property>
                                                <Property >
                                                    <div className="property-header">
                                                        {headerList[4]}
                                                    </div>
                                                    <div className="property-body">
                                                        {service.max}

                                                    </div>
                                                </Property>
                                                <Property >
                                                    <div className="property-header">
                                                        {headerList[5]}
                                                    </div>
                                                    <div className="property-body">
                                                        N/A
                                                    </div>
                                                </Property>
                                                <Property >
                                                    <div className="property-header">
                                                        {headerList[6]}
                                                    </div>
                                                    <div className="property-body">
                                                        Controlls
                                                    </div>
                                                </Property>
                                            </Row>
                                        })
                                    }

                                </TableCategory>
                            })
                        }





                    </TableBody>


                </Table>


            </section>

        </main>
    )
}

export default ServicesPage