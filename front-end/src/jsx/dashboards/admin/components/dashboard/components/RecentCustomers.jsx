import React from 'react'
import Select from 'react-select'
import { Icon } from "@iconify/react";
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';



const dateSelectOptions = [
    { value: 'Yearly', label: 'Yearly' },
    { value: 'Monthly', label: 'Monthly' },
    { value: 'Daily', label: 'Daily' }
]


const chartModeOptions = [
    { value: false, label: 'Not Stacked' },
    { value: true, label: 'Stacked' },
]


export default function RecentCustomers() {


    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get("https://65056334ef808d3c66effa9b.mockapi.io/users")
            .then(response => {
                setUsers(response.data)
            })
    }, [])

    return (
        <div className="recent-customers box">
            <div className="info">
                <div className="left">
                    <h2>Recent Customers Activity</h2>
                    <small>
                        Track Your Customers Activites ( Paid , Cahrges , .....)
                    </small>
                </div>
                <div className="right">
                    {/* <Select
                        options={dateSelectOptions}
                        placeholder={"Date"}
                        isSearchable={false}
                    /> */}


                </div>
            </div>
            <div className="customers">
                {
                    users.map((user, index) => {
                        return <div className="item" key={index}>
                            <div className="item-left">
                                <div className="user-image">
                                    <img src={user.avatar} />
                                </div>
                                <div className="user-info">
                                    <div className="name">
                                        {user.fullName}
                                    </div>
                                    <div className="id">
                                        <span>User ID : </span>
                                        <span>#{user.id}</span>
                                    </div>

                                </div>
                            </div>
                            <div className="item-mid">
                                <div className="status paid">
                                    Paid
                                </div>
                            </div>
                            <div className="item-right">
                                ${(Math.random()*1000).toFixed()}
                            </div>
                        </div>
                    })
                }

            </div>
        </div>
    )
}
