
import Lottie from "react-lottie-player"


import leftAnimation from "../../../animations/about-us/left-animation.json"
import { Icon } from "@iconify/react"



const AboutUsPage = () => {
  leftAnimation.fr = 10
  return (
    <main className="about-us-page">

      <div className="left">
        <Lottie
          className="animation"
          animationData={leftAnimation}
          play
          loop
        />
      </div>
      <div className="right">
        <div className="content">
          <h1>About Us</h1>
          <p>
            At our company, we specialize in creating and executing effective social media marketing strategies that help businesses build their brand and increase their online presence. We understand that social media is a crucial aspect of any successful marketing campaign, and we strive to stay up-to-date with the latest trends and best practices. Our team of experts is dedica
          </p>
          <div className="social-media">
            <div className="social">
              <Icon icon="ic:baseline-attach-email" />
              <span>example@gmail.com</span>
            </div>
            <div className="social">
              <Icon icon="ri:phone-fill" />
              <span>+1 202-918-2132</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AboutUsPage