<script setup lang="ts">
import type { Participant } from '~/types/participant';
import type { Prize } from '~/types/prize';
import type { Winner } from '~/types/winner';

const route = useRoute();
const roomId: number = Number(route.params.id);
const roomStore = useRoomStore(roomId);
const room = roomStore.getRoom();

const createParticipant = () => {
    const participants = room.participants;
    const newId = participants.length ? participants[participants.length - 1].id + 1 : 1;
    const newParticipant: Participant = { id: 214, lotteryId: `${newId}`, name: '新規参加者' }
    roomStore.addParticipant(newParticipant);
};

const participants = ref<Participant[]>(room.participants);
const winner = ref<Winner[]>(room.winner);
const prizes = ref<Prize[]>(room.prizes);
</script>

<template>
  <section class="room-view">
    <div class="head-section">
      <div class="title-container">
        <h1>{{ room.name }}</h1>
        <div class="number-container">
          <div class="number-wrap">
            <p>参加数</p>
            <p class="number">{{ participants.length }}</p>
            <p>人</p>
          </div>
          <div class="number-wrap">
            <p>当選</p>
            <p class="number">{{ winner.length }}</p>
            <p>人</p>
          </div>
        </div>
      </div>

      <div class="qr-code-section">
        <h2>QRCode</h2>
      </div>
    </div>

    <div class="main-container">
      <ParticipantList :participants="participants" :create-participant="createParticipant" />

      <div class="winners-section">
        <h2>当選者一覧</h2>
        <div class="winners-list">
          <ul>
            <li v-for="(winner, index) in winner" :key="index">
              {{ winner.name }} [{{ winner.lotteryId }}] - {{ winner.prize.name }}
            </li>
          </ul>
        </div>
      </div>

      <div class="prizes-section">
        <h2>景品一覧</h2>
        <div class="prizes-list">
          <ul>
            <li v-for="prize in prizes" :key="prize.id">{{ prize.name }}</li>
          </ul>
        </div>
        <button class="create-button">景品作成</button>
      </div>
    </div>

    <div class="lottery-button">
      <NuxtLink :to="'/prizeSelect/' + room.id" class="draw-button">抽選を引く</NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.room-view {
  font-family: 'Arial', sans-serif;
  width: 90%;
  margin: 0 auto;
  padding: 20px;
}

.head-section {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 60px;
}

.winners-section h2 {
  margin-bottom: 20px;
}

.title-container {
  width: 100%;
}

.title-container h1 {
  font-size: 3rem;
  text-shadow: 1px 1px 1px green;
}

.number-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 20px;
}

.number-wrap {
  width: 40%;
  display: flex;
  gap: 7px;
  align-items: flex-end;
}

.qr-code-section {
  background-color: #ffffff9f;
  width: 25%;
  aspect-ratio: 1;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
}

.main-container {
  display: flex;
  justify-content: space-between;
}

.number {
  font-size: 4rem;
  margin: 0 10px;
}

.participants-section,
.winners-section,
.prizes-section {
  background-color: #ffffff9f;
  color: #333;
  padding: 10px;
  border-radius: 5px;
  width: 30%;
}

.winners-list {
  height: 200px;
  overflow-y: auto;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 5px;
}

.create-button {
  margin-top: 10px;
  padding: 5px;
  background-color: #e0e0e0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.lottery-button {
  text-align: center;
  margin: 80px auto;
}

.draw-button {
  padding: 10px 20px;
  font-size: 1.5rem;
  text-decoration: none;
  background-color: #ff6e6e;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.prizes-section h2{
  margin-bottom: 20px;
}

.prizes-list {
  height: 200px;
  overflow-y: auto;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 5px;
}
</style>
