


import { useEffect, useState } from "react";
import rocket from "../../../images/auth-page/rocket.svg"
import { Icon } from '@iconify/react';
import Lottie from 'react-lottie-player'


import animationOne from "../../../images/auth-page/animation.json"
import animationTwo from "../../../images/auth-page/animation-2.json"
import FormFields from "./components/FormFields";
import { useNavigate } from "react-router-dom";


import Select from 'react-select'
import { useFetch } from "../../../lib/useFetch";
import { API } from "../../../lib/envAccess";





const AuthPage = () => {

    const [countries, error, loading] = useFetch(API.COUNTRIES.GET)

    const navigator = useNavigate()
    const [pageMode, setMode] = useState("login")


    const token = JSON.parse(sessionStorage.getItem("token"))





    const handleSubmitclick = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const entries = formData.entries()
        formData.forEach((value, key) => {
            console.log(key, " => ", value)
        })

    }



    useEffect(() => {
        if (token) {
            navigator("/user/dashhboard")
        }
    }, [])


    const chartModeOptions = [
        { value: 'Yearly', label: 'Yearly' },
        { value: 'Monthly', label: 'Monthly' },
        { value: 'Daily', label: 'Daily' }
    ]



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
            <form
                className="right"
                action="#"
                onSubmit={handleSubmitclick}>
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
                                name={"email"}
                                type={"email"}
                                placeHolder={"email"}
                                icon={<Icon icon="entypo:email" />} />
                            <FormFields
                                name={"password"}
                                type="password"
                                placeHolder={"Password"}
                                icon={<Icon icon="mdi:password" />} />

                        </div>
                    </div>
                    <div className={`sign-up-fields part ${pageMode === "sign-up" ? "expanded" : ""}`}>
                        <div className="container">

                       

                            <FormFields
                                name={"Password Confirmation"}
                                placeHolder={"Password-Confirmation"}
                                type={"password"}
                                icon={<Icon icon="mdi:password" />} />


<FormFields
                                name={"country"}
                                type={"text"}
                                placeHolder={"country"}
                                icon={<Icon icon="fontisto:earth" />}
                                customeClass={"select-box-field"}
                                child={
                                    <Select
                                        className="select-box"
                                        placeholder={"Country"}
                                        options={countries}
                                        name="country"
                                        isSearchable={true}
                                    />
                                } />


                            <FormFields
                                name={"full-Name"}
                                placeHolder={"Full-Name"}
                                icon={<Icon icon="mdi:rename-box" />} />




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