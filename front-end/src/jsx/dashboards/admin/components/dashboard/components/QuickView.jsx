import { Icon } from '@iconify/react'
import React from 'react'

export default function QuickView() {

    

    return (
        <div className="quick-view">
            <div className="item progressing">
                <div className="item-header">
                    Orders Received
                </div>
                <div className="item-body">
                    <Icon icon="material-symbols:order-play" />
                    <span>486</span>
                </div>
                <div className="item-footer">
                    <span>Completed Orders</span>
                    <span>
                        <Icon icon="subway:up-2" />
                        351
                    </span>
                </div>
            </div>
            <div className="item progressing">
                <div className="item-header">
                    Total Sales
                </div>
                <div className="item-body">
                    <Icon icon="icon-park-solid:sales-report" />
                    <span>1641</span>
                </div>
                <div className="item-footer">
                    <span>This Month</span>
                    <span>
                        <Icon icon="subway:up-2" />
                        231
                    </span>
                </div>
            </div>
            <div className="item regressing">
                <div className="item-header">
                    Income
                </div>
                <div className="item-body">
                    <Icon icon="healthicons:money-bag" />
                    <span>$32,562</span>
                </div>
                <div className="item-footer">
                    <span>This Month</span>
                    <span>
                        <Icon icon="subway:up-2" />
                        $8,222
                    </span>
                </div>
            </div>
            <div className="item regressing">
                <div className="item-header">
                    Total Customers
                </div>
                <div className="item-body">
                    <Icon icon="carbon:user-filled" />
                    <span>2,000</span>
                </div>
                <div className="item-footer">
                    <span>This Month</span>
                    <span>
                        <Icon icon="subway:up-2" />
                        +255
                    </span>
                </div>
            </div>
        </div>
    )
}
