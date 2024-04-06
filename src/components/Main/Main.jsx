import Column from "../Column/Column.jsx";
import {statusList} from "../../data.js";

function Main({cards}) {
    return (<main className="main">
        <div className="container">
            <div className="main__block">
                <div className="main__content">
                    { statusList.map((status) => (
                            <Column
                                key={status}
                                columnTitle={status}
                                cardList={cards.filter((card) => card.status === status)}
                            />
                    ))}
                </div>

            </div>
        </div>
    </main>);
}

export default Main;