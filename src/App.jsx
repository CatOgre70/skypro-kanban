import './App.css'
import PopNewCard from "./components/PopNewCard/PopNewCard.jsx";
import PopExit from "./components/popups/PopExit/PopExit.jsx";
import PopBrowse from "./components/PopBrowse/PopBrowse.jsx";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";

function App() {

  return (
      <>
          <div className="wrapper">

              <PopExit />
              <PopNewCard />
              <PopBrowse />
              <Header />
              <Main />

          </div>

          <script src="js/script.js"></script>
      </>
  )
}

export default App
