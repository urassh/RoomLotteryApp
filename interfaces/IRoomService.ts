import type { Room } from '@/types/room';

export interface IRoomService {
  getRooms(): Promise<Room[]>;
}
