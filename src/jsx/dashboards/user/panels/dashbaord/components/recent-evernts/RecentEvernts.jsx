
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
            image: require("../../../../../../../images/panel/dashboad/instagram-posts/1.jpg"),
            title: "Starlight City",
            description: `🏙️ Exploring the vibrant streets of "Starlight City" ✨🌆 There's an undeniable magic in the air as I wander through its enchanting alleys and towering skyscrapers. 🚶‍♂️🌃 From the bustling markets filled with colors and aromas to the serene parks where time seems to slow down, this city has something for everyone. 😍❤️ Can't get enough of the breathtaking skyline that lights up the night sky like a thousand stars! 🌟🌌 Every corner holds a story waiting to be discovered, and I can't wait to uncover more hidden gems in this urban wonderland. 🗺️🔍 If you ever find yourself in "Starlight City," make sure to capture every moment, as memories here are simply unforgettable. 📸💫 #StarlightCity #UrbanAdventures #CityWanderer #ExploringTheUnknown`,
            likes: 200,
            comments: 300,
            shares: 200 , 

        },
        title: "Post #254",
        message: "Service #5423 Activated Fo This Post...",
        date: "2023/5/13",
        time: "11:22",
        class: "success",
        svg: "formkit:instagram"
    },
    {
        type: "instagram-post",
        post: {
            image: require("../../../../../../../images/panel/dashboad/instagram-posts/2.jpg"),
            title: "",
            description: `🏙️🏆🎉 Victory is ours! 🎉🏆 Words can't express the exhilaration and joy of achieving this momentous triumph. 🙌💥 Through sheer determination and unwavering teamwork, we conquered every challenge that came our way. 🤝🔥 The road to success was filled with ups and downs, but we never lost sight of our goal. 💪🎯 This victory is a testament to the power of perseverance and the strength of our unity. 🌟💫 We are incredibly proud of each and every individual who contributed to this remarkable achievement. 🙏❤️ As we savor this sweet taste of success, let it be a reminder that with passion and dedication, we can conquer any obstacle that stands in our path. 🚀🔝 Here's to many more victories ahead! 🥂🏅 #VictoryCelebration #Triumph #TeamworkPrevails #ChampionMentality #UnstoppableForce`,
            likes: 300,
            comments: 15,
            shares: 588
        },
        title: "Service #5423 Activated !",
        message: "Thank you for choosing our SMM service! We appreciate your support.",
        date: "2023/5/13",
        time: "11:22",
        class: "success",
        svg: "formkit:instagram"
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