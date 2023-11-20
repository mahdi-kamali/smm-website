import React from 'react'

import UserInfo from '../../../panel-header/UserInfo'
import ActiveSocial from '../active-social/ActiveSocial'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import MaxLineText from '../../../../../../cutsome-components/Text/MaxLineText';
import { FAKE_SERVICES } from '../../../../../../fakeData/FAKE_DATA';
import { useFetch } from '../../../../../../../lib/useFetch';
import { API } from '../../../../../../../lib/envAccess';
import { useState } from 'react';



const fakeServices = FAKE_SERVICES


export default function UserSection() {
    const [user, error, loading] = useFetch(API.DASHBOARD.USER_INFO.GET)
    const [activeOrders, activeOrdersError, activeOrdersLoading] =
        useFetch(API.DASHBOARD.USER_ACTIVE_ORDERS.GET)

    const [selectedPlatform, setSelectedPlatform] =
        useState(activeOrders[0]?.platform)




    return (
        <section className="user">
            <div className="left">
                <UserInfo
                    user={user} />
                <ActiveSocial
                    selectedPlatform={selectedPlatform}
                    setSelectedPlatform={setSelectedPlatform}
                    activeOrders={activeOrders} />
            </div>
            <div className="right">

                {

                    activeOrders?.find(item => item.platform.name === selectedPlatform)?.orders?.map((item, index) => {
                        return <div
                            key={index}
                            className="service-expire">
                            <CircularProgressbar
                                className="progresser"
                                value={75}
                                text={`${75}%`}
                                styles={buildStyles({
                                    rotation: 0,
                                    strokeLinecap: 'round',
                                    textSize: '20px',
                                    pathTransitionDuration: 0.5,
                                    pathColor: `white`,
                                    textColor: 'white',
                                    trailColor: 'rgba(0,0,0,0.1)'
                                })}
                            />
                            <div className="info">
                                <MaxLineText
                                    maxLine={2}
                                    content={
                                        <h1>
                                            {item.service.name}
                                        </h1>
                                    } />

                                <div className='status'>
                                    {
                                        item.status
                                    }
                                </div>

                            </div>

                        </div>
                    })
                }



            </div>
        </section>
    )
}
