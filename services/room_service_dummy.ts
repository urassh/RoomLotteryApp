// src/services/RoomService.ts
import type { IRoomService } from '@/interfaces/IRoomService';
import type { Room } from '@/types/room';
import type { Participant } from '~/types/participant';

export class RoomServiceDummy implements IRoomService {
  async getRooms(): Promise<Room[]> {
    const sampleParticipants: Participant[] = [
      { id: 1, lotteryId: "001", name: 'Alice' },
      { id: 2, lotteryId: "002", name: 'Bob' },
      { id: 3, lotteryId: "003",name: 'Charlie' },
      { id: 4, lotteryId: "004",name: 'Diana' },
      { id: 5, lotteryId: "005",name: 'Eve' }
    ];

    const samplePrizes = [
      { id: 1, name: 'アマギフ2万円' },
      { id: 2, name: 'アマギフ5千円' },
      { id: 3, name: 'スタバ1000円' },
    ];

    const sampleWinners = [
      { id: 1, name: 'Alice', prize: samplePrizes[0] },
      { id: 2, name: 'Bob', prize: samplePrizes[2] }
    ];

    const rooms: Room[] = [
      { 
        id: 1, 
        name: 'Room1', 
        participants: [sampleParticipants[0], sampleParticipants[1]], 
        winner: [sampleWinners[0]], 
        prizes: [samplePrizes[0], samplePrizes[1]] 
      },
      { 
        id: 2, 
        name: 'Room2', 
        participants: [sampleParticipants[1], sampleParticipants[2]], 
        winner: [sampleWinners[1]], 
        prizes: [samplePrizes[2]] 
      },
      { 
        id: 3, 
        name: 'Room3', 
        participants: [sampleParticipants[2], sampleParticipants[3]], 
        winner: [], 
        prizes: [samplePrizes[0]] 
      },
      { 
        id: 4, 
        name: 'Room4', 
        participants: [sampleParticipants[3], sampleParticipants[4]], 
        winner: [], 
        prizes: [samplePrizes[1], samplePrizes[2]] 
      },
      { 
        id: 5, 
        name: 'Room5', 
        participants: [sampleParticipants[4]], 
        winner: [], 
        prizes: [samplePrizes[2]] 
      },
    ];

    return rooms;
  }
}
