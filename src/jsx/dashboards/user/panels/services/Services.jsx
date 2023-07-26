import React from 'react'



import aniamtion from "../../../../../animations/social-m-2.json"
import Lottie from 'react-lottie-player'



import searchSVG from "../../../../../images/panel/search-service/focus.svg"
import { Icon } from '@iconify/react'



const Services = () => {
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

            <div className="search">
                <fieldset>
                    <legend>
                        <Icon icon="majesticons:search-line" />
                        <span> Search Service</span>
                    </legend>
                    <input type="text" name='search-query' />
                </fieldset>
            </div>

            <img
                src={searchSVG}
                className="search-background background" />

        </section>
    )
}

export default Services