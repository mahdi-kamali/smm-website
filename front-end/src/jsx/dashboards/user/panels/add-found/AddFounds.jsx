import React, { useState } from 'react'




import payAniamtion from "../../../../../animations/pay.json"
import amountOfMoneyAnimation from "../../../../../animations/amount-money.json"
import paymentMethodsAnimation from "../../../../../animations/payment-methods.json"
import Lottie from 'react-lottie-player'



import { Icon } from '@iconify/react'
import { useDispatch } from 'react-redux'
import { showPopUp } from '../../../../../features/popUpReducer'
import { SELECT_PAYMENT_METHOD_POP_UP } from '../../../../pop-ups/Constaints'
import SelectPaymentPopup from '../../../../pop-ups/SelectPaymentPopup'
import { useEffect } from 'react'
import SelectAmountOfMoney from '../../../../pop-ups/SelectAmountOfMoney'
import { post, useFetch, usePost } from '../../../../../lib/useFetch'
import { API, SERVER } from '../../../../../lib/envAccess'
import Swal from "sweetalert2"

import { showError } from '../../../../../lib/alertHandler'





const AddFounds = () => {

    const [paymentMethods, methodError, methodLoading] = useFetch(
        API.DASHBOARD.USER_PAYMENT_METHODS.GET
    )
    const [checkout, checkoutError, checkoutLoading, createCheckout] = usePost(API.DASHBOARD.USER_PAYMENT_CHECKOUT.POST)

    const [selectedMethod, setSelectedMethod] = useState()

    const [amountOfMoney, setAmountOfMoney] = useState({
        amount: 0,
        fee: 0,
        total: 0
    })

    const [currentStep, setStep] = useState(1)

    const dispatcher = useDispatch()



    const openSelectPaymentPopup = () => {

        const resultFunction = (item) => {
            setSelectedMethod(item)
        }

        dispatcher(showPopUp({
            type: SELECT_PAYMENT_METHOD_POP_UP,
            duration: 2000,
            component: <SelectPaymentPopup
                methods={paymentMethods}
                resultFunction={resultFunction}
                currentSelected={selectedMethod} />
        }))
    }

    const openAddAmountMoneyPopUp = () => {

        const resultFunction = (item) => {
            setAmountOfMoney(item)
        }

        dispatcher(showPopUp({
            type: SELECT_PAYMENT_METHOD_POP_UP,
            duration: 2000,
            component: <SelectAmountOfMoney
                resultFunction={resultFunction}
                feePercentage={0.02}
            />
        }))
    }


    const stepIcon = (counter) => {
        if (counter < currentStep) {
            return <Icon icon="flat-color-icons:ok" />
        } else {
            return counter
        }


    }


    const isCompleted = (stepIndex) => {
        if (stepIndex < currentStep) {
            return "completed"
        }
        else {
            return ""
        }
    }


    const isCurrentStep = (stepIndex) => {
        if (stepIndex === currentStep) {
            return "currnet-step"
        } else {
            return ""
        }
    }


    useEffect(() => {

        if (selectedMethod) setStep(2)
        if (amountOfMoney.total > 0) setStep(3)

    }, [selectedMethod, amountOfMoney])




    async function handlePayButtonSubmit() {




        Swal.fire({
            title: "Continue for paying?",
            text: "click yes for continue!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "green",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, continue"
        }).then((result) => {
            if (result.isConfirmed) {
                post(API.DASHBOARD.USER_PAYMENT_CHECKOUT.POST,
                    {
                        method: selectedMethod,
                        amount: amountOfMoney
                    }
                ).then(response => {
                    if (response) {
                        Swal.fire({
                            title: "Open Link, and pay!",
                            text: response.data,
                            icon: 'info',
                            confirmButtonText: "Open link"
                        }).then(result => {
                            window.open(response.data, "_blank")
                            console.log(result)
                        })
                    }
                }).catch(err => {
                    const response = err?.response?.data
                    if (response) {
                        showError(response, "Somthing Wrong...")
                    }
                })

            }
        });
    }



    return (
        <section className='panel-add-founds'>
            <div className="road-map">
                <div className={`item ${isCurrentStep(1)}
                 ${isCompleted(1)}`}>
                    <div className="left">
                        <span className={'circle-ripple--animation'}>
                            {
                                stepIcon(1)
                            }
                        </span>
                        <div className="arrow">
                            <Icon icon="cil:arrow-bottom" />
                        </div>
                    </div>
                    <div className="right">
                        <div className="item-animation">
                            <Lottie
                                className='animation'
                                animationData={paymentMethodsAnimation}
                                play={currentStep === 1}
                                loop
                            />
                        </div>
                        <div className="item-info">
                            <h2>Choose payment Method</h2>
                            <p>
                                Choose The Payment gatway from method
                            </p>
                        </div>
                        <div className="item-input">
                            <fieldset
                                onClick={openSelectPaymentPopup}>
                                <legend>
                                    <Icon icon="ph:contactless-payment-fill" />
                                    <span>Select Method</span>
                                </legend>
                                <div className="content">
                                    <h1>
                                        {selectedMethod?.name || "Click Here"}
                                    </h1>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
                <div className={`item ${isCurrentStep(2)}
                 ${isCompleted(2)}`}>
                    <div className="left">

                        <span className={'circle-ripple--animation'}>
                            {
                                stepIcon(2)
                            }
                        </span>
                        <div className="arrow">
                            <Icon icon="cil:arrow-bottom" />
                        </div>
                    </div>
                    <div className="right">
                        <div className="item-animation">
                            <Lottie
                                className='animation'
                                animationData={amountOfMoneyAnimation}
                                play={currentStep === 2}
                                loop
                            />
                        </div>
                        <div className="item-info">
                            <h2>Enter Your Amonut</h2>
                            <p>
                                Please add ammount
                            </p>
                        </div>
                        <div className="item-input">
                            <fieldset
                                onClick={openAddAmountMoneyPopUp}>
                                <legend>
                                    <Icon icon="healthicons:money-bag" />
                                    <span>Add Amount</span>
                                </legend>
                                <div className="content">
                                    <h1>${amountOfMoney.total}</h1>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
                <div className={`item ${isCurrentStep(3)}
                 ${isCompleted(3)}`}>
                    <div className="left">
                        <span className={'circle-ripple--animation'}>
                            {
                                stepIcon(3)
                            }
                        </span>
                        <div className="arrow">
                            <Icon icon="cil:arrow-bottom" />
                        </div>
                    </div>
                    <div className="right">
                        <div className="item-animation">
                            <Lottie
                                className='animation'
                                animationData={payAniamtion}
                                play={currentStep === 3}
                                loop
                            />
                        </div>
                        <div className="item-info">
                            <h2>Pay The Payment</h2>
                            <p>
                                Congratulations! You Are In Last Step!
                            </p>
                        </div>
                        <div className="item-input">
                            <button
                                onClick={
                                    () =>
                                        handlePayButtonSubmit()}
                                className='pay-button'>
                                <span>Click To Pay</span>
                                <Icon icon="formkit:submit" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="avaialble-methods-intro">
                {paymentMethods.map((item, index) => {
                    return <div className="item" key={index}>
                        <div className="item-header">
                            <img src={SERVER.BASE_URL + item.image} />
                            <span>{item.name}</span>
                        </div>
                        <div className="item-body">
                            <p>
                                {item.description}
                            </p>
                        </div>
                    </div>
                })}
            </div>
        </section>
    )
}

export default AddFounds