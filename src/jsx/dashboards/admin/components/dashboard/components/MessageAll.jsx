import { Icon } from "@iconify/react";
import { useState } from "react";




const messages = [
    {
        id: 0,
        title: "New Services Coming Soon!",
        status: "published",
        message: "New year is coming soon..... we are preparing for new services for providing"
    },
    {
        id: 1,
        title: "Holiday Office Closure",
        status: "not-published",
        message: "Our office will be closed for the holidays from December 24th to January 2nd. Happy holidays!"
    },
    {
        id: 2,
        title: "Upcoming Webinar",
        status: "not-published",
        message: "Join our webinar on 'Effective Social Media Marketing Strategies' on January 15th at 3:00 PM."
    },
    {
        id: 3,
        title: "Product Launch Event",
        status: "published",
        message: "Don't miss our product launch event on February 5th. Exciting new products await!"
    }
];





export default function MessageAll() {
    const [isCreatingNew, setIsCreatingNew] = useState(false)
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
                    messages.map((item) => {
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
                                        1 Day ago
                                    </span>
                                </small>
                            </div>
                            <div className="item-body">
                                <p className="message">
                                    {item.message}
                                </p>
                            </div>
                            <div className="item-buttons">
                                <button className="delete">
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
                    <div className="input-box">
                        <input type="text" placeholder="title" />
                        <textarea name="text"
                            placeholder="Message"
                            cols="30" rows="10">
                        </textarea>
                        <label >
                            <input type="checkbox" />
                            <span>Publish Now?</span>
                        </label>
                        <div className="buttons">
                            <button className="submit">
                                send
                                <Icon icon="iconamoon:send-fill" />
                            </button>
                            <button
                                onClick={() => setIsCreatingNew(false)}
                                className="cancel">
                                Cancel
                                <Icon icon="mdi:cancel-bold" />
                            </button>
                        </div>
                    </div>
                    :
                    <button
                        className="create-new"
                        onClick={() => { setIsCreatingNew(true) }}>
                        <Icon icon="wpf:create-new" />
                        <span>Create New</span>
                    </button>}


        </div>
    )
}
