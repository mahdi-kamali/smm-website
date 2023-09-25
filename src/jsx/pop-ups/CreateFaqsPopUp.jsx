
import { useDispatch } from "react-redux"
import { Icon } from "@iconify/react"
import { closePopUp } from "../../features/popUpReducer"
import AdminPanelFiledset from "../dashboards/admin/components/tools/fieldset/AdminPanelFiledset"
import Legend from "../dashboards/admin/components/tools/fieldset/Legend"
import FieldBody from "../dashboards/admin/components/tools/fieldset/FieldBody"
import { useState } from "react"




export default function CreateFaqsPopUp() {






    const dispatcher = useDispatch()

    const handleCloseButtonClick = () => {
        dispatcher(closePopUp())
    }





    return (
        <div className='admin-panel-create-faq-pop-up'>
            <button className="close-button"
                onClick={handleCloseButtonClick}>
                <Icon icon="mingcute:close-fill" />
            </button>

            <div className="pop-up-header">
                <h1>
                    Create Faqs
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
                            defaultValue={""} />
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
                            rows={10}
                            type="number"
                            name="answer"
                            defaultValue={""} />
                    </FieldBody>
                </AdminPanelFiledset>
                <button className="submit">
                    <span>Submit </span>
                    <Icon icon="iconamoon:send-fill" />
                </button>
            </div>
        </div>
    )
}
