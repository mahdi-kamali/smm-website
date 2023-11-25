import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import { useFetch } from '../../../../../../lib/useFetch';
import { API, SERVER } from '../../../../../../lib/envAccess';



ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);




// const data = {
//     labels: categories.map(item => { return item.title }),
//     datasets: [
//         {
//             label: 'Total Orders',
//             data: categories.map(item => { return item.totalOrders }),
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.5)',
//                 'rgba(54, 162, 235, 0.5)',
//                 'rgba(255, 206, 86, 0.5)',
//                 'rgba(75, 192, 192, 0.5)',
//                 'rgba(153, 102, 255, 0.5)',
//                 'rgba(255, 159, 64, 0.5)',
//             ],
//             borderWidth: 1,
//         },
//     ],
// };


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


    const [platformsData, error, loading] =
        useFetch(API.ADMIN_DASHBOARD.POPULAR_PLATFORMS.GET)


    if (loading === true) return <h1>Loading</h1>



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
                    platformsData?.platforms.map((item, index) => {
                        const platform = item?.platform
                        const totalOrders = item?.totalOrders
                        return <div
                            className="item"
                            key={index}>
                            <div className="item-left">
                                <img src={SERVER.BASE_URL + platform.image} alt="" />
                            </div>
                            <div className="item-right">
                                <div className="title">
                                    {platform.name}
                                </div>
                                <div className="orders">
                                    {totalOrders}
                                </div>
                            </div>
                        </div>
                    })
                }

            </div>
            <div className="chart">
                <PolarArea options={options} data={platformsData?.chartJs} />
            </div>
        </div>
    )
}
