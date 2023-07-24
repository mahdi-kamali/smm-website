




// React TimeLine Library
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';




// SvG 
import rocket from "../../../../../images/auth-page/rocket.svg"
import statisticsSvg from "../../../../../images/panel/dashboad/statistics/back.svg"
import scheduledPostsSvg from "../../../../../images/panel/dashboad/scheduled-posts/background.svg"



// Componensts
import UserInfo from "../panel-header/UserInfo"
import ActiveSocial from "./components/active-social/ActiveSocial"


// Utill Classes
import FakeChartData from "../../../tools/FakeDataGenarator";

// React Iconify
import { Icon } from "@iconify/react"



// React Propgresser Bar
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';





// React Chart.js 2 
import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    ScriptableContext,
    BarElement,
    Title,
} from "chart.js";
import { ReactChart, Line, Pie, Bar } from "react-chartjs-2";
import QuickView from './components/quick-view/QuickkView';


ChartJS.register(
    ArcElement,
    Tooltip,
    Filler,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    LineElement);


ChartJS.defaults.font.size = 18
ChartJS.defaults.font.weight = "bold"
ChartJS.defaults.font.family = "dosis-regular"
ChartJS.defaults.borderColor = "transparent"
ChartJS.defaults.plugins.legend.align = "start"






const Dashboard = () => {



    const options = {
        maintainAspectRatio: true,
        responsive: true,
        scales: {
            x: {
                ticks: {
                    color: '#0d4bf4',
                    fontSize: 15,
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
        <section className="dashboard">

            <div className="user-row">
                <div className="left">
                    <UserInfo />
                    <ActiveSocial />
                </div>
                <div className="right">
                    <div className="service-expire">
                        <CircularProgressbar
                            className="progresser"
                            value={75}
                            text={`${75}%`}
                            styles={buildStyles({
                                // Rotation of path and trail, in number of turns (0-1)
                                rotation: 0,

                                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                strokeLinecap: 'round',

                                // Text size
                                textSize: '20px',

                                // How long animation takes to go from one percentage to another, in seconds
                                pathTransitionDuration: 0.5,

                                // Can specify path transition in more detail, or remove it entirely
                                // pathTransition: 'none',

                                // Colors
                                pathColor: `white`,
                                textColor: 'white',
                                trailColor: 'rgba(0,0,0,0.1)'
                            })}
                        />
                        <div className="expire">
                            <small>Exipre : </small>
                            <small>2023/4/12</small>
                        </div>
                    </div>

                </div>
            </div>

            <div className="row qucik-view-row">
                <QuickView />
            </div>

            <div className="row statistics-row">
                <div className="statistics">
                    <div className="header">
                        <div className="left">
                            <img src={statisticsSvg} />
                        </div>
                        <div className="right">
                            <h1>
                                Statistics
                            </h1>
                            <span>
                                Account Information  You Have Earned
                            </span>
                        </div>
                    </div>
                    <div className="body">
                        <div className="item">
                            <Line
                                className="chart"
                                id="myChart"
                                data={
                                    FakeChartData(
                                        ["Jan", "Feb", "Mar", "Apr", "May", "Jan"], 2000, ["Followers", "Following", "Likes"])}
                                options={options}
                                height={250}
                                width={350}
                            />
                        </div>
                        <div className="item">
                            <Bar
                                className="chart"
                                id="myChart2"
                                data={
                                    FakeChartData(
                                        ["Jan", "Feb", "Mar", "Apr", "May", "Jan"], 2000, ["Likes", "Share", "Comments"])}
                                options={options}
                                height={250}
                                width={350}
                            />

                        </div>
                    </div>
                </div>
            </div>



            <div className="row scheduled-posts-row">
                <div className="scheduled-posts">
                    <div className="header">
                        <div className="left">
                            <img src={scheduledPostsSvg} />
                        </div>
                        <div className="right">
                            <h1>
                                Scheduled Posts
                            </h1>
                            <span>
                                Account Information You Have Earned
                            </span>
                        </div>
                    </div>
                    <div className="body">
                        <VerticalTimeline  >

                            <VerticalTimelineElement
                                className='item success left'
                                date={
                                    <h1 className='date'>
                                        <span>
                                            <Icon icon="clarity:date-solid" />
                                            2023/5/12
                                        </span>
                                        <span>
                                            <Icon icon="ri:time-fill" />
                                            16:32
                                        </span>
                                    </h1>}
                                icon={<Icon icon="el:ok" />}>
                                <div className="content">
                                    <h1>Service #5423 Activated </h1>
                                    <p>
                                        Thank you for choosing our SMM service! We appreciate your support. 🙏
                                    </p>
                                </div>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className='item warning right'

                                date={
                                    <h1 className='date'>
                                        <span>
                                            <Icon icon="clarity:date-solid" />
                                            2023/5/12
                                        </span>
                                        <span>
                                            <Icon icon="ri:time-fill" />
                                            16:32
                                        </span>
                                    </h1>}
                                icon={<Icon icon="ph:warning-fill" />}>
                                <div className="content">
                                    <h1>Service #5423 Ending Soon! </h1>
                                    <p>
                                        Service ending. Grateful for your support. Questions? Reach out anytime. Thank you!
                                    </p>
                                </div>
                            </VerticalTimelineElement>


                            <VerticalTimelineElement
                                className='item danger left'
                                date={
                                    <h1 className='date'>
                                        <span>
                                            <Icon icon="clarity:date-solid" />
                                            2023/5/12
                                        </span>
                                        <span>
                                            <Icon icon="ri:time-fill" />
                                            16:32
                                        </span>
                                    </h1>}
                                icon={<Icon icon="ic:baseline-dangerous" />}>
                                <div className="content">
                                    <h1>Service #5423 DeActivated! </h1>
                                    <p>
                                        Service Ended.
                                        Thank you for your support. We appreciate your business.
                                    </p>
                                </div>
                            </VerticalTimelineElement>


                            <VerticalTimelineElement
                                className='item process right'
                                date={
                                    <h1 className='date'>
                                        <span>
                                            <Icon icon="clarity:date-solid" />
                                            2023/5/12
                                        </span>
                                        <span>
                                            <Icon icon="ri:time-fill" />
                                            16:32
                                        </span>
                                    </h1>}
                                icon={<Icon icon="ic:baseline-dangerous" />}>
                                <div className="content">
                                    <h1>Service #5423 On Proccess! </h1>
                                    <p>
                                        Thank you for your patience. Our team is currently working on your service. We appreciate your understanding and look forward to delivering the best results.
                                    </p>
                                </div>
                            </VerticalTimelineElement>


                        </VerticalTimeline>
                    </div>
                </div>
            </div>




            <div className="rocket background">
                <img src={rocket} />
            </div>






        </section>
    )
}

export default Dashboard