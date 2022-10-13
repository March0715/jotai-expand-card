import { Card } from "./Card"
import { CardsWrapper } from "./styled";
import { cardAtoms } from "./models";
import { useAtom } from "jotai";

export const Cards = () => {
  const [cardsArray, setExpanded] = useAtom(cardAtoms);
  
  const getCardList = () => { 
    return cardsArray.imgAtoms.map((cardAtom, index) => {
      const onClick = () => setExpanded(index);
      return (
        <Card
          key={index}
          cardAtom={cardAtom}
          expanded={cardsArray.expanded === index}
          onClick={onClick}
        />
      )
    }
  )
};

  return (
    <CardsWrapper>
      {getCardList()}
    </CardsWrapper>
  )
}