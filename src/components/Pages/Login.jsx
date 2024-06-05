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
import {useContext, useState} from "react";
import {userLogin} from "../../authapi.js";
import {UserContext} from "../../contexts/user.js";

function Login() {
    const {setUser} = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const userCredentials = {
            login: email,
            password: password
        };
        userLogin(userCredentials).then((response) => {
            const loggedInUser = {
                id: response.user._id,
                login: response.user.login,
                password: response.user.password,
                name: response.user.name,
                token: response.user.token,
            };
            console.log(loggedInUser);
            setUser(loggedInUser);
            navigate(AppRoutes.HOME);
        }).catch();
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