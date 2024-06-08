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
    PopNewCardContent,
    PopNewCardForm,
    PopNewCardStyled,
    PopNewCardTitle,
    PopNewCardWrap
} from "./PopNewCard.styled.js";
import {useNavigate} from "react-router-dom";

function PopNewCard() {

    const navigate = useNavigate();

    function onClick() {
        navigate(AppRoutes.HOME);
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
                                    <FormNewInput type="text" name="name" id="formTitle"
                                           placeholder="Введите название задачи..." autoFocus/>
                                </FormNewBlock>
                                <FormNewBlock>
                                    <FormNewSubTitle>Описание задачи</FormNewSubTitle>
                                    <FormNewArea name="text" id="textArea"
                                                 placeholder="Введите описание задачи..."></FormNewArea>
                                </FormNewBlock>
                            </PopNewCardForm>
                            <CalendarNew />
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
                        <FormNewCreate>Создать задачу</FormNewCreate>
                    </PopNewCardContent>
                </PopNewCardBlock>
            </PopNewCardContainer>
        </PopNewCardStyled>
    );

}

export default PopNewCard;