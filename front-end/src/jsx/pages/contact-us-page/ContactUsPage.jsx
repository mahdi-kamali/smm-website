import React from 'react'




import leftAnimation from "../../../animations/contact-us/left-animation.json"
import Lottie from 'react-lottie-player'
import { Icon } from '@iconify/react'




const Input = ({ name, type, svg, placeHolder }) => {

    return <div className="form-group">
        <div className="group-left">
            {svg}
        </div>
        <div className="group-right">
            <input
                type={type}
                placeholder={placeHolder}
                name={name} />
        </div>
    </div>
}


const Media = ({ svg, title }) => {

    return <div className="item">
        <div className="item-left">
            {svg}
        </div>
        <div className="item-right">
            {title}
        </div>
    </div>
}




const ContactUsPage = () => {

    leftAnimation.fr = 5


    return (
        <main className='contact-us-page'>
            <div className="intro">

                <h1>
                    Connect with Us
                    <span>Elevate</span>
                    Your Brand!</h1>
                <p>
                    At USMM, we're more than just a contact form – we're your partners in social media success. Reach out to us today and discover how our expertise can elevate your brand's presence on social platforms. We're here to listen, strategize, and help you achieve your digital marketing goals. Let's start a conversation that leads to remarkable online results.
                </p>
            </div>
            <div className="form-section">

                <div className="left">
                    <Lottie
                        className='left-animation'
                        animationData={leftAnimation}
                        play
                        loop />
                    <div className="get-in-touch">
                        <Media
                            svg={<Icon icon="gg:phone" />}
                            title={"+1-760-284-3410"}
                        />
                        <Media
                            svg={<Icon icon="ic:baseline-email" />}
                            title={"email@domain.com"}
                        />
                        <Media
                            svg={<Icon icon="fluent:location-48-filled" />}
                            title={"931 Asia Martin"}
                        />
                    </div>
                </div>
                <div className="right">
                    <form action="#" className='right'>
                        <div className="form-header"></div>
                        <div className="form-body">
                            <Input
                                name={"firstName"}
                                type={"text"}
                                svg={<Icon icon="ph:user-light" />}
                                placeHolder={"First Name"}
                            />
                            <Input
                                name={"lastName"}
                                type={"text"}
                                svg={<Icon icon="ph:user-light" />}
                                placeHolder={"Last Name"}
                            />
                            <Input
                                name={"phone"}
                                type={"number"}
                                svg={<Icon icon="ph:phone" />}
                                placeHolder={"Phone"}
                            />
                            <Input
                                name={"email"}
                                type={"email"}
                                svg={<Icon icon="mdi-light:email" />}
                                placeHolder={"Email"}
                            />
                            <Input
                                name={"message"}
                                type={"text"}
                                svg={<Icon icon="system-uicons:message" />}
                                placeHolder={"Message"}
                            />

                        </div>
                        <div className="form-buttons">
                            <button>
                                <span>
                                    Send Message
                                </span>
                                <Icon icon="iconamoon:send-bold" />
                            </button>
                        </div>
                        <div className="form-footer">
                            <p>
                                Your data is safe with us. We prioritize your privacy and use top-notch security measures to protect your information after submission.
                            </p>
                        </div>

                    </form>
                </div>

            </div>


        </main>
    )
}

export default ContactUsPage