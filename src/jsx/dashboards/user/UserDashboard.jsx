import { useState } from "react"
import Dashboard from "./panels/dashbaord/Dashboard"
import PanelsItem from "./Components/PanelsItem"
import { Icon } from "@iconify/react"
import UserInfo from "./panels/panel-header/UserInfo"

const UserDashboard = () => {


    const [selectedPanel, selectPanel] = useState("dashboard")


    function getPanel() {
        switch (selectedPanel) {
            case "dashboard": return (<Dashboard />)
        }
    }




    const panelMenuOptions = [
        {
            title: "dashboard",
            icon: <Icon icon="ri:dashboard-fill" />
        },
        {
            title: "Add Your Service",
            icon: <Icon icon="carbon:add-filled" />
        },
        {
            title: "Orders",
            icon: <Icon icon="ph:bag-fill" />
        },
        {
            title: "Sevices",
            icon: <Icon icon="carbon:ibm-security-services" />
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
                                    currentActivePanel={selectedPanel}
                                    clickEvent={() => selectPanel(panel.title)}
                                />
                            )
                        }
                    })
                }

            </ul>
            <div className="panel">
                {getPanel()}
            </div>
        </main>
    )
}

export default UserDashboard