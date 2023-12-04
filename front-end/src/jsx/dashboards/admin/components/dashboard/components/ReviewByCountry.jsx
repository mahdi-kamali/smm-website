import { Icon } from '@iconify/react';
import React from 'react'
import { Chart } from "react-google-charts";
import Select from 'react-select'
import { useFetch } from '../../../../../../lib/useFetch';
import { API } from '../../../../../../lib/envAccess';

export default function ReviewByCountry() {


    const [ordersCountryData, error, loading] =
        useFetch(API.ADMIN_DASHBOARD.ORDERS_COUNTRY.GET)

    const options = {
        colorAxis: { colors: ["#65acfe", "#005fbd", "blue"] },
        backgroundColor: "transparent",
        datalessRegionColor: "rgb(225, 225, 225)",
        defaultColor: "#f5f5f5",
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



    if (loading === true) return <h1>Loading</h1>

    return (
        <div className="review-by-country box">
            <div className="info">
                <div className="left">
                    <h2>Orders Country</h2>
                    <small>
                        Track Your Customers Orders Origin
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
                <Chart
                    options={options}
                    chartType="GeoChart"
                    width="100%"
                    height="400px"
                    data={ordersCountryData}
                    
                />
            </div>
        </div>
    )
}
