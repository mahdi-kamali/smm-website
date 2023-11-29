import { useState } from "react"
import Statics from "./panels/statics/Statics"
import PanelsItem from "./Components/PanelsItem"
import { Icon } from "@iconify/react"
import Services from "./panels/services/Services"
import Orders from "./panels/orders/Orders"
import { useEffect } from "react"
import AddFounds from "./panels/add-found/AddFounds"
import Tickets from "./panels/tickets/Tickets"
import Affliates from "./panels/affliates/Affliates"
import { Provider } from "react-redux"
import PanelNestedItem from "./Components/PanelNestedItem"
import Accordion from "../../cutsome-components/accordion/Accordion"
import MassOrders from "./panels/mass-orders/MassOrders"
import NewOrders from "./panels/new-order/NewOrders"
import ChildPanel from "./panels/child-panel/ChildPanel"
import { useNavigate, useParams } from "react-router-dom"
import FreeCredits from "./panels/free-credits/FreeCredits"

const UserDashboard = (
    {
        userDashboardMenuState,
        setUserDashboardMenuState
    }
) => {


    const navigator = useNavigate()
    const params = useParams()







    const panelMenuOptions = [
        {
            type: "normal",
            title: "Statics",
            icon: <Icon icon="ri:dashboard-fill" />,
            component: <Statics />
        },
        {
            type: "normal",

            title: "Add-Founds",
            icon: <Icon icon="solar:dollar-bold" />,
            component: <AddFounds />
        },
        {
            title: "Orders",
            icon: <Icon icon="ph:bag-fill" />,
            type: "nested",
            items: [
                {
                    type: "normal",
                    title: "New-Order",
                    icon: <Icon icon="fluent:tab-new-24-filled" />,
                    component: <NewOrders />,
                },
                {
                    title: "Mass-Order",
                    icon: <Icon icon="material-symbols:order-play" />,
                    component: <MassOrders />,
                },
                {
                    title: "Orders-History",
                    icon: <Icon icon="ph:bag-fill" />,
                    component: <Orders />,
                },
            ],
        },
        {
            type: "normal",
            title: "Tickets",
            icon: <Icon icon="ion:ticket-sharp" />,
            component: <Tickets />
        },
        {
            type: "normal",
            title: "Child-Panel",
            icon: <Icon icon="material-symbols:left-panel-open-sharp" />,
            component: <ChildPanel />
        },
        {
            type: "normal",
            title: "Updates",
            icon: <Icon icon="dashicons:update-alt" />
        },
        {
            type: "normal",
            title: "API",
            icon: <Icon icon="ant-design:api-filled" />
        },
        {
            type: "normal",
            title: "Free-Credit",
            icon: <Icon icon="mdi:credit-card" />,
            component: <FreeCredits />
        },
        {
            type: "normal",
            title: "Tutorials",
            icon: <Icon icon="fluent:learning-app-24-filled" />
        },
        {
            type: "normal",
            title: "Affiliates",
            icon: <Icon icon="dashicons:update-alt" />,
            component: <Affliates />
        },
        {
            type: "normal",
            title: "Setting",
            icon: <Icon icon="ant-design:setting-filled" />
        },
        {
            type: "click",
            title: "Home",
            icon: <Icon icon="material-symbols:home" />
        },
    ]





    const [selectedPanel, selectPanel] = useState(panelMenuOptions[0])


    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        setUserDashboardMenuState(false)

        window.history.replaceState(null, selectedPanel.title, `/user/dashboard/${selectedPanel.title}`)


    }, [selectedPanel])



    useEffect(() => {
        const page = params?.page?.toLocaleLowerCase()?.trim()

        panelMenuOptions.forEach(menu => {
            menu?.items?.forEach(nestedMenu => {
                const targetMenuTitle = nestedMenu.title.toLowerCase().trim()
                if (targetMenuTitle === page) {
                    selectPanel(nestedMenu)
                    return
                }
            })
            const targetMenuTitle = menu.title.toLowerCase().trim()
            if (targetMenuTitle === page) {
                selectPanel(menu)
                return
            }
        })

    }, [params])



    return (
        <main className="user-dashboard">
            <ul className={`panel-menu panel-menu-${userDashboardMenuState}`}>
                <div className="menu-items">
                    {
                        panelMenuOptions.map((panel, index) => {
                            {
                                if (panel.type === "nested") {
                                    return <PanelNestedItem
                                        key={index}
                                        data={panel}
                                        selectPanel={selectPanel}
                                        selectedPanel={selectedPanel}
                                    />
                                }
                            }

                            {
                                if (panel.type === "click") {
                                    return <PanelsItem
                                        key={index}
                                        title={panel.title}
                                        icon={panel.icon}
                                        currentActivePanel={selectedPanel.title}
                                        clickEvent={() => navigator("/")}
                                    />
                                }
                            }

                            {
                                if (panel.type === "normal") {
                                    return <PanelsItem
                                        key={index}
                                        title={panel.title}
                                        icon={panel.icon}
                                        currentActivePanel={selectedPanel.title}
                                        clickEvent={() => selectPanel(panel)}
                                    />
                                }
                            }

                        })
                    }
                </div>
            </ul>
            <div className="panel">
                {selectedPanel?.component}
            </div>
        </main>
    )
}

export default UserDashboard