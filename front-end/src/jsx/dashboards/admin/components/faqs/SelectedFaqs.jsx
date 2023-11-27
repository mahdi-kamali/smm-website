
import { Icon, loadIcon } from "@iconify/react"

import { deletE, useFetch } from "../../../../../lib/useFetch"
import { API } from "../../../../../lib/envAccess"
import { showError, showSuccess } from "../../../../../lib/alertHandler"
import FAQsAccordion from "../../../../cutsome-components/accordion/FAQsAccordion"
import { useDispatch } from "react-redux"
import { ADMIN_PANEL_CREATE_FAQS, ADMIN_PANEL_EDIT_FAQS } from "../../../../pop-ups/Constaints"
import { showPopUp } from "../../../../../features/popUpReducer"
import CreateFaqsPopUp from "../../../../pop-ups/CreateFaqsPopUp"
import EditFaqsPopUp from "../../../../pop-ups/EditFaqsPopUp"

import { useState } from "react"

export default function SelectedFaqs() {



    const [pageNumber, selectedPageNumber] = useState(1)
    const dispatcher = useDispatch()


    const [
        data,
        error,
        loading,
        setUrl,
        refresh] = useFetch(
            API.ADMIN_DASHBOARD.SELECTED_FAQS.GET + pageNumber
        )



    const deleteFaqs = (faq) => {
        deletE(API.ADMIN_DASHBOARD.SELECTED_FAQS.FAQ.DELETE, {
            id: faq._id
        })
            .then(resp => {
                showSuccess(resp)
                    .finally(end => {
                        refresh()
                    })
            })
            .catch(err => {
                const errors = err?.response?.data
                showError(errors)
            })
    }


    const openCreateFaqPopUp = () => {
        dispatcher(showPopUp({
            type: ADMIN_PANEL_CREATE_FAQS,
            duration: 2000,
            component: <CreateFaqsPopUp refresh={refresh} />
        }))
    }

    const openEditFaqPopUp = (faq) => {
        dispatcher(showPopUp({
            type: ADMIN_PANEL_EDIT_FAQS,
            duration: 2000,
            component: <EditFaqsPopUp faqs={faq} refresh={refresh} />
        }))
    }



    return (
        <div className="selected-faqs">
            <h2 className="header">
                <h1 className="left">
                    Selected Faqs
                </h1>
                <div className="right">
                    <button onClick={openCreateFaqPopUp}>
                        <Icon icon="wpf:create-new" />
                        <span>Create New</span>
                    </button>
                </div>
            </h2>
            <div className="body">
                {data?.selectedFaqs?.map((faq, index) => {
                    return <div className="item">
                        <FAQsAccordion
                            headerTitle={faq.question}
                            bodyTitle={faq.answer}
                            key={index} />
                        <div className="item-buttons">
                            <button
                                onClick={() => { deleteFaqs(faq) }}>
                                <Icon icon="fluent:delete-32-filled" />
                                <span>Delete</span>
                            </button>
                            <button
                                onClick={() => openEditFaqPopUp(faq)}>
                                <Icon icon="bxs:edit" />
                                <span>Edit</span>
                            </button>
                        </div>
                    </div>

                })}
            </div>
        </div>
    )
}
