import { Icon } from "@iconify/react"

import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const NormalEvent = (props) => {
    const data = props.data
    return (
        <VerticalTimelineElement
            className={`event ${data.class} item`}
            date={
                <h1 className='date'>
                    <span>
                        <Icon icon="clarity:date-solid" />
                        {data.date}
                    </span>
                    <span>
                        <Icon icon="ri:time-fill" />
                        {data.time}
                    </span>
                </h1>}
            icon={<Icon icon={data.svg} />}>
            <div className="content">
                <h1>{data.title} </h1>
                <p>
                    {data.message}
                </p>
            </div>
        </VerticalTimelineElement>
    )
}

export default NormalEvent