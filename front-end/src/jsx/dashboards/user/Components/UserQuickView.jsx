import { Icon } from '@iconify/react'
import React from 'react'

const UserQuickView = () => {
    return (
        <div className="user-quick-view">
            <div className="item">
                <div className="left">
                    <Icon icon="eva:done-all-outline" />
                </div>
                <div className="right">
                    <div className="header">
                        Total Orders
                    </div>
                    <div className="body">
                        2906119
                    </div>
                </div>


            </div>
            <div className="item">
                <div className="left">
                <Icon icon="ph:bag-fill" />
                </div>
                <div className="right">
                    <div className="header">
                        Total Spend
                    </div>
                    <div className="body">
                        1200
                    </div>
                </div>


            </div>
            <div className="item">
                <div className="left">
                <Icon icon="heroicons-solid:cash" />
                </div>
                <div className="right">
                    <div className="header">
                        Account Balance
                    </div>
                    <div className="body">
                        $155.0
                    </div>
                </div>


            </div>
            <div className="item">
                <div className="left">
                <Icon icon="mdi:notifications-active" />
                </div>
                <div className="right">
                    <div className="header">
                       Active Orders
                    </div>
                    <div className="body">
                        3
                    </div>
                </div>


            </div>
        </div>
    )
}

export default UserQuickView