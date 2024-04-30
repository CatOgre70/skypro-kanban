import {
    PopExitBlock,
    PopExitContainer, PopExitExitNo, PopExitExitYes,
    PopExitForm,
    PopExitFormGroup,
    PopExitStyled,
    PopExitTitleH2
} from './PopExit.styled.js';
import {AppRoutes} from "../../../data.js";
import {Link} from "react-router-dom";

const PopExit = () => (
    <PopExitStyled id="popExit">
        <PopExitContainer>
            <PopExitBlock>
                <PopExitTitleH2>Выйти из аккаунта?</PopExitTitleH2>
                <PopExitForm id="formExit" action="#">
                    <PopExitFormGroup>
                        <PopExitExitYes id="exitYes">
                            <Link to={AppRoutes.LOGIN}>Да, выйти</Link>
                        </PopExitExitYes>
                        <PopExitExitNo id="exitNo">
                            <Link to={AppRoutes.HOME}>Нет, остаться</Link>
                        </PopExitExitNo>
                    </PopExitFormGroup>
                </PopExitForm>
            </PopExitBlock>
        </PopExitContainer>
    </PopExitStyled>
);

export default PopExit;