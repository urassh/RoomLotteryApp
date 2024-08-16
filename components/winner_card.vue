<script setup lang="ts">
import type { Winner } from '@/types/winner';

const props = defineProps<{
  winner: Winner;
}>();

</script>

<template>
    <div class="winner-card">
        <h2>抽選結果</h2>

        <div class="prize-component">
            <h3>{{ winner.prize.name }}</h3>
            <hr>
        </div>

        <div class="participant-component">
            <p class="lottery-id">[{{ winner.lotteryId }}]</p>
            <p class="name">{{ winner.name }}</p>
        </div>
    </div>
</template>

<style scoped>
.winner-card {
    font-family: 'Arial', sans-serif;
    width: 40%;
    margin: 0 auto;
    padding: 80px 40px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #FFCE83;
    text-align: center;
}

.winner-card h2 {
    font-size: 1.8rem;
    margin-bottom: 40px;
}

.winner-card h3 {
    font-size: 2.0rem;
    font-family: 'Arial', sans-serif;
    font-style: italic;
    font-weight: lighter;
}

.participant-component {
    margin-top: 40px;
}

.participant-component .name {
    font-size: 3.0rem;
    font-weight: bold;
}

.participant-component .lottery-id {
    font-size: 1.5rem;
    font-weight: bold;
}
</style>
