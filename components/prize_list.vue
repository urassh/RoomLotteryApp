<script setup lang="ts">
import type { Prize } from '@/types/prize';

const props = defineProps({
  prizes: {
    type: Array as PropType<Prize[]>,
    required: true,
  },
  selectedPrizeId: {
    type: Number,
    required: true,
  },
  onUpdateSelectedPrizeId: {
    type: Function as PropType<(id: number) => void>,
    required: true,
  },
});

const observer = ref<IntersectionObserver | null>(null);

// DOM要素を監視するためのRefs
const listItemRefs = ref<Array<HTMLElement | null>>([]);

// VueコンポーネントがマウントされたときにIntersectionObserverを設定
onMounted(() => {
  observer.value = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = Number(entry.target.getAttribute('data-id'));
          props.onUpdateSelectedPrizeId(id);
        }
      });
    },
    {
      root: document.querySelector('.prize-list'),
      threshold: 0.5, // 50%以上表示されている場合にハイライト
    }
  );

  listItemRefs.value.forEach((item) => {
    if (item) observer.value?.observe(item);
  });
});
</script>

<template>
  <div class="prize-list">
    <ul>
      <li
        v-for="(prize, index) in prizes"
        :key="prize.id"
        :data-id="prize.id"
        :class="{ selected: prize.id === selectedPrizeId }"
        ref="el => listItemRefs.value[index] = el"
      >
        {{ prize.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.prize-list {
  max-height: 200px;
  overflow-y: auto;
  margin-bottom: 20px;
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
