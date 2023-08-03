import React, { useState } from 'react'




import amountOfMoneyAnimation from "../../../../../animations/amount-money.json"
import paymentMethodsAnimation from "../../../../../animations/payment-methods.json"
import Lottie from 'react-lottie-player'



import { Icon } from '@iconify/react'
import { useDispatch } from 'react-redux'
import { showPopUp } from '../../../../../features/popUpReducer'
import { SELECT_PAYMENT_METHOD_POP_UP } from '../../../../pop-ups/Constaints'
import SelectPaymentPopup from '../../../../pop-ups/SelectPaymentPopup'
import { useEffect } from 'react'








const AddFounds = () => {




    const [selectedMethod, setSelectedMethod] = useState("Not Selected!")
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
                resultFunction={resultFunction}
                currentSelected={selectedMethod} />
        }))
    }

    const openAddAmountMoneyPopUp = () => {

        
    }


    const paymentMethods = [
        {
            name: "Visa/Master Card",
            description: "Card Payment auto enabled for everyone",
            imageUrl: "https://yourpanelassets.com/projects/pak2p/img/easypaisa1.png"
        },
        {
            name: "Perfect Money",
            description: "Perfect Money payment is auto enabled in the above for everyone! 5% Bonus on Perfect money payment",
            imageUrl: "https://yourpanelassets.com/projects/pak2p/img/perfect-money.png"
        },
        {
            name: "Skrill",
            description: "Skrill Email:>Muazzamali2286@gmail.com Minimum Payment is 10$",
            imageUrl: "https://yourpanelassets.com/projects/pak2p/img/skrill.png"
        },
        {
            name: "Paytm",
            description: "Paytm is auto enabled in the above for everyone!",
            imageUrl: "https://yourpanelassets.com/projects/pak2p/img/paytm.png"
        },
        {
            name: "Bitcoin",
            description: "The Btc-Ltc-Eth is auto enabled in the above for everyone!",
            imageUrl: "https://yourpanelassets.com/projects/pak2p/img/bitcoin.png"
        },
        {
            name: "Payoneer",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words",
            imageUrl: "https://yourpanelassets.com/projects/pak2p/img/payoneer.png"
        },
        {
            name: "Wise",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words",
            imageUrl: "https://yourpanelassets.com/projects/pak2p/img/wise.png"
        },
        {
            name: "USDT",
            description: "USDT TRC20 Address available for everyone",
            imageUrl: "https://yourpanelassets.com/projects/pak2p/img/usdt.png"
        }
    ];

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

        const isChanged = selectedMethod !== "Not Selected!"
        if (isChanged) {
            setStep(2)
        }

    }, [selectedMethod])








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
                        <div className="method-payment-input">
                            <fieldset
                                onClick={openSelectPaymentPopup}>
                                <legend>
                                    <Icon icon="ph:contactless-payment-fill" />
                                    <span>Select Method</span>
                                </legend>
                                <div className="content">
                                    <h1>{selectedMethod}</h1>
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
                        <div className="method-payment-input">
                            <fieldset
                                onClick={openAddAmountMoneyPopUp}>
                                <legend>
                                    <Icon icon="healthicons:money-bag" />
                                    <span>Add Amount</span>
                                </legend>
                                <div className="content">
                                    <h1>{selectedMethod}</h1>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
            <div className="avaialble-methods-intro">
                {paymentMethods.map((item, index) => {
                    return <div className="item" key={index}>
                        <div className="item-header">
                            <img src={item.imageUrl} />
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