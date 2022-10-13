import { atom} from "jotai";
import { imgs } from "./img";

export type CardAtomType = {
  imgSrc: string
}

const expandCardAtom = atom(
  {
    imgAtoms: imgs.map((img) => {
      const cardAtom = atom<CardAtomType>({
        imgSrc: img,
      });
      return atom((get) => get(cardAtom));
    }),
    expanded: Number.MAX_VALUE,
  }
);

export const cardAtoms = atom(
  (get) => get(expandCardAtom),
  (get, set, index: number) => {
    set(expandCardAtom, {
      ...get(expandCardAtom),
      expanded: index,
    })
  },
);
