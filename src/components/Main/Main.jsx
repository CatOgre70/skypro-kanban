import Column from "../Column/Column.jsx";
import {statusList} from "../../data.js";
import {useEffect, useState} from "react";
import {ContainerStyled, MainBlock, MainContent, MainStyled} from "./Main.styled.js";
import {getTaskList} from "../../api.js";


function Main() {

    // const [isLoading, setIsLoading] = useState(true);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        getTaskList().then((result) => {
            console.log(result.tasks);
            setCards(result.tasks);
        });
    }, []);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setIsLoading(false);
    //     }, 2000); // 2 секунды задержки
    //
    // }, []);


    return (
        <MainStyled>
            <ContainerStyled>
                <MainBlock>
                    <MainContent>
                        {
                            // isLoading ? (<DataIsLoading>Данные загружаются</DataIsLoading>) :
                                statusList.map((status) => (
                                    <Column
                                        key={status}
                                        columnTitle={status}
                                        cardList={cards.filter((card) => card.status === status)}
                                    />
                                ))
                        }
                    </MainContent>
                </MainBlock>
            </ContainerStyled>
        </MainStyled>
    );
}

export default Main;