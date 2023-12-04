import { Icon } from "@iconify/react"


import avatar from "../../../images/footer/avatar.svg"
import Lottie from "react-lottie-player"



import footerAnimation from "../../../animations/main-page/footer-animation.json"
import { useNavigate } from "react-router-dom"


const Footer = () => {

  footerAnimation.fr = 10

  const navigator = useNavigate()



  const handleClick = (path) => {
    navigator(path)
  }


  return (
    <footer>
      <div className="left">
        <h1>
          Take your social media game to the next level with UTSMM!
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
          <li onClick={() => { handleClick("/faqs") }}>FAQ</li>
          <li onClick={() => { handleClick("/services") }}>Services</li>
          <li onClick={() => { handleClick("/contact-us") }}>Contact Us</li>
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
      <img className="avatar" src={window.location.origin + '/6.svg'} alt="" />

    </footer>
  )
}

export default Footer