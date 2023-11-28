import { useEffect } from "react";
import Table from "../../../../cutsome-components/table/Table";
import ItemHeader from "../../../../cutsome-components/table/components/ItemHeader";
import Property from "../../../../cutsome-components/table/components/Property";
import Row from "../../../../cutsome-components/table/components/Row";
import TableBody from "../../../../cutsome-components/table/components/TableBody";
import TableHeader from "../../../../cutsome-components/table/components/TableHeader";
import { useState } from "react";
import MaxLineText from "../../../../cutsome-components/Text/MaxLineText";
import { Icon } from "@iconify/react";
import Switch from "react-switch"
import { put, useFetch } from "../../../../../lib/useFetch"
import { API } from "../../../../../lib/envAccess";
import Swal from "sweetalert2"
import { post } from "../../../../../lib/useFetch";
import { showSuccess, showError } from "../../../../../lib/alertHandler";
import TablePaginations from "../../../../cutsome-components/table/components/TablePaginations"
import ResponsivePagination from "react-responsive-pagination"





export default function ContactsUs() {


    const [chats, setChats] = useState([])

    const [pageNumber, setPageNumber] = useState(1)
    const [data, error, loading, setUrl, refresh] = useFetch(
        API.ADMIN_DASHBOARD.CONTACT_US.GET + pageNumber
    )

    const headerList = [
        "Chat ID",
        "Full Name",
        "Email",
        "Phone Number",
        "Message",
        "Answerd",
        "Controlls"
    ]




    const replyEmail = (record) => {


        Swal.fire({
            input: "textarea",
            inputLabel: "Message",
            inputPlaceholder: "Type your message here...",
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonColor: "green",
            denyButtonColor: "red"
        }).then(what => {
            if (what.isConfirmed) {
                const message = what.value
                post(API.ADMIN_DASHBOARD.CONTACT_US.ANSWERD.EMAIL.POST, {
                    message: message,
                    recordID: record._id
                })
                    .then(resp => {
                        showSuccess(resp)
                    })
                    .catch(err => {
                        const errors = err?.response?.data
                        showError(errors)
                    })
            }
        })
    }


    const replyPhone = (record) => {
        Swal.fire({
            input: "textarea",
            inputLabel: "Message",
            inputPlaceholder: "Type your message here...",
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonColor: "green",
            denyButtonColor: "red"
        }).then(what => {
            if (what.isConfirmed) {
                const message = what.value
                post(API.ADMIN_DASHBOARD.CONTACT_US.ANSWERD.PHONE.POST, {
                    message: message,
                    recordID: record._id
                })
                    .then(resp => {
                        showSuccess(resp)
                    })
                    .catch(err => {
                        const errors = err?.response?.data
                        showError(errors)
                    })
            }
        })
    }


    const toggleAnswered = (record, answerd) => {
        put(API.ADMIN_DASHBOARD.CONTACT_US.ANSWERD.CHANGE_ANSWERED.PUT, {
            recordID: record._id,
            answerd: answerd
        })
            .then(res => {
                showSuccess(res)
                    .finally(end => {
                        refresh()
                    })
            })
            .catch(err => {
                const errors = err?.response?.data
                showError(errors)
            })
    }




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
                        !loading ? data?.contactUs?.map(record => {
                            return <Row key={record._id}>
                                <Property>
                                    <div className="property-header">
                                        {headerList[0]}
                                    </div>
                                    <div className="property-body">
                                        <MaxLineText
                                            maxLine={1}
                                            content={record._id} />
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
                                    <div className="property-body message">
                                        {record.message}
                                    </div>
                                </Property>

                                <Property>
                                    <div className="property-header">
                                        {headerList[5]}
                                    </div>
                                    <div className="property-body buttons">
                                        <Switch
                                            onChange={(e) => {
                                                toggleAnswered(record, e)
                                            }}
                                            checked={record.answerd} />
                                    </div>
                                </Property>

                                <Property>
                                    <div className="property-header">
                                        {headerList[6]}
                                    </div>
                                    <div className="property-body buttons">
                                        <button
                                            className="reply-email"
                                            onClick={() => replyEmail(record)}>
                                            <span>
                                                Reply Email
                                            </span>
                                            <Icon icon="iconamoon:send-fill" />
                                        </button>
                                        <button
                                            className="reply-phone"
                                            onClick={() => {
                                                replyPhone(record)
                                            }}
                                        >
                                            <span>
                                                Reply Phone
                                            </span>
                                            <Icon icon="iconamoon:send-fill" />
                                        </button>
                                    </div>
                                </Property>

                            </Row>
                        }) : <h1>Loading...</h1>
                    }

                </TableBody>
                <TablePaginations>
                    <ResponsivePagination
                        current={data?.currentPage}
                        total={data?.maxPageNumber}
                        onPageChange={(pageNumber) => {
                            setUrl(
                                API.ADMIN_DASHBOARD.CONTACT_US.GET
                                + pageNumber
                            )
                        }}
                    />
                </TablePaginations>
            </Table>
        </div>
    )
}
