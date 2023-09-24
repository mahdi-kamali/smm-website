import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';



ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);


const categories = [
    {
        title: "instagram",
        totalOrders: 5000,
        svg: require("../../../../../../images/services-page/services/social-icons/instagram.png")
    },
    {
        title: "spotify",
        totalOrders: 3000,
        svg: require("../../../../../../images/services-page/services/social-icons/spotify.png")

    },
    {
        title: "twitter",
        totalOrders: 2000,
        svg: require("../../../../../../images/services-page/services/social-icons/twitter.png")

    },
    {
        title: "telegram",
        totalOrders: 4500,
        svg: require("../../../../../../images/services-page/services/social-icons/telegram.png")

    },
    {
        title: "whatsapp",
        totalOrders: 1500,
        svg: require("../../../../../../images/services-page/services/social-icons/whatsapp.png")

    },
    {
        title: "snapchat",
        totalOrders: 3500,
        svg: require("../../../../../../images/services-page/services/social-icons/snapchat.png")

    }
];



const data = {
    labels: categories.map(item => { return item.title }),
    datasets: [
        {
            label: 'Total Orders',
            data: categories.map(item => { return item.totalOrders }),
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
            ],
            borderWidth: 1,
        },
    ],
};


const options = {
    plugins: {
        title: {
            display: false,
        },
        legend: {
            display: false
        },
        labels: {
            arc: true,
            fontColor: '#000',
            position: 'outside',
            fontSize: 14
        }

    }
};






export default function PopularCharts() {
    return (
        <div className='popular-categories box'>
            <div className="info">
                <div className="left">
                    <h2>popular platforms</h2>
                    <small>
                        Informations About Most Favoriote Categories
                    </small>
                </div>
                <div className="right">
                    {/* <Select
                        options={dateSelectOptions}
                        placeholder={"Date"}
                        isSearchable={false}
                    /> */}


                </div>
            </div>
            <div className="categories">
                {
                    categories.map((item, index) => {
                        return <div
                            className="item"
                            key={index}>
                            <div className="item-left">
                                <img src={item.svg} alt="" />
                            </div>
                            <div className="item-right">
                                <div className="title">
                                    {item.title}
                                </div>
                                <div className="orders">
                                    {item.totalOrders}
                                </div>
                            </div>
                        </div>
                    })
                }

            </div>
            <div className="chart">
                <PolarArea options={options} data={data} />
            </div>
        </div>
    )
}
