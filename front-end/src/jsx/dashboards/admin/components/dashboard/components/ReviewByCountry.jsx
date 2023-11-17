import { Icon } from '@iconify/react';
import React from 'react'
import { Chart } from "react-google-charts";
import Select from 'react-select'

export default function ReviewByCountry() {


    const data = [
        ["Country", "Orders"],
        ["Germany", 200],
        ["United States", 300],
        ["Iran", 700],
        ["Brazil", 400],
        ["Canada", 500],
        ["France", 600],
        ["RU", 700],
    ];

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
                    chartEvents={[
                        {
                            eventName: "select",
                            callback: ({ chartWrapper }) => {
                                const chart = chartWrapper.getChart();
                                const selection = chart.getSelection();
                                if (selection.length === 0) return;
                                const region = data[selection[0].row + 1];
                                console.log("Selected : " + region);
                            },
                        },
                    ]}
                    chartType="GeoChart"
                    width="100%"
                    height="400px"
                    data={data}
                />
            </div>
        </div>
    )
}
