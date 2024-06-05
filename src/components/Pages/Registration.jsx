import {
    ContainerSignUp,
    ModalBlock,
    ModalStyled,
    ModalFormLogin,
    ModalTitleH2,
    ModalInput, ModalBtnSignupEnter, ModalFormGroup,
    ModalFormError
} from "./Registration.styled.js";
import {AppRoutes} from "../../data.js";
import {Link, useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {createUser} from "../../authapi.js";
import {UserContext} from "../../contexts/user.js";

function Registration() {
    const { setUser} = useContext(UserContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);

    let navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsError(false);
        const newUser = {
            login: email,
            name: name,
            password: password
        };
        createUser(newUser).then((response) => {
            const createdUser = response.user;
            setUser(createdUser);
            navigate(AppRoutes.HOME);
        }).catch(() => {
            setIsError(true);
        });

    }

    return(
        <ContainerSignUp>
            <ModalStyled>
                <ModalBlock>
                    <ModalTitleH2>Регистрация</ModalTitleH2>
                    <ModalFormLogin onSubmit={handleSubmit}>
                        <ModalInput
                            type="text"
                            value={name}
                            placeholder="Имя"
                            onChange={(e) => setName(e.target.value)}
                        />
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
                        <ModalBtnSignupEnter type="submit">Зарегистрироваться</ModalBtnSignupEnter>
                        <ModalFormGroup>
                            <p>Уже есть аккаунт?  <Link to={AppRoutes.LOGIN}>Войдите здесь</Link></p>
                        </ModalFormGroup>
                        { isError && (<ModalFormError>&#10006; Возникла ошибка: пользователь с таким логином уже существует</ModalFormError>) }
                    </ModalFormLogin>
                </ModalBlock>
            </ModalStyled>
        </ContainerSignUp>
    );
}

export default Registration;