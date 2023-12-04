import React from 'react'
import FiledSet from '../../../../cutsome-components/Fieldset/FiledSet'
import { Icon } from '@iconify/react'
import Lottie from 'react-lottie-player';

// import astronaut from "../../../animations/main-page/data.json"
import astronaut from "../../../../../animations/main-page/data.json"
import posterBackground from "../../../../../images/main-page/poster/background.svg"
import { logFormData } from '../../../../../lib/helperTools';
import { isTokenExist } from '../../../../../lib/sesssionChecker';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { post } from '../../../../../lib/useFetch';
import { API } from '../../../../../lib/envAccess';
import Swal from "sweetalert2"











export default function Poster() {


    const [isActive, setIsActive] = useState(isTokenExist())

    const navigator = useNavigate()

    const goToDashboard = () => {
        navigator("/user/dashboard/Statics")
    }

    const signUpClick = () => {
        navigator("/auth")
    }



    const authFormSubmites = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        post(API.AUTH.LOGIN, formData)
            .then(res => {
                const token = res?.data?.token
                sessionStorage.setItem("token", JSON.stringify(token))

                Swal.fire({
                    icon: "success",
                    text: res.data.message,
                }).finally(end => {
                    window.location.reload()
                })

            })
            .catch(err => {
                console.log(err)
            })
    }


    return (

        <section className="poster">
            <div className="left">
                <div className="content-container">
                    <h1>
                        INGNITE your <br />
                        social presence <br />
                        with UTSMM
                    </h1>

                    {
                        isActive ? <div
                            className="account"
                            onClick={goToDashboard}>
                            Go To Dashboard
                            <Icon icon="ooui:next-ltr" />
                        </div> : <form
                            className="fields"
                            action='#'
                            onSubmit={authFormSubmites}>
                            <div className="form-fields">
                                <FiledSet
                                    fieldClassName={"main-page-auth-fields"}
                                    legend={
                                        {
                                            svg: <Icon icon="ic:baseline-alternate-email" />,
                                            title: "Email"
                                        }}
                                    inputType={"text"}
                                    inputName={"email"} />
                                <FiledSet
                                    fieldClassName={"main-page-auth-fields"}
                                    legend={
                                        {
                                            svg: <Icon icon="mdi:password" />,
                                            title: "Password"
                                        }}
                                    inputType={"password"}
                                    inputName={"password"} />
                            </div>
                            <div className="form-options">
                                <label >
                                    <input type="checkbox" name="remember" />
                                    <span>Remember Me</span>
                                </label>
                                <button>
                                    Forgot Password ?
                                </button>
                            </div>
                            <div className="form-buttons">


                                <button type='button'
                                    onClick={signUpClick} >
                                    <Icon icon="mdi:register" />
                                    <span>
                                        Sign Up
                                    </span>
                                </button>
                                <button type='submit'>
                                    <Icon icon="clarity:login-solid" />
                                    <span>
                                        Login
                                    </span>
                                </button>
                            </div>
                        </form>
                    }

                </div>
            </div>
            <div className="right">
                <Lottie
                    className='animation'
                    animationData={astronaut}
                    play
                    loop
                />
                {/* <img src={person} alt="" /> */}
            </div>
            <img className='background' src={posterBackground} />
        </section>
    )
}
