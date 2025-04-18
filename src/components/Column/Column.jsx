import Card from "../Card/Card.jsx";
import {
  CardsStyled,
  ColumnTitle,
  ColumnTitleParagraph,
  MainColumn,
} from "./Column.styled.js";

const Column = ({ columnTitle, cardList }) => (
  <MainColumn>
    <ColumnTitle>
      <ColumnTitleParagraph>{columnTitle}</ColumnTitleParagraph>
    </ColumnTitle>
    <CardsStyled>
      {cardList.map((card) => (
        <Card
          topic={card.topic}
          title={card.title}
          date={card.date}
          key={card._id}
          id={card._id}
        />
      ))}
    </CardsStyled>
  </MainColumn>
);

export default Column;
