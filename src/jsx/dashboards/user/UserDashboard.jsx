import { useState } from "react"
import Dashboard from "./panels/dashbaord/Dashboard"
import PanelsItem from "./Components/PanelsItem"
import { Icon } from "@iconify/react"
import UserInfo from "./panels/panel-header/UserInfo"
import Services from "./panels/services/Services"
import Orders from "./panels/orders/Orders"
import { useEffect } from "react"
import AddFounds from "./panels/add-found/AddFounds"
import Tickets from "./panels/tickets/Tickets"
import Affliates from "./panels/affliates/Affliates"
import { Provider } from "react-redux"

const UserDashboard = () => {

    const panelMenuOptions = [
        {
            title: "Statics",
            icon: <Icon icon="ri:dashboard-fill" />,
            component: <Dashboard />
        },
        {
            title: "Add Founds",
            icon: <Icon icon="solar:dollar-bold" />,
            component: <AddFounds />
        },
        {
            title: "Orders",
            icon: <Icon icon="ph:bag-fill" />,
            component: <Orders />
        },
        {
            title: "Sevices",
            icon: <Icon icon="carbon:ibm-security-services" />,
            component: <Services />
        },

        {
            title: "Tickets",
            icon: <Icon icon="ion:ticket-sharp" />,
            component: <Tickets />
        },
        {
            title: "Updates",
            icon: <Icon icon="dashicons:update-alt" />
        },
        {
            title: "Affiliates",
            icon: <Icon icon="dashicons:update-alt" />,
            component : <Affliates />
        },
        {
            title: "Setting",
            icon: <Icon icon="ant-design:setting-filled" />
        },
    ]






    const [selectedPanel, selectPanel] = useState(panelMenuOptions[0])

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [selectedPanel])


    return (
        <main className="user-dashboard">
            <ul className="panel-menu">
                {
                    panelMenuOptions.map((panel, index) => {
                        {
                            return (
                                <PanelsItem
                                    key={index}
                                    title={panel.title}
                                    icon={panel.icon}
                                    currentActivePanel={selectedPanel.title}
                                    clickEvent={() => selectPanel(panel)}
                                />
                            )
                        }
                    })
                }
            

            </ul>
            <div className="panel">
                {selectedPanel?.component}
            </div>
        </main>
    )
}

export default UserDashboard