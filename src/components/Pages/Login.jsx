import {
    ContainerSignIn,
    Modal,
    ModalBlock,
    ModalBtnEnter, ModalFormGroup,
    ModalFormLogin,
    ModalInput,
    ModalTitleH2
} from "./Login.styled.js";

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
                                <a href="signup.html">Регистрируйтесь здесь</a>
                            </ModalFormGroup>
                        </ModalFormLogin>
                    </ModalBlock>
                </Modal>
            </ContainerSignIn>
    )
}

export default Login;