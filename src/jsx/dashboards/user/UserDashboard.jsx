import { useState } from "react"
import Dashboard from "./panels/dashbaord/Dashboard"
import PanelsItem from "./Components/PanelsItem"
import { Icon } from "@iconify/react"
import UserInfo from "./panels/panel-header/UserInfo"
import Services from "./panels/services/Services"
import Orders from "./panels/orders/Orders"
import { useEffect } from "react"
import AddFounds from "./panels/add-found/AddFounds"

const UserDashboard = () => {

    const panelMenuOptions = [
        {
            title: "dashboard",
            icon: <Icon icon="ri:dashboard-fill" />,
            component: <Dashboard />
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
            title: "Add Founds",
            icon: <Icon icon="solar:dollar-bold" />,
            component: <AddFounds />
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