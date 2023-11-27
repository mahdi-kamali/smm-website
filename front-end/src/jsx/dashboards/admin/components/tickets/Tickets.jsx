import React from 'react'
import Table from '../../../../cutsome-components/table/Table'
import TableHeader from '../../../../cutsome-components/table/components/TableHeader'
import TableBody from '../../../../cutsome-components/table/components/TableBody'
import Row from '../../../../cutsome-components/table/components/Row'
import Property from '../../../../cutsome-components/table/components/Property'
import ItemHeader from '../../../../cutsome-components/table/components/ItemHeader'
import { useState } from 'react'
import { useEffect } from 'react'
import Switch from "react-switch"
import { Icon } from '@iconify/react'
import MaxLineText from '../../../../cutsome-components/Text/MaxLineText'
import { put, useFetch } from '../../../../../lib/useFetch'
import TablePaginations from "../../../../cutsome-components/table/components/TablePaginations";
import ResponsivePagination from 'react-responsive-pagination';
import Swal from "sweetalert2"
import { showError, showSuccess } from "../../../../../lib/alertHandler"
import { API } from '../../../../../lib/envAccess'


export default function Tickets() {




    const [pageNumber, setPageNumber] = useState(1)

    const [data, error, loading, setUrl, refresh] = useFetch(
        API.ADMIN_DASHBOARD.TICKETS.GET + pageNumber,
    )


    const headers = [
        "ID",
        "Subject ID",
        "Subject",
        "Message",
        "Date",
        "Sovled",
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



    const handleAnswerClick = async (ticket) => {
        Swal.fire({
            input: "textarea",
            inputLabel: "Message",
            inputPlaceholder: "Type your message here...",
            inputAttributes: {
                "aria-label": "Type your message here"
            },
            showCancelButton: true,
            confirmButtonColor: "green",
            cancelButtonColor: "red"
        }).then(end => {
            if (end.isConfirmed) {
                const message = end.value
                put(API.ADMIN_DASHBOARD.TICKETS.ANSWER.PUT,
                    { message: message, id: ticket._id })
                    .then(resp => {
                        if (resp.status === 200) {
                            Swal.fire({
                                icon: "success",
                                title: "Success",
                                text: resp.data
                            })
                        }
                    })
                    .catch(err => {
                        const errors = err?.response?.data
                        showError(errors)
                    })
            }
        })

    }

    const handleOnToggleClick = (ticket, state) => {


        put(API.ADMIN_DASHBOARD.TICKETS.SOLVED.PUT, {
            solved: state,
            id: ticket._id
        })
            .then(async resp => {
                await showSuccess(resp)
                refresh()
            })
            .catch(err => {
                const errors = err?.response?.data
                showError(errors)
            })

    }





    return (
        <div className='admin-panel-tickets'>
            <Table columnsStyle={"6rem 6rem 6rem  1fr 15rem 5rem 8rem"}>
                <TableHeader>
                    {
                        headers.map((record, index) => {
                            return <ItemHeader key={index}>
                                {record}
                            </ItemHeader>
                        })
                    }

                </TableHeader>
                <TableBody>
                    {
                        loading === false ? data?.tickets?.map(ticket => {
                            return <Row>
                                <Property>
                                    <div className="property-header">
                                        {headers[0]}
                                    </div>
                                    <div className="property-body">
                                        {ticket._id}
                                    </div>
                                </Property>
                                <Property>
                                    <div className="property-header">
                                        {headers[1]}
                                    </div>
                                    <div className="property-body">
                                        {ticket.orderID}
                                    </div>
                                </Property>
                                <Property>
                                    <div className="property-header">
                                        {headers[2]}
                                    </div>
                                    <div className="property-body">
                                        {ticket.subject}
                                    </div>
                                </Property>
                                <Property>
                                    <div className="property-header">
                                        {headers[3]}
                                    </div>
                                    <div className="property-body">
                                        <MaxLineText
                                            maxLine={6}
                                            content={ticket.message} />
                                    </div>
                                </Property>
                                <Property>
                                    <div className="property-header">
                                        {headers[4]}
                                    </div>
                                    <div className="property-body">
                                        {new Date(ticket.createdAt).toUTCString()}
                                    </div>
                                </Property>
                                <Property>
                                    <div className="property-header">
                                        {headers[5]}
                                    </div>
                                    <div className="property-body">
                                        <Switch
                                            onChange={(state) => { handleOnToggleClick(ticket, state) }}
                                            checked={ticket.solved} />
                                    </div>
                                </Property>
                                <Property>
                                    <div className="property-header">
                                        {headers[6]}
                                    </div>
                                    <div className="property-body controlls-property">
                                        <button
                                            onClick={() => { handleAnswerClick(ticket) }}>
                                            <span>Answer</span>
                                            <Icon icon="iconamoon:send-fill" />
                                        </button>
                                    </div>
                                </Property>
                            </Row>
                        }) : <h1>Loading ....</h1>

                    }
                </TableBody>
                <TablePaginations>
                    <ResponsivePagination
                        current={data?.currentPage}
                        total={data?.maxPageNumber}
                        onPageChange={(pageNumber) => {
                            setUrl(API.ADMIN_DASHBOARD.TICKETS.GET + pageNumber)
                        }}
                    />
                </TablePaginations>
            </Table>
        </div>
    )
}
