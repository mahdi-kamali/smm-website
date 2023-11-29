import Lottie from "react-lottie-player"
import UserQuickView from "../../Components/UserQuickView"
import newOrderIntroAnimatin from "../../../../../animations/user-dashboard/new-order-intro-animation.json"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { showPopUp } from "../../../../../features/popUpReducer"
import { SELECT_CATEGORY_POP_UP, SELECT_CURRENCY_POP_UP, SELECT_SERVICE_POP_UP } from "../../../../pop-ups/Constaints"
import { Icon } from "@iconify/react"




import SelectCurrencyPopUp from "../../../../pop-ups/SelectCurrencyPopUp"
import SelectCategoryPopUp from "../../../../pop-ups/SelectCategoryPopUp"
import SelectServicePopUp from "../../../../pop-ups/SelectServicePopUp"
import UserDashboardFieldBox from "../../Components/UserDashboardFieldBox"
import { post, useFetch } from "../../../../../lib/useFetch"
import { API, SERVER } from "../../../../../lib/envAccess"
import Swal from "sweetalert2"
import { showError } from "../../../../../lib/alertHandler"

const NewOrders = () => {
    const dispatcher = useDispatch()
    newOrderIntroAnimatin.fr = 5


    const [platforms, platformsError, platformsLoading] =
        useFetch(API.PLATFORM.GET)

    const [services, servicesError, serviceLoading] =
        useFetch(API.PUBLIC.SERVICES.GET)



    const [selectedPlatform, setSelectedPlatform] =
        useState(undefined)

    const [filtredServices, setFiltredServices] =
        useState([])

    const [selectedCurrency, setSelectedCurrency] = useState({
        unit: "INR",
        symbol: "₹"
    })


    const [selectedCategory, setSelectedCategory] = useState([]);


    const [selectedService, setSelectedService] = useState({
        "Service": "None!",
    },)


    const [charge, setCharge] = useState(0)
    const [quantity, setQuantity] = useState(0)



    useEffect(() => {
        const selectedPlatformFiltredServices = services.filter(item => {
            const serviceCategory = item.category
                .toLowerCase()
                .trim()

            const platformName = selectedPlatform?.name
                .toLowerCase()
                .trim()
            return serviceCategory.includes(platformName)
        })
        setFiltredServices(selectedPlatformFiltredServices)
    }, [selectedPlatform])

    useEffect(() => {
        const temp = (quantity * selectedCategory.rate) / 1000
        setCharge(temp.toFixed(4))
    }, [selectedCategory])





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
                filtredServices={filtredServices}
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


    const handleOrderFormSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)


        Swal.fire({
            title: "Continue for submiting order?",
            text: "click yes for continue!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "green",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, continue"
        }).then(result => {
            if (result.isConfirmed) {
                post(API.DASHBOARD.USER_ORDER_SUBMIT.POST, formData)
                    .then(response => {
                        console.log(response)
                        if (response.status === 200) {
                            Swal.fire({
                                icon: "success",
                                title: "Order Successfuly Submited!",
                                text: "thanks for your trusting, your order is on proccess, please wait for final changes."
                            })
                        }

                    })
                    .catch(err => {
                        if (err?.response?.data) {
                            showError(err?.response?.data)
                        }
                    })
            }
        })




    }

    const handleOnQuantityChange = (e) => {
        const value = e.target.value
        setQuantity(value)
        const temp = (value * selectedCategory.rate) / 1000
        setCharge(temp.toFixed(4))
    }



    return (
        <section className="panel-new-order">
            <UserQuickView />
            <div className="intro row">
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
                        At UTSMM, we are excited to offer a range of services to meet your needs. Choose your desired package, provide your account details, and let our SMM panel deliver the best possible service! Whether you're aiming to boost engagement, expand your online presence or embark on a fresh project, this section is designed to make ordering social media services a breeze.                    </p>
                </div>
            </div>
            <div className="main-categories row">

                {
                    platforms?.map((item, index) => {
                        return <div
                            className={`item item-${selectedPlatform?.name === item?.name}`}
                            key={index}
                            onClick={() => setSelectedPlatform(item)}>
                            <div className="item-header">
                                <img src={SERVER.BASE_URL + item.image} />
                            </div>
                            <div className="item-body">
                                <h2>{item?.name}</h2>
                            </div>
                        </div>
                    })
                }


            </div>
            <form className="order-box row" action="#" onSubmit={handleOrderFormSubmit} >
                <div className="left">

                    <UserDashboardFieldBox
                        header={{
                            svg: <Icon icon="ion:rocket" />,
                            title: "Services"
                        }}
                        body={
                            <>

                                <button type="button">
                                    <span className="id">
                                        {selectedCategory?.service}
                                    </span>
                                    <span >
                                        {selectedCategory?.symbol}
                                    </span>
                                    <span>
                                        {selectedCategory?.name
                                            ? selectedCategory?.name : "Not Selected!"}
                                    </span>
                                    <input
                                        name="serviceID"
                                        type="hidden"
                                        value={selectedCategory?.service} />
                                </button>
                                <Icon icon="ic:round-arrow-drop-down-circle" />
                            </>
                        }
                        oncClickFunction={openCategoriesFilterPopUp}
                    />

                    {/* <UserDashboardFieldBox
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
                    /> */}

                    {/* <UserDashboardFieldBox
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
                    /> */}

                    <UserDashboardFieldBox
                        header={{
                            svg: <Icon icon="tabler:link" />,
                            title: "Link"
                        }}
                        body={
                            <>
                                <input
                                    type="text"
                                    name="link"
                                    required
                                />
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
                                <input
                                    type="number"
                                    min={selectedPlatform?.min}
                                    max={selectedCategory?.max}
                                    name="quantity"
                                    onChange={handleOnQuantityChange}
                                    value={quantity}
                                    required />
                                <input
                                    type="range"
                                    min={selectedPlatform?.min}
                                    max={selectedCategory?.max}
                                    onChange={handleOnQuantityChange}
                                    value={quantity} />
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
                                $<input
                                    type="text"
                                    name="charge"
                                    value={charge}
                                    readOnly />
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
                                    Min
                                </span>
                            </div>
                            <div className="property-right">
                                {selectedCategory?.min}
                            </div>
                        </div>
                        <div className="property">
                            <div className="property-left">
                                <Icon icon="ion:rocket-sharp" />
                                <span>
                                    Refill
                                </span>
                            </div>
                            <div className="property-right">
                                <span>
                                    {`${selectedCategory?.refill}`}
                                </span>
                            </div>
                        </div>
                        <div className="property">
                            <div className="property-left">
                                <Icon icon="material-symbols:avg-time-sharp" />
                                <span>
                                    Max
                                </span>
                            </div>
                            <div className="property-right">
                                <span>
                                    {selectedCategory?.max}
                                </span>

                            </div>
                        </div>
                        <div className="property">
                            <div className="property-left">
                                <Icon icon="game-icons:hand-ok" />
                                <span>
                                    Cancel
                                </span>
                            </div>
                            <div className="property-right">
                                <span>
                                    {`${selectedCategory?.cancel}`}
                                </span>
                            </div>
                        </div>
                        <div className="property">
                            <div className="property-left">
                                <Icon icon="solar:dollar-bold" />
                                <span>
                                    price for 1k
                                </span>
                            </div>
                            <div className="property-right">
                                <span>
                                    ${selectedCategory?.rate}
                                </span>
                            </div>
                        </div>
                        <div className='description'>
                            <h1>
                                <Icon icon="bxs:message-square-detail" />
                                <span>Decription</span>
                            </h1>
                            <p>
                                {selectedCategory?.name}
                            </p>

                        </div>
                    </div>
                </fieldset>
            </form>


        </section>
    )
}

export default NewOrders