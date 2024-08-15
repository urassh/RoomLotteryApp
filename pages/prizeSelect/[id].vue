<script setup lang="ts">
import { PrizeContent, type ContentProvider } from './prize_content';

const route = useRoute();
const roomId: number = Number(route.params.id);
const roomStore = useRoomStore(roomId);
const room = roomStore.getRoom();
const initialPrizes: PrizeContent[] = room.prizes.map((prize) => new PrizeContent(prize));

const prizes = ref<PrizeContent[]>(initialPrizes);
const selectedItem = ref<PrizeContent>(initialPrizes[0]);

const handleItemChange = <T extends ContentProvider>(item: T) => {
  if (item instanceof PrizeContent) {
    selectedItem.value = item;
  }
};

</script>

<template>
  <section class="lottery-room">
    <h1 class="title">LotteryRoom1</h1>
    <div class="select-container">
        <h2>次当たる商品は...</h2>
        <h3>{{ selectedItem.getPrize().name }}</h3>
        <hr />
    </div>

    <ButtonPicker
        :items="prizes"
        :modelValue="selectedItem"
        @onChangeItem="handleItemChange"
    />

    <div class="register-container">
        <button class="draw-button">抽選</button>
    </div>
  </section>
</template>

<style scoped>
.lottery-room {
    font-family: 'Arial', sans-serif;
    width: 90%;
    margin: 0 auto;
    padding: 20px;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 40px;
}

h3 {
    font-size: 3rem;
    font-family: 'Arial', sans-serif;
    font-style: italic;
    font-weight: lighter;
}

.select-container {
    text-align: center;
}

.prize-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.prize-list li {
  font-size: 1.2rem;
  padding: 10px 0;
  text-align: center;
}

.prize-list li.selected {
  font-weight: bold;
  color: #007bff;
  font-size: 1.4rem;
}

.register-container {
    text-align: center;
    margin-top: 40px;
}

.draw-button {
    padding: 10px 20px;
    margin: 0 auto;
    font-size: 1.2rem;
    border: none;
    border-radius: 5px;
    background-color: #ffabab;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
}

.draw-button:hover {
    background-color: #ff6666;
    transition: background-color 0.3s ease-in-out;
}

</style>
