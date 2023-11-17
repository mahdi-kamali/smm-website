import axios from "axios";
import Table from "../../../../cutsome-components/table/Table";
import ItemHeader from "../../../../cutsome-components/table/components/ItemHeader";
import Property from "../../../../cutsome-components/table/components/Property";
import Row from "../../../../cutsome-components/table/components/Row";
import TableBody from "../../../../cutsome-components/table/components/TableBody";
import TableHeader from "../../../../cutsome-components/table/components/TableHeader";
import { useEffect, useState } from "react";






export default function Orders() {



    const headersList = [
        "Order ID",
        "User Id",
        "Service",
        "Charge",
        "Currency",
        "Start-Count",
        "Remains",
        "Status",
    ]

    const orderListButtons = [
        {
            title: "All Orders",
        },
        {
            title: "Completed",
        },
        {
            title: "On Progress",
        },
        {
            title: "Canceled",
        },
        {
            title: "Pause",
        },
    ]

    const [ordersStatus, setOrdersStatus] = useState(orderListButtons[0])
    const [orders, setOrders] = useState([])


    useEffect(() => {
        axios.get("https://65056334ef808d3c66effa9b.mockapi.io/fakeApi")
            .then(response => {
                const data = response.data
                setOrders(data)
            })
    },
        [ordersStatus])




    return (
        <div className="admin-panel-orders">
            <div className="intro">
                <h1>Recent Orders</h1>
                <div className="order-list">
                    {
                        orderListButtons.map((record, index) => {
                            return <button
                                key={index}
                                className={`status-${record.title ===
                                    ordersStatus.title}`}
                                onClick={() => setOrdersStatus(record)}
                            >
                                {record.title}
                            </button>
                        })
                    }
                </div>
            </div>
            <Table columnsStyle={"7rem 4rem 2fr 6rem 1fr 6rem 5rem 8rem"}>
                <TableHeader>
                    {
                        headersList.map((record, index) => {
                            return <ItemHeader key={index}>
                                {record}
                            </ItemHeader>
                        })
                    }
                </TableHeader>
                <TableBody>
                    {
                        orders.map((record) => {
                            return <Row key={record.orderId}>
                                <Property>
                                    <div className="property-header">
                                        {headersList[0]}
                                    </div>
                                    <div className="property-body">
                                        {record.orderId}
                                    </div>
                                </Property>
                                <Property>
                                    <div className="property-header">
                                        {headersList[1]}
                                    </div>
                                    <div className="property-body">
                                        {record.userId}
                                    </div>
                                </Property>
                                <Property>
                                    <div className="property-header">
                                        {headersList[2]}
                                    </div>
                                    <div className="property-body">
                                        {record.serviceName}
                                    </div>
                                </Property>
                                <Property>
                                    <div className="property-header">
                                        {headersList[3]}
                                    </div>
                                    <div className="property-body">
                                        ${record.orderCharge}
                                    </div>
                                </Property>
                                <Property>
                                    <div className="property-header">
                                        {headersList[4]}
                                    </div>
                                    <div className="property-body">
                                        {record.orderCurrencySymbol + " - "}
                                        {record.orderCurrency}
                                    </div>
                                </Property>
                                <Property>
                                    <div className="property-header">
                                        {headersList[5]}
                                    </div>
                                    <div className="property-body">
                                        {record.orderStartCount}
                                    </div>
                                </Property>
                                <Property>
                                    <div className="property-header">
                                        {headersList[6]}
                                    </div>
                                    <div className="property-body">
                                        {record.orderRemains}
                                    </div>
                                </Property>
                                <Property>
                                    <div className="property-header">
                                        {headersList[7]}
                                    </div>
                                    <div className="property-body status-property">
                                        <span className="completed">
                                            {ordersStatus.title}
                                        </span>
                                    </div>
                                </Property>

                               
                            </Row>
                        })
                    }

                </TableBody>
            </Table>
        </div>
    )
}
