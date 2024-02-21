import NSpell from 'nspell';
import aff from "dictionary-en-gb/index.aff";
import dic from "dictionary-en-gb/index.dic";

export function Dino() {
    const spell = NSpell(aff, dic);
    const isCorrect = spell.correct('colour');
    console.log(isCorrect);
}
