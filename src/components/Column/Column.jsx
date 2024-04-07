import Card from "../Card/Card.jsx";

function Column({columnTitle, cardList}) {

    return(<div className="main__column">
                <div className="column__title">
                    <p>{columnTitle}</p>
                </div>
                <div className="cards">
                    {
                        cardList.map((card) => (
                            <Card theme={card.theme} title={card.title} date={card.date} key={card.id} />
                        ))
                    }
                </div>
            </div>);
}

export default Column;