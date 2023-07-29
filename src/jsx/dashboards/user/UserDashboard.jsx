import { useState } from "react"
import Dashboard from "./panels/dashbaord/Dashboard"
import PanelsItem from "./Components/PanelsItem"
import { Icon } from "@iconify/react"
import UserInfo from "./panels/panel-header/UserInfo"
import Services from "./panels/services/Services"

const UserDashboard = () => {

    const panelMenuOptions = [
        {
            title: "dashboard",
            icon: <Icon icon="ri:dashboard-fill" />,
            component: <Dashboard />
        },
        {
            title: "Add Your Service",
            icon: <Icon icon="carbon:add-filled" />,
        },
        {
            title: "Orders",
            icon: <Icon icon="ph:bag-fill" />
        },
        {
            title: "Sevices",
            icon: <Icon icon="carbon:ibm-security-services" />,
            component: <Services />
        },
        {
            title: "Add Founds",
            icon: <Icon icon="solar:dollar-bold" />
        },
        {
            title: "Tickets",
            icon: <Icon icon="ion:ticket-sharp" />
        },
        {
            title: "Updates",
            icon: <Icon icon="dashicons:update-alt" />
        },
        {
            title: "Setting",
            icon: <Icon icon="ant-design:setting-filled" />
        },
    ]


    const [selectedPanel, selectPanel] = useState(panelMenuOptions[3])



    return (
        <main className="user-dashboard">
            <ul className="panel-menu">
                {
                    panelMenuOptions.map((panel) => {
                        {
                            return (
                                <PanelsItem
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