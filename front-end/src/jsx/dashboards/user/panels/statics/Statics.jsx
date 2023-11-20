




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
import UserSection from "./components/user/UserSection"
import SavedServices from "./components/saved-services/SavedServices"


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

            <UserSection />



            <SavedServices />



            <RecentEvents />



            {/* <div className="rocket background">
                <img src={rocket} />
            </div> */}


        </section>
    )
}

export default Statics