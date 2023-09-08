
// React TimeLine Library

import { Icon } from "@iconify/react"
import { Bar, Line } from "react-chartjs-2";
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import FakeChartData  from "../../../../../../tools/FakeDataGenarator"


const InstagramPostEvent = (props) => {
    const data = props.data





    const options = {
        maintainAspectRatio: true,
        responsive: true,
        scales: {
            x: {
                ticks: {
                    color: '#0d4bf4',
                    fontSize: 15,
                    display : false
                }
            },
            y: {
                ticks: {
                    fontSize: 15,
                    display: false,
                    color: '#0d4bf4'
                }
            }
        }


    }



    return (
        <VerticalTimelineElement
            className='instagram-post item'
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
                    <div className="chart">
                        <Line
                            className="chart"
                            id="myChart"
                            data={
                                FakeChartData(
                                    ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" , "Saturday"], 2000, ["Comments", "Likes", "Shares"])}
                            options={options}
                            height={250}
                            width={350}
                        />
                    </div>
                </h1>

            }



            icon={<Icon icon={data.svg} />}>
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

                <div className="content-buttons">
                    <button>
                        <span>
                            <Icon icon="icon-park-solid:like" />
                            likes
                        </span>
                        <small>
                            {data.post.likes}
                        </small>
                    </button>
                    <button>
                        <span>
                            <Icon icon="fa6-solid:comments" />
                            Comments
                        </span>
                        <small>
                            {data.post.comments}
                        </small>
                    </button>
                    <button>
                        <span>
                            <Icon icon="ion:share" />
                            Shares
                        </span>
                        <small>
                            {data.post.shares}
                        </small>
                    </button>
                </div>

            </div>
        </VerticalTimelineElement>
    )
}

export default InstagramPostEvent