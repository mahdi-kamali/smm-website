import { useEffect } from "react";
import Table from "../../../../cutsome-components/table/Table";
import ItemHeader from "../../../../cutsome-components/table/components/ItemHeader";
import Property from "../../../../cutsome-components/table/components/Property";
import Row from "../../../../cutsome-components/table/components/Row";
import TableBody from "../../../../cutsome-components/table/components/TableBody";
import TableHeader from "../../../../cutsome-components/table/components/TableHeader";
import axios from "axios";
import { useState } from "react";
import MaxLineText from "../../../../cutsome-components/Text/MaxLineText";
import { Icon } from "@iconify/react";
import Switch from "react-switch"

export default function ContactsUs() {


    const [chats, setChats] = useState([])

    const headerList = [
        "Chat ID",
        "Full Name",
        "Email",
        "Phone Number",
        "Message",
        "Answerd",
        "Controlls"
    ]

    useEffect(() => {
        axios.get("https://65056334ef808d3c66effa9b.mockapi.io/users")
            .then(response => {
                setChats(response.data)
            })
    }, [])


    console.log(chats);


    return (
        <div className="admin-contact-us-panel">
            <Table columnsStyle="7rem  10rem  15rem 10rem 1fr 5rem 9rem">
                <TableHeader>
                    {
                        headerList.map((item, index) => {
                            return <ItemHeader key={index}>
                                {item}
                            </ItemHeader>
                        })
                    }
                </TableHeader>
                <TableBody>

                    {
                        chats.map(record => {
                            return <Row key={record.chatId}>
                                <Property>
                                    <div className="property-header">
                                        {headerList[0]}
                                    </div>
                                    <div className="property-body">
                                        <MaxLineText
                                            maxLine={1}
                                            content={record.chatId} />
                                    </div>
                                </Property>
                                <Property>
                                    <div className="property-header">
                                        {headerList[1]}
                                    </div>
                                    <div className="property-body">
                                        <MaxLineText
                                            maxLine={1}
                                            content={record.fullName} />
                                    </div>
                                </Property>

                                <Property>
                                    <div className="property-header">
                                        {headerList[2]}
                                    </div>
                                    <div className="property-body">
                                        <MaxLineText
                                            maxLine={1}
                                            content={record.email} />
                                    </div>
                                </Property>

                                <Property>
                                    <div className="property-header">
                                        {headerList[3]}
                                    </div>
                                    <div className="property-body">
                                        <MaxLineText
                                            maxLine={1}
                                            content={record.phoneNumber} />
                                    </div>
                                </Property>

                                <Property>
                                    <div className="property-header">
                                        {headerList[4]}
                                    </div>
                                    <div className="property-body">
                                        <MaxLineText
                                            maxLine={3}
                                            content={record.message} />
                                    </div>
                                </Property>

                                <Property>
                                    <div className="property-header">
                                        {headerList[5]}
                                    </div>
                                    <div className="property-body buttons">
                                        <Switch 
                                        onChange={(e)=>{alert(e)}}
                                        checked={record.answered}/>
                                    </div>
                                </Property>

                                <Property>
                                    <div className="property-header">
                                        {headerList[6]}
                                    </div>
                                    <div className="property-body buttons">
                                        <button className="reply-email">
                                            <span>
                                                Reply Email
                                            </span>
                                            <Icon icon="iconamoon:send-fill" />
                                        </button>
                                        <button className="reply-phone">
                                            <span>
                                                Reply Phone
                                            </span>
                                            <Icon icon="iconamoon:send-fill" />
                                        </button>
                                    </div>
                                </Property>

                            </Row>
                        })}

                </TableBody>
            </Table>
        </div>
    )
}
