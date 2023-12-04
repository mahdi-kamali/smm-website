import { Icon } from "@iconify/react";
import { API, SERVER } from "../../../../../lib/envAccess";
import { useFetch } from "../../../../../lib/useFetch";
import Table from "../../../../cutsome-components/table/Table";
import ItemHeader from "../../../../cutsome-components/table/components/ItemHeader";
import Property from "../../../../cutsome-components/table/components/Property";
import Row from "../../../../cutsome-components/table/components/Row";
import TableBody from "../../../../cutsome-components/table/components/TableBody";
import TableHeader from "../../../../cutsome-components/table/components/TableHeader";
import CreatePaymentMethodPopUp from "../../../../pop-ups/CreatePaymentMethodPopUp";
import { useDispatch } from "react-redux";
import { showPopUp } from "../../../../../features/popUpReducer";
import { ADMIN_PANEL_CREATE_PAYMENT_METHOD } from "../../../../pop-ups/Constaints";

export default function PaymentMethods() {


    const [methods, error, loading, setUrl, refresh] = useFetch(
        API.ADMIN_DASHBOARD.METHODS.GET
    )

    const dispatcher = useDispatch()


    const headersList = [
        "Service ID",
        "Image",
        "Name",
        "Description",
        "Site",
    ]


    const openCreateMethodPopUp = () => {
        dispatcher(showPopUp({
            type: ADMIN_PANEL_CREATE_PAYMENT_METHOD,
            duration: 2000,
            component: <CreatePaymentMethodPopUp refresh={refresh} />
        }))
    }



    return (
        <div className="admin-panel-payment-methods">
            <h1 className="header">
                <span>Methods</span>
                <button
                    onClick={openCreateMethodPopUp}>
                    <Icon icon="akar-icons:edit" />
                    <small>
                        Add Method
                    </small>
                </button>
            </h1>
            <div className="body">
                <Table columnsStyle={"8rem 5rem 10rem 1fr 10rem"}>
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
                                !loading ? methods?.map((record) => {
                                    return <Row key={record.service}>
                                        <Property>
                                            <div className="property-header">
                                                {headersList[0]}
                                            </div>
                                            <div className="property-body">
                                                {record._id}
                                            </div>
                                        </Property>
                                        <Property >
                                            <div className="property-header">
                                                {headersList[1]}
                                            </div>
                                            <div className="property-body image">
                                                <img
                                                    src={SERVER.BASE_URL + record.image}
                                                    alt="" />
                                            </div>
                                        </Property>
                                        <Property>
                                            <div className="property-header">
                                                {headersList[2]}
                                            </div>
                                            <div className="property-body ">
                                                {record.name}
                                            </div>
                                        </Property>
                                        <Property>
                                            <div className="property-header">
                                                {headersList[3]}
                                            </div>
                                            <div className="property-body">
                                                {`${record.description}`}
                                            </div>
                                        </Property>
                                        <Property>
                                            <div className="property-header">
                                                {headersList[4]}
                                            </div>
                                            <div className="property-body">
                                                {record.site}
                                            </div>
                                        </Property>

                                    </Row>
                                }) : <h1>Loading...</h1>
                            }

                        </TableBody>
                    }


                </Table>
            </div>

        </div>
    )
}
