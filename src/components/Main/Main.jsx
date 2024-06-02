import Column from "../Column/Column.jsx";
import {statusList} from "../../data.js";
import {useContext, useEffect, useState} from "react";
import {ContainerStyled, MainBlock, MainContent, MainStyled} from "./Main.styled.js";
import {getTaskList} from "../../api.js";
import ShowMessageWindow from "./UserMessageWindow.jsx";
import {UserContext} from "../../contexts/user.js";

function Main() {

    const {user} = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        setIsError(false);
        getTaskList(user?.token).then((result) => {
            setCards(result.tasks);
            setIsLoading(false);
            setErrorMessage("none");
        }).catch((error) => {
            setIsError(true);
            setErrorMessage(error.message);
        });
    }, [user?.token]);

    return (
        <MainStyled>
            <ContainerStyled>
                <MainBlock>
                    <MainContent>
                        {
                            isLoading ? (<ShowMessageWindow isError={isError} errorMessage={errorMessage}/>) :
                            (statusList.map((status) => (
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