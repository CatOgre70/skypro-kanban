import {
    ContainerSignIn,
    Modal,
    ModalBlock,
    ModalBtnEnter, ModalFormGroup,
    ModalFormLogin,
    ModalInput,
    ModalTitleH2
} from "./Login.styled.js";
import Registration from "./Registration.jsx";
import {Link} from "react-router-dom";
import {AppRoutes} from "../../data.js";

function Login() {
    return(
            <ContainerSignIn>
                <Modal>
                    <ModalBlock>
                        <ModalTitleH2>Вход</ModalTitleH2>
                        <ModalFormLogin id="formLogIn" action="#">
                            <ModalInput type="text" name="login" id="formlogin" placeholder="Эл. почта"/>
                            <ModalInput type="password" name="password" id="formpassword" placeholder="Пароль"/>
                            <ModalBtnEnter id="btnEnter"><a href="../main.html">Войти</a></ModalBtnEnter>
                            <ModalFormGroup>
                                <p>Нужно зарегистрироваться?</p>
                                <Link to={AppRoutes.REGISTER}>Регистрируйтесь здесь</Link>
                            </ModalFormGroup>
                        </ModalFormLogin>
                    </ModalBlock>
                </Modal>
            </ContainerSignIn>
    )
}

export default Login;