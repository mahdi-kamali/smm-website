import Table from "../../../../cutsome-components/table/Table";
import ItemHeader from "../../../../cutsome-components/table/components/ItemHeader";
import Property from "../../../../cutsome-components/table/components/Property";
import Row from "../../../../cutsome-components/table/components/Row";
import TableBody from "../../../../cutsome-components/table/components/TableBody";
import TableHeader from "../../../../cutsome-components/table/components/TableHeader";
import { useEffect, useState } from "react";
import { useFetch } from "../../../../../lib/useFetch"
import { API } from "../../../../../lib/envAccess";
import TablePaginations from "../../../../cutsome-components/table/components/TablePaginations";
import ResponsivePagination from 'react-responsive-pagination';






export default function Orders() {

    const [pageNumber, setPageNumber] = useState(1)
    const [data, error, loading, setUrl] = useFetch(
        API.ADMIN_DASHBOARD.ORDERS.GET + pageNumber,
    )


    const headersList = [
        "Order ID",
        "User Id",
        "Service",
        "Charge",
        "Date",
        "Quantity",
        "Link",
        "Status",
    ]

    const orderListButtons = [
        "All Orders",
        "success",
        "on progress",
        "on error",
        "on pause"
    ]

    const [ordersStatus, setOrdersStatus] = useState(orderListButtons[0])

    const [sortedList, setSortedList] = useState([])

    useEffect(() => {

        if (ordersStatus === orderListButtons[0]) {
            setSortedList(data.orders)
            return
        }

        const temp = data?.orders?.filter(item => {
            return item.status === ordersStatus
        })

        setSortedList(temp)
    }, [ordersStatus, data])





    return (
        <div className="admin-panel-orders">
            <div className="intro">
                <h1>Recent Orders</h1>
                <div className="order-list">
                    {
                        orderListButtons.map((record, index) => {
                            return <button
                                key={index}
                                className={`status-${record ===
                                    ordersStatus}`}
                                onClick={() => setOrdersStatus(record)}
                            >
                                {record}
                            </button>
                        })
                    }
                </div>
            </div>
            <Table columnsStyle={"6rem 6rem 1.8fr 6rem 1fr 6rem 5rem 8rem"}>
                <TableHeader>
                    {
                        headersList.map((record, index) => {
                            return <ItemHeader key={index}>
                                {record}
                            </ItemHeader>
                        })
                    }
                </TableHeader>
                {
                    <TableBody>
                        {
                            !loading ? sortedList?.map((record) => {
                                return <Row key={record.orderId}>
                                    <Property>
                                        <div className="property-header">
                                            {headersList[0]}
                                        </div>
                                        <div className="property-body">
                                            {record._id}
                                        </div>
                                    </Property>
                                    <Property>
                                        <div className="property-header">
                                            {headersList[1]}
                                        </div>
                                        <div className="property-body">
                                            {record.userID}
                                        </div>
                                    </Property>
                                    <Property>
                                        <div className="property-header">
                                            {headersList[2]}
                                        </div>
                                        <div className="property-body ">
                                            {record.service.name}
                                        </div>
                                    </Property>
                                    <Property>
                                        <div className="property-header">
                                            {headersList[3]}
                                        </div>
                                        <div className="property-body">
                                            ${record.charge}
                                        </div>
                                    </Property>
                                    <Property>
                                        <div className="property-header">
                                            {headersList[4]}
                                        </div>
                                        <div className="property-body">
                                            {new Date(record.createdAt).toUTCString()}
                                        </div>
                                    </Property>
                                    <Property>
                                        <div className="property-header">
                                            {headersList[5]}
                                        </div>
                                        <div className="property-body">
                                            {record.quantity}
                                        </div>
                                    </Property>
                                    <Property>
                                        <div className="property-header">
                                            {headersList[6]}
                                        </div>
                                        <div className="property-body">
                                            {record.link}
                                        </div>
                                    </Property>
                                    <Property>
                                        <div className="property-header">
                                            {headersList[7]}
                                        </div>
                                        <div className="property-body status-property">
                                            <span className={`status
                        ${record.status.replace(" ", "")}`}>
                                                {record.status}
                                            </span>
                                        </div>
                                    </Property>

                                </Row>
                            }) : <h1>Loading...</h1>
                        }

                    </TableBody>
                }

                <TablePaginations>
                    <ResponsivePagination
                        current={data?.currentPage}
                        total={data?.maxPageNumber}
                        onPageChange={(pageNumber) => {
                            setUrl(API.ADMIN_DASHBOARD.ORDERS.GET + pageNumber)
                        }}
                    />
                </TablePaginations>
            </Table>
        </div>
    )
}
