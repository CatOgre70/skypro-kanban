import {
    PopExitBlock,
    PopExitContainer, PopExitExitNo, PopExitExitYes,
    PopExitForm,
    PopExitFormGroup,
    PopExitStyled,
    PopExitTitleH2
} from './PopExit.styled.js';
import {AppRoutes} from "../../../data.js";
import {Link, useNavigate} from "react-router-dom";
import {deleteUserFromLocalStorage} from "../../../localstorageops.js";

const PopExit = () => {

    let navigate = useNavigate();

    function onClickExit() {
        deleteUserFromLocalStorage();
        navigate(AppRoutes.LOGIN);
    }

    return (
        <PopExitStyled id="popExit">
            <PopExitContainer>
                <PopExitBlock>
                    <PopExitTitleH2>Выйти из аккаунта?</PopExitTitleH2>
                    <PopExitForm id="formExit" action="#">
                        <PopExitFormGroup>
                            <PopExitExitYes id="exitYes" onClick={onClickExit}>
                                <p>Да, выйти</p>
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

}

export default PopExit;