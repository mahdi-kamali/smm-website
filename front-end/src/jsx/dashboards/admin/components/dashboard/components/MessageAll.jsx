import { Icon } from "@iconify/react";
import { useState } from "react";
import { deletE, post, useFetch } from "../../../../../../lib/useFetch";
import { API } from "../../../../../../lib/envAccess";
import { showError } from "../../../../../../lib/alertHandler";
import Swal from "sweetalert2"


export default function MessageAll() {

    const [isCreatingNew, setIsCreatingNew] = useState(false)

    const [data, error, loading, setUrl, refresh] = useFetch(API.ADMIN_DASHBOARD.MESSAGE_ALL.GET)





    const handleCreate = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)



        post(API.ADMIN_DASHBOARD.MESSAGE_ALL.POST, formData)
            .then(response => {
                if (response.status === 200) {
                    Swal.fire({
                        icon: "success",
                        title: "Success!",
                        text: response.data
                    }).then(end => {
                        refresh()
                    })
                }
            })
            .catch(err => {
                const errors = err?.response?.data
                showError(errors)
            })

    }

    const handleOnDelete = (message) => {
        const id = message._id

        Swal.fire({
            title: "Are you Sur for Deleting?",
            icon: "question",
            confirmButtonColor: "green",
            showDenyButton: true,
            denyButtonColor: "red",
            denyButtonText: "No",
            confirmButtonText: "Yes"
        }).then(res => {
            if (res.isConfirmed)
                deletE(API.ADMIN_DASHBOARD.MESSAGE_ALL.DELETE, {
                    id: id
                })
                    .then(res => {
                        if (res.status === 200) {
                            Swal.fire({
                                icon: "success",
                                title: "Success!",
                                text: res.data
                            }).then(end => {
                                refresh()
                            })
                        }
                    })
                    .catch(err => {
                        const errors = err?.response?.data
                        showError(errors)
                    })
        })


    }

    if (loading === true) return <h1>Loading...</h1>

    return (
        <div className="message-all box">
            <div className="info">
                <div className="left">
                    <h2>Message All</h2>
                    <small>
                        send message to all customers
                    </small>
                </div>
                <div className="right">
                    {/* <Select
                        options={dateSelectOptions}
                        placeholder={"Date"}
                        isSearchable={false}
                    /> */}
                </div>
                <div className="list"></div>
            </div>
            <div className="list">
                {
                    data.map((item) => {
                        return <div
                            className="item"
                            key={item.id}>
                            <div className="item-header">
                                <h2 className="title">
                                    {item.title}
                                </h2>
                                <small className="date">
                                    <Icon icon="clarity:date-line" />
                                    <span>
                                        {(new Date(item.createdAt)).toLocaleString()}
                                    </span>
                                </small>
                            </div>
                            <div className="item-body">
                                <p className="message">
                                    {item.description}
                                </p>
                            </div>
                            <div className="item-buttons">
                                <button
                                    className="delete"
                                    onClick={() => handleOnDelete(item)}
                                >
                                    <Icon icon="fluent:delete-32-filled" />
                                    Delete
                                </button>
                                <button className={item.status}>
                                    <Icon icon="gridicons:visible" />
                                    {item.status}
                                </button>
                            </div>
                        </div>

                    })
                }

            </div>


            {
                isCreatingNew ?
                    <form
                        onSubmit={handleCreate}
                        className="input-box">
                        <input
                            required
                            type="text"
                            placeholder="title"
                            name="title" />
                        <textarea
                            required
                            name="description"
                            placeholder="Message"
                            cols="30"
                            rows="10"
                        >
                        </textarea>
                        <label>
                            <input
                                name="isPublished"
                                type="checkbox"
                                defaultChecked={true} />
                            <span>Publish Now?</span>
                        </label>
                        <div className="buttons">
                            <button className="submit">
                                send
                                <Icon icon="iconamoon:send-fill" />
                            </button>
                            <button
                                type="button"
                                onClick={() => setIsCreatingNew(false)}
                                className="cancel">
                                Cancel
                                <Icon icon="mdi:cancel-bold" />
                            </button>
                        </div>
                    </form> :
                    <button
                        className="create-new"
                        onClick={() => { setIsCreatingNew(true) }}>
                        <Icon icon="wpf:create-new" />
                        <span>Create New</span>
                    </button>}


        </div>
    )
}
