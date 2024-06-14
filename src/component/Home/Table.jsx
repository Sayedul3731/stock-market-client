import { useEffect, useState } from "react";
import { deleteStockData, getStocksData } from "../../api";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import UpdateStockData from "../UpdateStockData";

const Table = () => {
    const [stockData, setStockData] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [data, setData] = useState({})

    useEffect(() => {
        const fetchStockData = async () => {
            const stocksData = await getStocksData();
            console.log(stocksData);
            setStockData(stocksData)
        }
        fetchStockData();
    }, [])
    const handleDelete = async (id) => {
        const result = await deleteStockData(id);
        if (result?.id) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your stock data deleted successfully!",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
    const handleUpdate = (data) => {
        setData(data)
        setOpenModal(true)
    }

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
                        <th className="py-3 px-6  border-b text-end">Edit</th>
                        <th className="py-3 px-6  border-b text-end">Action</th>
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
                            <td className="py-4 px-6 border-b pl-8"><span onClick={() => handleUpdate(data)} className="text-2xl text-green-600 cursor-pointer"><CiEdit /></span></td>
                            <td className="py-4 px-6 border-b pl-14"><span onClick={() => handleDelete(data?.id)} className="text-2xl text-red-600 cursor-pointer"><MdDelete /></span></td>
                        </tr>)
                    }
                </tbody>
            </table>
            <UpdateStockData openModal={openModal} setOpenModal={setOpenModal} data={data}></UpdateStockData>
        </div>

    );
};

export default Table;