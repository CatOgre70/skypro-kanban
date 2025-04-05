import Header from "../Header/Header.jsx";
import {
  Container,
  PageButton,
  PageHeader,
  PageParagraph,
} from "./PageNotFound.styled.js";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../data.js";

const PageNotFound = () => {
  let navigate = useNavigate();

  const onClick = () => {
    navigate(AppRoutes.HOME);
  };

  return (
    <Container>
      <PageHeader>Уупс! Такая страница не найдена!</PageHeader>
      <PageParagraph>
        Что-то пошло не так или страница не найдена, в общем лучше начать с
        начала
      </PageParagraph>
      <PageButton onClick={onClick}>Начало</PageButton>
    </Container>
  );
};

export default PageNotFound;
