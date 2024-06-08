import {AppRoutes} from "../../../data.js";
import CalendarNew from "../../Calendar/CalendarNew.jsx";
import {
    FormNewArea,
    FormNewBlock,
    FormNewCreate,
    FormNewInput,
    FormNewSubTitle,
    PopNewCardBlock,
    PopNewCardCategories,
    PopNewCardCategoriesPSubTitle,
    PopNewCardCategoriesTheme,
    PopNewCardCategoriesThemes,
    PopNewCardClose,
    PopNewCardContainer,
    PopNewCardContent, PopNewCardError,
    PopNewCardForm,
    PopNewCardStyled,
    PopNewCardTitle,
    PopNewCardWrap
} from "./PopNewCard.styled.js";
import {useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {createTask} from "../../../api.js";
import {UserContext} from "../../../contexts/user.js";
import {CardsContext} from "../../../contexts/cards.js";

function PopNewCard() {

    const navigate = useNavigate();
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskCategory, setTaskCategory] = useState("Web Design");
    const [taskDate, setTaskDate] = useState(new Date());
    const {user} = useContext(UserContext);
    const {setCards} = useContext(CardsContext);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    function onClick() {
        navigate(AppRoutes.HOME);
    }

    const onClickSubmit = () => {

        const newTask = {
            title: taskName.trim(),
            topic: taskCategory,
            status: "Без статуса",
            description: taskDescription.trim(),
            date: taskDate,
        }

        if(newTask.title === "") {
            delete newTask.title;
        }
        if(newTask.description === "") {
            delete newTask.description;
        }
        if(newTask.date === null) {
            delete newTask.date;
        }

        setIsError(false);
        createTask(user.token, newTask).then((result) => {
            setCards(result.tasks);
            navigate(AppRoutes.HOME);
        }).catch((error) => {
            setIsError(true);
            setErrorMessage(error.message);
        });
    }

    return (
        <PopNewCardStyled>
            <PopNewCardContainer>
                <PopNewCardBlock>
                    <PopNewCardContent>
                        <PopNewCardTitle>Создание задачи</PopNewCardTitle>
                        <PopNewCardClose onClick={onClick}>&#10006;</PopNewCardClose>
                        <PopNewCardWrap>
                            <PopNewCardForm>
                                <FormNewBlock>
                                    <FormNewSubTitle>Название задачи</FormNewSubTitle>
                                    <FormNewInput
                                        value={taskName}
                                        onChange={(e) => setTaskName(e.target.value)}
                                        type="text"
                                        placeholder="Введите название задачи..."
                                        autoFocus
                                    />
                                </FormNewBlock>
                                <FormNewBlock>
                                    <FormNewSubTitle>Описание задачи</FormNewSubTitle>
                                    <FormNewArea
                                        value={taskDescription}
                                        onChange={(e) => setTaskDescription(e.target.value)}
                                        placeholder="Введите описание задачи...">
                                    </FormNewArea>
                                </FormNewBlock>
                            </PopNewCardForm>
                            <CalendarNew setSelectedDay={setTaskDate}/>
                        </PopNewCardWrap>
                        <PopNewCardCategories>
                            <PopNewCardCategoriesPSubTitle>Категория</PopNewCardCategoriesPSubTitle>
                            <PopNewCardCategoriesThemes>
                                <PopNewCardCategoriesTheme>
                                    <p>Web Design</p>
                                </PopNewCardCategoriesTheme>
                                <div className="categories__theme _green">
                                    <p className="_green">Research</p>
                                </div>
                                <div className="categories__theme _purple">
                                    <p className="_purple">Copywriting</p>
                                </div>
                            </PopNewCardCategoriesThemes>
                        </PopNewCardCategories>
                        <FormNewCreate onClick={onClickSubmit}>Создать задачу</FormNewCreate>
                    </PopNewCardContent>
                    { isError && (<PopNewCardError>&#10006; Возникла ошибка: {errorMessage}</PopNewCardError>) }
                </PopNewCardBlock>
            </PopNewCardContainer>
        </PopNewCardStyled>
    );

}

export default PopNewCard;