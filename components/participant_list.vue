<script setup lang="ts">
import type { PropType } from 'vue';
import { type Participant } from '~/types/participant';

const props = defineProps({
  participants: {
    type: Array as PropType<Participant[]>,
    required: true,
  },
  createParticipant: {
    type: Function as PropType<() => void>,
    required: true,
  },
});

const onCreateParticipantClick = () => {
  if (props.createParticipant) {
    props.createParticipant();
  }
};
</script>

<template>
  <div class="participants-section">
    <h2>参加者一覧</h2>
    <div class="scroll-view">
      <ul>
        <li v-for="participant in participants" :key="participant.id">
          {{ participant.name }} [{{ participant.lotteryId }}]
        </li>
      </ul>
    </div>
    <button class="create-button" @click="onCreateParticipantClick">参加者作成</button>
  </div>
</template>

<style scoped>
.participants-section {
  background-color: #ffffff9f;
  color: #333;
  padding: 10px;
  border-radius: 5px;
}

.participants-section h2 {
  margin-bottom: 20px;
  color: #333;
}

.scroll-view {
  height: 200px;
  overflow-y: auto;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
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
  margin-top: 20px;
  padding: 5px;
  background-color: #e0e0e0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
