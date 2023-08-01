import { Icon } from '@iconify/react'
import React from 'react'

const RecentOrderItem = ({ service, stateClass, currentSelected, selectFunction }) => {


    const temp = {
        "Service_id": "4255",
        "Service": "Instagram Ultrafast Likes-(Max 300K)(Speed:10-20K/Per Hour)(Good Quality)(Non Drop)INSTANT",
        "Rate per 1000": "$0.03 ",
        "Min order": "20",
        "Max order": "300000",
        "Average time": "6 hours 22 minutes"
    }

    let title = ""
    let icon = ""

    switch (stateClass) {
        case "success":
            title = "Successful on Ordering !"
            stateClass = "success"
            icon = <Icon icon="ep:success-filled" />
            break;
        case "info":
            title = "Info About Service !"
            stateClass = "info"
            icon = <Icon icon="ic:sharp-info" />
            break;
        case "danger":
            title = "Error While Ordering !"
            stateClass = "danger"
            icon = <Icon icon="flat-color-icons:cancel" />
            break;
        case "warning":
            title = "Warning For Order !"
            stateClass = "warning"
            icon = <Icon icon="fluent:warning-24-filled" />
            break;
        case "proccess":
            title = "Processing About Order !"
            stateClass = "proccess"
            icon = <Icon icon="ant-design:setting-filled" />
            break;
        default:
            break;
    }

    const handleOnClikc = () => {
        selectFunction(service)
    }



    const randomDate = parseInt((Math.random() * 30).toFixed()) + 2000
    return (
        <div
            onClick={handleOnClikc}
            className={`item ${stateClass} ${currentSelected}`} >
            <div className="line">
            </div>
            <div className="left">
                <div className="item-icons">
                    {icon}
                    <Icon icon="basil:instagram-solid" />
                </div>

            </div>
            <div className="mid">
                <div className="item-date">
                    <span>
                        <Icon icon="clarity:date-solid" />
                        {randomDate}
                    </span>
                    <span>
                        <Icon icon="ri:time-fill" />
                        24:24
                    </span>
                </div>

            </div>
            <div className="right">

                <div className="item-header">
                    <h1>
                        {title}
                    </h1>
                    <p>
                        {service["Service"]}
                    </p>
                </div>
                <div className="item-body">

                </div>
            </div>

        </div>
    )
}

export default RecentOrderItem