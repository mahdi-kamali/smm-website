import { Icon } from "@iconify/react"
import { useDispatch } from "react-redux"
import { closePopUp } from "../../features/popUpReducer"
import { useState } from "react"

const SelectCurrencyPopUp = ({ resultFunction, currentSelected }) => {

  const dispatcher = useDispatch()

  const items = [
    {
      unit: "INR",
      symbol: "₹"
    },
    {
      unit: "TRY",
      symbol: "₺"
    },
    {
      unit: "RUB",
      symbol: "₽"
    },
    {
      unit: "BRL",
      symbol: "R$"
    },
    {
      unit: "NGN",
      symbol: "₦"
    },
    {
      unit: "KRW",
      symbol: "₩"
    },
    {
      unit: "THB",
      symbol: "฿"
    },
    {
      unit: "SAR",
      symbol: "ر.س"
    },
    {
      unit: "CNY",
      symbol: "¥"
    },
    {
      unit: "VND",
      symbol: "₫"
    },
    {
      unit: "KWD",
      symbol: "د.ك"
    },
    {
      unit: "EGP",
      symbol: "£"
    },
    {
      unit: "PKR",
      symbol: "Rs"
    },
  ];


  const [availableItems, setAvailableItems] = useState(items)


  const handleCloseButtonClick = () => {
    dispatcher(closePopUp())
  }




  const handleItemClick = (item) => {
    resultFunction(item)
    dispatcher(closePopUp())
  }



  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    const newListBySearch = []
    items.forEach((item) => {
      if (item.unit.toLowerCase().includes(value)) {
        newListBySearch.push(item)
      } else {
      }
    })

    setAvailableItems(newListBySearch)

  }







  return (
    <div className="select-currency-pop-up">
      <button className="close-button"
        onClick={handleCloseButtonClick}>
        <Icon icon="mingcute:close-fill" />
      </button>
      <div className="pop-up-header">
        <fieldset
          onFocus={(e) => { e.target.parentElement.parentElement.classList.add("focused") }}
          onBlur={(e) => { e.target.parentElement.parentElement.classList.remove("focused") }}
        >
          <legend>
            <Icon icon="ant-design:select-outlined" />
            <span>Select Your Currency</span>
          </legend>
          <div className="search-currency">
            <input
              type="text"
              placeholder="Search Here..."
              onChange={handleInputChange} />
            <Icon icon="iconamoon:send-fill" className="search-icon" />
          </div>
        </fieldset>

      </div>
      <div className="pop-up-body">
        <ul>
          {
            availableItems.map((item, index) => {
              return <li
                className={currentSelected.unit === item.unit ? "selected" : ""} key={index} onClick={() => handleItemClick(item)}>
                <span>{item.unit}</span>
                <span>{item.symbol}</span>
              </li>
            })
          }

        </ul>
      </div>

    </div >
  )
}

export default SelectCurrencyPopUp