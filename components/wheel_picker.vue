<script setup lang="ts">
type WheelPickerProps<T> = {
  items: T[];
  modelValue: T;
};

const props = defineProps<WheelPickerProps<any>>();
  
const emit = defineEmits<{
    (e: 'update:selectedItem', value: any): void;
}>();
  
const selectedItem = ref(props.modelValue);

watch(selectedItem, (newValue) => {
  emit('update:selectedItem', newValue);
});
</script>

<template>
    <div class="wheel-picker">
      <select v-model="selectedItem" class="wheel-select">
        <option v-for="item in items" :key="item" :value="item">
          {{ item }}
        </option>
      </select>
    </div>
  </template>
  
  <style scoped>
  .wheel-picker {
    position: relative;
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 50%;
    border: 1px solid #ccc;
  }
  
  .wheel-select {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    border: none;
    background: transparent;
    appearance: none;
    text-align: center;
    font-size: 16px;
  }
  </style>
  