<script setup lang="ts">
import { useRoomsStore } from '@/composables/states';
import type { Room } from '@/types/room';
import type { IRoomService } from '~/interfaces/IRoomService';
import { RoomServiceDummy } from '@/services/room_service_dummy';

const roomsStore = useRoomsStore();
const roomService: IRoomService = new RoomServiceDummy();
const rooms = ref<Room[]>([]);

onMounted(async () => {
  rooms.value = await roomService.getRooms();
  roomsStore.setRooms(rooms.value);
});
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
    background-color: #f0f0f06a;
    border-radius: 5px;
    box-shadow: 0 0 5px #fff;
}

h1 {
    font-size: 2.2em;
    margin-bottom: 10px;
    color: white;
    text-shadow: 0 0 5px #09b412;
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
