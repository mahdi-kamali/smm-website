import React from 'react'
import ActiveSocialItem from './ActiveSocialItem'


import instagram from "../../../../../../../images/services-page/services/social-icons/instagram.png"
import whatsapp from "../../../../../../../images/services-page/services/social-icons/whatsapp.png"
import twitter from "../../../../../../../images/services-page/services/social-icons/twitter.png"
import spotify from "../../../../../../../images/services-page/services/social-icons/spotify.png"
import { useState } from 'react'
import { useFetch } from '../../../../../../../lib/useFetch'
import { API, SERVER } from '../../../../../../../lib/envAccess'

const ActiveSocial = ({ activeOrders, setSelectedPlatform, selectedPlatform }) => {




    return (
        <div className="active-social ">
            <div className="social-body">



                {
                    activeOrders.map((item, index) => {
                        return <ActiveSocialItem
                            key={index}
                            svg={SERVER.BASE_URL + item.platform.image}
                            title={item.platform.name}
                            selected={selectedPlatform}
                            click={() => {
                                setSelectedPlatform(item.platform.name)
                            }}
                        />
                    })}


            </div>

        </div>
    )
}

export default ActiveSocial