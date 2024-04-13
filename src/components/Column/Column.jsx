import Card from "../Card/Card.jsx";
import {CardsStyled, ColumnTitle, ColumnTitleParagraph, MainColumn} from "./Column.styled.js";

const Column = ({columnTitle, cardList}) => (
    <MainColumn>
        <ColumnTitle>
            <ColumnTitleParagraph>{columnTitle}</ColumnTitleParagraph>
        </ColumnTitle>
        <CardsStyled>
            {
                cardList.map((card) => (
                    <Card theme={card.theme} title={card.title} date={card.date} key={card.id} />
                ))
            }
        </CardsStyled>
    </MainColumn>
);

export default Column;