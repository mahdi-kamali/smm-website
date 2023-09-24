import Select from 'react-select'
import { Bar } from 'react-chartjs-2';
import { Icon } from "@iconify/react";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useRef, useState } from 'react';
import { useEffect } from 'react';


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


const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];



export const temp = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [10, 15, 10, 25, 22, 20, 15],
            backgroundColor: 'green',
            stack: 'Stack 1',
        },
        {
            label: 'Dataset 2',
            data: [10, 5, 15, 6, 20, 10, 10],
            backgroundColor: '#ffc36c',
            stack: 'Stack 1',
        },
        {
            label: 'Dataset 3',
            data: [3, 7, 30, 10, 12, 5, 22],
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

    const [chartData, setChartData] = useState(temp)



    const updateChart = (value) => {
        const data = chartData
        data.datasets.forEach((item, index) => {
            if (value === false) {
                item.stack = 1
            }
            else {
                item.stack = `Stack ${index}`
            }
        })
        setChartData({ ...data })
    }







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
                        onChange={(e) => {
                            updateChart(e.value)
                        }}
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
                    data={chartData}
                />
            </div>


        </div>
    )
}
