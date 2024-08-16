import { defineStore } from "pinia";
import { ref } from "vue";
import type { Participant } from "~/types/participant";
import type { Prize } from "~/types/prize";
import type { Room } from "~/types/room";
import type { Winner } from "~/types/winner";

// 個別のRoomストアを定義
export const useRoomStore = (roomId: number) => {
  return defineStore(`room-${roomId}`, () => {
    const room = ref<Room>({
      id: roomId,
      name: '',
      participants: [],
      winner: [],
      prizes: []
    });

    function getRoom() {
        return room.value;
    }

    function setRoom(newRoom: Room) {
        room.value = newRoom;
    }

    function addParticipant(participant: Participant) {
      room.value.participants.push(participant);
    }

    function addPrize(prize: Prize) {
      room.value.prizes.push(prize);
    }

    function addWinner(winner: Winner) {
      room.value.winner.push(winner);
    }

    function removeParticipant(participantId: number) {
        const index = room.value.participants.findIndex((participant) => participant.id === participantId);
        if (index === -1) return;
        room.value.participants.splice(index, 1);
    }

    function removeWinner(winnerId: number) {
        const index = room.value.winner.findIndex((winner) => winner.id === winnerId);
        if (index === -1) return;
        room.value.winner.splice(index, 1);
    }

    function removePrize(prizeId: number) {
        const index = room.value.prizes.findIndex((prize) => prize.id === prizeId);
        if (index === -1) return;
        room.value.prizes.splice(index, 1);
    }

    function updateParticipant(participant: Participant) {
        const index = room.value.participants.findIndex((p) => p.id === participant.id);
        if (index === -1) return;
        room.value.participants[index] = participant;
    }

    function updateWinner(winner: Winner) {
        const index = room.value.winner.findIndex((w) => w.id === winner.id);
        if (index === -1) return;
        room.value.winner[index] = winner;
    }

    function updatePrize(prize: Prize) {
        const index = room.value.prizes.findIndex((p) => p.id === prize.id);
        if (index === -1) return;
        room.value.prizes[index] = prize;
    }

    return {
        getRoom,
        setRoom,
        addParticipant,
        addPrize,
        addWinner,
        removeParticipant,
        removeWinner,
        removePrize,
        updateParticipant,
        updateWinner,
        updatePrize
    };
  })();
};

export const useRoomsStore = defineStore("rooms", () => {
    const rooms = ref<number[]>([]);

    function setRooms(newRooms: Room[]) {
        rooms.value = newRooms.map((room) => room.id);
        newRooms.forEach((room) => {
            const roomStore = useRoomStore(room.id);
            roomStore.setRoom(room);
        });
    }

    function addRoom(room: Room) {
        if (rooms.value.includes(room.id)) return;

        rooms.value.push(room.id);
        const roomStore = useRoomStore(room.id);
        roomStore.setRoom(room);

    }

    function removeRoom(roomId: number) {
        const index = rooms.value.indexOf(roomId);
        if (index === -1) return;
        
        rooms.value.splice(index, 1);
    }

    return { rooms, setRooms, addRoom, removeRoom };
});

export const useLotteryStore = defineStore("lottery", () => {
    const participant = ref<Participant | undefined>();
    const prize = ref<Prize | undefined>();
    const room = ref<Room | undefined>();

    function getWinner(): Winner | undefined {
        if (!participant.value || !prize.value || !room.value) return;
        return {
            id: participant.value.id,
            name: participant.value.name,
            prize: prize.value,
            lotteryId: participant.value.lotteryId
        }
    }

    function getLottery(): (Participant | Prize | Room)[] | undefined {
        if (!participant.value || !prize.value || !room.value) return;
        return [participant.value, prize.value, room.value];
    }

    function setLottery(newRoom: Room) {
        const randomParticipantId = Math.floor(Math.random() * newRoom.participants.length);
        const randomPrizeId = Math.floor(Math.random() * newRoom.prizes.length);

        participant.value = newRoom.participants[randomParticipantId];
        prize.value = newRoom.prizes[randomPrizeId];
        room.value = newRoom;
    }

    function resetLottery() {
        participant.value = undefined;
        prize.value = undefined;
        room.value = undefined;
    }

    return { participant, prize, room, getLottery, setLottery, resetLottery, getWinner };
});
