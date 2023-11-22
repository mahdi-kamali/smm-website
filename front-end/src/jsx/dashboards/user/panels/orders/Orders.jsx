import RecentOrderItem from './components/RecentOrderItem';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useFetch } from '../../../../../lib/useFetch';
import { API } from '../../../../../lib/envAccess';


const Orders = () => {

    const [orders, error, loading] =
        useFetch(API.DASHBOARD.USER_ORDERS_HISTORY.GET)
    const [platforms, errorPlatforms, loadingPlatforms]
        = useFetch(API.PLATFORM.GET)


    const [selectedOrder, setSelectedOrder] = useState({
        "Service_id": "4255",
        "Service": "Instagram Ultrafast Likes-(Max 300K)(Speed:10-20K/Per Hour)(Good Quality)(Non Drop)INSTANT",
        "Rate per 1000": "$0.03 ",
        "Min order": "20",
        "Max order": "300000",
        "Average time": "6 hours 22 minutes"
    })


    function getDate(string) {
        let date = new Date(string);
        let dd = String(date.getDate()).padStart(2, '0');
        let mm = String(date.getMonth() + 1).padStart(2, '0'); //janvier = 0
        let yyyy = date.getFullYear();
        return `${yyyy}-${mm}-${dd}`;
    }

    function getTime(string) {
        let date = new Date(string);
        var minutes = date.getMinutes();
        var hours = date.getHours();
        return hours + ':' + minutes;
    }




    return (
        <section className="panel-orders">
            <div className="recent-orders row">
                <div className="left">
                    <div className="orders">
                        {
                            orders.map((item, index) => {
                                return <RecentOrderItem
                                    key={index}
                                    platform={
                                        platforms.find(platform => {
                                            const serviceName = item.service.name.toLowerCase().trim()
                                            const platformName = platform.name.toLowerCase().trim()
                                            return serviceName.includes(platformName)
                                        })
                                    }
                                    service={item}
                                    stateClass={item.status}
                                    currentSelected={selectedOrder._id === item._id}
                                    selectFunction={(item) => setSelectedOrder(item)} />

                            })

                        }

                    </div>
                </div>
                <div className="right">
                    <div className="order-detail">
                        <div className="header">
                            <h1>
                                <span>
                                    #{selectedOrder?.service?.service}
                                </span>
                            </h1>
                            <p>
                                {selectedOrder?.service?.name}
                            </p>
                        </div>
                        <div className="body">
                            <div className="property">
                                <div className="property-left">
                                    <Icon icon="fluent:calendar-date-28-filled" />
                                    <span>
                                        Date
                                    </span>
                                </div>
                                <div className="property-right">
                                    <span>
                                        {getDate(selectedOrder?.createdAt)}
                                    </span>
                                </div>
                            </div>
                            <div className="property">
                                <div className="property-left">
                                    <Icon icon="mdi:auto-start" />
                                    <span>
                                        Start count
                                    </span>
                                </div>
                                <div className="property-right">
                                    <span>
                                        100
                                    </span>
                                </div>
                            </div>
                            <div className="property">
                                <div className="property-left">
                                    <Icon icon="uim:process" />
                                    <span>
                                        Remains
                                    </span>
                                </div>
                                <div className="property-right">
                                    <span>
                                        500
                                    </span>
                                </div>
                            </div>
                            <div className="property">
                                <div className="property-left">
                                    <Icon icon="majesticons:chat-status" />
                                    <span>
                                        Status
                                    </span>
                                </div>
                                <div className="property-right">
                                    <span>
                                        {selectedOrder?.status}
                                    </span>
                                </div>
                            </div>
                            <div className="property link">
                                <div className="property-left">
                                    <Icon icon="mingcute:link-fill" />
                                    <span>
                                        Link
                                    </span>
                                </div>
                                <p className="property-right">
                                    <span>
                                        {selectedOrder?.link}
                                    </span>
                                </p>
                            </div>
                            <div className="property description">
                                <div className="property-left">
                                    <Icon icon="ion:rocket-sharp" />
                                    <span>
                                        Order ID
                                    </span>
                                </div>
                                <p className="property-right">
                                    <span>
                                        {selectedOrder?._id}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="footer">
                            <div className="time-date">
                                <div className="time">
                                    <span>
                                        <Icon icon="ri:time-fill" />
                                        {getTime(selectedOrder?.createdAt)}
                                    </span>
                                </div>
                                <div className="date">
                                    <span>
                                        <Icon icon="clarity:date-solid" />
                                        {getDate(selectedOrder?.createdAt)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section >
    )
}

export default Orders