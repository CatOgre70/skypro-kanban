import {AppRoutes} from "../../../data.js";
import CalendarNew from "../../Calendar/CalendarNew.jsx";
import {
    FormNewArea,
    FormNewBlock, FormNewInput, FormNewSubTitle,
    PopNewCardBlock, PopNewCardClose,
    PopNewCardContainer,
    PopNewCardContent, PopNewCardForm, PopNewCardStyled,
    PopNewCardTitle, PopNewCardWrap
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
                        <div className="pop-new-card__categories categories">
                            <p className="categories__p subttl">Категория</p>
                            <div className="categories__themes">
                                <div className="categories__theme _orange _active-category">
                                    <p className="_orange">Web Design</p>
                                </div>
                                <div className="categories__theme _green">
                                    <p className="_green">Research</p>
                                </div>
                                <div className="categories__theme _purple">
                                    <p className="_purple">Copywriting</p>
                                </div>
                            </div>
                        </div>
                        <button className="form-new__create _hover01" id="btnCreate">Создать задачу</button>
                    </PopNewCardContent>
                </PopNewCardBlock>
            </PopNewCardContainer>
        </PopNewCardStyled>
    );

}

export default PopNewCard;