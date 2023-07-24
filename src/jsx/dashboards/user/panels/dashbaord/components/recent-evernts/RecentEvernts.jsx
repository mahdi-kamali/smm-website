
// React TimeLine Library
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import scheduledPostsSvg from "../../../../../../../images/panel/dashboad/scheduled-posts/background.svg"




// React Iconify
import { Icon } from "@iconify/react"
import InstagramPostEvent from './components/InstagramPostEvent';
import NormalEvent from './components/NormalEvernt';





const eventsItems = [
    {
        type: "instagram-post",
        post: {
            image: require("../../../../../../../images/panel/dashboad/instagram-posts/1.jpg")
        },
        title: "Post #254",
        message: "Thank you for choosing our SMM service! We appreciate your support.",
        date: "2023/5/13",
        time: "11:22",
        class: "success",
        svg: "el:ok"
    },
    {
        type: "instagram-post",
        post: {
            image: require("../../../../../../../images/panel/dashboad/instagram-posts/2.jpg")
        },
        title: "Service #5423 Activated !",
        message: "Thank you for choosing our SMM service! We appreciate your support.",
        date: "2023/5/13",
        time: "11:22",
        class: "success",
        svg: "el:ok"
    },
    {
        type: "normal",
        title: "Service #5423 Activated !",
        message: "Thank you for choosing our SMM service! We appreciate your support.",
        date: "2023/5/12",
        time: "16:32",
        class: "success",
        svg: "el:ok"
    },
    {
        type: "normal",
        title: "Service #5423 Ending Soon ! ",
        message: "Service ending. Grateful for your support. Questions? Reach out anytime. Thank you !",
        date: "2023/5/11",
        time: "11:32",
        class: "warning",
        svg: "mingcute:warning-fill"
    },
    {
        type: "normal",
        title: "Service #5423 On Proccess ! ",
        message: "                                Thank you for your patience. Our team is currently working on your service. We appreciate your understanding and look forward to delivering the best results.",
        date: "2023/5/10",
        time: "5:32",
        class: "process",
        svg: "ant-design:setting-filled"
    },
    {
        type: "normal",
        title: "Service #5423 De Activated !",
        message: "Service Ended. Thank you for your support. We appreciate your business.",
        date: "2023/5/9",
        time: "15:30",
        class: "danger",
        svg: "jam:triangle-danger-f"
    },

]


const RecentEvents = () => {
    return (
        <div className="recent-events">
            <div className="header">
                <div className="left">
                    <img src={scheduledPostsSvg} />
                </div>
                <div className="right">
                    <h1>
                        Scheduled Posts
                    </h1>
                    <span>
                        Account Information You Have Earned
                    </span>
                </div>
            </div>
            <div className="body">
                <VerticalTimeline>
                    {
                        eventsItems.map(item => {
                            switch (item.type) {
                                case "normal": return <NormalEvent data={item} />
                                case "instagram-post": return <InstagramPostEvent data={item} />
                            }
                        })
                    }
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default RecentEvents