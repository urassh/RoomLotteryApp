<script setup lang="ts">
import { useLotteryStore } from '~/composables/states';

const route = useRoute();
const router = useRouter();
const roomId: number = Number(route.params.id);

const roomStore = useRoomStore(roomId);
const lotteryStore = useLotteryStore();

const room = roomStore.getRoom();
const winner = lotteryStore.getWinner();

if (winner === undefined) {
    console.error('Winner is not found');
    router.push({ name: 'previous-screen' });
}

const confirm = () => {
    if (winner === undefined) {
        console.error('Winner is not found');
        return;
    }
    roomStore.addWinner(winner);
    router.push({ name: 'room-id', params: { id: roomId.toString() } });
};

const reDraw = () => {
    lotteryStore.setLottery(room);
    router.push({ name: 'prizeSelect-id', params: { id: roomId.toString() } });
};
</script>

<template>
    <section class="result-view">
        <h1 class="title">{{ room.name }}</h1>

        <div class="prizes-section">
            <WinnerCard
                :winner="winner!"
            />
        </div>

        <div class="button-section">
            <button @click="confirm" class="confirm">決定</button>
            <button @click="reDraw" class="redraw">再抽選</button>
        </div>
    </section>

</template>

<style scoped>
.result-view {
    font-family: 'Arial', sans-serif;
    width: 90%;
    margin: 0 auto;
    padding: 20px;
}

.title {
    font-size: 2.5rem;
    margin-bottom: 40px;
}

.button-section {
    display: flex;
    flex-direction: column;
    align-items: center;
}

button {
    border: none;
    width: 30%;
    color: white;
    padding: 12px 32px;
    text-align: center;
    text-decoration: none;
    display: block;
    border-radius: 25px;
    margin: 20px;
}

.confirm {
    background-color: #04aa6d;
}

.redraw {
    background-color: #ff9d9d;
    transition:all 0.3s ease;
}

.redraw:hover {
    background-color: #ff6a6a;
    transition:all 0.3s ease;
}
</style>
