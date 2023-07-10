import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    EffectCards,
    EffectCoverflow,
    Autoplay
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';



import person from "../../../images/main-page/poster/char.svg"


// intro
import firstIcon from "../../../images/main-page/intro/1.svg"
import secondIcon from "../../../images/main-page/intro/2.svg"
import thirdIcon from "../../../images/main-page/intro/3.svg"
import forthIcon from "../../../images/main-page/intro/4.svg"



// intro -2 
import char from "../../../images/main-page/intro-2/char.svg"
import itemOne from "../../../images/main-page/intro-2/svg/1.svg"
import itemTwo from "../../../images/main-page/intro-2/svg/2.svg"
import itemThree from "../../../images/main-page/intro-2/svg/3.svg"
import itemFour from "../../../images/main-page/intro-2/svg/4.svg"
import { Icon } from "@iconify/react"




// Customers Reviews 
import cChar from "../../../images/main-page/customers-reviews/first-part/char.svg"
import cBackground from "../../../images/main-page/customers-reviews/first-part/background.svg"


const MainPage = () => {





    const getRandomColors = () => {
        let all = [];
        for (let i = 0; i < Math.random() * 20; i++) {
            const red = Math.random() * 250;
            const green = Math.random() * 250;
            const blue = Math.random() * 250;
            all.push({ red, green, blue })
        }
        console.log(all);
        return all

    }



    return (
        <main className="main-page">
            <section className="poster">
                <div className="left">
                    <h1>
                        WE MAKE BEST <br />
                        IN SOCIAL <br />
                        MARKETING
                    </h1>
                    <small>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a
                    </small>
                    <div className="buttons">
                        <button>Get Started</button>
                        <button>Read More</button>
                    </div>
                </div>
                <div className="right">
                    <img src={person} alt="" />
                </div>
                <div className="background">

                </div>
            </section>

            <section className="intro">
                <div className="start">
                    <h1>Why Choose Us ?</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                </div>
                <div className="roads">
                    <div className="item">
                        <div className="left">
                        </div>
                        <div className="mid">
                            <img src={firstIcon} />
                        </div>
                        <div className="right">
                            <h2>Cheapest <span>Prices</span></h2>
                            <p>We are proud to offer the fastest SMM services! Our team works hard to ensure that your order is processed and delivered as quickly as possible!</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="left">
                            <h2>
                                Fastest <span>Delivery</span>
                            </h2>
                            <p>We are proud to offer the fastest SMM services! Our team works hard to ensure that your order is processed and delivered as quickly as possible!</p>
                        </div>
                        <div className="mid">
                            <img src={secondIcon} />
                        </div>
                        <div className="right">

                        </div>
                    </div>

                    <div className="item">
                        <div className="left">

                        </div>
                        <div className="mid">
                            <img src={thirdIcon} />

                        </div>
                        <div className="right">
                            <h2>
                                Multiple <span>Payment
                                </span>  Methods</h2>
                            <p>Multiple payment options are accepted, so you can choose the one that is most convenient for you.</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="left">
                            <h2>Highest <span>Prices</span> Quality</h2>
                            <p>Our services are highest quality and 100% guaranteed because our priority is Customer Satisfaction just work with us once and you will enjoy!</p>
                        </div>
                        <div className="mid">
                            <img src={forthIcon} />


                        </div>
                        <div className="right">

                        </div>
                    </div>
                </div>
            </section>


            <section className="intro-2">
                <img src={require("../../../images/main-page/intro-2/map.png")} className="map" />

                <div className="our-activities">
                    <div className="left">
                        <div className="header">
                            <h1>Our Activities</h1>
                            <p>
                                Get a clear picture of your social media performance with our custom charts and analytics.
                                Get a clear picture of your social media
                                performance
                                with our custom charts and analytics.
                            </p>
                        </div>
                        <img src={char} className="char" />
                        <div className="footer">
                            <h1>4 Year</h1>
                            <h2>Cooperating With Clients </h2>
                        </div>
                    </div>
                    <div className="right">
                        <div className="item">
                            <div className="item-header">
                                <img src={itemOne} alt="" />
                            </div>
                            <div className="item-body">
                                <h1>129478</h1>
                                <span>TOTAL USERS</span>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-header">
                                <img src={itemTwo} alt="" />
                            </div>
                            <div className="item-body">
                                <h1>129478</h1>
                                <span>TOTAL USERS</span>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-header">
                                <img src={itemThree} alt="" />
                            </div>
                            <div className="item-body">
                                <h1>129478</h1>
                                <span>TOTAL USERS</span>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-header">
                                <img src={itemFour} alt="" />
                            </div>
                            <div className="item-body">
                                <h1>129478</h1>
                                <span>TOTAL USERS</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="our-services">
                    <div className="header">
                        <h1>Our Services</h1>
                        <p>
                            Connect with your audience and reach new heights with
                            our expert social media marketing solutions.
                        </p>
                    </div>
                    <div className="body">

                        <Swiper
                            modules={[
                                Navigation,
                                Pagination,
                                Scrollbar,
                                A11y,
                                EffectCoverflow]}
                            spaceBetween={20}
                            slidesPerView={4}
                            navigation
                            pagination={{ clickable: true }}
                            onSwiper={(swiper) => swiper.slideTo(2)}
                            onSlideChange={() => console.log('slide change')}
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides
                            coverflowEffect={{
                                rotate: -10,
                                stretch: 0,
                                depth: 350,
                                modifier: 1,
                                slideShadows: false,
                            }} >
                            <SwiperSlide>
                                <div className="item">
                                    <div className="item-header">
                                        <img src={require("../../../images/main-page/social-media/spotify.png")} alt="" />
                                    </div>
                                    <div className="item-body">
                                        <h1>Spotify</h1>
                                        <small>
                                            Stream music and podcasts
                                        </small>
                                        <button>
                                            <span>View Offers</span>
                                            <Icon icon="ooui:next-ltr" />
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="item">
                                    <div className="item-header">
                                        <img src={require("../../../images/main-page/social-media/telegram.png")} alt="" />
                                    </div>
                                    <div className="item-body">
                                        <h1>Spotify</h1>
                                        <small>
                                            Stream music and podcasts
                                        </small>
                                        <button>
                                            <span>View Offers</span>
                                            <Icon icon="ooui:next-ltr" />
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="item">
                                    <div className="item-header">
                                        <img src={require("../../../images/main-page/social-media/discord.png")} alt="" />
                                    </div>
                                    <div className="item-body">
                                        <h1>Spotify</h1>
                                        <small>
                                            Stream music and podcasts
                                        </small>
                                        <button>
                                            <span>View Offers</span>
                                            <Icon icon="ooui:next-ltr" />
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="item">
                                    <div className="item-header">
                                        <img src={require("../../../images/main-page/social-media/snapchat.png")} alt="" />
                                    </div>
                                    <div className="item-body">
                                        <h1>Spotify</h1>
                                        <small>
                                            Stream music and podcasts
                                        </small>
                                        <button>
                                            <span>View Offers</span>
                                            <Icon icon="ooui:next-ltr" />
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="item">
                                    <div className="item-header">
                                        <img src={require("../../../images/main-page/social-media/spotify.png")} alt="" />
                                    </div>
                                    <div className="item-body">
                                        <h1>Spotify</h1>
                                        <small>
                                            Stream music and podcasts
                                        </small>
                                        <button>
                                            <span>View Offers</span>
                                            <Icon icon="ooui:next-ltr" />
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="item">
                                    <div className="item-header">
                                        <img src={require("../../../images/main-page/social-media/spotify.png")} alt="" />
                                    </div>
                                    <div className="item-body">
                                        <h1>Spotify</h1>
                                        <small>
                                            Stream music and podcasts
                                        </small>
                                        <button>
                                            <span>View Offers</span>
                                            <Icon icon="ooui:next-ltr" />
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                    </div>
                    <div className="footer"></div>
                </div>

                <div className="our-popular-services">
                    <img src={require("../../../images/main-page/intro-2/our-popular-services/rocket.png")} alt="" className="rocket" />
                    <div className="header">
                        <h1>
                            Our Popular
                            <span>Services</span>
                        </h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                            dummy text
                        </p>
                    </div>
                    <div className="body">
                        <div className="item">
                            <div className="item-header">
                                <img src={require("../../../images/main-page/intro-2/our-popular-services/1.png")} alt="" />
                            </div>
                            <div className="item-body">
                                <h2>Blog Analytics</h2>
                                <p>
                                    1. Track blog performance with analytics. <br />
                                    2. Gain insights on blog traffic.<br />
                                    3. "Optimize blog growth with data.
                                </p>
                                <h2>
                                    <span>$6 - $53</span>
                                    <small>M/o</small>
                                </h2>
                            </div>
                            <div className="item-buttons">
                                <button className='arrow-up'>
                                    <Icon icon="icon-park-solid:up-one" />
                                </button>
                                <button className='see-more'>
                                    <span>See More</span>
                                    <Icon icon="mingcute:right-fill" />
                                </button>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-header">
                                <img src={require("../../../images/main-page/intro-2/our-popular-services/1.png")} alt="" />
                            </div>
                            <div className="item-body">
                                <h2>Blog Analytics</h2>
                                <p>
                                    1. Track blog performance with analytics. <br />
                                    2. Gain insights on blog traffic.<br />
                                    3. "Optimize blog growth with data.
                                </p>
                                <h2>
                                    <span>$6 - $53</span>
                                    <small>M/o</small>
                                </h2>
                            </div>
                            <div className="item-buttons">
                                <button className='arrow-up'>
                                    <Icon icon="icon-park-solid:up-one" />
                                </button>
                                <button className='see-more'>
                                    <span>See More</span>
                                    <Icon icon="mingcute:right-fill" />
                                </button>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-header">
                                <img src={require("../../../images/main-page/intro-2/our-popular-services/1.png")} alt="" />
                            </div>
                            <div className="item-body">
                                <h2>Blog Analytics</h2>
                                <p>
                                    1. Track blog performance with analytics. <br />
                                    2. Gain insights on blog traffic.<br />
                                    3. "Optimize blog growth with data.
                                </p>
                                <h2>
                                    <span>$6 - $53</span>
                                    <small>M/o</small>
                                </h2>
                            </div>
                            <div className="item-buttons">
                                <button className='arrow-up'>
                                    <Icon icon="icon-park-solid:up-one" />
                                </button>
                                <button className='see-more'>
                                    <span>See More</span>
                                    <Icon icon="mingcute:right-fill" />
                                </button>
                            </div>
                        </div>
                    </div>


                </div>

            </section>


            <section className="customers-reviews">
                <img src={cBackground} className="background" />
                <div className="first-section">
                    <div className="left">
                        <img src={cChar} alt="" />

                    </div>
                    <div className="right">
                        <h1>
                            OUR CUSTOMERS <br />
                            <span>REVIEWS</span>  <br />
                            ABOUT  <br />
                            SERVICES <br />

                        </h1>
                        <button>
                            <span>See More</span>
                            <Icon icon="icon-park-outline:right" />
                        </button>
                    </div>
                </div>
                <div className="comments">

                    <div className="left">
                        <Swiper
                            className="mySwiper"
                            effect={'cards'}
                            grabCursor={true}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            modules={[
                                EffectCards,
                                Navigation,
                                Pagination,
                                Scrollbar,
                                A11y,
                                Autoplay,
                                EffectCoverflow]}
                        >
                            {getRandomColors().map(color => {
                                return <SwiperSlide>
                                    <div className="item"
                                        style={
                                            {
                                                backgroundColor:
                                                    `rgb(${color.red},${color.green},${color.blue})`
                                            }}>
                                        <div className="item-header">
                                            <img src={require("../../../images/main-page/customers-reviews/comments/1.png")} className="avatar" />
                                            <div className="info">
                                                <h1>Anita</h1>
                                                <small>2 Year Customer</small>
                                            </div>
                                        </div>
                                        <div className="item-body">
                                            <h1>
                                                Best Supporting
                                            </h1>
                                            <p>
                                                It is a long established fact that a reader will be distracted by
                                                the readable content of a page when looking at its layout.
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })}

                        </Swiper>
                    </div>
                    <div className="right">
                        <h1>Anita</h1>
                        <p>
                            It is a long established fact that a reader will be distracted by
                            the readable content of a page when looking at its layout.
                        </p>
                    </div>
                </div>


            </section>




        </main >
    )
}

export default MainPage