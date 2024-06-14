import { useState } from "react";
import { updateStockData } from "../api";
import Swal from "sweetalert2";


const UpdateStockData = ({ openModal, setOpenModal, data }) => {
    const [formData, setFormData] = useState({
        trade_code: data?.trade_code,
        high: data?.high,
        low: data?.low,
        open: data?.open,
        close: data?.close,
        volume: data?.volume
    });
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: id === 'low' || id === 'high' || id === 'open' || id === 'close' || id === 'volume' ? parseFloat(value) : value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await updateStockData(data?.id, formData);
        if (result?.id) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your stock data updated successfully!",
                showConfirmButton: false,
                timer: 1500
            });
            setOpenModal(false)
        }
    };
    return (

        <div className="mx-auto flex w-72 items-center justify-center">
            <div onClick={() => setOpenModal(false)} className={`fixed z-[100] flex items-center justify-center ${openModal ? 'opacity-1 visible' : 'invisible opacity-0'} inset-0 h-full w-full bg-black/20 backdrop-blur-sm duration-100`}>
                <div onClick={(e_) => e_.stopPropagation()} className={`absolute w-full rounded-lg bg-white dark:bg-gray-900 drop-shadow-2xl sm:w-[500px] ${openModal ? 'opacity-1 translate-y-0 duration-300' : '-translate-y-20 opacity-0 duration-150'}`}>
                    <form className="px-5 pb-5 pt-3 lg:pb-10 lg:pt-5 lg:px-10" onSubmit={handleSubmit}>
                        <h1 className="pb-8 text-4xl backdrop-blur-sm text-white">Update Stock</h1>
                        <div className="space-y-2 text-white">
                            <label htmlFor="date" className="block">
                                Date
                            </label>
                            <div className="relative">
                                <input id="date" type="date" className="block w-full rounded-lg p-3 pl-10 outline-none drop-shadow-lg bg-white text-black dark:bg-gray-700 dark:text-white" onChange={handleChange} defaultValue={data?.date} />
                            </div>
                            <label htmlFor="trade_code" className="block">
                                Trade_Code
                            </label>
                            <div className="relative text-white">
                                <input id="trade_code" type="text" placeholder="Enter Trade_Code" className="block w-full rounded-lg p-3 pl-10 outline-none drop-shadow-lg dark:bg-gray-700 dark:text-white" onChange={handleChange} defaultValue={data?.trade_code} />
                            </div>
                            <label htmlFor="high" className="block">
                                High
                            </label>
                            <div className="relative text-white">
                                <input id="high" type="text" placeholder="Enter High" className="block w-full rounded-lg p-3 pl-10 outline-none drop-shadow-lg dark:bg-gray-700 dark:text-white" onChange={handleChange} defaultValue={data?.high} />
                            </div>
                            <label htmlFor="low" className="block">
                                Low
                            </label>
                            <div className="relative text-white">
                                <input id="low" type="text" placeholder="Enter Low" className="block w-full rounded-lg p-3 pl-10 outline-none drop-shadow-lg dark:bg-gray-700 dark:text-white" onChange={handleChange}
                                    defaultValue={data?.low} />
                            </div>
                            <label htmlFor="open" className="block">
                                Open
                            </label>
                            <div className="relative text-white">
                                <input id="open" type="text" placeholder="Enter Open" className="block w-full rounded-lg p-3 pl-10 outline-none drop-shadow-lg dark:bg-gray-700 dark:text-white" onChange={handleChange} defaultValue={data?.open} />
                            </div>
                            <label htmlFor="close" className="block">
                                Close
                            </label>
                            <div className="relative text-white">
                                <input id="close" type="text" placeholder="Enter Close" className="block w-full rounded-lg p-3 pl-10 outline-none drop-shadow-lg dark:bg-gray-700 dark:text-white" onChange={handleChange} defaultValue={data?.close} />
                            </div>
                            <label htmlFor="volume" className="block">
                                Volume
                            </label>
                            <div className="relative text-white">
                                <input id="volume" type="number" placeholder="Enter Volume" className="block w-full rounded-lg p-3 pl-10 outline-none drop-shadow-lg dark:bg-gray-700 dark:text-white" onChange={handleChange} defaultValue={data?.volume} />
                            </div>
                        </div>
                        <div className="text-white flex justify-center items-center mt-5">
                            <button type="submit" className="relative border py-2.5 px-5 rounded-lg bg-white drop-shadow-lg hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-800">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateStockData;