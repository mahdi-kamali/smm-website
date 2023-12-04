import { API } from "../../../../../lib/envAccess"
import { useFetch } from "../../../../../lib/useFetch"
import Table from "../../../../cutsome-components/table/Table"
import ItemHeader from "../../../../cutsome-components/table/components/ItemHeader"
import Row from "../../../../cutsome-components/table/components/Row"
import TableBody from "../../../../cutsome-components/table/components/TableBody"
import TableHeader from "../../../../cutsome-components/table/components/TableHeader"
import Property from "../../../../cutsome-components/table/components/Property"

export default function Services() {


  const [services, error, loading, setUrl, refresh] = useFetch(
    API.ADMIN_DASHBOARD.SERVICES.GET
  )



  const headersList = [
    "Service ID",
    "Name",
    "Category",
    "Dripfeed",
    "Min",
    "Max",
    "Rate",
    "Refill",
  ]



  return (
    <div className="admin-services-panel">
      <Table columnsStyle={"5rem 1fr 0.5fr 4rem 4rem 5rem 5rem 5rem"}>
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
              !loading ? services?.map((record) => {
                return <Row key={record.service}>
                  <Property>
                    <div className="property-header">
                      {headersList[0]}
                    </div>
                    <div className="property-body">
                      {record.service}
                    </div>
                  </Property>
                  <Property>
                    <div className="property-header">
                      {headersList[1]}
                    </div>
                    <div className="property-body">
                      {record.name}
                    </div>
                  </Property>
                  <Property>
                    <div className="property-header">
                      {headersList[2]}
                    </div>
                    <div className="property-body ">
                      {record.category}
                    </div>
                  </Property>
                  <Property>
                    <div className="property-header">
                      {headersList[3]}
                    </div>
                    <div className="property-body">
                      {`${record.dripfeed}`}
                    </div>
                  </Property>
                  <Property>
                    <div className="property-header">
                      {headersList[4]}
                    </div>
                    <div className="property-body">
                      {record.min}
                    </div>
                  </Property>
                  <Property>
                    <div className="property-header">
                      {headersList[5]}
                    </div>
                    <div className="property-body">
                      {record.max}
                    </div>
                  </Property>
                  <Property>
                    <div className="property-header">
                      {headersList[6]}
                    </div>
                    <div className="property-body">
                      ${record.rate}
                    </div>
                  </Property>
                  <Property>
                    <div className="property-header">
                      {headersList[7]}
                    </div>
                    <div className="property-body">
                    {`${record.refill}`}

                    </div>
                  </Property>

                </Row>
              }) : <h1>Loading...</h1>
            }

          </TableBody>
        }


      </Table>
    </div>
  )
}
