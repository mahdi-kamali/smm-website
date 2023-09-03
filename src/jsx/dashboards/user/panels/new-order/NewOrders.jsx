import Lottie from "react-lottie-player"
import UserQuickView from "../../Components/UserQuickView"



import newOrderIntroAnimatin from "../../../../../animations/user-dashboard/new-order-intro-animation.json"
import { FAKE_CATEGORY } from "../../../../fakeData/FAKE_DATA"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { showPopUp } from "../../../../../features/popUpReducer"
import { SELECT_CATEGORY_POP_UP, SELECT_CURRENCY_POP_UP, SELECT_SERVICE_POP_UP } from "../../../../pop-ups/Constaints"
import { Icon } from "@iconify/react"
import SelectCurrencyPopUp from "../../../../pop-ups/SelectCurrencyPopUp"
import SelectCategoryPopUp from "../../../../pop-ups/SelectCategoryPopUp"
import SelectServicePopUp from "../../../../pop-ups/SelectServicePopUp"
import UserDashboardFieldBox from "../../Components/UserDashboardFieldBox"


const NewOrders = () => {
    newOrderIntroAnimatin.fr = 5

    const dispatcher = useDispatch()


    const mainCategories = FAKE_CATEGORY



    const [selectedMainCategory, setSeleectedMainCategory] =
        useState(mainCategories[0])





    const searchMediaItems = FAKE_CATEGORY

    const [selectedMedia, setSelectedMedia] = useState(searchMediaItems[5])

    const [selectedCurrency, setSelectedCurrency] = useState({
        unit: "INR",
        symbol: "₹"
    })
    const [selectedCategory, setSelectedCategory] = useState(
        { symbol: "", title: "All Categories", value: "ID1" },
    );
    const [selectedService, setSelectedService] = useState({
        "Service": "None!",
    },)


    const openCurrencyPopup = () => {
        dispatcher(showPopUp({
            type: SELECT_CURRENCY_POP_UP,
            duration: 2000,
            component: <SelectCurrencyPopUp
                resultFunction={(item) => setSelectedCurrency(item)}
                currentSelected={selectedCurrency} />
        }))
    }


    const openCategoriesFilterPopUp = () => {
        dispatcher(showPopUp({
            type: SELECT_CATEGORY_POP_UP,
            duration: 2000,
            component: <SelectCategoryPopUp
                resultFunction={(item) => setSelectedCategory(item)}
                currentSelected={selectedCategory} />
        }))
    }


    const openSelectServicePopUp = () => {
        dispatcher(showPopUp({
            type: SELECT_SERVICE_POP_UP,
            duration: 2000,
            component: <SelectServicePopUp
                resultFunction={(item) => setSelectedService(item)}
                currentSelected={selectedService} />
        }))
    }


    const handleOrderFormSubmit = (e) => {
        e.preventDefault()

        console.log(e);
        const formData = new FormData(e.target)



        formData.forEach((value, key) => {
            console.log(key, " => ", value);
        })


    }




    return (
        <section className="panel-new-order">
            <UserQuickView />
            <div className="intro">
                <div className="left">
                    <Lottie
                        animationData={newOrderIntroAnimatin}
                        play
                        loop />

                </div>
                <div className="right">
                    <h1>
                        Lets Order <br />
                        <span>New</span>
                        Service !
                    </h1>
                    <p>
                        Explore our "New Order" feature, your gateway to kickstarting tailored social media marketing campaigns with ease. Whether you're aiming to boost engagement, expand your online presence, or embark on a fresh project, this section is designed to make ordering social media services a breeze. Start achieving your goals with "New Order" today!
                    </p>
                </div>
            </div>
            <div className="main-categories">

                {
                    mainCategories.map((item, index) => {
                        return <div
                            className={`item item-${selectedMainCategory.title === item.title}`}
                            key={index}
                            onClick={() => setSeleectedMainCategory(item)}>
                            <div className="item-header">
                                <img src={item.svg} />
                            </div>
                            <div className="item-body">
                                <h2>{item.title}</h2>
                            </div>
                        </div>
                    })
                }


            </div>
            <form className="order-box" action="#" onSubmit={handleOrderFormSubmit} >
                <div className="left">

                    <UserDashboardFieldBox
                        header={{
                            svg: <Icon icon="mdi:category-plus" />,
                            title: "Category"
                        }}
                        body={
                            <>
                                <span className='id'>
                                    {selectedCategory.value}
                                </span>
                                <button type="button">
                                    <span >
                                        {selectedCategory.symbol}
                                    </span>
                                    <span>
                                        {selectedCategory.title}
                                    </span>
                                </button>
                                <Icon icon="ic:round-arrow-drop-down-circle" />
                            </>
                        }
                        oncClickFunction={openCategoriesFilterPopUp}
                    />

                    <UserDashboardFieldBox
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
                        header={{
                            svg: <Icon icon="ion:rocket" />,
                            title: "Services"
                        }}
                        body={
                            <>
                                <span className='id'>
                                    {selectedService?.Service_id}
                                </span>
                                <button type="button">
                                    <span>
                                        {selectedService?.Service}
                                    </span>
                                </button>
                                <Icon icon="ic:round-arrow-drop-down-circle" />
                                <input type="hidden" name="service" value={selectedService.Service} />
                            </>
                        }
                        oncClickFunction={openSelectServicePopUp}
                    />

                    <UserDashboardFieldBox
                        header={{
                            svg: <Icon icon="tabler:link" />,
                            title: "Link"
                        }}
                        body={
                            <>
                                <input type="text" name="link" />
                            </>
                        }
                    />

                    <UserDashboardFieldBox
                        header={{
                            svg: <Icon icon="mingcute:counter-2-fill" />,
                            title: "Quantity"
                        }}
                        body={
                            <>
                                <input type="text" name="quantity" />
                            </>
                        }
                    />

                    <UserDashboardFieldBox
                        header={{
                            svg: <Icon icon="solar:wireless-charge-bold" />,
                            title: "Charge"
                        }}
                        body={
                            <>
                                <input type="text" name="quantity" />
                            </>
                        }
                    />


                    <button className="submit circle-ripple--animation ">
                        <span>Submit</span>
                        <Icon icon="formkit:submit" />
                    </button>
                </div>
                <fieldset className="right">
                    <legend>
                        <Icon icon="mingcute:search-fill" />
                        <span>Service Detail</span>
                    </legend>
                    <div className="content">
                        <div className="property">
                            <div className="property-left">
                                <Icon icon="mingcute:clock-fill" />
                                <span>
                                    Start Time
                                </span>
                            </div>
                            <div className="property-right">
                                INSTANT
                            </div>
                        </div>
                        <div className="property">
                            <div className="property-left">
                                <Icon icon="ion:rocket-sharp" />
                                <span>
                                    Speed
                                </span>
                            </div>
                            <div className="property-right">
                                <span>
                                    15 Minutes Stable
                                </span>

                            </div>
                        </div>
                        <div className="property">
                            <div className="property-left">
                                <Icon icon="material-symbols:avg-time-sharp" />
                                <span>
                                    Avg. Time
                                </span>
                            </div>
                            <div className="property-right">
                                <span>
                                    1 minute
                                </span>

                            </div>
                        </div>
                        <div className="property">
                            <div className="property-left">
                                <Icon icon="game-icons:hand-ok" />
                                <span>
                                    Gurentee
                                </span>
                            </div>
                            <div className="property-right">
                                <span>
                                    Refill
                                </span>

                            </div>
                        </div>
                        <div className='description'>
                            <h1>
                                <Icon icon="bxs:message-square-detail" />
                                <span>Decription</span>
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero ut error eligendi pariatur voluptatum ullam nihil ipsa autem? Esse accusantium modi magnam laudantium iste voluptas ipsam quibusdam accusamus, possimus odit!
                            </p>

                        </div>
                    </div>
                </fieldset>
            </form>


        </section>
    )
}

export default NewOrders