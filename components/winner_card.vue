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
            <p>{{ winner.lotteryId }}</p>
            <p>{{ winner.name }}</p>
        </div>
    </div>
</template>
