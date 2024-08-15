<script setup lang="ts">
import { PrizeContent, type ContentProvider } from './prize_content';

const initialPrizes: PrizeContent[] = [
  new PrizeContent({ id: 1, name: 'アマギフ2万円' }),
  new PrizeContent({ id: 2, name: 'スタバ1000円' }),
  new PrizeContent({ id: 3, name: 'スタバ1000円' }),
  new PrizeContent({ id: 4, name: 'スタバ1000円' }),
  new PrizeContent({ id: 5, name: '???' }),
];

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

    <button class="draw-button">抽選</button>
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
  font-size: 3rem;
  margin-bottom: 40px;
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
</style>
