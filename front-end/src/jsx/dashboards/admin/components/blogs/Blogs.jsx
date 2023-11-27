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
import { deletE, put, useFetch } from "../../../../../lib/useFetch"
import { API, SERVER } from '../../../../../lib/envAccess'
import TablePaginations from "../../../../cutsome-components/table/components/TablePaginations";
import ResponsivePagination from 'react-responsive-pagination';
import { showError, showSuccess } from '../../../../../lib/alertHandler'


export default function Blogs() {


    const [currentPage, setCurrentPage] = useState(1)


    const [data, error, loading, setUrl, refresh] = useFetch(
        API.ADMIN_DASHBOARD.BLOGS.GET + currentPage
    )

    const dispatcher = useDispatch()




    const headerList = [
        "ID",
        "Image",
        "Title",
        "Description",
        "Likes",
        "Published",
        "Controlls"
    ]





    const handleCreateNewBlogClick = () => {
        dispatcher(showPopUp({
            type: ADMIN_PANEL_CREATE_BLOG,
            duration: 2000,
            component: <CreateNewBlogPopUp refresh={refresh} />
        }))
    }

    const handleOnEditBlogClick = (blog) => {
        dispatcher(showPopUp({
            type: ADMIN_PANEL_CREATE_BLOG,
            duration: 2000,
            component: <EditBlogPopUp blog={blog} refresh={refresh} />
        }))
    }

    const onPublishedClick = (blog, published) => {
        put(API.ADMIN_DASHBOARD.BLOGS.BLOG.PUBLISHED.PUT, {
            blogID: blog._id,
            published: published
        })
            .then(res => {
                showSuccess(res).finally(end => { refresh() })
            })
            .catch(err => {
                const errors = err?.response?.data
                showError(errors)
            })
    }



    const handleOnDelete = (blog) => {
        deletE(API.ADMIN_DASHBOARD.BLOGS.BLOG.DELETE.DELETE, {
            blogID: blog._id
        })
            .then(resp => {
                showSuccess(resp).finally(end => {
                    refresh()
                })
            })
            .catch(err => {
                const errors = err?.response?.data
                showError(errors)
            })
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
                <Table columnsStyle={"7rem 10rem 10rem 1fr  7rem 7rem 7rem"}>
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
                            !loading ? data?.blogs?.map(blog => {
                                return <Row key={blog.id}>
                                    <Property>
                                        <div className="property-header">
                                            {headerList[0]}
                                        </div>
                                        <div className="property-body">
                                            {blog._id}
                                        </div>
                                    </Property>
                                    <Property>
                                        <div className="property-header">
                                            {headerList[1]}
                                        </div>
                                        <div className="property-body">
                                            <img src={SERVER.BASE_URL + blog.image} />
                                        </div>
                                    </Property>
                                    <Property>
                                        <div className="property-header">
                                            {headerList[2]}
                                        </div>
                                        <div className="property-body">
                                            <MaxLineText
                                                maxLine={3}
                                                content={blog.title} />
                                        </div>
                                    </Property>
                                    <Property>
                                        <div className="property-header">
                                            {headerList[3]}
                                        </div>
                                        <div className="property-body">
                                            <MaxLineText
                                                maxLine={4}
                                                content={blog.description} />
                                        </div>
                                    </Property>
                                    <Property>
                                        <div className="property-header">
                                            {headerList[4]}
                                        </div>
                                        <div className="property-body">
                                            <MaxLineText
                                                maxLine={4}
                                                content={blog.likes} />
                                        </div>
                                    </Property>
                                    <Property>
                                        <div className="property-header">
                                            {headerList[5]}
                                        </div>
                                        <div className="property-body">
                                            <Switch
                                                checked={blog.published}
                                                onChange={(e) => {
                                                    onPublishedClick(blog, e)
                                                }} />
                                        </div>
                                    </Property>
                                    <Property>
                                        <div className="property-header">
                                            {headerList[6]}
                                        </div>
                                        <div className="property-body controlls-property">
                                            <button
                                                onClick={() => { handleOnEditBlogClick(blog) }}>
                                                <Icon icon="bxs:edit" />
                                                <span>Edit</span>
                                            </button>
                                            <button
                                                onClick={() => handleOnDelete(blog)}
                                            >
                                                <Icon icon="fluent:delete-48-filled" />
                                                <span>Delete</span>
                                            </button>
                                        </div>
                                    </Property>
                                </Row>
                            }) : <h1>Loading....</h1>
                        }

                    </TableBody>
                    <TablePaginations>
                        <ResponsivePagination
                            current={data?.currentPage}
                            total={data?.maxPageNumber}
                            onPageChange={(pageNumber) => {
                                setUrl(API.ADMIN_DASHBOARD.BLOGS.GET + pageNumber)
                            }}
                        />
                    </TablePaginations>
                </Table>
            </div>
        </div>
    )
}
