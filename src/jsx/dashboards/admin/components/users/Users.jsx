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



const headerList = [
    "ID",
    "Image",
    "Full-Name",
    "User-Name",
    "Email",
    "Charge",
    "Verified",
    "Created-At",
    "Controlls"
]




export default function Users() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("https://65056334ef808d3c66effa9b.mockapi.io/users")
            .then(response => {
                const temp = response.data
                setUsers(temp)
            })

    }, [])

    const dispatcher = useDispatch()



    const openEditUserPopUp = (user) => {
        dispatcher(showPopUp({
            type: ADMIN_PANEL_EDIT_USER,
            duration: 2000,
            component: <EditUserInfoPopUp user={user} />
        }))
    }



    return (
        <div className="admin-users-panel">
            <Table
                columnsStyle={"4.5rem 4rem 8rem 7rem 12rem 4rem  5rem 1fr 1fr"}
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
                        users.map((item, index) => {
                            const dateTime = new Date(item.createdAt)
                            const date = `${dateTime.getFullYear()}/${dateTime.getMonth()}/${dateTime.getDay()}`
                            const time = `${dateTime.getHours()}:${dateTime.getMinutes()}:${dateTime.getSeconds()}`
                            return <Row
                                headerList={headerList}
                                key={index} >
                                <Property >
                                    <div className="property-header">
                                        {headerList[0]}
                                    </div>
                                    <div className="property-body">
                                        {item.id}
                                    </div>
                                </Property>
                                <Property >
                                    <div className="property-header">
                                        {headerList[1]}
                                    </div>
                                    <div className="property-body">
                                        <img src={item.avatar} />
                                    </div>
                                </Property>
                                <Property >
                                    <div className="property-header">
                                        {headerList[2]}
                                    </div>
                                    <div className="property-body">
                                        {item.fullName}
                                    </div>
                                </Property>
                                <Property >
                                    <div className="property-header">
                                        {headerList[3]}
                                    </div>
                                    <div className="property-body">
                                        {item.userName}
                                    </div>
                                </Property>
                                <Property >
                                    <div className="property-header">
                                        {headerList[4]}
                                    </div>
                                    <div className="property-body">
                                        {item.email}
                                    </div>
                                </Property>
                                <Property >
                                    <div className="property-header">
                                        {headerList[5]}
                                    </div>
                                    <div className="property-body">
                                        ${item.charge}
                                    </div>
                                </Property>
                                <Property >
                                    <div className="property-header">
                                        {headerList[6]}
                                    </div>
                                    <div className={`property-body state-${item.verified}`}>
                                        <label>
                                            <Switch
                                                onChange={(e) => { alert(e) }}
                                                checked={item.verified}
                                            />
                                        </label>
                                    </div>
                                </Property>
                                <Property >
                                    <div className="property-header">
                                        {headerList[7]}
                                    </div>
                                    <div className={`property-body date-time`}>
                                        <span>
                                            <Icon icon="clarity:date-line" />
                                            {date}
                                        </span>
                                        <br />
                                        <span>
                                            <Icon icon="ion:time-outline" />
                                            {time}
                                        </span>
                                    </div>
                                </Property>
                                <Property >
                                    <div className="property-header">
                                        {headerList[8]}
                                    </div>
                                    <div className={`property-body buttons`}>
                                        <button className="block">
                                            <Icon icon="gridicons:block" />
                                            <span>
                                                Block
                                            </span>
                                        </button>
                                        <button
                                            className="edit"
                                            onClick={() => openEditUserPopUp(item)}>
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
            </Table>
        </div>
    )
}
