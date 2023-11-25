
import Select from "react-select"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useFetch } from "../../../../../../lib/useFetch";
import { API } from "../../../../../../lib/envAccess";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    responsive: true,
    bezierCurve: true,
    plugins: {
        legend: {
            display: false,
            position: 'top',
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
    },
    scales: {
        y: {

            ticks: {
                // Include a dollar sign in the ticks
                callback: function (value, index, ticks) {
                    return ' $ ' + value;
                }
            }
        }
    }
};

const labels = ['Sat', 'Sun', 'Mon', 'Thu', 'Wed', 'Thu', 'Fri'];

export const data = {
    labels,
    datasets: [
        {

            label: 'Economy Summary',
            data: [4, 40, 25, 30, 20, 15, 31],
            borderColor: 'rgb(0, 0, 255)',
            lineTension: 0.4,
            fill: true,
            backgroundColor: (context) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 255);
                gradient.addColorStop(0, "rgb(53, 162, 235)");
                gradient.addColorStop(1, "rgba(53, 162, 235,0.0)");
                return gradient;
            }
        },
    ],
};








const dateSelectOptions = [
    { value: 'Yearly', label: 'Yearly' },
    { value: 'Monthly', label: 'Monthly' },
    { value: 'Daily', label: 'Daily' }
]


const chartModeOptions = [
    { value: false, label: 'Not Stacked' },
    { value: true, label: 'Stacked' },
]



export default function EconomySummary() {


    const [data, error, loading, setUrl, refresh] = useFetch(
        API.ADMIN_DASHBOARD.ECONOMY_SUMMARY.WEEKLY.GET
    )



    if (loading === true) return <h1>Loading...</h1>

    data.datasets[0] = {
        ...data.datasets[0],
        borderColor: 'rgb(0, 0, 255)',
        lineTension: 0.4,
        fill: true,
        backgroundColor: (context) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 255);
            gradient.addColorStop(0, "rgb(53, 162, 235)");
            gradient.addColorStop(1, "rgba(53, 162, 235,0.0)");
            return gradient;
        }
    }



    return (
        <div className="economy-review box">
            <div className="info">
                <div className="left">
                    <h2>economy Summary</h2>
                    <small>
                        trace your incomes
                    </small>
                </div>
                <div className="right">
                    <Select
                        options={dateSelectOptions}
                        placeholder={"Date"}
                        isSearchable={false}
                    />
                    <Select
                        placeholder={"Chart Mode"}
                        options={chartModeOptions}
                        isSearchable={false}
                    />
                </div>
            </div>
            <div className="chart">
                <Line options={options} data={data} />
            </div>
        </div>
    )
}
