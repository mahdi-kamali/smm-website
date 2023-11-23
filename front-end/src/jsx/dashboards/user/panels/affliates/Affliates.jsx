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
import { Icon } from "@iconify/react";
import { useFetch } from "../../../../../lib/useFetch";
import { API, CLIENT, SERVER } from "../../../../../lib/envAccess";
import { useEffect, useState } from "react";
import Swal from "sweetalert2"
import { createData } from "../../../../../lib/chartDataSet";

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
  const [affiliates, error, loading] = useFetch(API.DASHBOARD.AFFILIATES.STATUS.GET)
  const [link, setLink] = useState(undefined)


  const [performanceChartData, setPerformanceChartData] = useState({
    labels: [],
    data: []
  })

  useEffect(() => {
    if (affiliates?.link) {
      setLink(`${CLIENT.BASE_URL}/auth/${affiliates?.link}`)
    } else {
      setLink("loading....")
    }

    const performnace = affiliates.performance

    const tempLabels = affiliates?.performance ? performnace?.map(item => {
      return new Date(item.label).toDateString()
    }) : []

    const tempValues = affiliates?.performance ? performnace?.map(item => { return item.ammount }) : []

    setPerformanceChartData({
      labels: tempLabels,
      data: tempValues
    })

  }, [affiliates])






  const onCopyLinkClick = () => {

    navigator.clipboard.writeText(link)
      .then(end => {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Link Copied to your clipboard."
        })
      })

  }


  return (
    <section className="panel-affliates">
      <div className="intro row">
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
      <div className="link row">
        <p>{link}</p>
        <button onClick={onCopyLinkClick}>
          <Icon icon="bxs:copy" />
          <span>Copy Link</span>
        </button>
      </div>
      <div className="charts row">
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
                    ${affiliates?.revenue?.daily}
                  </div>
                </li>
                <li>
                  <div className="label">
                    Weekly
                  </div>
                  <div className="value">
                    ${affiliates?.revenue?.weekly}
                  </div>
                </li>
                <li>
                  <div className="label">
                    Yearly
                  </div>
                  <div className="value">
                    ${affiliates?.revenue?.yearly}
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
              Members
            </h2>
            <div className="body">
              {
                affiliates?.members?.map((item, index) => {
                  return <div className="item" key={index}>
                    <div className="item-left">
                      {index + 1}
                    </div>
                    <div className="item-mid">
                      <MaxLineText
                        maxLine={1}
                        content={item?.fullName} />
                    </div>
                    <div className="item-right">
                      $5.43
                    </div>
                  </div>
                })
              }


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
                  createData(
                    "$",
                    performanceChartData.labels,
                    performanceChartData.data
                  )
                }
                options={options}
                height={250}
                width={350}
              />
            </div>
            <div className="footer">
              <div className="item">
                <div className="item-header">
                  {affiliates?.totalOrders}
                </div>
                <div className="item-body">
                  Total Affiliate Orders
                </div>
              </div>
              <div className="item">
                <div className="item-header">
                  ${affiliates?.commisions}
                </div>
                <div className="item-body">
                  Commisions
                </div>
              </div>
              <div className="item">
                <div className="item-header">
                  {affiliates?.conversionRate}%
                </div>
                <div className="item-body">
                  Conversion Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Affliates