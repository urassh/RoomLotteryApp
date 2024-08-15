import type { Prize } from "./prize";

export interface Winner {
    id: number;
    name: string;
    prize: Prize;
}
