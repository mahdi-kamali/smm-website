import Lottie from "react-lottie-player"



import introAnimation from "../../../../../animations/user-dashboard/dashboard-affiliates-intro.json"
import Table from "../../../../cutsome-components/table/Table"
import TableHeader from "../../../../cutsome-components/table/components/TableHeader"
import TableBody from "../../../../cutsome-components/table/components/TableBody"
import ItemHeader from "../../../../cutsome-components/table/components/ItemHeader"
import Row from "../../../../cutsome-components/table/components/Row"
import Property from "../../../../cutsome-components/table/components/Property"


const Affliates = () => {
  introAnimation.fr = 10
  return (
    <div className="panel-affliates">
      <div className="intro">
        <div className="left">
          <Lottie
            animationData={introAnimation}
            play
            loop
          />
        </div>
        <div className="right">
          <h1>
            Earn with <br />
            <span>USMM's </span> <br />
            Referral Program
          </h1>
          <p>
            Unlock Earnings by Sharing Your Referral Link and Placing Our Banner on Your Website. Alternatively, Simply Invite Your Friends Using Your Unique Referral Link.
            As a Referrer, You'll Enjoy a 3% Share of Every Dollar Your Referrals Spend, for Eternity.
          </p>

        </div>
      </div>
      <div className="links">
        <Table columnsStyle={"2fr 1fr 1fr "}>

          <TableHeader >
            <ItemHeader>
              Referral link
            </ItemHeader>
            <ItemHeader>
              Commission rate
            </ItemHeader>
            <ItemHeader>
              Minimum payout
            </ItemHeader>
          </TableHeader>

          <TableBody  >
            <Row>
              <Property>
                https://smmpakpanel.com/ref/6jq91
              </Property>
              <Property>
                3%
              </Property>
              <Property>
                $10.00
              </Property>
            </Row>
          </TableBody>


        </Table>
      </div>
      <div className="quick-view">
        <Table columnsStyle={"1fr 1fr 1fr 1fr 1fr 1fr  "}>

          <TableHeader >
            <ItemHeader>
              Visits
            </ItemHeader>
            <ItemHeader>
              Registrations
            </ItemHeader>
            <ItemHeader>
              Referrals
            </ItemHeader>
            <ItemHeader>
              Conversion
            </ItemHeader>
            <ItemHeader>
              Total earnings
            </ItemHeader>
            <ItemHeader>
              Earnings Available
            </ItemHeader>

          </TableHeader>

          <TableBody  >
            <Row>
              <Property>
                0
              </Property>
              <Property>
                0
              </Property>
              <Property>
                0
              </Property>
              <Property>
                0.00%
              </Property>
              <Property>
                $0.00
              </Property>
              <Property>
                $0.00
              </Property>
            </Row>
          </TableBody>


        </Table>
      </div>
    </div>
  )
}

export default Affliates