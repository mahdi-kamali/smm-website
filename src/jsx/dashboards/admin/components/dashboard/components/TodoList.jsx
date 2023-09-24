import { useState } from "react"

export default function TodoList() {


    const [allTodo, setAllTodos] = useState([])


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
                    {/* <Select
                        options={dateSelectOptions}
                        placeholder={"Date"}
                        isSearchable={false}
                    /> */}


                </div>
            </div>
        </div>
    )
}
