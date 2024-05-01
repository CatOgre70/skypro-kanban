import {
    ContainerSignUp,
    ModalBlock,
    ModalStyled,
    ModalFormLogin,
    ModalTitleH2,
    ModalInput, ModalBtnSignupEnter, ModalFormGroup
} from "./Registration.styled.js";
import {AppRoutes} from "../../data.js";
import {Link} from "react-router-dom";

function Registration() {
    return(
        <ContainerSignUp>
            <ModalStyled>
                <ModalBlock>
                    <ModalTitleH2>Регистрация</ModalTitleH2>
                    <ModalFormLogin id="formLogUp" action="#">
                        <ModalInput type="text" name="first-name" id="first-name" placeholder="Имя"/>
                        <ModalInput type="text" name="login" id="loginReg" placeholder="Эл. почта"/>
                        <ModalInput type="password" name="password" id="passwordFirst" placeholder="Пароль"/>
                        <ModalBtnSignupEnter id="SignUpEnter"><a href="../main.html">Зарегистрироваться</a> </ModalBtnSignupEnter>
                        <ModalFormGroup>
                            <p>Уже есть аккаунт?  <Link to={AppRoutes.LOGIN}>Войдите здесь</Link></p>
                        </ModalFormGroup>
                    </ModalFormLogin>
                </ModalBlock>
            </ModalStyled>
        </ContainerSignUp>
    );
}

export default Registration;