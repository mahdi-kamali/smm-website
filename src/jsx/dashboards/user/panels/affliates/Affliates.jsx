import Lottie from "react-lottie-player"



import introAnimation from "../../../../../animations/user-dashboard/dashboard-affiliates-intro.json"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import FakeChartData from "../../../tools/FakeDataGenarator";


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
import MaxLineText from "../../../../cutsome-components/Text/MaxLineText";


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





const options = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    x: {
      ticks: {
        color: '#0d4bf4',
        fontSize: 15,
        display: false
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









const Affliates = () => {
  introAnimation.fr = 10





  return (
    <div className="panel-affliates">
      <div className="intro">
        <div className="left">
          <Lottie
            animationData={introAnimation}
            play
            loop
          />
        </div>
        <div className="right">
          <h1>
            Earn with <br />
            <span>USMM's </span> <br />
            Referral Program
          </h1>
          <p>
            Unlock Earnings by Sharing Your Referral Link and Placing Our Banner on Your Website. Alternatively, Simply Invite Your Friends Using Your Unique Referral Link.
            As a Referrer, You'll Enjoy a 3% Share of Every Dollar Your Referrals Spend, for Eternity.
          </p>

        </div>
      </div>
      <div className="charts">
        <div className="left">
          <div className="revenue">
            <div className="info">
              <h2>Revenue</h2>
              <ul>
                <li>
                  <div className="label">
                    Daily
                  </div>
                  <div className="value">
                    $250
                  </div>
                </li>
                <li>
                  <div className="label">
                    Weekly
                  </div>
                  <div className="value">
                    $250
                  </div>
                </li>
                <li>
                  <div className="label">
                    Yearly
                  </div>
                  <div className="value">
                    $250
                  </div>
                </li>
              </ul>
            </div>
            <div className="chart">
              <CircularProgressbar
                className="progresser"
                value={75}
                strokeWidth={7}
                text={` $5,000`}
                styles={buildStyles({
                  rotation: 0,
                  strokeLinecap: 'round',
                  textSize: '20px',
                  pathTransitionDuration: 0.5,
                  pathColor: `#0057d9`,
                  textColor: '#0057d9',
                  trailColor: 'rgba(0,0,0,0.1)'
                })}
              />
            </div>
          </div>
          <div className="recent-orders">
            <h2>
              Recent Orders
            </h2>
            <div className="body">
              <div className="item">
                <div className="item-left">
                  #{(Math.random()*2000).toFixed()}
                </div>
                <div className="item-mid">
                  <MaxLineText
                    maxLine={1}
                    content={"Instagram Followers-(High Quality)(Instant Start)"} />
                </div>
                <div className="item-right">
                  $5.43
                </div>
              </div>
              <div className="item">
                <div className="item-left">
                  #{(Math.random()*2000).toFixed()}
                </div>
                <div className="item-mid">
                  <MaxLineText
                    maxLine={1}
                    content={"Instagram Followers-(High Quality)(Instant Start)"} />
                </div>
                <div className="item-right">
                  $5.43
                </div>
              </div>
              <div className="item">
                <div className="item-left">
                  #{(Math.random()*2000).toFixed()}
                </div>
                <div className="item-mid">
                  <MaxLineText
                    maxLine={1}
                    content={"Instagram Followers-(High Quality)(Instant Start)"} />
                </div>
                <div className="item-right">
                  $5.43
                </div>
              </div>
              <div className="item">
                <div className="item-left">
                  #{(Math.random()*2000).toFixed()}
                </div>
                <div className="item-mid">
                  <MaxLineText
                    maxLine={1}
                    content={"Instagram Followers-(High Quality)(Instant Start)"} />
                </div>
                <div className="item-right">
                  $5.43
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="right">
          <div className="your-performance">
            <div className="header">
              <h2>Your Performance</h2>
            </div>
            <div className="body">
              <Line
                className="chart"
                id="myChart"
                data={
                  FakeChartData(
                    ["Jan", "Feb", "Mar", "Apr", "May", "Jan"], 2000, ["Affilate Orders"])}
                options={options}
                height={250}
                width={350}
              />
            </div>
            <div className="footer">
              <div className="item">
                <div className="item-header">
                  246
                </div>
                <div className="item-body">
                  Total Affiliate Orders
                </div>
              </div>
              <div className="item">
                <div className="item-header">
                  $582
                </div>
                <div className="item-body">
                  Commisions
                </div>
              </div>

              <div className="item">
                <div className="item-header">
                  4.32%
                </div>
                <div className="item-body">
                  Conversion Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Affliates