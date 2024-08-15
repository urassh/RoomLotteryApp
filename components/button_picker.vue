<script setup lang="ts">
import { ref, computed } from 'vue';
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
        <button 
          @click="onChangeItem(item)" 
          :class="{ 'selected': item === selectedItem }">
          {{ item.getContent() }}
        </button>
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

button {
    padding: 10px 20px;
    font-size: 0.9rem;
    border: none;
    border-radius: 5px;
    background-color: #f9f9f9;
    cursor: pointer;
    transition: font-size 0.3s ease-in-out, color 0.3s ease-in-out;
}

button:hover {
    background-color: #e0e0e0;
    font-size: 1.6rem;
    transition: font-size 0.3s ease-in-out, color 0.3s ease-in-out;
}

button.selected {
    color: blue;
    background-color: rgb(199, 252, 234);
    border: 1px solid blue;
}
</style>
