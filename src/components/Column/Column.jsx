import Card from "../Card/Card.jsx";

function Column({columnTitle, card}) {

    return(<div className="main__column">
                <div className="column__title">
                    <p>{columnTitle}</p>
                </div>
                <div className="cards">
                    <Card cardTheme={card.taskTheme} taskName={card.taskName} taskDate={card.taskDate}/>
                </div>
            </div>);
}

export default Column;