
// React TimeLine Library

import { Icon } from "@iconify/react"
import { VerticalTimelineElement } from 'react-vertical-timeline-component';


const InstagramPostEvent = (props) => {
    const data = props.data
    return (
        <VerticalTimelineElement
            className='instagram-post item'
            date={
                <h1 className='date'>
                    <p></p>
                    <span>
                        <Icon icon="clarity:date-solid" />
                        {data.date}
                    </span>
                    <span>
                        <Icon icon="ri:time-fill" />
                        {data.time}
                    </span>
                </h1>}
            icon={<Icon icon="el:ok" />}>
            <div className="content">
                <div className="content-header">
                    <img src={data.post.image} />
                </div>
                <div className="content-body">
                    <h1>{data.title} </h1>
                    <p>
                        {data.message}
                    </p>
                </div>

            </div>
        </VerticalTimelineElement>
    )
}

export default InstagramPostEvent