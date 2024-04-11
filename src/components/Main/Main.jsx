import Column from "../Column/Column.jsx";
import {statusList} from "../../data.js";
import {useEffect, useState} from "react";
import {ContainerStyled, DataIsLoading, MainBlock, MainContent, MainStyled} from "./Main.styled.js";


function Main({cards}) {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 2 секунды задержки

    }, []);


    return (
        <MainStyled>
            <ContainerStyled>
                <MainBlock>
                    <MainContent>
                        {
                            isLoading ? (<DataIsLoading>Данные загружаются</DataIsLoading>) :
                                ( statusList.map((status) => (
                                    <Column
                                        key={status}
                                        columnTitle={status}
                                        cardList={cards.filter((card) => card.status === status)}
                                    />
                                )))
                        }
                    </MainContent>
                </MainBlock>
            </ContainerStyled>
        </MainStyled>
    );
}

export default Main;