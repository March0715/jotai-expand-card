import { Atom, useAtom } from "jotai";
import { CardAtomType } from "./models";
import { CardWrapper, StyledImg } from "./styled";

type CardProps = {
  cardAtom: Atom<CardAtomType>;
  expanded: boolean,
  onClick?: () => void;
}

export const Card = (props: CardProps) => {
  const { cardAtom, expanded, onClick } = props;
  const [cardData] = useAtom(cardAtom);
  return (
    <CardWrapper expanded={expanded} onClick={onClick}>
      <StyledImg src={cardData.imgSrc} alt={cardData.imgSrc} expanded = {expanded} />
    </CardWrapper>
  )
}