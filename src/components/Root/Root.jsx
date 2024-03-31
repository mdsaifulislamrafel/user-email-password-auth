import { Outlet } from "react-router-dom";
import Header from "../Pages/Header";

const Root = () => {
    return (
        <div className="w-[90%] mx-auto">
            <Header />
            <Outlet></Outlet>
        </div>
    );
};

export default Root;