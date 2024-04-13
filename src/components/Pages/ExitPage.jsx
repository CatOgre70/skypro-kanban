import PopExit from "../popups/PopExit/PopExit.jsx";
import HomePage from "./HomePage.jsx";

const ExitPage = ({onCardAdd, cards}) => {
    return (
      <>
          <HomePage onCardAdd={onCardAdd} cards={cards} />
          <PopExit />
      </>
    );
}

export default ExitPage;