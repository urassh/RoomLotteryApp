<script setup lang="ts">
import type { Participant } from '~/types/participant';
import type { Prize } from '~/types/prize';
import type { Room } from '~/types/room';
import type { Winner } from '~/types/winner';

// const props = defineProps({
//   room: {
//     type: Object as PropType<Room>,
//     required: true,
//   },
// });

const route = useRoute();
const roomId: number = Number(route.params.id);
const roomStore = useRoomStore(roomId);
const room = roomStore.getRoom();

const createParticipant = () => {
    const participants = room.participants;
    const newId = participants.length ? participants[participants.length - 1].id + 1 : 1;
    participants.push({ id: newId, name: '新規参加者' });
};

const participants = ref<Participant[]>(room.participants);
const winner = ref<Winner[]>(room.winner);
const prizes = ref<Prize[]>(room.prizes);
</script>

<template>
  <section class="room-view">
    <!-- Main Content -->
    <div class="main-content">
      <!-- 参加者数・当選者数 -->
      <div class="info-section">
        <div>
          <p>参加数</p>
          <p class="number">{{ participants.length }}</p>
          <p>人</p>
        </div>
        <div>
          <p>当選</p>
          <p class="number">{{ winner.length }}</p>
          <p>人</p>
        </div>
      </div>

      <!-- 参加者一覧 -->
      <ParticipantList :participants="participants" :create-participant="createParticipant" />

      <!-- 当選者一覧 -->
      <div class="winners-section">
        <h2>当選者一覧</h2>
        <div class="winners-list">
          <ul>
            <li v-for="(winner, index) in winner" :key="index">
              {{ winner.name }} [{{ winner.id.toString().padStart(3, '0') }}] {{ winner.prize.name }}
            </li>
          </ul>
        </div>
      </div>

      <!-- 景品一覧 -->
      <div class="prizes-section">
        <h2>景品一覧</h2>
        <ul>
          <li v-for="prize in prizes" :key="prize.id">{{ prize.name }}</li>
        </ul>
        <button class="create-button">景品作成</button>
      </div>

      <!-- QRコード -->
      <div class="qr-code-section">
        <h2>QRCode</h2>
      </div>
    </div>

    <!-- 抽選ボタン -->
    <button class="draw-button">抽選を引く</button>
  </section>
</template>

<style scoped>
.room-view {
  font-family: 'Arial', sans-serif;
  width: 90%;
  margin: 0 auto;
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0;
  margin-bottom: 20px;
}

.header h1 {
  font-size: 2rem;
}

.menu-links a {
  margin-left: 20px;
  text-decoration: none;
  color: #333;
}

.main-content {
  display: flex;
  justify-content: space-around;
}

.info-section {
  display: flex;
  align-items: center;
  font-size: 2rem;
}

.number {
  font-size: 4rem;
  margin: 0 10px;
}

.participants-section,
.winners-section,
.prizes-section {
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 5px;
  width: 20%;
}

.scroll-view {
  height: 200px;
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 5px;
}

.scroll-view ul {
  list-style: none;
  padding: 0;
}

.scroll-view li {
  padding: 5px 0;
  font-size: 1rem;
}

.create-button {
  margin-top: 10px;
  padding: 5px;
  background-color: #e0e0e0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.qr-code-section {
  background-color: #f9f9f9;
  width: 15%;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
}

.draw-button {
  margin: 20px auto;
  display: block;
  padding: 10px 20px;
  font-size: 1.5rem;
  background-color: #e0e0e0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
