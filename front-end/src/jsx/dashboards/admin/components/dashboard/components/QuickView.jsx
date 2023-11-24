import { Icon } from '@iconify/react'
import React from 'react'
import { useFetch } from '../../../../../../lib/useFetch'
import { API } from '../../../../../../lib/envAccess'

export default function QuickView() {

    const [data , error ,loading] = useFetch(API.ADMIN_DASHBOARD.QUICK_VIEW.GET)


    return (
        <div className="quick-view">
            <div className="item progressing">
                <div className="item-header">
                    Orders Received
                </div>
                <div className="item-body">
                    <Icon icon="material-symbols:order-play" />
                    <span>{data?.ordersReceived?.totalOrders}</span>
                </div>
                <div className="item-footer">
                    <span>Completed Orders</span>
                    <span>
                        <Icon icon="subway:up-2" />
                        {data?.ordersReceived?.completedOrders}
                    </span>
                </div>
            </div>
            <div className="item progressing">
                <div className="item-header">
                    Total Services
                </div>
                <div className="item-body">
                    <Icon icon="icon-park-solid:sales-report" />
                    <span>{data?.totalServices?.total}</span>
                </div>
                <div className="item-footer">
                    <span>Platforms</span>
                    <span>
                        <Icon icon="subway:up-2" />
                        {data?.totalServices?.platforms}
                    </span>
                </div>
            </div>
            <div className="item regressing">
                <div className="item-header">
                    Income
                </div>
                <div className="item-body">
                    <Icon icon="healthicons:money-bag" />
                    <span>${data?.income?.total}</span>
                </div>
                <div className="item-footer">
                    <span>This Month</span>
                    <span>
                        <Icon icon="subway:up-2" />
                        ${data?.income?.thisMonth}
                    </span>
                </div>
            </div>
            <div className="item regressing">
                <div className="item-header">
                    Total Customers
                </div>
                <div className="item-body">
                    <Icon icon="carbon:user-filled" />
                    <span>{data?.customers?.total}</span>
                </div>
                <div className="item-footer">
                    <span>This Month</span>
                    <span>
                        <Icon icon="subway:up-2" />
                        +{data?.customers?.thisMonth}
                    </span>
                </div>
            </div>
        </div>
    )
}
