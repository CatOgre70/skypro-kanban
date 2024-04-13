import {
    PopExitBlock,
    PopExitContainer, PopExitExitNo, PopExitExitYes,
    PopExitForm,
    PopExitFormGroup,
    PopExitStyled,
    PopExitTitleH2
} from './PopExit.styled.js';

const PopExit = () => (
    <PopExitStyled id="popExit">
        <PopExitContainer>
            <PopExitBlock>
                <PopExitTitleH2>Выйти из аккаунта?</PopExitTitleH2>
                <PopExitForm id="formExit" action="#">
                    <PopExitFormGroup>
                        <PopExitExitYes id="exitYes">
                            <a href="modal/signin.html">Да, выйти</a>
                        </PopExitExitYes>
                        <PopExitExitNo id="exitNo">
                            <a href="main.html">Нет, остаться</a>
                        </PopExitExitNo>
                    </PopExitFormGroup>
                </PopExitForm>
            </PopExitBlock>
        </PopExitContainer>
    </PopExitStyled>
);

export default PopExit;