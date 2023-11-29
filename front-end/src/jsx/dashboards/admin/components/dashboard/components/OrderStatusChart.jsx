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
import { useFetch } from '../../../../../../lib/useFetch';
import { API } from '../../../../../../lib/envAccess';
import { useEffect, useState } from 'react';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const dateSelectOptions = [
    { value: 'daily', label: 'daily' },
    { value: 'monthly', label: 'monthly' },
    { value: 'yearly', label: 'yearly' }
]



const chartModeOptions = [
    { value: false, label: 'Not Stacked' },
    { value: true, label: 'Stacked' },
]



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

    const [chartData, chartDataError, chartDataLoading, setChartchartDataUrl] = useFetch(API.ADMIN_DASHBOARD.ORDER_STATUS.WEEKLY.GET)


    const [chartModeDate, setChartModeDate] = useState(dateSelectOptions[0].value)


    useEffect(() => {

        switch (chartModeDate) {
            case dateSelectOptions[0].value: {
                setChartchartDataUrl(API.ADMIN_DASHBOARD.ORDER_STATUS.WEEKLY.GET)
                break;
            }
            case dateSelectOptions[1].value: {
                setChartchartDataUrl(API.ADMIN_DASHBOARD.ORDER_STATUS.MONTHLY.GET)
                break;
            }
            case dateSelectOptions[2].value: {
                setChartchartDataUrl(API.ADMIN_DASHBOARD.ORDER_STATUS.YEARLY.GET)
                break;
            }
        }
    }, [chartModeDate])






    if (chartDataLoading) return <h1> Loading</h1>

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
                        isSearchable={true}
                        onChange={(e) => { setChartModeDate(e.value) }}
                        defaultValue={dateSelectOptions[0]}
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
                        {chartData?.summary?.onSuccessData}
                    </div>
                    <div className="item-body">
                        success
                        <Icon icon="bi:circle-fill" color="green" />
                    </div>
                </div>

                <div className="item">
                    <div className="item-header">
                        {chartData?.summary?.onProgressData}
                    </div>
                    <div className="item-body">
                        Progress
                        <Icon icon="bi:circle-fill" color="orange" />
                    </div>
                </div>

                <div className="item">
                    <div className="item-header">
                        {chartData?.summary?.onErrorData}
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
                    data={{
                        labels: chartData.labels,
                        datasets: chartData.datasets
                    }}
                />
            </div>
        </div>
    )
}
