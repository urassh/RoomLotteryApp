import type { Prize } from "@/types/prize";

export class PrizeContent implements ContentProvider {
    private prize: Prize;
  
    constructor(prize: Prize) {
      this.prize = prize;
    }
  
    getContent(): string {
      return this.prize.name;
    }
  
    getPrize(): Prize {
      return this.prize;
    }
}

export interface ContentProvider {
    getContent(): string;
}
