import React from 'react'
import Select from 'react-select'
import { Icon } from "@iconify/react";
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useFetch } from '../../../../../../lib/useFetch';
import { API, SERVER } from '../../../../../../lib/envAccess';



export default function RecentCustomers() {

    const [data, error, loading] =
        useFetch(API.ADMIN_DASHBOARD.RECENT_CUSTOMERS_ACTIVITY.GET)



    function getIcon(status) {
        switch (status) {
            case "success": return <Icon icon="icon-park-solid:success" color="green" />
            case "on progress": return  <Icon icon="icon-park-solid:setting-web" color="orange" />
            case "on error": return  <Icon icon="material-symbols:error" color="red" />
        }
    }



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
                    data?.map((user, index) => {
                        return <div className="item" key={index}>
                            <div className="item-left">
                                <div className="user-image">
                                    <img src={SERVER.BASE_URL + user.user.image} />
                                </div>
                                <div className="user-info">
                                    <div className="name">
                                        {user.user.fullName}
                                    </div>
                                    <div className="id">
                                        <span>User ID : </span>
                                        <span>#{user.user._id}</span>
                                    </div>

                                </div>
                            </div>
                            <div className="item-mid">
                                <div className="status">
                                    {getIcon(user.checkOuts.status)}
                                </div>
                            </div>
                            <div className="item-right">
                                ${user.checkOuts.amount.amount}
                            </div>
                        </div>
                    })
                }

            </div>
        </div>
    )
}
