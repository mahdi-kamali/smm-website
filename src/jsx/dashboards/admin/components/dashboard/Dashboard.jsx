import { Icon } from "@iconify/react";
import OrderStatusChart from "./components/OrderStatusChart";




export default function Dashboard() {
    return (
        <div className="dashboard">
            <div className="intro">
                <div className="left">
                    <h1>Hi, welcome back!</h1>
                    <small>
                        Sales Monitoring dashboard template
                    </small>
                </div>
                <div className="right">
                    <div className="new-orders notif">
                        <span>10</span>
                        <small>New orders</small>
                    </div>
                    <div className="new-messages notif">
                        <span>99</span>
                        <small>New Messages</small>
                    </div>
                    <div className="date">
                        <Icon icon="clarity:date-solid" />
                        <span>2024 / 5 / 12</span>
                    </div>

                </div>
            </div>
            <div className="quick-view">
                <div className="item progressing">
                    <div className="item-header">
                        Orders Received
                    </div>
                    <div className="item-body">
                        <Icon icon="material-symbols:order-play" />
                        <span>486</span>
                    </div>
                    <div className="item-footer">
                        <span>Completed Orders</span>
                        <span>
                            <Icon icon="subway:up-2" />
                            351
                        </span>
                    </div>
                </div>
                <div className="item progressing">
                    <div className="item-header">
                        Total Sales
                    </div>
                    <div className="item-body">
                        <Icon icon="icon-park-solid:sales-report" />
                        <span>1641</span>
                    </div>
                    <div className="item-footer">
                        <span>This Month</span>
                        <span>
                            <Icon icon="subway:up-2" />
                            231
                        </span>
                    </div>
                </div>
                <div className="item regressing">
                    <div className="item-header">
                        Income
                    </div>
                    <div className="item-body">
                        <Icon icon="healthicons:money-bag" />
                        <span>$32,562</span>
                    </div>
                    <div className="item-footer">
                        <span>This Month</span>
                        <span>
                            <Icon icon="subway:up-2" />
                            $8,222
                        </span>
                    </div>
                </div>
                <div className="item regressing">
                    <div className="item-header">
                        Total Customers
                    </div>
                    <div className="item-body">
                        <Icon icon="carbon:user-filled" />
                        <span>2,000</span>
                    </div>
                    <div className="item-footer">
                        <span>This Month</span>
                        <span>
                            <Icon icon="subway:up-2" />
                            +255
                        </span>
                    </div>
                </div>
            </div>
            <div className="row-one">
                 <OrderStatusChart/>
                <div className="review-by-country box">
                   
                </div>
            </div>
        </div>
    )
}
