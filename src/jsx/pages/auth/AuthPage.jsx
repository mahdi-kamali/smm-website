


import { useState } from "react";
import rocket from "../../../images/auth-page/rocket.svg"
import { Icon } from '@iconify/react';
import Lottie from 'react-lottie-player'


import animationOne from "../../../images/auth-page/animation.json"
import animationTwo from "../../../images/auth-page/animation-2.json"
import FormFields from "./components/FormFields";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {

    const navigator = useNavigate()
    const [pageMode, setMode] = useState("login")



    const handleSubmitclick = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const entries = formData.entries()
        formData.forEach((key, value) => {
            
        })

        navigator("/user/dashboard")
    }



    return (
        <main className="auth-page">
            <div className="left">
                <img className="rocket" src={rocket} />
                <Lottie
                    className="lottie"
                    loop
                    animationData={animationOne}
                    play
                />


            </div>
            <form className="right" action="#" onSubmit={handleSubmitclick}>
                <div className="form-header">
                    <h1 className={pageMode === "login" ? "selected" : ""} onClick={() => setMode("login")}>
                        Login
                    </h1>
                    <h1 className={pageMode === "sign-up" ? "selected" : ""} onClick={() => setMode("sign-up")}>
                        Sign Up
                    </h1>
                </div>
                <div className="form-body">
                    <div className="login-fields part">
                        <div className="container">
                            <FormFields
                                name={"userName"}
                                placeHolder={"UserName"}
                                icon={<Icon icon="clarity:user-solid" />} />

                            <FormFields
                                name={"Password"}
                                placeHolder={"Password"}
                                icon={<Icon icon="mdi:password" />} />
                        </div>
                    </div>
                    <div className={`sign-up-fields part ${pageMode === "sign-up" ? "expanded" : ""}`}>
                        <div className="container">

                            <FormFields
                                name={"Password Confirmation"}
                                placeHolder={"Password-Confirmation"}
                                icon={<Icon icon="mdi:password" />} />

                            <FormFields
                                name={"full-Name"}
                                placeHolder={"Full-Name"}
                                icon={<Icon icon="mdi:rename-box" />} />


                            <FormFields
                                name={"email"}
                                placeHolder={"email"}
                                icon={<Icon icon="entypo:email" />} />
                        </div>
                    </div>
                </div>
                <div className="form-buttons">
                    <small>Need Help ? Click Here</small>
                    <button className="submit">Submit</button>
                </div>
                <div className="form-auth-options">
                    <div className="item">
                        <Icon icon="devicon:google" />
                    </div>
                    <div className="item">
                        <Icon icon="logos:facebook" />
                    </div>

                </div>

            </form>
        </main >
    )
}

export default AuthPage