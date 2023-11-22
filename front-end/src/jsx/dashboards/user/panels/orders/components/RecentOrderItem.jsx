import { Icon } from '@iconify/react'
import React from 'react'
import { SERVER } from '../../../../../../lib/envAccess'

const RecentOrderItem = (
    {
        service,
        stateClass,
        currentSelected,
        selectFunction,
        platform
    }

) => {





    let title = ""
    let icon = ""

    switch (stateClass) {
        case "success":
            title = "Successful on Ordering !"
            stateClass = "success"
            icon = <Icon icon="ep:success-filled" />
            break;
        case "on pause":
            title = "Info About Service !"
            stateClass = "info"
            icon = <Icon icon="ic:sharp-info" />
            break;
        case "on error":
            title = "Error While Ordering !"
            stateClass = "danger"
            icon = <Icon icon="flat-color-icons:cancel" />
            break;
        case "on warning":
            title = "Warning For Order !"
            stateClass = "warning"
            icon = <Icon icon="ph:warning-fill" />
            break;
        case "on progress":
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


    const isAniamted = currentSelected ? "circle-ripple--animation" : ""




    function getDate(string) {
        let date = new Date(string);
        let dd = String(date.getDate()).padStart(2, '0');
        let mm = String(date.getMonth() + 1).padStart(2, '0'); //janvier = 0
        let yyyy = date.getFullYear();
        return `${yyyy}-${mm}-${dd}`;
    }

    function getTime(string) {
        let date = new Date(string);
        var minutes = date.getMinutes();
        var hours = date.getHours();
        return hours + ':' + minutes;
    }




    return (
        <div
            onClick={handleOnClikc}
            className={`item ${stateClass} ${currentSelected} `} >
            <div className="line">
            </div>
            <div className="item-left">
                <div className="item-icons">
                    {icon}
                    {
                        platform ? 
                        <img src={SERVER.BASE_URL + platform.image} alt="" />
                        : <Icon icon="mdi:internet" />
                    }
                </div>

            </div>
            <div className="item-mid">
                <div className="item-date">
                    <span>
                        <Icon icon="clarity:date-solid" />
                        {getDate(service.createdAt)}
                    </span>
                    <span>
                        <Icon icon="ri:time-fill" />
                        {getTime(service.createdAt)}
                    </span>
                </div>

            </div>
            <div className={`item-right ${isAniamted}`}>

                <div className="item-header">
                    <h1>
                        {title}
                    </h1>
                    <p>
                        {service.service.name}
                    </p>
                </div>
                <div className="item-body">
                </div>
            </div>

        </div>
    )
}

export default RecentOrderItem