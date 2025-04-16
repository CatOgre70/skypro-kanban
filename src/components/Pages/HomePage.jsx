import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Header />
      <Main />
      <Outlet />
    </>
  );
};

export default HomePage;
