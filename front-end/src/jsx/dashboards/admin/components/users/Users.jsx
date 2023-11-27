import Table from "../../../../cutsome-components/table/Table"
import TableHeader from "../../../../cutsome-components/table/components/TableHeader"
import TableBody from "../../../../cutsome-components/table/components/TableBody"
import ItemHeader from "../../../../cutsome-components/table/components/ItemHeader"
import Property from "../../../../cutsome-components/table/components/Property"
import Row from "../../../../cutsome-components/table/components/Row"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import Switch from "react-switch"
import { Icon } from "@iconify/react"
import { ADMIN_PANEL_EDIT_USER } from "../../../../pop-ups/Constaints"
import EditUserInfoPopUp from "../../../../pop-ups/EditUserInfoPopUp"
import { useDispatch } from "react-redux"
import { showPopUp } from "../../../../../features/popUpReducer"
import { put, useFetch } from "../../../../../lib/useFetch"
import { API, SERVER } from "../../../../../lib/envAccess"
import TablePaginations from "../../../../cutsome-components/table/components/TablePaginations";
import ResponsivePagination from 'react-responsive-pagination';
import { showError, showSuccess } from "../../../../../lib/alertHandler"


const headerList = [
    "ID",
    "Image",
    "Full-Name",
    "Email",
    "Found",
    "Created-At",
    "Role",
    "Verified",
    "Controlls"
]




export default function Users() {


    const [pageNumber, setPageNumber] = useState(1)
    const [data, error, loading, setUrl, refresh] = useFetch(
        API.ADMIN_DASHBOARD.USERS.GET + pageNumber)


    const dispatcher = useDispatch()



    const openEditUserPopUp = (user) => {
        dispatcher(showPopUp({
            type: ADMIN_PANEL_EDIT_USER,
            duration: 2000,
            component: <EditUserInfoPopUp user={user} result={refresh} />
        }))
    }

    const changeVerify = (user, status) => {
        put(API.ADMIN_DASHBOARD.USERS.USER.VERIFY.PUT, {
            userID: user._id,
            status: status
        })
            .then(resp => {
                showSuccess(resp)
            })
            .catch(err => {
                const errors = err?.response?.data
                showError(errors)
            })
            .finally(end => {
                refresh()
            })
    }

    const freeUser = (user) => {
        put(API.ADMIN_DASHBOARD.USERS.USER.BLOCK_FREE.PUT, {
            userID: user._id,
            status: false
        }).then(response => {
            showSuccess(response)
        }).catch(err => {
            const errors = err?.response?.data
            showError(errors)
        }).finally(end => {
            refresh()
        })
    }

    const blockUser = (user) => {
        put(API.ADMIN_DASHBOARD.USERS.USER.BLOCK_FREE.PUT, {
            userID: user._id,
            status: true
        }).then(response => {
            showSuccess(response)
        }).catch(err => {
            const errors = err?.response?.data
            showError(errors)
        }).finally(end => {
            refresh()
        })
    }



    return (
        <div className="admin-users-panel">
            <Table
                columnsStyle={"7rem 3rem 8rem  1fr 1fr  15rem  10ch 4rem 7rem"}
            >
                <TableHeader>
                    {headerList.map((item, index) => {
                        return <ItemHeader key={index}>
                            {item}
                        </ItemHeader>
                    })}
                </TableHeader>
                <TableBody

                >
                    {
                        data?.users?.map((user, index) => {
                            return <Row
                                headerList={headerList}
                                key={index} >
                                <Property >
                                    <div className="property-header">
                                        {headerList[0]}
                                    </div>
                                    <div className="property-body">
                                        {user._id}
                                    </div>
                                </Property>
                                <Property >
                                    <div className="property-header">
                                        {headerList[1]}
                                    </div>
                                    <div className="property-body">
                                        <img src={SERVER.BASE_URL + user.image} />
                                    </div>
                                </Property>
                                <Property >
                                    <div className="property-header">
                                        {headerList[2]}
                                    </div>
                                    <div className="property-body">
                                        {user.fullName}
                                    </div>
                                </Property>
                                <Property >
                                    <div className="property-header">
                                        {headerList[3]}
                                    </div>
                                    <div className="property-body">
                                        {user.email}
                                    </div>
                                </Property>
                                <Property >
                                    <div className="property-header">
                                        {headerList[4]}
                                    </div>
                                    <div className="property-body">
                                        ${parseFloat(user.found).toFixed(4)}
                                    </div>
                                </Property>
                                <Property >
                                    <div className="property-header">
                                        {headerList[5]}
                                    </div>
                                    <div className={`property-body date-time`}>
                                        <span>
                                            <Icon icon="clarity:date-line" />
                                            {(new Date(user.createdAt)).toUTCString()}
                                        </span>
                                    </div>
                                </Property>
                                <Property >
                                    <div className="property-header">
                                        {headerList[6]}
                                    </div>
                                    <div className="property-body">
                                        {user.role}
                                    </div>
                                </Property>
                                <Property >
                                    <div className="property-header">
                                        {headerList[7]}
                                    </div>
                                    <div className={`property-body state-${user.verified}`}>
                                        <label>
                                            <Switch
                                                onChange={(e) => {
                                                    changeVerify(user, e)
                                                }}
                                                checked={user.emailVerified.isActive}
                                            />
                                        </label>
                                    </div>
                                </Property>
                                <Property >
                                    <div className="property-header">
                                        {headerList[8]}
                                    </div>
                                    <div className={`property-body buttons`}>
                                        {
                                            user?.isBlocked?.status ? <button
                                                className="block"
                                                onClick={() => freeUser(user)}>
                                                <Icon icon="gridicons:block" />
                                                <span>
                                                    Blocked
                                                </span>
                                            </button> : <button
                                                onClick={() => blockUser(user)}
                                                className="free">
                                                <Icon icon="flat-color-icons:ok" />
                                                <span>
                                                    Free
                                                </span>
                                            </button>
                                        }

                                        <button
                                            className="edit"
                                            onClick={() => openEditUserPopUp(user)}>
                                            <Icon icon="fluent:delete-32-filled" />
                                            <span>
                                                Edit
                                            </span>
                                        </button>
                                        <button className="orders">
                                            <Icon icon="icon-park-outline:transaction-order" />
                                            <span>
                                                Orders
                                            </span>
                                        </button>
                                    </div>
                                </Property>
                            </Row>
                        })

                    }
                </TableBody>
                <TablePaginations>
                    <ResponsivePagination
                        current={data?.currentPage}
                        total={data?.maxPageNumber}
                        onPageChange={(pageNumber) => {
                            setUrl(API.ADMIN_DASHBOARD.USERS.GET + pageNumber)
                        }}
                    />
                </TablePaginations>


            </Table>
        </div>
    )
}
