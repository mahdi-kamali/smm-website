
import { Icon, loadIcon } from "@iconify/react"

import Table from "../../../../cutsome-components/table/Table"
import TableHeader from "../../../../cutsome-components/table/components/TableHeader"
import ItemHeader from "../../../../cutsome-components/table/components/ItemHeader"
import TableBody from "../../../../cutsome-components/table/components/TableBody"
import Row from "../../../../cutsome-components/table/components/Row"
import Property from "../../../../cutsome-components/table/components/Property"
import { useState } from "react"
import Switch from "react-switch"
import SelectedFaqs from "./SelectedFaqs"
import { post, put, useFetch } from "../../../../../lib/useFetch"
import { API } from "../../../../../lib/envAccess"
import { showError, showSuccess } from "../../../../../lib/alertHandler"
import Swal from "sweetalert2"
import TablePaginations from "../../../../cutsome-components/table/components/TablePaginations"
import ResponsivePagination from "react-responsive-pagination"

export default function Faqs() {


    const [pageNumber, setSelectedPAgeNumber] = useState(1)

    const [data, error, loading, setUrl, refresh] = useFetch(
        API.ADMIN_DASHBOARD.FAQS.GET + pageNumber
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


    const toggleAnswered = (faq, answerd) => {
        put(API.ADMIN_DASHBOARD.FAQS.FAQ.ANSWERD.CHANGE_ANSWERED.PUT, {
            faqID: faq._id,
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


    const replyEmail = (faq) => {
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
                post(API.ADMIN_DASHBOARD.FAQS.FAQ.ANSWERD.EMAIL.POST, {
                    message: message,
                    faqID: faq._id
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


    const replyPhone = (faq) => {
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
                post(API.ADMIN_DASHBOARD.FAQS.FAQ.ANSWERD.PHONE.POST, {
                    message: message,
                    faqID: faq._id
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



    return (
        <div className="admin-panel-faqs">

            <SelectedFaqs />

            <Table columnsStyle={"6rem 10rem 15rem 10rem 1fr 5rem 10rem"} >
                <TableHeader>

                    {
                        headerList.map((record, index) => {
                            return <ItemHeader key={index}>
                                {record}
                            </ItemHeader>
                        })
                    }
                </TableHeader>
                <TableBody >
                    {
                        !loading ? data?.faqs?.map(faq => {
                            return <Row key={faq._id}>
                                <Property>
                                    <div className="property-header">
                                        {headerList[0]}
                                    </div>
                                    <div className="property-body">
                                        {faq._id}
                                    </div>
                                </Property>
                                <Property>
                                    <div className="property-header">
                                        {headerList[1]}
                                    </div>
                                    <div className="property-body">
                                        {faq.fullName}
                                    </div>
                                </Property>
                                <Property>
                                    <div className="property-header">
                                        {headerList[2]}
                                    </div>
                                    <div className="property-body">
                                        {faq.email}
                                    </div>
                                </Property>
                                <Property>
                                    <div className="property-header">
                                        {headerList[3]}
                                    </div>
                                    <div className="property-body">
                                        {faq.phoneNumber}
                                    </div>
                                </Property>
                                <Property>
                                    <div className="property-header">
                                        {headerList[4]}
                                    </div>
                                    <div className="property-body message">
                                        {faq.message}
                                    </div>
                                </Property>
                                <Property>
                                    <div className="property-header">
                                        {headerList[5]}
                                    </div>
                                    <div className="property-body">
                                        <Switch
                                            onChange={(e) => {
                                                toggleAnswered(faq, e)
                                            }}
                                            checked={faq.answerd} />
                                    </div>
                                </Property>
                                <Property>
                                    <div className="property-header">
                                        {headerList[6]}
                                    </div>
                                    <div className="property-body buttons">
                                        <button
                                            className="reply-email"
                                            onClick={() => replyEmail(faq)}>
                                            <span>
                                                Reply Email
                                            </span>
                                            <Icon icon="iconamoon:send-fill" />
                                        </button>
                                        <button
                                            className="reply-phone"
                                            onClick={() => {
                                                replyPhone(faq)
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
                            setUrl(API.ADMIN_DASHBOARD.FAQS.GET + pageNumber)
                        }}
                    />
                </TablePaginations>
            </Table>




        </div>
    )
}
