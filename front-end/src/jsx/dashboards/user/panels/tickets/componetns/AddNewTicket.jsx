import { useState } from "react"
import FiledSet from "../../../../../cutsome-components/Fieldset/FiledSet"
import { Icon } from "@iconify/react"
import SelectBox from "../../../../../cutsome-components/select-box/SelectBox"

const AddNewTicket = () => {


    const [steps, setSteps] = useState([])


    const subjects = [
        {
            title: "Order",
            svg: "",
            value: 1
        },
        {
            title: "Payment",
            svg: "",
            value: 2
        }
        ,
        {
            title: "Child Panel",
            svg: "",
            value: 3
        }
        ,
        {
            title: "API",
            svg: "",
            value: 4
        }
        ,
        {
            title: "Bug",
            svg: "",
            value: 5
        }
        ,
        {
            title: "Other",
            svg: "",
            value: 6
        }

    ]

    const requests = [
        {
            title: "Refill",
            svg: "",
            value: 1
        },
        {
            title: "Cancel",
            svg: "",
            value: 2
        }
        ,
        {
            title: "Speed Up",
            svg: "",
            value: 3
        }
        ,
        {
            title: "Restart",
            svg: "",
            value: 4
        }
        ,
        {
            title: "Other",
            svg: "",
            value: 5
        }


    ]



    const handleFormSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        formData.forEach((value, key) => {
        })
    }




    return (
        <form className="add-new-teicket" onSubmit={handleFormSubmit}>
            <SelectBox
                legend={
                    {
                        title: "Subject",
                        svg: <Icon icon="fluent:document-header-20-filled" />
                    }
                }
                items={subjects}
                defaultValue={subjects[0]}
                inputName={"subject"} />

            <FiledSet
                fieldClassName={"add-new-ticket-field"}
                legend={{ title: "order-id", svg: <Icon icon="fluent-mdl2:product" /> }}
                inputName={"order-id"}
            />

            <SelectBox
                legend={
                    {
                        title: "Request",
                        svg: <Icon icon="mingcute:git-pull-request-fill" />
                    }
                }
                items={requests}
                defaultValue={requests[0]}
                inputName={"request"} />


            <FiledSet
                fieldClassName={"add-new-ticket-field"}
                legend={{ title: "Message", svg: <Icon icon="ant-design:message-filled" /> }}
                inputName={"message"}
                inputType={"textarea"}
            />

            <button className="submit-button">
                <span>
                    Submit Ticket
                </span>
                <Icon icon="formkit:submit" />
            </button>


        </form>
    )
}

export default AddNewTicket