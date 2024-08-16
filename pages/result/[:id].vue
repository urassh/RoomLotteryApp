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
</script>

<template>
    <section class="result-view">
        <h1 class="title">{{ room.name }}</h1>

        <div class="prizes-section">
            <WinnerCard
                :winner="winner!"
            />
        </div>
    </section>

</template>

<style scoped>
</style>
