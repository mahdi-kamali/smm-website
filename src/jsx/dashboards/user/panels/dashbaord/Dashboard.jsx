import ActiveSocial from "./components/ActiveSocial"



import rocket from "../../../../../images/auth-page/rocket.svg"
import instagram from "../../../../../images/services-page/services/social-icons/instagram.png"
import whatsapp from "../../../../../images/services-page/services/social-icons/whatsapp.png"
import twitter from "../../../../../images/services-page/services/social-icons/twitter.png"
import spotify from "../../../../../images/services-page/services/social-icons/spotify.png"
import { useState } from "react"




const Dashboard = () => {

    const [currentSocial, setCurrentSocial] = useState("");

    return (
        <section className="dashboard">
            <div className="rocket">
                <img  src={rocket} />

            </div>

            <div className="active-social">
                <ActiveSocial
                    svg={instagram}
                    title={"instagram"}
                    selected={currentSocial}
                    click={() => { alert("ok") }}
                />

                <ActiveSocial
                    svg={whatsapp}
                    title={"whatsapp"}
                    selected={currentSocial}
                    click={() => { alert("ok") }}
                />

                <ActiveSocial
                    svg={twitter}
                    title={"twitter"}
                    selected={currentSocial}
                    click={() => { alert("ok") }}
                />

                <ActiveSocial
                    svg={spotify}
                    title={"spotify"}
                    selected={currentSocial}
                    click={() => { alert("ok") }}
                />
            </div>

        </section>
    )
}

export default Dashboard