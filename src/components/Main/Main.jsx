import Column from "../Column/Column.jsx";
import {statusList} from "../../data.js";
import {useEffect, useState} from "react";


function Main({cards}) {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 2 секунды задержки

    }, []);


    return (<main className="main">
        <div className="container">
            <div className="main__block">
                <div className="main__content">
                    {
                        isLoading ? (<div>Данные загружаются</div>) :
                            ( statusList.map((status) => (
                                <Column
                                    key={status}
                                    columnTitle={status}
                                    cardList={cards.filter((card) => card.status === status)}
                                />
                            )))
                    }
                </div>

            </div>
        </div>
    </main>);
}

export default Main;