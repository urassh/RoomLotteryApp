import type { Participant } from "./participant";
import type { Prize } from "./prize";
import type { Winner } from "./winner";

export interface Room {
    id: number;
    name: string;
    participants: Participant[];
    winner: Winner[];
    prizes: Prize[];
}
