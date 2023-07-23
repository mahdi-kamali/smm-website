import React from 'react'
import ActiveSocialItem from './ActiveSocialItem'


import instagram from "../../../../../../images/services-page/services/social-icons/instagram.png"
import whatsapp from "../../../../../../images/services-page/services/social-icons/whatsapp.png"
import twitter from "../../../../../../images/services-page/services/social-icons/twitter.png"
import spotify from "../../../../../../images/services-page/services/social-icons/spotify.png"
import { useState } from 'react'

const ActiveSocial = () => {

    const [currentSocial, setCurrentSocial] = useState("");

    return (
        <div className="active-social ">
            <div className="social-body">
                <ActiveSocialItem
                    svg={instagram}
                    title={"instagram"}
                    selected={currentSocial}
                    click={() => { setCurrentSocial("instagram") }}
                />

                <ActiveSocialItem
                    svg={whatsapp}
                    title={"whatsapp"}
                    selected={currentSocial}
                    click={() => { setCurrentSocial("whatsapp") }}
                />


                <ActiveSocialItem
                    svg={twitter}
                    title={"twitter"}
                    selected={currentSocial}
                    click={() => { setCurrentSocial("twitter") }}

                />

                <ActiveSocialItem
                    svg={spotify}
                    title={"spotify"}
                    selected={currentSocial}
                    click={() => { setCurrentSocial("spotify") }}
                />
            </div>



        </div>
    )
}

export default ActiveSocial