import { useState } from "react";
import { createStockData } from "../api";
import Swal from "sweetalert2";


const AddNewStock = () => {
    const [formData, setFormData] = useState({
        trade_code: "",
        high: "",
        low: "",
        open: "",
        close: "",
        volume: ""
    });
    console.log(formData);
    const handleChange = (e) => {
        const { id, value } = e.target;
        console.log(id, value);
        setFormData(prevState => ({
            ...prevState,
            [id]: id === 'low' || id === 'high' || id === 'open' || id === 'close' || id === 'volume' ? parseFloat(value) : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        const stockData = await createStockData(formData);
        if (stockData?.trade_code) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your stock data added successfully!",
                showConfirmButton: false,
                timer: 1500
            });
        }
    };
    return (
        <div className='max-w-7xl mx-auto' >
            <div className=" bg-slate-500 mt-10 rounded-md">
                <form className="px-5 pb-5 pt-3 lg:pb-10 lg:pt-5 lg:px-10" onSubmit={handleSubmit}>
                    <h1 className="pb-8 text-4xl backdrop-blur-sm text-white">Add New Stock</h1>
                    <div className="space-y-2 text-white">
                        <label htmlFor="date" className="block">
                            Date
                        </label>
                        <div className="relative">
                            <input id="date" type="date" className="block w-full rounded-lg p-3 pl-10 outline-none drop-shadow-lg bg-white text-black dark:bg-gray-700 dark:text-white" onChange={handleChange} />
                        </div>
                        <label htmlFor="trade_code" className="block">
                            Trade_Code
                        </label>
                        <div className="relative text-white">
                            <input id="trade_code" type="text" placeholder="Enter Trade_Code" className="block w-full rounded-lg p-3 pl-10 outline-none drop-shadow-lg dark:bg-gray-700 dark:text-white" onChange={handleChange} />
                        </div>
                        <label htmlFor="high" className="block">
                            High
                        </label>
                        <div className="relative text-white">
                            <input id="high" type="text" placeholder="Enter High" className="block w-full rounded-lg p-3 pl-10 outline-none drop-shadow-lg dark:bg-gray-700 dark:text-white" onChange={handleChange} />
                        </div>
                        <label htmlFor="low" className="block">
                            Low
                        </label>
                        <div className="relative text-white">
                            <input id="low" type="text" placeholder="Enter Low" className="block w-full rounded-lg p-3 pl-10 outline-none drop-shadow-lg dark:bg-gray-700 dark:text-white" onChange={handleChange} />
                        </div>
                        <label htmlFor="open" className="block">
                            Open
                        </label>
                        <div className="relative text-white">
                            <input id="open" type="text" placeholder="Enter Open" className="block w-full rounded-lg p-3 pl-10 outline-none drop-shadow-lg dark:bg-gray-700 dark:text-white" onChange={handleChange} />
                        </div>
                        <label htmlFor="close" className="block">
                            Close
                        </label>
                        <div className="relative text-white">
                            <input id="close" type="text" placeholder="Enter Close" className="block w-full rounded-lg p-3 pl-10 outline-none drop-shadow-lg dark:bg-gray-700 dark:text-white" onChange={handleChange} />
                        </div>
                        <label htmlFor="volume" className="block">
                            Volume
                        </label>
                        <div className="relative text-white">
                            <input id="volume" type="number" placeholder="Enter Volume" className="block w-full rounded-lg p-3 pl-10 outline-none drop-shadow-lg dark:bg-gray-700 dark:text-white" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="text-white flex justify-end items-center mt-5">
                        <button type="submit" className="relative border py-2.5 px-5 rounded-lg bg-white drop-shadow-lg hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-800">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddNewStock;