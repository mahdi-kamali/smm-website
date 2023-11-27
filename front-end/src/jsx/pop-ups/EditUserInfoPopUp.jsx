

import { useDispatch } from "react-redux"
import { Icon } from "@iconify/react"
import { closePopUp } from "../../features/popUpReducer"
import AdminPanelFiledset from "../dashboards/admin/components/tools/fieldset/AdminPanelFiledset"
import Legend from "../dashboards/admin/components/tools/fieldset/Legend"
import FieldBody from "../dashboards/admin/components/tools/fieldset/FieldBody"
import { useState } from "react"
import { API, SERVER } from "../../lib/envAccess"
import { put } from "../../lib/useFetch"
import { showError, showSuccess } from "../../lib/alertHandler"





export default function EditUserInfoPopUp({ user, result }) {


    const [image, setImage] = useState(SERVER.BASE_URL + user.image)

    const dispatcher = useDispatch()

    const handleCloseButtonClick = () => {
        dispatcher(closePopUp())
    }


    const handleOnImageChange = (e) => {
        const file = e.target.files[0]
        const url = URL.createObjectURL(file)
        setImage(url)


    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        formData.append("userID", user._id)



        put(API.ADMIN_DASHBOARD.USERS.USER.EDIT_INFO.PUT, formData)
            .then(resp => {
                showSuccess(resp).then(end => {
                    result()
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
            className='admin-panel-edit-user-pop-up'
            onSubmit={handleOnSubmit}
        >
            <button className="close-button"
                onClick={handleCloseButtonClick}>
                <Icon icon="mingcute:close-fill" />
            </button>

            <div className="pop-up-header">
                <h1>
                    Edit User
                </h1>
            </div>

            <div className="pop-up-body">

                <div className="image-input">
                    <img src={image} />
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleOnImageChange} />
                </div>
                <AdminPanelFiledset className={"user-edit-field"}>
                    <Legend>
                        <Icon icon="icon-park-outline:edit-name" />
                        <span>Name</span>
                    </Legend>
                    <FieldBody>
                        <input
                            type="text"
                            name="fullName"
                            defaultValue={user.fullName} />
                    </FieldBody>
                </AdminPanelFiledset>

                <AdminPanelFiledset className={"user-edit-field"}>
                    <Legend>
                        <Icon icon="nimbus:money" />
                        <span>Found</span>
                    </Legend>
                    <FieldBody>
                        <input
                            type="number"
                            name="found"
                            min={0}
                            max={99999999}
                            defaultValue={user.found} />
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
