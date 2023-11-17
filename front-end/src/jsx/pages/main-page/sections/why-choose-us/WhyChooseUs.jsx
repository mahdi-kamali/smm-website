import Marquee from "react-fast-marquee"



import firstIcon from "../../../../../images/main-page/intro/1.svg"
import secondIcon from "../../../../../images/main-page/intro/2.svg"
import thirdIcon from "../../../../../images/main-page/intro/3.svg"
import forthIcon from "../../../../../images/main-page/intro/4.svg"
import Lottie from "react-lottie-player"

import rocketLottie from "../../../../../animations/main-page/rocket.json"
import cloudes from "../../../../../animations/main-page/cloudes.json"



export default function WhyChooseUs() {
    return (
        <section className="why-choose-us">
            <div className="start">
                <h1>
                    Why
                    <span className='accent-color'>Choose Us ?</span>
                </h1>
                <p>At UTSMM, we're not just another SMM panel, we're your strategic partner in maximizing your social media presence. Here's why choosing us sets you on the path to success.
                </p>
            </div>

            <Marquee
                className='roads-marquee'
                pauseOnHover={true}
                speed={50}
                gradientColor='#f5f5f5'
                gradientWidth={200}
                gradient={true}

            >
                <div className="roads">

                    <div
                        className="item"
                        key={Math.random()}>
                        <div className="item-header">
                            <img src={firstIcon} />
                        </div>
                        <div className="item-body">
                            <h2>Cheapest <span>Prices</span></h2>
                            <p>UTSMM offer the most reasonable and cheapest possible price, starting at 0.0001$</p>
                        </div>
                    </div>

                    <div
                        className="item"
                        key={Math.random()}>
                        <div className="item-header">
                            <img src={secondIcon} />
                        </div>
                        <div className="item-body">
                            <h2>
                                Fastest <span>Delivery</span>
                            </h2>
                            <p>We are proud to offer the fastest SMM services! Our team works hard to ensure that your order is processed and delivered as quickly as possible!</p>
                        </div>
                    </div>

                    <div
                        className="item"
                        key={Math.random()}>

                        <div className="item-header">
                            <img src={thirdIcon} />

                        </div>
                        <div className="item-body">
                            <h2>
                                Multiple <span>Payment
                                </span>  Methods</h2>
                            <p>Multiple payment options are accepted, so you can choose the one that is most convenient for you.</p>
                        </div>
                    </div>

                    <div
                        className="item"
                        key={Math.random()}>
                        <div className="item-header">
                            <img src={forthIcon} />


                        </div>
                        <div className="item-body">
                            <h2>Highest <span>Prices</span> Quality</h2>
                            <p>Our services are highest quality and 100% guaranteed because our priority is Customer Satisfaction just work with us once and you will enjoy!</p>
                        </div>
                    </div>
                </div>
            </Marquee>

            <div className="background">
                <Lottie
                    className='animation'
                    animationData={rocketLottie}
                    play
                    loop
                />
                <Lottie
                    className='cloude'
                    animationData={cloudes}
                    play
                    loop
                />
            </div>
        </section>
    )
}
