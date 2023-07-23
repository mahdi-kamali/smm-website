import ActiveSocialItem from "./components/ActiveSocialItem"



import rocket from "../../../../../images/auth-page/rocket.svg"

import { useState } from "react"
import UserInfo from "../panel-header/UserInfo"
import { Icon } from "@iconify/react"



import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';




import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend, ScriptableContext, } from "chart.js";
import { Chart as ReactChart, Line, Pie } from "react-chartjs-2";
import ActiveSocial from "./components/ActiveSocial"
ChartJS.register(ArcElement, Tooltip, Filler, Legend, CategoryScale, LinearScale, PointElement, LineElement);


ChartJS.defaults.font.size = 25
ChartJS.defaults.font.family = "dosis-regular"
ChartJS.defaults.borderColor = "transparent"







const Dashboard = () => {











    const data = {
        labels: ["1", "2", "3", "4"],
        datasets: [
            {
                data: [500, 512, 414, 205],
                pointRadius: 10,
                pointHoverRadius: 15,
                backgroundColor: (context) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 255);
                    gradient.addColorStop(0, "rgba(255,255,255,1)");
                    gradient.addColorStop(1, "rgba(255,255,255,0)");
                    return gradient;
                },
                borderColor: "rgba(255,255,255,255)",
                fill: true,

            }

        ],


    };


    const options = {
        responsive: true,
        scales: {
            x: {
                ticks: {
                    color: 'white',
                    fontSize: 20
                }
            },
            y: {
                ticks: {
                    color: 'white'

                }
            }
        }
    }

    const percentage = 66;



    return (
        <section className="dashboard">

            <div className="user-row">
                <div className="left">
                    <UserInfo />
                    <ActiveSocial />
                </div>
                <div className="right">
                    {/* <Pie id="myChart" data={data} options={options} /> */}
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
            <div className="row">
                <div className="col qucik-view-column">
                    <div className="item">
                        <div className="data">
                            <h2>2679</h2>
                            <span>Followers</span>
                        </div>

                        <Icon icon="mingcute:user-follow-2-fill" />
                    </div>
                    <div className="item">
                        <div className="data">
                            <h2>2679</h2>
                            <span>Followers</span>
                        </div>

                        <Icon icon="mingcute:user-follow-2-fill" />
                    </div>
                    <div className="item">
                        <div className="data">
                            <h2>2679</h2>
                            <span>Followers</span>
                        </div>

                        <Icon icon="mingcute:user-follow-2-fill" />
                    </div>
                    <div className="item">
                        <div className="data">
                            <h2>2679</h2>
                            <span>Followers</span>
                        </div>

                        <Icon icon="mingcute:user-follow-2-fill" />
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