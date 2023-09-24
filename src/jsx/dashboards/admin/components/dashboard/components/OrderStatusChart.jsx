import Select from 'react-select'
import { Icon } from "@iconify/react";

import { Bar } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const dateSelectOptions = [
    { value: 'Yearly', label: 'Yearly' },
    { value: 'Monthly', label: 'Monthly' },
    { value: 'Daily', label: 'Daily' }
]


const chartModeOptions = [
    { value: false, label: 'Not Stacked' },
    { value: true, label: 'Stacked' },
]



export const tempData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
        {
            label: 'Dataset 1',
            data: [10, 15, 10, 25, 22, 20, 15, 12, 18, 14, 22, 28], // Add data for all 12 months
            backgroundColor: 'green',
            stack: 'Stack 1',
        },
        {
            label: 'Dataset 2',
            data: [10, 5, 15, 6, 20, 10, 10, 8, 12, 7, 15, 18], // Add data for all 12 months
            backgroundColor: '#ffc36c',
            stack: 'Stack 1',
        },
        {
            label: 'Dataset 3',
            data: [3, 7, 30, 10, 12, 5, 22, 18, 25, 20, 15, 10], // Add data for all 12 months
            backgroundColor: '#ff6982',
            stack: 'Stack 1',
        }
    ],
};


const options = {
    plugins: {
        title: {
            display: false,
        },
        legend: {
            display: false
        }
    },
    responsive: true,
    interaction: {
        mode: 'index',
        intersect: false,
    },
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
        },
    }
};


export default function OrderStatusChart() {




    return (
        <div className="order-status box">
            <div className="info">
                <div className="left">
                    <h2>order Status</h2>
                    <small>
                        Track Your Customers Orders Status
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
            <div className="summary">
                <div className="item">
                    <div className="item-header">
                        120,750
                    </div>
                    <div className="item-body">
                        success
                        <Icon icon="bi:circle-fill" color="green" />
                    </div>
                </div>

                <div className="item">
                    <div className="item-header">
                        56,108
                    </div>
                    <div className="item-body">
                        Pending
                        <Icon icon="bi:circle-fill" color="orange" />
                    </div>
                </div>

                <div className="item">
                    <div className="item-header">
                        32,895
                    </div>
                    <div className="item-body">
                        Failed
                        <Icon icon="bi:circle-fill" color="red" />
                    </div>
                </div>
            </div>
            <div className="chart">
                <Bar
                    options={options}
                    data={tempData}
                />
            </div>


        </div>
    )
}
