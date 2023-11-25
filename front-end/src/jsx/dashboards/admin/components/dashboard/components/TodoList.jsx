

import { Icon } from "@iconify/react";
import MaxLineText from "../../../../../cutsome-components/Text/MaxLineText";
import Select from "react-select"
import { useState } from "react";
import { deletE, post, put, useFetch } from "../../../../../../lib/useFetch";
import { API } from "../../../../../../lib/envAccess";
import Swal from "sweetalert2"
import { showError } from "../../../../../../lib/alertHandler"
export default function TodoList() {

    const [isCreating, setIsCreating] = useState(false)
    const [todos, error, loading, setUrl, refresh] = useFetch(API.ADMIN_DASHBOARD.TODO_LIST.GET)


    if (loading === true) return <h1>Loading....</h1>


    const dateSelectOptions = [
        { value: 'Yearly', label: 'Yearly' },
        { value: 'Monthly', label: 'Monthly' },
        { value: 'Daily', label: 'Daily' }
    ]

    const toggleStatus = (todo) => {
        const toggledSolved = !todo.solved
        put(API.ADMIN_DASHBOARD.TODO_LIST.PUT, {
            id: todo._id,
            solved: toggledSolved
        }).then(res => {
            if (res.status === 200) {
                Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: "Todo Changed!"
                }).then(end => { refresh() })
            }
        })
    }

    const deleteClick = (todo) => {
        const id = todo._id
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
                deletE(API.ADMIN_DASHBOARD.TODO_LIST.DELETE, { id: id })
                    .then(res => {
                        if (res.status === 200) {
                            Swal.fire({
                                icon: "success",
                                title: "Success",
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

    const addNewTodo = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)


        post(API.ADMIN_DASHBOARD.TODO_LIST.POST, formData)
            .then(res => {
                if (res.status === 200) {
                    Swal.fire({
                        icon: "success",
                        title: "Success!",
                        text: "Your Todo succesfuly added!"
                    }).then(end => {
                        refresh()
                    })
                }
            })
            .catch(error => {
                const errors = error?.response?.data
                showError(errors)
            })
    }

    return (
        <div className="todo-list box">
            <div className="info">
                <div className="left">
                    <h2>To-do list</h2>
                    <small>
                        Task tracking list.
                    </small>
                </div>
                <div className="right">
                    <Select
                        options={dateSelectOptions}
                        placeholder={"Date"}
                        isSearchable={false}
                    />


                </div>
            </div>
            <div className="list">
                {
                    todos?.map((todo, index) => {
                        return <div className={`item item-${todo.completed}`} key={index}>
                            <div className="item-info">
                                <div className="item-header">
                                    <MaxLineText
                                        maxLine={1}
                                        content={<h2>
                                            {todo.title}
                                        </h2>} />

                                </div>
                                <div className="item-body">
                                    <p>
                                        {todo.description}
                                    </p>
                                </div>
                            </div>
                            <div className="item-date">
                                <div className="date property">
                                    <Icon icon="clarity:date-line" />
                                    <span>
                                        {
                                            (new Date(todo.createdAt))
                                                .toDateString()
                                        }
                                    </span>
                                </div>
                                <div className="date property">
                                    <Icon icon="mingcute:time-line" />
                                    <span>
                                        {
                                            (new Date(todo.createdAt))
                                                .toLocaleTimeString()
                                        }
                                    </span>
                                </div>
                            </div>
                            <div className="item-buttons">
                                <button
                                    className={`${todo.solved}`}
                                    onClick={() => toggleStatus(todo)}
                                >
                                    {todo.solved ? <Icon icon="ic:baseline-done-all" />
                                        : <Icon icon="material-symbols:do-not-disturb-on" />}
                                    <span>
                                        {todo.solved ? "Sovled" : "Not"}
                                    </span>
                                </button>
                                <button
                                    className="delete"
                                    onClick={() => deleteClick(todo)}>
                                    <Icon icon="fluent:delete-28-filled" />
                                    <span>Delete</span>
                                </button>
                            </div>
                        </div>
                    })
                }

            </div>
            <div className="add-new">

                {
                    !isCreating ? <button
                        className="create-new"
                        onClick={() => setIsCreating(true)}>
                        <Icon icon="wpf:create-new" />
                        <span>Create New</span>
                    </button> :
                        <form
                            onSubmit={addNewTodo}
                            className="input-box">
                            <input
                                type="text"
                                placeholder="title"
                                required
                                name="title" />
                            <textarea
                                name="description"
                                placeholder="description"
                                required
                                cols="30" rows="10">
                            </textarea>
                            <div className="buttons">
                                <button className="submit">
                                    send
                                    <Icon icon="iconamoon:send-fill" />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsCreating(false)}
                                    className="cancel">
                                    Cancel
                                    <Icon icon="mdi:cancel-bold" />
                                </button>
                            </div>
                        </form>

                }



            </div>
        </div>
    )
}
