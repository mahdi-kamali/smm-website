

import { useDispatch } from "react-redux"
import { Icon } from "@iconify/react"
import { closePopUp } from "../../features/popUpReducer"
import AdminPanelFiledset from "../dashboards/admin/components/tools/fieldset/AdminPanelFiledset"
import Legend from "../dashboards/admin/components/tools/fieldset/Legend"
import FieldBody from "../dashboards/admin/components/tools/fieldset/FieldBody"
import { useState } from "react"





export default function EditUserInfoPopUp({ user }) {


    const [image, setImage] = useState(user.avatar)

    const dispatcher = useDispatch()

    const handleCloseButtonClick = () => {
        dispatcher(closePopUp())
    }


    const handleOnImageChange = (e) => {
        const file = e.target.files[0]

        const fileReader = new FileReader()
        fileReader.onload = (e) => {
            const result = e.target.result
            setImage(result)
        }

        fileReader.readAsDataURL(file)
    }




    return (
        <div className='admin-panel-edit-user-pop-up'>
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
                        name="avatar"
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
                            name="name"
                            defaultValue={user.fullName} />
                    </FieldBody>
                </AdminPanelFiledset>

                <AdminPanelFiledset className={"user-edit-field"}>
                    <Legend>
                        <Icon icon="nimbus:money" />
                        <span>Charge</span>
                    </Legend>
                    <FieldBody>
                        <input
                            type="number"
                            name="charge"
                            defaultValue={user.charge} />
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
