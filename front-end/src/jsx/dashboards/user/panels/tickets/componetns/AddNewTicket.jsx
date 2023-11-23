import { useState } from "react"
import FiledSet from "../../../../../cutsome-components/Fieldset/FiledSet"
import { Icon } from "@iconify/react"
import SelectBox from "../../../../../cutsome-components/select-box/SelectBox"
import { post } from "../../../../../../lib/useFetch"
import { API } from "../../../../../../lib/envAccess"
import Swal from "sweetalert2"
import { showError } from "../../../../../../lib/alertHandler"
const AddNewTicket = () => {



    const handleFormSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        Swal.fire({
            title: "Are you sur for submiting ?",
            showCancelButton: true,
            cancelButtonColor: "red",
            confirmButtonColor: "green",
            icon: "question"
        }).then(result => {
            if (result.isConfirmed) {
                post(API.DASHBOARD.USER_TICKET_SUBMIT.POST,
                    formData)
                    .then(response => {

                        if (response.status === 200) {
                            Swal.fire({
                                title: "Your ticket Successfuly Submited! ",
                                icon: "success"
                            })
                        }
                    }).catch(err => {

                    })
            }
        })

    }




    return (
        <form className="add-new-teicket" onSubmit={handleFormSubmit}>

            <FiledSet
                isRequired={true}
                fieldClassName={"add-new-ticket-field"}
                legend={
                    {
                        title: "Subject",
                        svg: <Icon icon="fluent:document-header-20-filled" />
                    }
                }

                inputName={"subject"} />


            <FiledSet
                isRequired={true}
                fieldClassName={"add-new-ticket-field"}
                legend={{ title: "order-id / Anything ID", svg: <Icon icon="fluent-mdl2:product" /> }}
                inputName={"orderID"}
            />


            <FiledSet
                isRequired={true}
                fieldClassName={"add-new-ticket-field"}
                legend={
                    {
                        title: "Request",
                        svg: <Icon icon="mingcute:git-pull-request-fill" />
                    }
                }
                inputName={"request"} />


            <FiledSet
                isRequired={true}
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