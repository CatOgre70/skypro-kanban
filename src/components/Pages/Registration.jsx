import {
  ContainerSignUp,
  ModalBlock,
  ModalStyled,
  ModalFormLogin,
  ModalTitleH2,
  ModalInput,
  ModalBtnSignupEnter,
  ModalFormGroup,
  ModalFormError,
  ModalFormGroupLink,
} from "./Registration.styled.js";
import { AppRoutes } from "../../data.js";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { createUser } from "../../authapi.js";
import { UserContext } from "../../contexts/user.js";

function Registration() {
  const { setUser } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsError(false);
    setErrorMessage("");
    if (name.trim() !== "" && email.trim() !== "" && password.trim() !== "") {
      const newUser = {
        login: email,
        name: name,
        password: password,
      };
      createUser(newUser)
        .then((response) => {
          const createdUser = response.user;
          setUser(createdUser);
          navigate(AppRoutes.HOME);
        })
        .catch(() => {
          setIsError(true);
          setErrorMessage("пользователь с таким логином уже существует");
        });
    } else {
      setIsError(true);
      setErrorMessage(
        "имя пользователя, электронная почта и пароль не могут быть пустыми",
      );
    }
  };

  return (
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
            <ModalBtnSignupEnter type="submit">
              Зарегистрироваться
            </ModalBtnSignupEnter>
            <ModalFormGroup>
              <p>Уже есть аккаунт?</p>
              <ModalFormGroupLink to={AppRoutes.LOGIN}>
                Войдите здесь
              </ModalFormGroupLink>
            </ModalFormGroup>
            {isError && (
              <ModalFormError>
                &#10006; Возникла ошибка: {errorMessage}
              </ModalFormError>
            )}
          </ModalFormLogin>
        </ModalBlock>
      </ModalStyled>
    </ContainerSignUp>
  );
}

export default Registration;
