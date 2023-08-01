import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import RecentOrderItem from './components/RecentOrderItem';
import { Icon } from '@iconify/react';
import { useState } from 'react';


const Orders = () => {

    const services = [
        {
            "Service_id": "4255",
            "Service": "Instagram Ultrafast Likes-(Max 300K)(Speed:10-20K/Per Hour)(Good Quality)(Non Drop)INSTANT",
            "Rate per 1000": "$0.03 ",
            "Min order": "20",
            "Max order": "300000",
            "Average time": "6 hours 22 minutes"
        },
        {
            "Service_id": "4350",
            "Service": "Instagram Ultra High Quality Likes From Adds-(Max 20K)(Speed:3-5K/Per Day)(Non Drop)Start:0-30 Minutes",
            "Rate per 1000": "$0.28 ",
            "Min order": "20",
            "Max order": "20000",
            "Average time": "2 hours 5 minutes"
        },
        {
            "Service_id": "4037",
            "Service": "Instagram Likes-(Max 30K)(Real High Quality)(Speed:1K/Hour)(Non Drop)INSTANT",
            "Rate per 1000": "$0.17 ",
            "Min order": "10",
            "Max order": "30000",
            "Average time": "9 hours 38 minutes"
        },
        {
            "Service_id": "3780",
            "Service": "Instagram Likes-(Max 10K)(10K/H)(NON Drop)(Drip-feed Allowed)(Real Quality Likes)Start:0-15 Minutes 🔥☞",
            "Rate per 1000": "$0.09 ",
            "Min order": "20",
            "Max order": "80000",
            "Average time": "2 hours 25 minutes"
        },
        {
            "Service_id": "3854",
            "Service": "Instagram Cheap Likes-(Max 100K)(2-3K/H)(Non Drop)(Medium Quality)INSTANT 🎉",
            "Rate per 1000": "$0.04 ",
            "Min order": "50",
            "Max order": "30000",
            "Average time": "1 hour 22 minutes"
        },
        {
            "Service_id": "3832",
            "Service": "Instagram Cheap Fast Likes-(Max 100K)(50K/H)(Mixed Quality)(Non Drop)ＩＮＳＴＡＮＴ🍟",
            "Rate per 1000": "$0.10 ",
            "Min order": "20",
            "Max order": "100000",
            "Average time": "30 minutes"
        },
        {
            "Service_id": "3823",
            "Service": "Instagaram Likes-(Max 25K)(Mixed Quality)(10K/D)0-2 Minutes Start✔🕐",
            "Rate per 1000": "$0.07 ",
            "Min order": "10",
            "Max order": "25000",
            "Average time": "1 hour 39 minutes"
        },
        {
            "Service_id": "3819",
            "Service": "Instagram Likes-(Max 500K)(50K/H)(Ｎｏｎ Ｄｒｏｐ)(Good Quality)INSTANT ⚡",
            "Rate per 1000": "$0.09 ",
            "Min order": "50",
            "Max order": "500000",
            "Average time": "2 hours 45 minutes"
        },
        {
            "Service_id": "3818",
            "Service": "Instagram Likes-(Max 25K)(200-500/H)(𝓝𝓸𝓷 𝓓𝓻𝓸𝓹)( Real HQ Likes)Start:0-2 Minutes ☟😎",
            "Rate per 1000": "$0.07 ",
            "Min order": "10",
            "Max order": "25000",
            "Average time": "30 minutes"
        },
        {
            "Service_id": "3815",
            "Service": "Instagram 𝐸𝓂𝑒𝓇𝑔𝑒𝓃𝒸𝓎  Likes-(Max 20K)(20K/D)(Non Drop)INSTANT 💎",
            "Rate per 1000": "$0.15 ",
            "Min order": "10",
            "Max order": "100000",
            "Average time": "24 hours 55 minutes"
        },
        {
            "Service_id": "3754",
            "Service": "Instagram Likes-(Max 20K)(5K-10K/H)(𝓝𝓞𝓝 𝓓𝓻𝓸𝓹)(ʸᵒᵘʳ ᴾʳᵒᶠⁱˡᵉ ⱽⁱˢⁱᵗˢ ᵂⁱˡˡ ᴵⁿᶜʳᵉᵃˢᵉ)(𝓗𝓲𝓰𝓱 𝓠𝓾𝓪𝓵𝓲𝓽𝔂)INSTANT 👍",
            "Rate per 1000": "$0.35 ",
            "Min order": "20",
            "Max order": "20000",
            "Average time": "2 hours 55 minutes"
        },
        {
            "Service_id": "3649",
            "Service": "Instagram Likes-(Max 50K)(High Quality)(Non Drop)(3K/H)Start:0-2 Minutes💀",
            "Rate per 1000": "$0.23 ",
            "Min order": "10",
            "Max order": "25000",
            "Average time": "14 minutes"
        },
        {
            "Service_id": "3753",
            "Service": "Instagram Likes-(Max 50K)(1K/H)(NON Drop)(♖ ＲέάŁ ｈǪ 𝔩丨Ҝ𝐄𝔰 )𝓘𝓝𝓢𝓣𝓐𝓝𝓣 ൠ",
            "Rate per 1000": "$0.15 ",
            "Min order": "10",
            "Max order": "50000",
            "Average time": "9 hours"
        },
        {
            "Service_id": "3610",
            "Service": "Instagram Likes-(Max 30K)(2K/H)(Non Drop)(Real HQ Likes)Start:0-5 Minutes⚡✅",
            "Rate per 1000": "$0.15 ",
            "Min order": "20",
            "Max order": "30000",
            "Average time": "1 hour 12 minutes"
        },
        {
            "Service_id": "3217",
            "Service": "Instagaram Likes-(Max 10K)(Mixed Quality)(4K/H)0-3 Minutes⚡✅",
            "Rate per 1000": "$0.30 ",
            "Min order": "20",
            "Max order": "10000",
            "Average time": "1 hour 43 minutes"
        },
        {
            "Service_id": "3111",
            "Service": "Instagram Real Likes + Reach + Impression-(Max 10K)( Non Drop)(3K/H)0-5 Minutes ⚡✅",
            "Rate per 1000": "$0.55 ",
            "Min order": "10",
            "Max order": "10000",
            "Average time": "25 minutes"
        },
        {
            "Service_id": "2493",
            "Service": "Instagram Likes-(Max 30K)(500-1K/H)(Non Drop)(Real HQ Likes)0-10 Minutes⚡✅",
            "Rate per 1000": "$0.24 ",
            "Min order": "10",
            "Max order": "500000",
            "Average time": "41 hours 24 minutes"
        },
        {
            "Service_id": "2796",
            "Service": "Instagram Likes-(Max 20K)(1-2K/H)(Non Drop)(𝓡𝓮𝓪𝓵 𝓗𝓠 𝓛𝓲𝓴𝓮𝓼) INSTANT ⚡✅",
            "Rate per 1000": "$0.30 ",
            "Min order": "20",
            "Max order": "20000",
            "Average time": "2 hours 25 minutes"
        },
        {
            "Service_id": "2845",
            "Service": "Instagram Likes-(Max 15K)(5-10K/H)(Non Drop)( Real HQ Likes )INSTANT ⚡✅",
            "Rate per 1000": "$0.55 ",
            "Min order": "10",
            "Max order": "100000",
            "Average time": "20 minutes"
        },
        {
            "Service_id": "2520",
            "Service": "Instagram Likes-(Max 15K)(1K-2K/H)(NON Drop)( Real HQ Likes ) Start:0-10 Mins⚡✅",
            "Rate per 1000": "$0.40 ",
            "Min order": "20",
            "Max order": "15000",
            "Average time": "6 minutes"
        },
        {
            "Service_id": "3304",
            "Service": "Instagram High Speed  Likes-(Max  15K)(1K/Minute)(NON DROP )(Impressions + Reach) Start:Instant✅",
            "Rate per 1000": "$0.60 ",
            "Min order": "10",
            "Max order": "20000",
            "Average time": "27 minutes"
        },
        {
            "Service_id": "3450",
            "Service": "Instagram Likes-(Max 30K)(500-1K/H)(NON Drop)( Real HQ Likes ) INSTANT ⚡✅",
            "Rate per 1000": "$0.25 ",
            "Min order": "10",
            "Max order": "500000",
            "Average time": "57 minutes"
        },
        {
            "Service_id": "3105",
            "Service": "Instagram Likes-(Max  10K) (3K/H) (NON-DROP)Instant start❤❤❤",
            "Rate per 1000": "$0.60 ",
            "Min order": "20",
            "Max order": "10000",
            "Average time": "13 hours 30 minutes"
        },
        {
            "Service_id": "2834",
            "Service": "Instagram Likes-(Max 30K)(Non Drop)(10K-30K/D) INSTANT✔",
            "Rate per 1000": "$0.50 ",
            "Min order": "10",
            "Max order": "30000",
            "Average time": "5 hours 33 minutes"
        },
        {
            "Service_id": "2874",
            "Service": "Instagram Likes-(Max 20K)(10K/Hour)(Non Drop)0-5 Minutes Start❤",
            "Rate per 1000": "$0.85 ",
            "Min order": "10",
            "Max order": "20000",
            "Average time": "1 hour 15 minutes"
        },
        {
            "Service_id": "2491",
            "Service": "Instagram Likes-(Max 20K)(Non Drop)(500-1k/H)Start- Instant❤❤",
            "Rate per 1000": "$0.80 ",
            "Min order": "50",
            "Max order": "15000",
            "Average time": "35 minutes"
        },
        {
            "Service_id": "2945",
            "Service": "Instagram Likes-(Max 20K)(10K/Hour)(Non Drop)0-5 Minutes Start✅",
            "Rate per 1000": "$0.85 ",
            "Min order": "10",
            "Max order": "20000",
            "Average time": "1 hour 26 minutes"
        },
        {
            "Service_id": "3309",
            "Service": "Instagram Real Likes-( Max 5K)(500/H)(Best) 0-5 Minute Start❤",
            "Rate per 1000": "$0.45 ",
            "Min order": "10",
            "Max order": "30000",
            "Average time": "8 hours 41 minutes"
        },
        {
            "Service_id": "3114",
            "Service": "Instagram Likes-(Max 50K)(150/H)  INSTANT  ❤",
            "Rate per 1000": "$0.60 ",
            "Min order": "10",
            "Max order": "20000",
            "Average time": "2 hours 3 minutes"
        },
        {
            "Service_id": "3310",
            "Service": "Instagram Likes-( Min 50 Max 5000)( 1-3k/Hour)(Asian Profiles)❤❤❤",
            "Rate per 1000": "$0.70 ",
            "Min order": "20",
            "Max order": "50000",
            "Average time": "24 minutes"
        }
    ]

    const [selectedOrder, setSelectedOrder] = useState({
        "Service_id": "4255",
        "Service": "Instagram Ultrafast Likes-(Max 300K)(Speed:10-20K/Per Hour)(Good Quality)(Non Drop)INSTANT",
        "Rate per 1000": "$0.03 ",
        "Min order": "20",
        "Max order": "300000",
        "Average time": "6 hours 22 minutes"
    })

    return (
        <section className="panel-orders">
            <div className="recent-orders">
                <div className="left">
                    <div className="orders">
                        <RecentOrderItem
                            service={services[0]}
                            stateClass={"success"}
                            currentSelected={selectedOrder.Service_id == services[0].Service_id}
                            selectFunction={(item) => setSelectedOrder(item)} />
                        <RecentOrderItem
                            service={services[1]}
                            stateClass={"danger"}
                            currentSelected={selectedOrder.Service_id == services[1].Service_id}
                            selectFunction={(item) => setSelectedOrder(item)} />
                        <RecentOrderItem
                            service={services[2]}
                            stateClass={"warning"}
                            currentSelected={selectedOrder.Service_id == services[2].Service_id}
                            selectFunction={(item) => setSelectedOrder(item)} />
                        <RecentOrderItem
                            service={services[3]}
                            stateClass={"info"}
                            currentSelected={selectedOrder.Service_id == services[3].Service_id}
                            selectFunction={(item) => setSelectedOrder(item)} />
                        <RecentOrderItem
                            service={services[4]}
                            stateClass={"proccess"}
                            currentSelected={selectedOrder.Service_id == services[4].Service_id}
                            selectFunction={(item) => setSelectedOrder(item)} />
                    </div>
                </div>
                <div className="right">
                    <div className="order-detail">
                        <div className="header">
                            <h1>
                                <span>
                                    #{selectedOrder.Service_id}
                                </span>
                            </h1>
                            <p>
                                {selectedOrder.Service}
                            </p>
                        </div>
                        <div className="body">
                            <div className="property">
                                <div className="property-left">
                                    <Icon icon="fluent:calendar-date-28-filled" />
                                    <span>
                                        Date
                                    </span>
                                </div>
                                <div className="property-right">
                                    <span>
                                        2023/12/12
                                    </span>
                                </div>
                            </div>
                            <div className="property">
                                <div className="property-left">
                                    <Icon icon="mdi:auto-start" />
                                    <span>
                                        Start count
                                    </span>
                                </div>
                                <div className="property-right">
                                    <span>
                                        100
                                    </span>
                                </div>
                            </div>
                            <div className="property">
                                <div className="property-left">
                                    <Icon icon="uim:process" />
                                    <span>
                                        Remains
                                    </span>
                                </div>
                                <div className="property-right">
                                    <span>
                                        500
                                    </span>
                                </div>
                            </div>
                            <div className="property">
                                <div className="property-left">
                                    <Icon icon="majesticons:chat-status" />
                                    <span>
                                        Status
                                    </span>
                                </div>
                                <div className="property-right">
                                    <span>
                                        Active
                                    </span>
                                </div>
                            </div>
                            <div className="property link">
                                <div className="property-left">
                                    <Icon icon="mingcute:link-fill" />
                                    <span>
                                        Link
                                    </span>
                                </div>
                                <p className="property-right">
                                    <span>
                                        http://localhost:3000/user/dashboard
                                    </span>
                                </p>
                            </div>
                            <div className="property description">
                                <div className="property-left">
                                    <Icon icon="ion:rocket-sharp" />
                                    <span>
                                        Service
                                    </span>
                                </div>
                                <p className="property-right">
                                    <span>
                                        {selectedOrder.Service}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="footer">
                            <div className="time-date">
                                <div className="time">
                                    <span>
                                        <Icon icon="ri:time-fill" />
                                        24:24
                                    </span>
                                </div>
                                <div className="date">
                                    <span>
                                        <Icon icon="clarity:date-solid" />
                                        2022/12/23
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section >
    )
}

export default Orders