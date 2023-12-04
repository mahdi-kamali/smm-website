


import { useEffect, useState } from "react";
import rocket from "../../../images/auth-page/rocket.svg"
import { Icon } from '@iconify/react';
import Lottie from 'react-lottie-player'


import animationOne from "../../../images/auth-page/animation.json"
import animationTwo from "../../../images/auth-page/animation-2.json"
import FormFields from "./components/FormFields";
import { useNavigate, useParams } from "react-router-dom";


import Select from 'react-select'
import { useFetch } from "../../../lib/useFetch";
import { API } from "../../../lib/envAccess";
import axios from "axios";
import Swal from "sweetalert2"
import { showError } from "../../../lib/alertHandler";



const AuthPage = () => {

    const navigator = useNavigate()
    const [pageMode, setMode] = useState("login")
    const token = JSON.parse(sessionStorage.getItem("token"))
    const params = useParams()

    const [countries, error, loading] = useFetch(API.COUNTRIES.GET)




    useEffect(() => {

        if (token) {
            navigator("/user/dashboard")
        }
    }, [])


    const handleSubmitclick = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)



        if (pageMode === "login") {
            await axios({
                method: "post",
                url: API.AUTH.LOGIN,
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            }).then(response => {
                const data = response.data
                const token = data.token

                sessionStorage.setItem("token", JSON.stringify(token))

                Swal.fire({
                    title: "Login Success!",
                    text: "Welcome Back,please click ok button",
                    icon: "success"
                }).then(() => {
                    console.log("ended")
                    window.location.reload();
                })

            })
                .catch(error => {
                    const response = error?.response
                    if (response.status === 500) {
                        console.log(response)
                        const errors = response.data
                        showError(errors)
                    }
                })

        }
        if (pageMode === "sign-up") {
            const affliateLink = params?.link
            if (affliateLink) formData.append("affliateLink", affliateLink)
            await axios({
                method: "post",
                url: API.AUTH.SIGNUP,
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            }).then(response => {
                const data = response.data
                const token = data.token
                console.log(response)
                Swal.fire({
                    title: "Login Success!",
                    text: "Welcome Back,please click ok button",
                    icon: "success"
                }).then(() => {
                    console.log("ended")
                    window.location.reload(true);
                })

            }).catch(error => {
                const response = error?.response

                if (response?.status === 500) {
                    const errors = response.data
                    showError(errors)
                    return
                }

                Swal.fire({
                    title: "Somthing Wrong!",
                    text: "please refresh page, and if this error not gone..., contact us !",
                    icon: "error"
                })
            })
        }

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
            <form
                className="right"
                encType="multipart/form-data"
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
                                required={true}
                                icon={<Icon icon="entypo:email" />} />
                            <FormFields
                                name={"password"}
                                type="password"
                                required={true}
                                placeHolder={"Password"}
                                icon={<Icon icon="mdi:password" />} />

                        </div>
                    </div>
                    <div className={`sign-up-fields part ${pageMode === "sign-up" ? "expanded" : ""}`}>
                        <div className="container">


                            <FormFields
                                name={"passwordConfirm"}
                                placeHolder={"Password-Confirmation"}
                                type={"password"}
                                icon={<Icon icon="mdi:password" />}
                                required={pageMode === "sign-up"} />

                            <FormFields
                                name={"country"}
                                type={"text"}
                                placeHolder={"country"}
                                icon={<Icon icon="fontisto:earth" />}
                                customeClass={"select-box-field"}
                                required={pageMode === "sign-up"}
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
                                name={"fullName"}
                                type={"text"}
                                placeHolder={"full-Name"}
                                required={pageMode === "sign-up"}
                                icon={<Icon icon="mdi:rename-box" />} />

                            <FormFields
                                name={"gender"}
                                placeHolder={"gender"}
                                required={pageMode === "sign-up"}
                                icon={<Icon icon="ph:gender-male-bold" />}
                                child={
                                    <div className="gender-box">
                                        <label>
                                            <input
                                                type="radio"
                                                radioGroup="gender"
                                                name="gender"
                                                value={"male"} />
                                            <span>male</span>
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                radioGroup="gender"
                                                name="gender"
                                                value={"female"} />
                                            <span>female</span>
                                        </label>
                                    </div>
                                } />


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