




import { FAKE_CATEGORY, FAKE_SERVICES } from "../../../../fakeData/FAKE_DATA"


// SvG 
import rocket from "../../../../../images/auth-page/rocket.svg"
import statisticsSvg from "../../../../../images/panel/dashboad/statistics/back.svg"



// Componensts
import UserInfo from "../panel-header/UserInfo"
import ActiveSocial from "./components/active-social/ActiveSocial"


// Utill Classes
import FakeChartData from "../../../tools/FakeDataGenarator";




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
import RecentEvents from './components/recent-evernts/RecentEvernts';
import UserQuickView from "../../Components/UserQuickView";
import MaxLineText from "../../../../cutsome-components/Text/MaxLineText"
import { Icon } from "@iconify/react"


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






const Statics = () => {




    const fakeServices = FAKE_SERVICES


    const topFiveServices = [
        {
            Service_id: "1111",
            Service: "Instagram Followers-(High Quality)(Instant Start)",
            RatePer1000: "$1.00",
            MinOrder: "100",
            MaxOrder: "5000",
            AverageTime: "30 minutes",
        },
        {
            Service_id: "2222",
            Service: "Facebook Page Likes-(Real & Active)(24 Hours Refill)",
            RatePer1000: "$0.85",
            MinOrder: "200",
            MaxOrder: "3000",
            AverageTime: "1 hour",
        },
        {
            Service_id: "3333",
            Service: "Twitter Retweets-(No Refill)",
            RatePer1000: "$0.50",
            MinOrder: "50",
            MaxOrder: "2000",
            AverageTime: "Not enough data",
        },
        {
            Service_id: "5555",
            Service: "SoundCloud Plays-(High Quality)",
            RatePer1000: "$0.20",
            MinOrder: "1000",
            MaxOrder: "10000",
            AverageTime: "10 minutes",
        }
    ];



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
        <section className="statics">

            <UserQuickView />

            <section className="user">
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
                                rotation: 0,
                                strokeLinecap: 'round',
                                textSize: '20px',
                                pathTransitionDuration: 0.5,
                                pathColor: `white`,
                                textColor: 'white',
                                trailColor: 'rgba(0,0,0,0.1)'
                            })}
                        />
                        <div className="info">
                            <MaxLineText
                                maxLine={2}
                                content={
                                    <h1>{fakeServices[0].categoryName}</h1>
                                } />

                            <MaxLineText
                                maxLine={2}
                                content={
                                    <small>{fakeServices[0].services[0].Service}</small>
                                } />

                        </div>

                    </div>
                    <div className="service-expire">
                        <CircularProgressbar
                            className="progresser"
                            value={20}
                            text={`${20}%`}
                            styles={buildStyles({
                                rotation: 0,
                                strokeLinecap: 'round',
                                textSize: '20px',
                                pathTransitionDuration: 0.5,
                                pathColor: `white`,
                                textColor: 'white',
                                trailColor: 'rgba(0,0,0,0.1)'
                            })}
                        />
                        <div className="info">
                            <MaxLineText
                                maxLine={2}
                                content={
                                    <h1>{fakeServices[0].categoryName}</h1>
                                } />

                            <MaxLineText
                                maxLine={2}
                                content={
                                    <small>{fakeServices[0].services[0].Service}</small>
                                } />

                        </div>

                    </div>
                    <div className="service-expire">
                        <CircularProgressbar
                            className="progresser"
                            value={44}
                            text={`${44}%`}
                            styles={buildStyles({
                                rotation: 0,
                                strokeLinecap: 'round',
                                textSize: '20px',
                                pathTransitionDuration: 0.5,
                                pathColor: `white`,
                                textColor: 'white',
                                trailColor: 'rgba(0,0,0,0.1)'
                            })}
                        />
                        <div className="info">
                            <MaxLineText
                                maxLine={2}
                                content={
                                    <h1>{fakeServices[0].categoryName}</h1>
                                } />

                            <MaxLineText
                                maxLine={2}
                                content={
                                    <small>{fakeServices[0].services[0].Service}</small>
                                } />

                        </div>

                    </div>
                    <div className="service-expire">
                        <CircularProgressbar
                            className="progresser"
                            value={90}
                            text={`${90}%`}
                            styles={buildStyles({
                                rotation: 0,
                                strokeLinecap: 'round',
                                textSize: '20px',
                                pathTransitionDuration: 0.5,
                                pathColor: `white`,
                                textColor: 'white',
                                trailColor: 'rgba(0,0,0,0.1)'
                            })}
                        />
                        <div className="info">
                            <MaxLineText
                                maxLine={2}
                                content={
                                    <h1>{fakeServices[0].categoryName}</h1>
                                } />

                            <MaxLineText
                                maxLine={2}
                                content={
                                    <small>{fakeServices[0].services[0].Service}</small>
                                } />

                        </div>

                    </div>
                </div>
            </section>

            {/* 
            <section className="statistics">
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
            </section> */}


            <div className="services-offer">
                <div className="header">
                    Your Favorites Services
                </div>
                <div className="body">

                    {
                        topFiveServices.map((item, index) => {
                            return <div className="item">
                                <div className="item-header">
                                    <MaxLineText
                                        maxLine={2}
                                        content={
                                            <h1>
                                                {item.Service}
                                            </h1>
                                        } />
                                </div>
                                <div className="item-body">
                                    <ul className="properties">
                                        <li>
                                            <div className="label">
                                                <Icon icon="eos-icons:service" />
                                                <span>
                                                    ID
                                                </span>
                                            </div>
                                            <div className="value">
                                                {item.Service_id}
                                            </div>
                                        </li>
                                        <li>
                                            <div className="label">
                                                <Icon icon="tabler:math-min" />
                                                <span>
                                                    Min Order
                                                </span>
                                            </div>
                                            <div className="value">
                                                {item.MinOrder}
                                            </div>
                                        </li>
                                        <li>
                                            <div className="label">
                                                <Icon icon="tabler:math-max" />
                                                <span>
                                                    Max Order
                                                </span>
                                            </div>
                                            <div className="value">
                                                {item.MaxOrder}
                                            </div>
                                        </li>
                                        <li>
                                            <div className="label">
                                                <Icon icon="mdi:wiper" />
                                                <span>
                                                    Per 1k
                                                </span>
                                            </div>
                                            <div className="value">
                                                {item.RatePer1000}
                                            </div>
                                        </li>
                                        <li>
                                            <div className="label">
                                                <Icon icon="ic:baseline-auto-fix-normal" />
                                                <span>
                                                    Avarage Time
                                                </span>
                                            </div>
                                            <div className="value">
                                                {item.AverageTime}
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="item-buttons">
                                    <button className="buy">
                                        <span>
                                            Re Order
                                        </span>
                                        <Icon icon="el:ok" />
                                    </button>
                                </div>
                            </div>
                        })
                    }


                </div>
            </div>



            <section className="recent-evernts">
                <RecentEvents />
            </section>


            <section className="rocket background">
                <img src={rocket} />
            </section>


        </section>
    )
}

export default Statics