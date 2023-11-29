




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



    return (
        <section className="statics">

            <UserQuickView />

            <UserSection />



            <SavedServices />



            <RecentEvents />



            <div className="rocket background">
                <img src={rocket} />
            </div>


        </section>
    )
}

export default Statics