
import { useDispatch } from "react-redux"
import { Icon } from "@iconify/react"
import { closePopUp } from "../../features/popUpReducer"
import AdminPanelFiledset from "../dashboards/admin/components/tools/fieldset/AdminPanelFiledset"
import Legend from "../dashboards/admin/components/tools/fieldset/Legend"
import FieldBody from "../dashboards/admin/components/tools/fieldset/FieldBody"
import { logFormData } from "../../lib/helperTools"
import { put } from "../../lib/useFetch"
import { API } from "../../lib/envAccess"
import { showError, showSuccess } from "../../lib/alertHandler"




export default function EditFaqsPopUp({ faqs, refresh }) {




    const dispatcher = useDispatch()

    const handleCloseButtonClick = () => {
        dispatcher(closePopUp())
    }


    const handleOnSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        formData.append("faqID", faqs._id)
        put(API.ADMIN_DASHBOARD.SELECTED_FAQS.FAQ.EDIT.PUT, formData)
            .then(resp => {
                showSuccess(resp).finally(end => {
                    refresh()
                    handleCloseButtonClick()
                })
            })
            .catch(err => {
                const errors = err?.response?.data
                showError(errors)
            })
    }

    return (
        <form
            className='admin-panel-create-faq-pop-up'
            onSubmit={handleOnSubmit}>
            <button className="close-button"
                onClick={handleCloseButtonClick}>
                <Icon icon="mingcute:close-fill" />
            </button>

            <div className="pop-up-header">
                <h1>
                    Edit Faqs
                </h1>
            </div>
            <div className="pop-up-body">
                <AdminPanelFiledset className={"create-faq-field-box"}>
                    <Legend>
                        <Icon icon="ri:question-fill" />
                        <span>Question</span>
                    </Legend>
                    <FieldBody>
                        <input
                            type="text"
                            name="question"
                            defaultValue={faqs.question} />
                    </FieldBody>
                </AdminPanelFiledset>

                <AdminPanelFiledset className={"create-faq-field-box"}>
                    <Legend>
                        <Icon icon="fluent:text-12-filled" />
                        <span>Answer</span>
                    </Legend>
                    <FieldBody>
                        <textarea
                            cols={10}
                            rows={15}
                            type="number"
                            name="answer"
                            defaultValue={faqs.answer} />
                    </FieldBody>
                </AdminPanelFiledset>
                <button className="submit">
                    <span>Submit </span>
                    <Icon icon="iconamoon:send-fill" />
                </button>
            </div>
        </form>
    )
}
