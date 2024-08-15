<script setup lang="ts">
import type { Participant } from '~/types/participant';
import type { Prize } from '~/types/prize';
import type { Room } from '~/types/room';
import type { Winner } from '~/types/winner';

const sampleParticipants: Participant[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'Diana' },
  { id: 5, name: 'Eve' }
];

const samplePrizes: Prize[] = [
  { id: 1, name: 'アマギフ2万円' },
  { id: 2, name: 'アマギフ5千円' },
  { id: 3, name: 'スタバ1000円' },
];

const sampleWinners: Winner[] = [
  { id: 1, name: 'Alice', prize: samplePrizes[0] },
  { id: 2, name: 'Bob', prize: samplePrizes[2] }
];

const rooms = ref<Room[]>([
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
]);

</script>

<template>
    <section id="rooms">
        <h1>LotteryRooms</h1>

        <ul>
            <li>
                <CreateRoom></CreateRoom>
            </li>
            <li v-for="room in rooms" :key="room.id">
                <LotteryRoom :room="room"></LotteryRoom>
            </li>
        </ul>
    </section>
</template>

<style scoped>
#rooms {
    margin: 80px 1%;
    padding: 10px;
    background-color: #f0f0f0;
    border-radius: 5px;
    box-shadow: 0 0 5px #ccc;
}

h1 {
    font-size: 2.2em;
    margin-bottom: 10px;
    color: #333;
    border-bottom: 1px solid #ccc;
}

ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

li {
    width: 50%;
    padding: 1%;
}

@media (max-width: 900px) {
    li {
        width: 100%;
    }
}
</style>
