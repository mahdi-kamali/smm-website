import { useDispatch } from "react-redux"
import { closePopUp } from "../../features/popUpReducer"
import { Icon } from "@iconify/react"






const SelectPaymentPopup = ({ methods, resultFunction, currentSelected }) => {



    const dispatcher = useDispatch()

    const handleCloseButtonClick = () => {
        dispatcher(closePopUp())
    }

    const handleItemClick = (item) => {
        resultFunction(item)
        dispatcher(closePopUp())

    }






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
                    methods.map((item, index) => {
                        return <div
                            className={`item ${item?.name === currentSelected?.name}`}
                            key={index}
                            onClick={() => handleItemClick(item)}
                        >
                            <span>{index} - </span>
                            <p>
                                {item.name}
                            </p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default SelectPaymentPopup