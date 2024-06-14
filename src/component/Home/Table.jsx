import { useEffect, useState } from "react";
import { getStocksData } from "../../api";


const Table = () => {
    const [stockData, setStockData] = useState([]);

    useEffect(() => {
        const fetchStockData = async () => {
            const stocksData = await getStocksData();
            console.log(stocksData);
            setStockData(stocksData)
        }
        fetchStockData();
    }, [])
    console.log(stockData);
    return (

        <div className="overflow-x-auto ">
            <table className="min-w-[90%] shadow-md  border mx-auto border-gray-100  my-6">
                <thead>
                    <tr className="bg-[#333333] text-white">
                        <th className="py-3 px-6 text-left border-b">date</th>
                        <th className="py-3 px-6 text-left border-b">trade_code</th>
                        <th className="py-3 px-6 text-left border-b">high</th>
                        <th className="py-3 px-6  border-b text-end">low</th>
                        <th className="py-3 px-6  border-b text-end">open</th>
                        <th className="py-3 px-6  border-b text-end">close</th>
                        <th className="py-3 px-6  border-b text-end">volume</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        stockData?.map((data, i) => <tr key={i} className="hover:bg-gray-50 transition duration-300">
                            <td className="py-4 px-6 border-b">{data?.date} </td>
                            <td className="py-4 px-6 border-b">{data?.trade_code}</td>
                            <td className="py-4 px-6 border-b">{data?.high}</td>
                            <td className="py-4 px-6 border-b text-end">{data?.low}</td>
                            <td className="py-4 px-6 border-b text-end">{data?.open}</td>
                            <td className="py-4 px-6 border-b text-end">{data?.close}</td>
                            <td className="py-4 px-6 border-b text-end">{data?.volume}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>

    );
};

export default Table;