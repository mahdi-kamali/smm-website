import { Icon } from "@iconify/react";
import OrderStatusChart from "./components/OrderStatusChart";
import ReviewByCountry from "./components/ReviewByCountry";
import RecentCustomers from "./components/RecentCustomers";
import PopularCharts from "./components/PopularCharts";
import TodoList from "./components/TodoList";
import Table from "../../../../cutsome-components/table/Table";
import TableHeader from "../../../../cutsome-components/table/components/TableHeader";
import TableBody from "../../../../cutsome-components/table/components/TableBody";
import ItemHeader from "../../../../cutsome-components/table/components/ItemHeader";
import EconomySummary from "./components/EconomySummary";
import MessageAll from "./components/MessageAll";
import { useFetch } from "../../../../../lib/useFetch"
import { API } from "../../../../../lib/envAccess";
import QuickView from "./components/QuickView";


export default function Dashboard() {

    const [newOrders, newOrdersError, newOrdersLoading] = useFetch(
        API.ADMIN_DASHBOARD.NEW_ORDERS.GET
    )




    return (
        <div className="admin-dashboard-panel">
            <div className="intro">
                <div className="left">
                    <h1>Hi, welcome back!</h1>
                    <small>
                        Sales Monitoring dashboard template
                    </small>
                </div>
                <div className="right">
                    <div className="new-orders notif">
                        <span>{newOrders}</span>
                        <small>New orders</small>
                    </div>
                    <div className="new-messages notif">
                        <span>99</span>
                        <small>New Messages</small>
                    </div>
                    <div className="date">
                        <Icon icon="clarity:date-solid" />
                        <span>
                            {(new Date()).toDateString()}
                        </span>
                    </div>

                </div>
            </div>

            <QuickView/>

            <div className="row-one">
                <OrderStatusChart />
                <ReviewByCountry />
            </div>

            <div className="row-two">
                <RecentCustomers />
                <PopularCharts />
                <TodoList />
            </div>
            <div className="row-three">
                <MessageAll />
                <EconomySummary />
            </div>
        </div>
    )
}
