import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <h1>This is Home Sections</h1>
        {/* Outlate for static Page */}
            <Outlet></Outlet>
        </div>
    );
};

export default Home;