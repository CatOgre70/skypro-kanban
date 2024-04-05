import Column from "../Column/Column.jsx";
import {cardList, statusList} from "../../data.js";

function Main() {
    return (<main className="main">
        <div className="container">
            <div className="main__block">
                <div className="main__content">
                    { statusList.map((status) => (
                            <Column
                                key={status}
                                columnTitle={status}
                                cardList={cardList.filter((card) => card.status === status)}
                            />
                    ))}
                </div>

            </div>
        </div>
    </main>);
}

export default Main;