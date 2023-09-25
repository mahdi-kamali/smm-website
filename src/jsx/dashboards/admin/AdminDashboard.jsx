import { useState } from "react"
import Dashboard from "./components/dashboard/Dashboard"
import { Icon } from "@iconify/react"
import Services from "./components/services/Services"
import Dropdown from 'react-dropdown';
import Users from "./components/users/Users";

const AdminDashboard = () => {

  


    const menu = [
        {
            title: "Dashboard",
            svg: <Icon icon="ri:dashboard-fill" />,
            component: <Dashboard />
        },
        {
            title: "Services",
            svg: <Icon icon="mdi:internet" />,
            component: <Services />
        },
        ,
        {
            title: "Orders",
            svg: <Icon icon="ri:dashboard-fill" />,
            component: <Dashboard />
        },
        ,
        {
            title: "Tickets",
            svg: <Icon icon="majesticons:tickets" />,
            component: <Dashboard />
        },
        ,
        {
            title: "Users",
            svg: <Icon icon="mdi:users" />,
            component: <Users />
        },
        {
            title: "Comments",
            svg: <Icon icon="fa6-solid:comments" />,
            component: <Dashboard />
        },
        {
            title: "FAQS",
            svg: <Icon icon="wpf:faq" />,
            component: <Dashboard />
        },
        {
            title: "Contact Us",
            svg: <Icon icon="mdi:support" />,
            component: <Dashboard />
        },
        {
            title: "Economy",
            svg: <Icon icon="tdesign:money" />,
            component: <Dashboard />
        },
        {
            title: "Chat",
            svg: <Icon icon="cryptocurrency:chat" />,
            component: <Dashboard />
        },
        {
            title: "Setting",
            svg: <Icon icon="ant-design:setting-filled" />,
            component: <Dashboard />
        },

    ]

    const [selectedMenu, setSelectedMenu] = useState(menu[0])


    return (
        <main className="admin-dashboard">
            <nav>
                {
                    menu.map((item, index) => {
                        return <div
                            onClick={() => { setSelectedMenu(item) }}
                            key={index}
                            className={`item selected-${item.title === selectedMenu.title}`}
                        >
                            {item.svg}
                            <span>
                                {item.title}
                            </span>
                        </div>
                    })
                }
            </nav>

            <section className="content">
                {selectedMenu.component}
            </section>
        </main>
    )
}

export default AdminDashboard