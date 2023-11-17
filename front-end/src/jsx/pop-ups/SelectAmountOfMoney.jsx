import { useDispatch } from "react-redux"
import { closePopUp } from "../../features/popUpReducer"
import { Icon } from "@iconify/react"
import { useState } from "react"

const SelectAmountOfMoney = ({ resultFunction, feePercentage }) => {

  const dispatcher = useDispatch()
  const [amount, setAmount] = useState(0)
  const [fee, setFee] = useState(0)
  const [total, setTota] = useState(0)

  const handleCloseButtonClick = () => {
    dispatcher(closePopUp())
  }


  const formSubmit = (e) => {
    e.preventDefault()
    const data = {
      amount: amount,
      fee: fee,
      total: total
    }
    resultFunction(data)
    dispatcher(closePopUp())
  }


  const amountInputChanged = (e) => {
    let value = parseInt(e.target.value)
    if (isNaN(value)) {
      value = 0
    }
    const feeTemp = value * feePercentage;
    const totalTemp = value + feeTemp;
    setAmount(value)
    setFee(feeTemp)
    setTota(totalTemp)
  }



  return (
    <form
      className='select-amount-of-money-pop-up'
      action="#"
      onSubmit={formSubmit}
    >
      <button className="close-button"
        onClick={handleCloseButtonClick}>
        <Icon icon="mingcute:close-fill" />
      </button>

      <div className="pop-up-header">
        <h1>
          Enter Amount Of Payment
        </h1>
      </div>
      <div className="pop-up-body">
        <fieldset>
          <legend>
            <Icon icon="healthicons:money-bag" />
            <span>
              Amount
            </span>
          </legend>
          <div className="content">
            <span>$</span>
            <input
              type="number"
              name="amount"
              defaultValue={amount}
              onChange={amountInputChanged} />
          </div>
        </fieldset>
        <div className="form-info">
          <div className="form-group">
            <div className="group-left">
              <Icon icon="fluent:feed-48-filled" />
              <span>Extra fee</span>
            </div>
            <div className="group-right">
              <span>$</span>
              <span>{fee}</span>
            </div>
          </div>
          <div className="form-group">
            <div className="group-left">
              <Icon icon="ion:rocket" />
              <span>Total</span>
            </div>
            <div className="group-right">
              <span>$</span>
              <span>{total}</span>
            </div>
          </div>
        </div>
        <div className="form-buttons">
          <button>
            <span>Submit</span>
            <Icon icon="formkit:submit" />
          </button>
        </div>
      </div>
    </form>
  )
}

export default SelectAmountOfMoney