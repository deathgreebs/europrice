<template>
  <div class="relative">
    <select v-model="selectedOption" class="block font-montserrat font-medium appearance-none w-full bg-transparent border-none pr-6 rounded-md sm:text-[15px]">
      <option value="UA" disabled selected hidden>UA</option>
      <option v-for="option in options" :value="option.value" :key="option.value">{{ option.label }}</option>
    </select>
    <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
      <img src="../assets/img/icons/arrow.svg" alt="">
    </div>
  </div>
</template>

<script setup>
import { ref, watch, inject } from 'vue';

const locale = inject('locale');
const selectedOption = ref('UA');
const options = [
  { value: 'ua', label: 'UA' },
  { value: 'en', label: 'EN' },
];
const emit = defineEmits(['option-selected'])
watch(selectedOption, (newValue) => {
  emit('option-selected', newValue);
});

</script>

<style scoped>
/* Styles go here */
</style>
