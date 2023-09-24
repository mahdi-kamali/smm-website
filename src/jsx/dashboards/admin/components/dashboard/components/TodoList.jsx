

import { Icon } from "@iconify/react";
import MaxLineText from "../../../../../cutsome-components/Text/MaxLineText";
import Select from "react-select"
import { useState } from "react";
export default function TodoList() {

    const [isCreating, setIsCreating] = useState(false)


    const toDoList = [
        {
            task: "Create social media marketing strategy",
            description: "Develop a comprehensive marketing strategy for social media campaigns.",
            completed: true
        },
        {
            task: "Schedule social media posts",
            description: "Plan and schedule posts across social media platforms for the week.",
            completed: false
        },
        {
            task: "Analyze social media analytics",
            description: "Review and analyze performance metrics for social media campaigns.",
            completed: false
        },
        {
            task: "Respond to customer inquiries",
            description: "Engage with customers and respond to inquiries and comments on social media.",
            completed: false
        },
        {
            task: "Optimize social media profiles",
            description: "Update and optimize social media profiles to improve visibility and branding.",
            completed: false
        },
        {
            task: "Manage social media advertising",
            description: "Set up and monitor social media advertising campaigns.",
            completed: false
        },
        {
            task: "Create content calendar",
            description: "Plan and organize content for social media posts and campaigns.",
            completed: false
        },
        {
            task: "Monitor industry trends",
            description: "Stay updated on industry trends and incorporate them into social media strategies.",
            completed: false
        },
        {
            task: "Collaborate with influencers",
            description: "Identify and collaborate with social media influencers for marketing campaigns.",
            completed: false
        },
        {
            task: "Generate social media reports",
            description: "Prepare detailed reports on the effectiveness of social media marketing efforts.",
            completed: false
        }
    ];

    const dateSelectOptions = [
        { value: 'Yearly', label: 'Yearly' },
        { value: 'Monthly', label: 'Monthly' },
        { value: 'Daily', label: 'Daily' }
    ]

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
                    toDoList.map((todo, index) => {
                        return <div className={`item item-${todo.completed}`} key={index}>
                            <div className="item-info">
                                <div className="item-header">
                                    <MaxLineText
                                        maxLine={1}
                                        content={<h2>
                                            {todo.task}
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
                                    <span>2024/2/12</span>
                                </div>
                                <div className="date property">
                                    <Icon icon="mingcute:time-line" />
                                    <span>23:12:24</span>
                                </div>
                            </div>
                            <div className="item-buttons">
                                <button className="status">
                                    <span>
                                        Done
                                    </span>
                                    <Icon icon="ic:baseline-done-all" />
                                </button>
                                <button className="delete">
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
                        <div className="input-box">
                            <input type="text" placeholder="title" />
                            <textarea name="text"
                                placeholder="description"
                                cols="30" rows="10">
                            </textarea>
                            <div className="buttons">
                                <button className="submit">
                                    send
                                    <Icon icon="iconamoon:send-fill" />
                                </button>
                                <button
                                    onClick={()=>setIsCreating(false)}
                                    className="cancel">
                                    Cancel
                                    <Icon icon="mdi:cancel-bold" />
                                </button>
                            </div>
                        </div>

                }



            </div>
        </div>
    )
}
