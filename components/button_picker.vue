<script setup lang="ts">
import { ref } from 'vue';
import type { ContentProvider } from '@/pages/result/prize_content';

interface Emits<T extends ContentProvider> {
  (event: 'onChangeItem', item: T): void;
}

type WheelPickerProps<T extends ContentProvider> = {
  items: T[];
  modelValue: T;
};

const props = defineProps<WheelPickerProps<ContentProvider>>();
const emit = defineEmits<Emits<ContentProvider>>();

const selectedItem = ref(props.modelValue);

const onChangeItem = <T extends ContentProvider>(item: T) => {
  selectedItem.value = item;
  emit('onChangeItem', item);
};
</script>

<template>
  <section id="button-picker">
    <ul>
      <li v-for="item in props.items" :key="item.getContent()">
        <button @click="onChangeItem(item)">{{ item.getContent() }}</button>
      </li>
    </ul>
  </section>
</template>

<style scoped>
#button-picker {
  text-align: center;
  margin: 40px;
}

#button-picker ul {
  list-style: none;
  padding: 0;
}

#button-picker li {
  margin: 20px;
}
</style>
