import { Icon } from "@iconify/react"
import { useDispatch } from "react-redux";
import { closePopUp } from "../../features/popUpReducer";
import { useState } from "react";
import Papa from "papaparse";


const SelectCategoryPopUp = ({ currentSelected, resultFunction }) => {


    const dispatcher = useDispatch()



    const categories = [
        {
            mainCategory: "instagram",
            symbol: "📸",
            services: [
                { symbol: "👁️", title: "Instagram Views Emergency Server", value: "ID1" },
                { symbol: "🧵", title: "Instagram Threads", value: "ID2" },
                { symbol: "❤️", title: "Instagram likes (Real) (Recommended For LIKES)", value: "ID3" },
                { symbol: "💲", title: "Instagram Cheap Likes", value: "ID4" },
                { symbol: "🎯", title: "Instagram Targeted Likes", value: "ID5" },
                { symbol: "🇮🇳", title: "Instagram Indian 🇮🇳", value: "ID6" },
                { symbol: "👀", title: "Instagram Views + Reels + IGTV", value: "ID7" },
            ],
        },
        {
            mainCategory: "youtube",
            symbol: "🎥",
            services: [
                { symbol: "👀", title: "YouTube Views (Guaranteed)", value: "ID100" },
                { symbol: "👀", title: "YouTube Views (Not Guaranteed)", value: "ID101" },
                { symbol: "🎵", title: "Youtube Shorts", value: "ID102" },
                { symbol: "🎬", title: "Youtube Views (Future Video)", value: "ID103" },
                { symbol: "🎯", title: "YouTube Views - (Targeted - Refill guaranteed)", value: "ID104" },
                { symbol: "💰", title: "YouTube Views - (Monetizable - Revenue)", value: "ID105" },
            ],
        },
        {
            mainCategory: "facebook",
            symbol: "📘",
            services: [
                { symbol: "🌿", title: "Facebook 100% Organic (Quality Services)", value: "ID150" },
                { symbol: "👍", title: "Facebook Post Likes", value: "ID151" },
                { symbol: "📖", title: "Facebook Story Views", value: "ID152" },
                { symbol: "😀", title: "Facebook Post Emoji", value: "ID153" },
                { symbol: "🇮🇳", title: "Facebook Indian Services", value: "ID154" },
                { symbol: "👍", title: "Facebook Page Likes (Classic Old Type)", value: "ID155" },
            ],
        },
        {
            mainCategory: "twitter",
            symbol: "🐦",
            services: [
                { symbol: "🔄", title: "Twitter Retweets 100% Organic (Quality Services)", value: "ID200" },
                { symbol: "👥", title: "Twitter Followers", value: "ID201" },
                { symbol: "🗳️", title: "Twitter Poll Votes", value: "ID202" },
                { symbol: "🤷", title: "Twitter: Others", value: "ID203" },
                { symbol: "🔍", title: "Twitter Mentions", value: "ID204" },
                { symbol: "🔄", title: "Twitter Retweets", value: "ID205" },
            ],
        },
        {
            mainCategory: "tiktok",
            symbol: "🎵",
            services: [
                { symbol: "👤", title: "Tiktok Followers", value: "ID250" },
                { symbol: "💬", title: "Tiktok Comments", value: "ID251" },
                { symbol: "👥", title: "Tiktok Followers 100% Organic (Quality Services)", value: "ID252" },
                { symbol: "🎯", title: "Tiktok Targeted Followers", value: "ID253" },
                { symbol: "👍", title: "Tiktok Likes", value: "ID254" },
                { symbol: "🎯", title: "Tiktok Targeted Likes", value: "ID255" },
            ],
        },
        {
            mainCategory: "telegram",
            symbol: "📢",
            services: [
                { symbol: "👤", title: "Telegram Members", value: "ID300" },
                { symbol: "👤", title: "Telegram Chanel/Group Members", value: "ID301" },
                { symbol: "🇷🇺", title: "🇷🇺 Telegram Chanel Members (Russian)", value: "ID302" },
                { symbol: "🇮🇷", title: "Telegram Members (IRAN)", value: "ID303" },
                { symbol: "🕌", title: "Telegram Chanel Members (Arab)", value: "ID304" },
                { symbol: "📝", title: "Telegram Post Services", value: "ID305" },
            ],
        },
        {
            mainCategory: "twitch",
            symbol: "🎮",
            services: [
                { symbol: "🎮", title: "Twitch Followers", value: "ID350" },
            ],
        },
        {
            mainCategory: "discord",
            symbol: "💬",
            services: [
                { symbol: "💬", title: "Discord", value: "ID400" },
            ],
        },
        {
            mainCategory: "vimeo",
            symbol: "📹",
            services: [
                { symbol: "👀", title: "Vimeo", value: "ID450" },
            ],
        },
        {
            mainCategory: "periscope",
            symbol: "🔦",
            services: [
                { symbol: "🔦", title: "Periscope", value: "ID500" },
            ],
        },
        {
            mainCategory: "website",
            symbol: "🌐",
            services: [
                { symbol: "🌐", title: "Website Traffic Worldwide", value: "ID550" },
                { symbol: "🇺🇸", title: "Website USA Traffic", value: "ID551" },
            ],
        },
        {
            mainCategory: "spotify",
            symbol: "🎵",
            services: [
                { symbol: "👂", title: "Spotify Monthly Listener", value: "ID600" },
                { symbol: "👤", title: "Spotify Followers(Targeted)", value: "ID601" },
                { symbol: "🎵", title: "Spotify Plays", value: "ID602" },
                { symbol: "👤", title: "Spotify Followers", value: "ID603" },
            ],
        },
        {
            mainCategory: "soundcloud",
            symbol: "🎵",
            services: [
                { symbol: "🎵", title: "SoundCloud", value: "ID650" },
            ],
        },
        {
            mainCategory: "linkedin",
            symbol: "📄",
            services: [
                { symbol: "📄", title: "Linkedin", value: "ID700" },
            ],
        },
        {
            mainCategory: "private1",
            symbol: "🔒",
            services: [
                { symbol: "🔒", title: "private1", value: "ID750" },
            ],
        },
    ];



    const [availableItems, setAvailableItems] = useState(categories)



    const handleCloseButtonClick = () => {
        dispatcher(closePopUp())
    }


    const handleItemClick = (item) => {
        dispatcher(closePopUp())
        resultFunction(item)
    }



    const handleInputChange = (e) => {
        const value = e.target.value.toLowerCase();
        const newListBySearch = []
        categories.forEach((mainCategory) => {
            const temp = { ...mainCategory };
            temp.services = []
            mainCategory.services.forEach(subCategory => {
                if (subCategory.title.toLowerCase().includes(value)) {
                    temp.services.push(subCategory)
                }
            })
            if (temp.services.length !== 0)
                newListBySearch.push(temp)

        })

        setAvailableItems(newListBySearch)

    }








    return (
        <div className="select-service-pop-up">
            <button className="close-button"
                onClick={handleCloseButtonClick}>
                <Icon icon="mingcute:close-fill" />
            </button>
            <div className="pop-up-header">
                <fieldset
                    onFocus={(e) => { e.target.parentElement.parentElement.classList.add("focused") }}
                    onBlur={(e) => { e.target.parentElement.parentElement.classList.remove("focused") }}
                >
                    <legend>
                        <Icon icon="ant-design:select-outlined" />
                        <span>Select Your Category</span>
                    </legend>
                    <div className="search-currency">
                        <input
                            type="text"
                            placeholder="Search Here..."
                            onChange={handleInputChange} />
                        <Icon icon="iconamoon:send-fill" className="search-icon" />
                    </div>
                </fieldset>

            </div>
            <div className="pop-up-body">
                <h1></h1>
                <ul>
                    {
                        availableItems.map((item, index) => {
                            return <div className="main-category" key={index}>
                                <h1 className="main-category-header">
                                    <Icon icon="mingcute:right-fill" />
                                    <span>{item.mainCategory}</span>
                                </h1>
                                <div className="sub-categories">
                                    {
                                        item.services.map((subCategory, index) => {
                                            return <li
                                                key={index}
                                                className={`sub-category ${currentSelected?.title === subCategory?.title ? "selected" : ""}`}
                                                onClick={() => handleItemClick(subCategory)}>
                                                <span>{subCategory.symbol}</span>
                                                <span>{subCategory.title}</span>
                                            </li>
                                        })
                                    }
                                </div>
                                {/* <span>{item.services}</span> */}
                            </div>
                        })
                    }

                </ul>
            </div>


        </div >
    )
}

export default SelectCategoryPopUp