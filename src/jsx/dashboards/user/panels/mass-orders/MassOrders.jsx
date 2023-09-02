import React from 'react'
import UserQuickView from '../../Components/UserQuickView'
import Lottie from 'react-lottie-player'



// Animation 
import massOrderAnimation from "../../../../../animations/user-dashboard/mass-order-animation.json"


const MassOrders = () => {
    massOrderAnimation.fr = 10
    return (
        <section className='panel-mass-orders'>
            <UserQuickView />

            <div className="intro">
                <div className="left">
                    <Lottie
                        animationData={massOrderAnimation}
                        play
                        loop />
                </div>
                <div className="right">
                    <h1>Mass Order</h1>
                    <p>
                        Streamline your social media marketing with our Mass Order feature, designed to save you time and effort. Here's how it works:
                    </p>
                </div>
            </div>

            <div className="how-it-work">

                <h1>How it Work ?</h1>

                <ul className='guid'>
                    <li>
                        <span>
                            Format your orders
                        </span>
                        <p>
                            Each order should be entered on a separate line, following this structure: service_id | link | quantity.
                        </p>
                    </li>
                    <li>
                        <span>
                            Service ID
                        </span>
                        <p>
                            Specify the unique identifier for the social media service you want to purchase.
                        </p>
                    </li>
                    <li>
                        <span>
                            Link
                        </span>
                        <p>
                            Provide the relevant URL where you want the service applied. It could be a post URL, profile link, or any other applicable link.
                        </p>
                    </li>
                    <li>
                        <span>
                            Quantity
                        </span>
                        <p>
                            Indicate the quantity or number of units for the selected service.
                        </p>
                    </li>
                </ul>



            </div>

            <div className="examples">
                <h1>Examples : </h1>
                <div className="items">
                    <div className="example-item">
                        <h2>
                            Example 1
                        </h2>
                        <ul>
                            <li>
                                <span>
                                    Service ID
                                </span>
                                <p>
                                    12345
                                </p>
                            </li>
                            <li>
                                <span>
                                    Link
                                </span>
                                <p>
                                    https://www.instagram.com/p/abc123
                                </p>
                            </li>
                            <li>
                                <span>
                                    Quantity
                                </span>
                                <p>
                                    1000
                                </p>
                            </li>
                            <li>
                                <span>
                                    Result :
                                </span>
                                <p>
                                    12345 | https://www.instagram.com/p/abc123 | 1000
                                </p>
                            </li>
                        </ul>

                    </div>
                    <div className="example-item">
                        <h2>
                            Example 2
                        </h2>
                        <ul>
                            <li>
                                <span>
                                    Service ID
                                </span>
                                <p>
                                    67890
                                </p>
                            </li>
                            <li>
                                <span>
                                    Link
                                </span>
                                <p>
                                    https://www.instagram.com/p/xyz789
                                </p>
                            </li>
                            <li>
                                <span>
                                    Quantity
                                </span>
                                <p>
                                    500
                                </p>
                            </li>
                            <li>
                                <span>
                                    Result
                                </span>
                                <p>
                                    67890 | https://www.instagram.com/p/xyz789 | 500

                                </p>
                            </li>
                        </ul>

                    </div>
                </div>

            </div>



            <div className="order-box">

                <textarea name="order" cols="30" rows="10" placeholder='service_id | link | quantity'>
                </textarea>

            </div>


        </section>
    )
}

export default MassOrders