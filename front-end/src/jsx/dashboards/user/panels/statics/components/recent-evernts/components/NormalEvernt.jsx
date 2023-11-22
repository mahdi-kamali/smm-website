import { Icon } from "@iconify/react"

import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import ChildPanel from "../../../../child-panel/ChildPanel";

const NormalEvent = (props) => {



    const data = props.data

    function icon() {
        switch (data.status) {
            case "On Progress": { return "fluent-mdl2:processing"; }
            case "success": { return "ep:success-filled" }
            case "error": { return "material-symbols:error" }
        }
    }


    function className() {
        switch (data.status) {
            case "On Progress": { return "warning"; }
            case "success": { return "success" }
            case "error": { return "danger" }
        }
    }

    function getDate() {
        let date = new Date(data.updateAt);
        let dd = String(date.getDate()).padStart(2, '0');
        let mm = String(date.getMonth() + 1).padStart(2, '0'); //janvier = 0
        let yyyy = date.getFullYear();

        return `${yyyy}-${mm}-${dd}`;
    }

    function getTime() {
        let date = new Date(data.updateAt);
        var minutes = date.getMinutes();
        var hours = date.getHours();

        return hours + ':' + minutes;
    }


    return (
        <VerticalTimelineElement
            className={`event ${className()} item`}
            date={
                <h1 className='date'>
                    <span>
                        <Icon icon="clarity:date-solid" />
                        {getDate()}
                    </span>
                    <span>
                        <Icon icon="ri:time-fill" />
                        {getTime()}
                    </span>
                </h1>}
            icon={<Icon icon={icon()} />}>
            <div className="content">
                <h1> {data.header} </h1>
                <p>
                    {data.body}
                </p>
            </div>
        </VerticalTimelineElement>
    )
}

export default NormalEvent