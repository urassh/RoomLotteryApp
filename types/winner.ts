import type { Prize } from "./prize";

export interface Winner {
    id: number;
    lotteryId: string;
    name: string;
    prize: Prize;
}
