<script setup lang="ts">
import type { PropType } from 'vue';
import { type Room } from '~/types/room';

const props = defineProps({
  room: {
    type: Object as PropType<Room>,
    required: true,
  },
});

</script>

<template>
    <div class="room">
        <h1 class="room-title">{{ room.name }}</h1>

        <div class="container">
            <div class="infomation">
                <p>参加者 : {{ room.participants.length }}名</p>
                <p>当選者 : {{ room.winner.length }}名</p>
            </div>

            <NuxtLink :to="'/room/' + room.id" class="button">ルームを開く</NuxtLink>
        </div>
    </div>
</template>

<style scoped>
.room {
    margin: 2%;
    padding: 10px;
    height: 180px;
    background-color: #ffffff5a;
    color: #333;
    border-radius: 5px;
    border: 1px solid #09b4125e;
    box-shadow: 0 0 5px #09b412;
    transition: all 0.3s ease-in-out;
}

.room:hover {
    box-shadow: 0 0 10px #09b412;
    background-color: #ffffff8c;
    transition: all 0.3s ease-in-out;
}

.room-title {
    border-bottom: 1px solid #333;
    font-size: 1.8rem;
}

.container {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: space-between;
}

.button {
    background-color: #04aa6d;
    border: none;
    width: 70%;
    color: #fff;
    padding: 12px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 25px;
}

.infomation {
    display: flex;
    padding: 16px 0;
    justify-content: space-between;
}

.infomation p {
    width: 48%;
}
</style>
