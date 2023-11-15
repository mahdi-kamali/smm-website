import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    EffectCards,
    EffectCoverflow,
    Autoplay,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import FiledSet from '../../cutsome-components/Fieldset/FiledSet';






// Animatons
import rocketLottie from "../../../animations/main-page/rocket.json"
import cloudes from "../../../animations/main-page/cloudes.json"
import worldMap from "../../../animations/main-page/world-map.json"
import blobBackground from "../../../animations/main-page/blobs-background.json"
import support from "../../../animations/main-page/support.json"
import totalOrders from "../../../animations/main-page/total-orders.json"
import totalService from "../../../animations/main-page/total-services.json"
import services from "../../../animations/main-page/services.json"
import ourActivitiesAnimation from "../../../animations/main-page/our_activities.json"
import introTwoBackgroundSecond from "../../../animations/main-page/intro-2-background-2.json"
import aboutUs from "../../../animations/main-page/about-us.json"
import customersReviews from "../../../animations/main-page/main-page-comments.json"
import customersReviewsWaveBackground from "../../../animations/main-page/comments-background-wave.json"
import faqs from "../../../animations/main-page/home-page-faqs.json"
import faqsQuestion from "../../../animations/main-page/question.json"



// intro
import firstIcon from "../../../images/main-page/intro/1.svg"
import secondIcon from "../../../images/main-page/intro/2.svg"
import thirdIcon from "../../../images/main-page/intro/3.svg"
import forthIcon from "../../../images/main-page/intro/4.svg"



// Service Step
import stepOneAnimation from "../../../animations/main-page/main-page-step-1.json"
import stepTwoAnimation from "../../../animations/main-page/main-page-step-2.json"
import stepThreeAnimation from "../../../animations/main-page/main-page-step-3.json"
import stepFourAnimation from "../../../animations/main-page/main-page-step-4.json"
import stepFiveAnimation from "../../../animations/main-page/main-page-step-5.json"
import stepArrowAnimation from "../../../animations/main-page/main-page-steps-arrow.json"



// intro -2 
import { Icon } from "@iconify/react"
import itemOne from "../../../images/main-page/intro-2/svg/1.svg"
import itemTwo from "../../../images/main-page/intro-2/svg/2.svg"
import itemThree from "../../../images/main-page/intro-2/svg/3.svg"
import itemFour from "../../../images/main-page/intro-2/svg/4.svg"


// Customers Reviews 
import cChar from "../../../images/main-page/customers-reviews/first-part/char.svg"
import cBackground from "../../../images/main-page/customers-reviews/first-part/background.svg"
import { Progress } from 'react-sweet-progress';
import { useEffect, useRef, useState } from 'react';



// About us
import posterBackground from "../../../images/main-page/poster/background.svg"
import Lottie from 'react-lottie-player';


// Blog 
import blogsAnimation from "../../../animations/main-page/blog-animation.json"
import MaxLineText from '../../cutsome-components/Text/MaxLineText';



import Marquee from "react-fast-marquee";
import axios from 'axios';
import { API, SERVER } from '../../../lib/envAccess';



// Sections 
import Poster from "./sections/poster/Poster"
import Blogs from './sections/blogs/Blogs';
import Introduction from './sections/introduction/Introduction';
import Reviews from './sections/reviews/Reviews';
import Faqs from './sections/faqs/Faqs';
import WhyChooseUs from './sections/why-choose-us/WhyChooseUs';
import MainBackground from './sections/main-background/MainBackground';


axios.defaults.baseURL = SERVER.API_URL



const MainPage = () => {


    customersReviews.fr = 5


    stepOneAnimation.fr = 20
    stepTwoAnimation.fr = 20
    stepThreeAnimation.fr = 20
    stepFourAnimation.fr = 20
    stepFiveAnimation.fr = 20
    stepArrowAnimation.fr = 2

  



    return (
        <main className="main-page">

            <Poster/>

            <MainBackground />

            <WhyChooseUs />

            <Blogs/>

            <Introduction/>

            <Reviews />

            <Faqs />


        </main >
    )
}

export default MainPage