import { Icon } from "@iconify/react"

const TicketHistory = () => {


    const tempRecords = [
        {
            id: 0,
            subject: "New-Order - Refill",
            status: "Pending",
            lastUpdate: "2023-08-13 10:39:37"
        },
        {
            id: 1,
            subject: "Payment",
            status: "Resolved",
            lastUpdate: "2023-08-13 10:45:37"
        },
        {
            id: 2,
            subject: "Support Request",
            status: "Pending",
            lastUpdate: "2023-08-13 11:45:22"
        },
        {
            id: 3,
            subject: "Account Update",
            status: "InProgress",
            lastUpdate: "2023-08-13 14:20:10"
        },
        {
            id: 4,
            subject: "Delivery Status",
            status: "Pending",
            lastUpdate: "2023-08-13 15:30:18"
        },
        {
            id: 5,
            subject: "Refund Request",
            status: "Rejected",
            lastUpdate: "2023-08-12 09:15:05"
        },
        {
            id: 6,
            subject: "Product Inquiry",
            status: "Pending",
            lastUpdate: "2023-08-13 16:12:30"
        },
        {
            id: 7,
            subject: "Membership Renewal",
            status: "InProgress",
            lastUpdate: "2023-08-13 18:55:40"
        },
        {
            id: 8,
            subject: "Technical Issue",
            status: "Pending",
            lastUpdate: "2023-08-13 21:03:15"
        },
        {
            id: 9,
            subject: "Feedback",
            status: "Resolved",
            lastUpdate: "2023-08-11 12:30:20"
        },
        {
            id: 10,
            subject: "Order Tracking",
            status: "Resolved",
            lastUpdate: "2023-08-13 09:00:55"
        }
        // ... add more fake data entries here
    ];





    const getIcon = (status) => {
        switch (status) {
            case "Pending": return <Icon icon="material-symbols:pending-actions" />
            case "Resolved": return <Icon icon="icon-park-solid:success" />
            case "InProgress": return <Icon icon="carbon:in-progress" />
            case "Rejected": return <Icon icon="material-symbols:dangerous-rounded" />
        }
    }



    const getTime = (time) => {
        const timeData = new Date(time)
        return `${timeData.getHours()} : ${timeData.getMinutes()} `
    }

    const getDate = (date) => {
        const timeData = new Date(date)
        return `${timeData.getFullYear()} / ${timeData.getMonth()} / ${timeData.getDate()} `
    }

    return (
        <div className="ticket-history">

            {tempRecords.map((record => {
                return <div className={`item ${record.status}`}>
                    <div className="item-header">
                        <div className="status">
                            {getIcon(record.status)}
                        </div>
                    </div>
                    <div className="item-body">
                        <div className="subject row">
                            <Icon icon="fluent:document-header-24-filled" />
                            <span> {record.subject}</span>
                        </div>
                        <div className="last-update row">
                            <Icon icon="mingcute:time-fill" />
                            <span>{getTime(record.lastUpdate)}</span>
                        </div>
                        <div className="last-update row">
                            <Icon icon="material-symbols:date-range" />
                            <span>{getDate(record.lastUpdate)}</span>
                        </div>
                    </div>
                    <div className="item-buttons">
                        <button>View</button>
                    </div>
                </div>
            }))}
        </div>
    )
}

export default TicketHistory