import Lottie from "react-lottie-player"

import UserDashboardFieldBox from "../../Components/UserDashboardFieldBox"

import rightIntroAnimation from "../../../../../animations/user-dashboard/child-panel-animation.json"
import { Icon } from "@iconify/react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { showPopUp } from "../../../../../features/popUpReducer"
import { SELECT_CURRENCY_POP_UP } from "../../../../pop-ups/Constaints"
import SelectCurrencyPopUp from "../../../../pop-ups/SelectCurrencyPopUp"


const ChildPanel = () => {
    rightIntroAnimation.fr = 5

    const dispatcher = useDispatch()



    const [selectedCurrency, setSelectedCurrency] = useState({
        unit: "INR",
        symbol: "₹"
    })

    const openCurrencyPopup = () => {
        dispatcher(showPopUp({
            type: SELECT_CURRENCY_POP_UP,
            duration: 2000,
            component: <SelectCurrencyPopUp
                resultFunction={(item) => setSelectedCurrency(item)}
                currentSelected={selectedCurrency} />
        }))
    }


    return (
        <section className="panel-child">
            <div className="panel-left">
                <div className="intro row">
                    <h1>
                        Please change nameservers to:
                    </h1>
                    <div className="links">
                        <div className="item">
                            ns1.perfectdns.com
                        </div>
                        <div className="item">
                            ns2.perfectdns.com
                        </div>
                    </div>
                    <button>
                        What is my NS records domain?
                    </button>
                </div>
                <div className="order-box row">
                   
                    <div className="body">


                        <UserDashboardFieldBox
                            customeClass={"item"}
                            header={{
                                svg: <Icon icon="material-symbols:domain-verification-sharp" />,
                                title: "Domain"
                            }}
                            body={
                                <>
                                    <input type="text" name="domain" />
                                </>
                            }
                        />

                        <UserDashboardFieldBox
                            customeClass={"item"}
                            header={{
                                svg: <Icon icon="ri:currency-fill" />,
                                title: "Currency"
                            }}
                            body={
                                <>
                                    <span className='id'>
                                        {selectedCurrency.symbol}
                                    </span>
                                    <button type="button">
                                        <span>
                                            {selectedCurrency.unit}
                                        </span>
                                    </button>
                                    <input type="hidden" name="currency" value={selectedCurrency.unit} />
                                    <Icon icon="ic:round-arrow-drop-down-circle" />
                                </>
                            }
                            oncClickFunction={openCurrencyPopup}
                        />

                        <UserDashboardFieldBox
                            customeClass={"item"}
                            header={{
                                svg: <Icon icon="ri:admin-fill" />,
                                title: "Admin User-Name"
                            }}
                            body={
                                <>
                                    <input type="text" name="admin-user-name" />
                                </>
                            }
                        />

                        <UserDashboardFieldBox
                            customeClass={"item"}
                            header={{
                                svg: <Icon icon="solar:lock-password-unlocked-bold" />,
                                title: "Admin Password"
                            }}
                            body={
                                <>
                                    <input type="text" name="confirm-password" />
                                </>
                            }
                        />

                        <UserDashboardFieldBox
                            customeClass={"item"}
                            header={{
                                svg: <Icon icon="solar:lock-password-unlocked-bold" />,
                                title: "Confirm Password"
                            }}
                            body={
                                <>
                                    <input type="text" name="confirm-password" />
                                </>
                            }
                        />

                    </div>
                    <div className="buttons">
                        <button>Enviar ($25.90)</button>
                    </div>
                </div>
            </div>
            <div className="panel-right">
                <div className="intro">
                    <div className="left">
                        <Lottie
                            animationData={rightIntroAnimation}
                            play
                            loop />
                    </div>
                    <div className="right">
                        <h1>
                            Get your own dashboard today!
                        </h1>
                        <p>
                            Here you can order your panel with the same functions as ours, to resell our services.
                        </p>
                    </div>

                </div>
                <div className="information">
                    <h1 className="header">
                        <Icon icon="mdi:information" />
                        <span>Child panel information</span>
                    </h1>

                    <div className="body">
                        <div className="group">
                            <h2>✅ Available Features of Child Panel</h2>

                            <ul>
                                <li>✅ Import all 1xpanel.com Services via API</li>
                                <li>✅ Set Your Prices with Profit Percentage</li>
                                <li>✅ All kinds of Currency Support</li>
                                <li>✅ Add, edit, remove, enable, disable services, etc</li>
                                <li>✅ Activate Own Payment Gateway</li>
                                <li>✅ Receive payment directly from customers</li>
                                <li>✅ All admin Panel features and more</li>
                                <li>✅ Free HTTPS/SSL certificate</li>
                                <li>✅ Free themes</li>
                                <li>✅ Huge Unique Features</li>
                            </ul>
                        </div>

                        <div className="group">

                            <h2>The following features are ❌ Not Available in Child Panel:</h2>

                            <ul>
                                <li>❌ Affiliate system</li>
                                <li>❌ Child panels selling</li>
                                <li>❌ Updates</li>
                                <li>❌ Assignment</li>
                                <li>❌ Average time</li>
                                <li>❌ Multi-currency</li>
                                <li>❌ Free balance</li>
                                <li>❌ Multi-Providers</li>
                            </ul>
                        </div>


                        <p>You can make a lot of money :)</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChildPanel