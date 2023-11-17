import { useDispatch } from "react-redux"
import { closePopUp } from "../../features/popUpReducer"
import { Icon } from "@iconify/react"






const SelectPaymentPopup = ({ resultFunction, currentSelected }) => {



    const dispatcher = useDispatch()

    const handleCloseButtonClick = () => {
        dispatcher(closePopUp())
    }

    const handleItemClick = (item) => {
        resultFunction(item)
        dispatcher(closePopUp())

    }


    const selectMethodsArray = [
        "💳 International Master/Visa Card Payment Easy Paisa/Jazz Cash Method(2% Fees Only)",
        "Coinbase-Bitcoin - BTH - LTC - ETH - USD(5% Bonus)",
        "Binance.com-USDT_TRC20 (5% Bonus)",
        "Easy Paisa Auto Domestic Payments (No Fees &amp;amp;amp; No Bonus)",
        "Paytm business(5% 𝐁𝐨𝐧𝐮𝐬 From 1$)",
        "Perfect Money(Min 1) ( 5 % Bonus )",
        "Payeer - (PayPal + Crypto + Debit/Credit Cards)5% Bonus",
        "Perfect Money ＥＵＲ (Min 1) ( 5% Bonus )",
        "𝙒𝙞𝙨𝙚.𝙘𝙤𝙢(2%̴ 𝘽𝙤𝙣𝙪𝙨)"
    ];



    return (
        <div className='select-payment-method-pop-up'>
            <button className="close-button"
                onClick={handleCloseButtonClick}>
                <Icon icon="mingcute:close-fill" />
            </button>

            <div className="pop-up-header">
                <h1>
                    Select Payment Method
                </h1>
            </div>
            <div className="pop-up-body">
                {
                    selectMethodsArray.map((item, index) => {
                        return <div
                            className={`item ${item === currentSelected}`}
                            key={index}
                            onClick={() => handleItemClick(item)}
                        >
                            <span>{index} - </span>
                            <p>
                                {item}
                            </p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default SelectPaymentPopup