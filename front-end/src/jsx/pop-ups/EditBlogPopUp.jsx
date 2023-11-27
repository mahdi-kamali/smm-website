import { useDispatch } from "react-redux"
import { closePopUp } from "../../features/popUpReducer"
import { Icon } from "@iconify/react"
import AdminPanelFiledset from "../dashboards/admin/components/tools/fieldset/AdminPanelFiledset"
import Legend from "../dashboards/admin/components/tools/fieldset/Legend"
import FieldBody from "../dashboards/admin/components/tools/fieldset/FieldBody"
import { useState } from "react"
import { API, SERVER } from "../../lib/envAccess"
import { put } from "../../lib/useFetch"
import { showError, showSuccess } from "../../lib/alertHandler"

export default function EditBlogPopUp({ blog, refresh }) {


    const [image, setImage] = useState(SERVER.BASE_URL + blog.image)


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


    const handleOnSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)

        formData.append("blogID", blog._id)


        put(API.ADMIN_DASHBOARD.BLOGS.BLOG.EDIT.PUT, formData)
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
        <form className="admin-panel-create-blog-pop-up"
            onSubmit={handleOnSubmit}
        >
            <button className="close-button"
                onClick={handleCloseButtonClick}>
                <Icon icon="mingcute:close-fill" />
            </button>

            <div className="pop-up-header">
                <h1>
                    Edit Blog
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

                <AdminPanelFiledset className={"create-faq-field-box"}>
                    <Legend>
                        <Icon icon="pajamas:title" />
                        <span>Title</span>
                    </Legend>
                    <FieldBody>
                        <input
                            type="text"
                            name="title"
                            defaultValue={blog.title} />
                    </FieldBody>
                </AdminPanelFiledset>

                <AdminPanelFiledset className={"create-faq-field-box"}>
                    <Legend>
                        <Icon icon="material-symbols:description-outline" />
                        <span>Description</span>
                    </Legend>
                    <FieldBody>
                        <textarea
                            cols={10}
                            rows={10}
                            type="text"
                            name="description"
                            defaultValue={blog.description} />
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
