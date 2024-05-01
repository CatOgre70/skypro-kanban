import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import {Outlet} from "react-router-dom";


const HomePage = ({cards}) => {


    return(
    <>
        <Header />
        <Main cards={cards}/>
        <Outlet />
    </>
    );

}

export default HomePage;