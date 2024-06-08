import {
    ContainerSignIn,
    Modal,
    ModalBlock,
    ModalBtnEnter, ModalFormError, ModalFormGroup, ModalFormGroupLink,
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
    const [isError, setIsError] = useState(false);

    let navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsError(false);
        if(email.trim() !== "" && password.trim() !== "") {
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
            }).catch(() => {
                setIsError(true);
            });
        } else {
            setIsError(true);
        }
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
                                <ModalFormGroupLink to={AppRoutes.REGISTER}>Регистрируйтесь здесь</ModalFormGroupLink>
                            </ModalFormGroup>
                            { isError && (<ModalFormError>&#10006; Возникла ошибка: неправильный логин или пароль</ModalFormError>) }
                        </ModalFormLogin>
                    </ModalBlock>
                </Modal>
            </ContainerSignIn>
    )
}

export default Login;