import React from 'react'
import FiledSet from '../../../../cutsome-components/Fieldset/FiledSet'
import { Icon } from '@iconify/react'
import Lottie from 'react-lottie-player';

// import astronaut from "../../../animations/main-page/data.json"
import astronaut from "../../../../../animations/main-page/data.json"
import posterBackground from "../../../../../images/main-page/poster/background.svg"




const authFormSubmites = (e) => {
    e.preventDefault();
}


export default function Poster() {
    return (

        <section className="poster">
            <div className="left">
                <div className="content-container">
                    <h1>
                        INGNITE your <br />
                        social presence <br />
                        with UTSMM
                    </h1>

                    <form
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
                            <button>
                                <Icon icon="mdi:register" />
                                <span>
                                    Sign Up
                                </span>
                            </button>
                            <button>
                                <Icon icon="clarity:login-solid" />
                                <span>
                                    Login
                                </span>
                            </button>
                        </div>


                    </form>
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
