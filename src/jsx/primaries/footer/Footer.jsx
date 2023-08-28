import { Icon } from "@iconify/react"


import avatar from "../../../images/footer/avatar.svg"
import Lottie from "react-lottie-player"



import footerAnimation from "../../../animations/main-page/footer-animation.json"


const Footer = () => {

  footerAnimation.fr = 10

  return (
    <footer>
      <div className="left">
        <h1>
          We focus on the needs of small to middle
          market businesses to improve and grow
          their return.
        </h1>
        <div className="social-media">
          <div className="item">
            <Icon icon="iconoir:internet" />
            <span>WWW.UTSMM.COM</span>
          </div>
          <div className="item">
            <Icon icon="formkit:instagram" />
            <span>@UT_SMM</span>
          </div>
          <div className="item">
            <Icon icon="ic:twotone-telegram" />
            <span>@UT_SMM</span>
          </div>
        </div>
      </div>
      <div className="right">
        <ul>
          <h1>Quick Links</h1>
          <li>FAQ</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>

        <ul>
          <h1>Support</h1>
          <li>API DOCS</li>
          <li>Tickets</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Refund Policy</li>
        </ul>
      </div>


      <Lottie
        animationData={footerAnimation}
        play
        loop
      />

    </footer>
  )
}

export default Footer