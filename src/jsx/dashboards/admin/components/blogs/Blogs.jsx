import { Icon } from '@iconify/react'
import Table from '../../../../cutsome-components/table/Table'
import TableHeader from '../../../../cutsome-components/table/components/TableHeader'
import TableBody from '../../../../cutsome-components/table/components/TableBody'
import ItemHeader from '../../../../cutsome-components/table/components/ItemHeader'
import Row from '../../../../cutsome-components/table/components/Row'
import Property from '../../../../cutsome-components/table/components/Property'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import MaxLineText from '../../../../cutsome-components/Text/MaxLineText'
import Switch from "react-switch"
import { useDispatch } from 'react-redux'
import { showPopUp } from '../../../../../features/popUpReducer'
import { ADMIN_PANEL_CREATE_BLOG } from '../../../../pop-ups/Constaints'
import CreateNewBlogPopUp from '../../../../pop-ups/CreateNewBlogPopUp'
import EditBlogPopUp from '../../../../pop-ups/EditBlogPopUp'

export default function Blogs() {

    const dispatcher = useDispatch()


    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        axios.get("https://65056334ef808d3c66effa9b.mockapi.io/fakeApi")
            .then(response => {
                const data = response.data
                setBlogs(data)
            })
    }, [])

    const headerList = [
        "ID",
        "Image",
        "Title",
        "Description",
        "Likes",
        "Comments",
        "Published",
        "Controlls"
    ]


    const handleCreateNewBlogClick = () => {
        dispatcher(showPopUp({
            type: ADMIN_PANEL_CREATE_BLOG,
            duration: 2000,
            component: <CreateNewBlogPopUp />
        }))
    }

    const handleOnEditBlogClick = (blog) => {
        dispatcher(showPopUp({
            type: ADMIN_PANEL_CREATE_BLOG,
            duration: 2000,
            component: <EditBlogPopUp blog={blog} />
        }))
    }

    return (
        <div className='admin-panel-blogs panel-section'>
            <h2 className="blogs-header">
                <h1 className="left">
                    Blogs
                </h1>
                <div className="right">
                    <button onClick={handleCreateNewBlogClick}>
                        <Icon icon="wpf:create-new" />
                        <span>Create New</span>
                    </button>
                </div>
            </h2>
            <div className="blogs-body">
                <Table columnsStyle={"7rem 10rem 10rem 1fr 4rem 7rem 7rem 5rem"}>
                    <TableHeader>
                        {
                            headerList.map((reconrd, index) => {
                                return <ItemHeader
                                    key={index}>
                                    {reconrd}
                                </ItemHeader>
                            })
                        }
                    </TableHeader>
                    <TableBody>
                        {
                            blogs.map(record => {
                                return <Row key={record.id}>
                                    <Property>
                                        <div className="property-header">
                                            {headerList[0]}
                                        </div>
                                        <div className="property-body">
                                            {record.blogId}
                                        </div>
                                    </Property>
                                    <Property>
                                        <div className="property-header">
                                            {headerList[1]}
                                        </div>
                                        <div className="property-body">
                                            <img src={record.blogImage} />
                                        </div>
                                    </Property>
                                    <Property>
                                        <div className="property-header">
                                            {headerList[2]}
                                        </div>
                                        <div className="property-body">
                                            <MaxLineText
                                                maxLine={3}
                                                content={record.blogTitle} />
                                        </div>
                                    </Property>
                                    <Property>
                                        <div className="property-header">
                                            {headerList[3]}
                                        </div>
                                        <div className="property-body">
                                            <MaxLineText
                                                maxLine={4}
                                                content={record.blogDescription} />
                                        </div>
                                    </Property>
                                    <Property>
                                        <div className="property-header">
                                            {headerList[3]}
                                        </div>
                                        <div className="property-body">
                                            <MaxLineText
                                                maxLine={4}
                                                content={record.blogLikes} />
                                        </div>
                                    </Property>
                                    <Property>
                                        <div className="property-header">
                                            {headerList[4]}
                                        </div>
                                        <div className="property-body comment-property">
                                            <MaxLineText
                                                maxLine={1}
                                                content={record.blogComments} />
                                            <button>
                                                <Icon icon="carbon:view-filled" />
                                                <span>View</span>
                                            </button>
                                        </div>
                                    </Property>
                                    <Property>
                                        <div className="property-header">
                                            {headerList[4]}
                                        </div>
                                        <div className="property-body">
                                            <Switch checked={record.blogPublished} />
                                        </div>
                                    </Property>
                                    <Property>
                                        <div className="property-header">
                                            {headerList[4]}
                                        </div>
                                        <div className="property-body controlls-property">
                                            <button
                                                onClick={() => { handleOnEditBlogClick(record) }}>
                                                <Icon icon="bxs:edit" />
                                                <span>Edit</span>
                                            </button>
                                            <button>
                                                <Icon icon="fluent:delete-48-filled" />
                                                <span>Delete</span>
                                            </button>
                                        </div>
                                    </Property>
                                </Row>
                            })
                        }

                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
