import React from 'react'
import Table from "../../../../cutsome-components/table/Table"
import ItemHeader from "../../../../cutsome-components/table/components/ItemHeader"
import Row from "../../../../cutsome-components/table/components/Row"
import TableBody from "../../../../cutsome-components/table/components/TableBody"
import TableHeader from "../../../../cutsome-components/table/components/TableHeader"
import Property from "../../../../cutsome-components/table/components/Property"
import { deletE, useFetch } from '../../../../../lib/useFetch'
import { API, SERVER } from '../../../../../lib/envAccess'
import { Icon } from '@iconify/react'
import { useDispatch } from 'react-redux'
import CreatePlatformPopUp from '../../../../pop-ups/CreatePlatformPopUp'
import { ADMIN_PANEL_CREATE_PLATFORM } from '../../../../pop-ups/Constaints'
import { showPopUp } from '../../../../../features/popUpReducer'
import { showError, showSuccess } from '../../../../../lib/alertHandler'
import EditPlatformPopUp from '../../../../pop-ups/EditPlatformPopUp'

export default function Platforms() {


    const [platforms, error, loading, setUrl, refresh] = useFetch(
        API.ADMIN_DASHBOARD.PLATFORMS.GET
    )

    const dispatcher = useDispatch()





    const headersList = [
        "Service ID",
        "Image",
        "Name",
        "Description",
        "CreatedAt",
        "Controls",
    ]


    const onEditClick = (platform) => {
        dispatcher(showPopUp({
            type: ADMIN_PANEL_CREATE_PLATFORM,
            duration: 2000,
            component: <EditPlatformPopUp refresh={refresh} platform={platform} />
        }))
    }

    const onDeleteClick = (platform) => {
        deletE(
            API.ADMIN_DASHBOARD.PLATFORMS.DELETE,
            {
                id: platform._id
            }
        ).then(resp => {
            showSuccess(resp).finally(end => { refresh() })
        })
            .catch(err => {
                const errors = err?.response?.data
                showError(errors)
            })

    }



    const onCreateNewPlatform = (user) => {
        dispatcher(showPopUp({
            type: ADMIN_PANEL_CREATE_PLATFORM,
            duration: 2000,
            component: <CreatePlatformPopUp refresh={refresh} />
        }))
    }


    return (
        <main className='admin-panel-platforms'>
            <h2 className="platforms-header">
                <h1 className="left">
                    Platform
                </h1>
                <div className="right">
                    <button onClick={onCreateNewPlatform}>
                        <Icon icon="wpf:create-new" />
                        <span>Create New</span>
                    </button>
                </div>
            </h2>

            <div className="platform-body">
                <Table columnsStyle={"7rem 5rem 5rem 30rem 1fr 8rem"}>
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
                                !loading ? platforms?.map((platform) => {
                                    return <Row key={platform._id}>
                                        <Property>
                                            <div className="property-header">
                                                {headersList[0]}
                                            </div>
                                            <div className="property-body">
                                                {platform._id}
                                            </div>
                                        </Property>
                                        <Property>
                                            <div className="property-header">
                                                {headersList[1]}
                                            </div>
                                            <div className="property-body image">
                                                <img src={SERVER.BASE_URL + platform.image} />
                                            </div>
                                        </Property>
                                        <Property>
                                            <div className="property-header">
                                                {headersList[2]}
                                            </div>
                                            <div className="property-body ">
                                                {platform.name}
                                            </div>
                                        </Property>
                                        <Property>
                                            <div className="property-header">
                                                {headersList[3]}
                                            </div>
                                            <div className="property-body">
                                                {platform.shortDescription}
                                            </div>
                                        </Property>
                                        <Property>
                                            <div className="property-header">
                                                {headersList[4]}
                                            </div>
                                            <div className="property-body">
                                                {new Date(platform.createdAt)
                                                    .toUTCString()}
                                            </div>
                                        </Property>
                                        <Property >
                                            <div className="property-header">
                                                {headersList[5]}
                                            </div>
                                            <div className="property-body buttons">
                                                <button
                                                    className="edit"
                                                    onClick={
                                                        () => onEditClick(platform)
                                                    }
                                                >
                                                    <Icon icon="fluent:delete-32-filled" />
                                                    <span>
                                                        Edit
                                                    </span>
                                                </button>
                                                <button
                                                    className="delete"
                                                    onClick={() => onDeleteClick(platform)}>
                                                    <Icon icon="icon-park-outline:transaction-order" />
                                                    <span>
                                                        Delete
                                                    </span>
                                                </button>
                                            </div>
                                        </Property>

                                    </Row>
                                }) : <h1>Loading...</h1>
                            }

                        </TableBody>
                    }


                </Table>
            </div>

        </main>
    )
}
