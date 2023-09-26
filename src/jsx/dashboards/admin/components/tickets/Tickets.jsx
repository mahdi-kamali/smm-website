import React from 'react'
import Table from '../../../../cutsome-components/table/Table'
import TableHeader from '../../../../cutsome-components/table/components/TableHeader'
import TableBody from '../../../../cutsome-components/table/components/TableBody'
import Row from '../../../../cutsome-components/table/components/Row'
import Property from '../../../../cutsome-components/table/components/Property'
import ItemHeader from '../../../../cutsome-components/table/components/ItemHeader'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Switch from "react-switch"
import { Icon } from '@iconify/react'
import MaxLineText from '../../../../cutsome-components/Text/MaxLineText'

export default function Tickets() {


    const [tickets, setTickets] = useState([])

    useEffect(() => {
        axios.get("https://65056334ef808d3c66effa9b.mockapi.io/fakeApi")
            .then(repsonse => {
                const data = repsonse.data
                setTickets(data)
            })
    }, [])


    const headers = [
        "Ticket ID",
        "User ID",
        "Full Name",
        "Subject",
        "ID (order , Service ).....",
        "Message",
        "Solved",
        "Controlls"
    ]




    return (
        <div className='admin-panel-tickets'>
            <Table columnsStyle={"7rem 7rem 10rem 10rem 10rem 1fr 4rem 7rem"}>
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
                        tickets.map(record => {
                            return <Row key={record.ticketId}>
                                <Property>
                                    <div className="property-header">
                                        {headers[0]}
                                    </div>
                                    <div className="property-body">
                                        {record.ticketId}
                                    </div>
                                </Property>
                                <Property>
                                    <div className="property-header">
                                        {headers[1]}
                                    </div>
                                    <div className="property-body">
                                        {record.userId}
                                    </div>
                                </Property>
                                <Property>
                                    <div className="property-header">
                                        {headers[2]}
                                    </div>
                                    <div className="property-body">
                                        {record.userFullName}
                                    </div>
                                </Property>
                                <Property>
                                    <div className="property-header">
                                        {headers[3]}
                                    </div>
                                    <div className="property-body">
                                        <MaxLineText
                                        maxLine={3}
                                        content={record.ticketSubject}/>
                                    </div>
                                </Property>
                                <Property>
                                    <div className="property-header">
                                        {headers[4]}
                                    </div>
                                    <div className="property-body">
                                        {record.ticketSubjectId}
                                    </div>
                                </Property>
                                <Property>
                                    <div className="property-header">
                                        {headers[5]}
                                    </div>
                                    <div className="property-body">
                                        <MaxLineText
                                            maxLine={3}
                                            content={record.ticketMessage} />
                                    </div>
                                </Property>
                                <Property>
                                    <div className="property-header">
                                        {headers[6]}
                                    </div>
                                    <div className="property-body">
                                        {record.ticketSolved}
                                        <Switch checked={record.ticketSolved} />
                                    </div>
                                </Property>
                                <Property>
                                    <div className="property-header">
                                        {headers[7]}
                                    </div>
                                    <div className="property-body controlls-property">
                                        <button>
                                            <span>Answer</span>
                                            <Icon icon="iconamoon:send-fill" />
                                        </button>
                                        <button>
                                            <span>Delete</span>
                                            <Icon icon="fluent:delete-20-filled" />
                                        </button>
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
