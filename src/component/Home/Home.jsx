
import Table from "./Table";
import { Link } from "react-router-dom";

const Home = () => {


    return (
        <div className="max-w-7xl mx-auto">
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