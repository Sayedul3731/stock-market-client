
import Table from "./Table";
import { Link } from "react-router-dom";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale

} from "chart.js";
import { useEffect, useState } from "react";
import { getStocksData } from "../../api";
ChartJS.register(
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale
)
const Home = () => {
    const [stockData, setStockData] = useState([]);
    useEffect(() => {
        const fetchStockData = async () => {
            const stocksData = await getStocksData();
            setStockData(stocksData)
        }
        fetchStockData();
    }, [])
    const closeData = stockData?.map(item => item.close);
    const labels = stockData?.map(item => new Date(item?.date).toLocaleDateString());


    const datas = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: closeData,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };
    const options = {}

    return (
        <div className="max-w-7xl mx-auto">
            <div className="w-full flex justify-center items-center mt-10">
                <div className="w-[700px] h-[400px]">
                    <Line data={datas} options={options}></Line>
                </div>
            </div>
            <div className=" flex justify-end mr-16 mt-10">
                <Link to="/add-new-stock">
                    <button className="uppercase font-semibold bg-blue-600 text-white px-3 py-1 rounded-md">Add New Stock</button>
                </Link>
            </div>

            <Table></Table>
        </div>
    );
};

export default Home;