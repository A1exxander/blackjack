import { useMemo, useState } from "react";
import { genRandomNum } from "../utils/NumberUtils";
import { MINIMUM_CARD_VALUE, MAXIMUM_CARD_VALUE, MAX_HAND_SIZE  } from "../constants";

interface UseHandProps {
    initialHand?: number[];
}

export interface UseHandResponse {
    hand: number[];
    handTotal: number;
    resetHand: () => void;
    drawCard: (cardValue: number) => void;
}

export default function useHand({ initialHand }: UseHandProps = {}): UseHandResponse {
    
    const generateHand = (): number[] => {
        const newHand: number[] =  [
            genRandomNum(MINIMUM_CARD_VALUE, MAXIMUM_CARD_VALUE),
            genRandomNum(MINIMUM_CARD_VALUE, MAXIMUM_CARD_VALUE)
        ];  
        return newHand;
    }

    const [hand, setHand] = useState<number[]>(() => // Cleaner than setting it as default, which is only better for simple logic 
        initialHand ?? generateHand()
    );

    const handTotal: number = useMemo(() => hand.reduce((a, b) => a + b, 0), [hand]);

    const drawCard = (cardValue: number): void => {
        if (cardValue >= MINIMUM_CARD_VALUE && cardValue <= MAXIMUM_CARD_VALUE && hand.length < MAX_HAND_SIZE) {
            setHand((prevHand) => [...prevHand, cardValue]);
        }
    };

    const resetHand = (): void => {
        setHand(generateHand());
    }

    return { hand, handTotal, resetHand, drawCard };
}