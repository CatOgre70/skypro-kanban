import {
    ContainerSignIn,
    Modal,
    ModalBlock,
    ModalBtnEnter, ModalFormGroup,
    ModalFormLogin,
    ModalInput,
    ModalTitleH2
} from "./Login.styled.js";
import {Link, useNavigate} from "react-router-dom";
import {AppRoutes} from "../../data.js";
import {useState} from "react";
import {userLogin} from "../../authapi.js";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            login: email,
            password: password
        };
        userLogin(user).then((response) => {
            const loggedInUser = response.user;
            console.log(loggedInUser);
        }).catch();
        navigate(AppRoutes.HOME);
    };

    return(
            <ContainerSignIn>
                <Modal>
                    <ModalBlock>
                        <ModalTitleH2>Вход</ModalTitleH2>
                        <ModalFormLogin onSubmit={handleSubmit}>
                            <ModalInput
                                type="email"
                                value={email}
                                placeholder="Эл. почта"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <ModalInput
                                type="password"
                                value={password}
                                placeholder="Пароль"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <ModalBtnEnter type="submit">Войти</ModalBtnEnter>
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