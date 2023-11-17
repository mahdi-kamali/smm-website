import { Icon } from '@iconify/react'
import React from 'react'
import QuickViewItem from './QuickViewItem'






const items = [
    {
        title: "Followers",
        value: 2679,
        svg: "mingcute:user-follow-2-fill"
    },
    {
        title: "Following",
        value: 3209,
        svg: "mingcute:user-follow-2-line"
    },
    {
        title: "Likes",
        value: 45987,
        svg: "fluent:thumb-like-20-filled"
    },
    {
        title: "Comments",
        value: 4560,
        svg: "majesticons:comments"
    },
]



const QuickView = () => {
    return (
        <div className="col qucik-view-column">
            {
                items.map(item => {
                    return <QuickViewItem data={item} />
                })
            }

        </div>
    )
}

export default QuickView