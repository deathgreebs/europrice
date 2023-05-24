<template>
  <div id="target-section-2" class="flex flex-col items-center relative mt-[200px] pb-[60px]">
        <div class="lg:text-[32px] sm:text-[25px] text-[20px] font-montserrat font-bold uppercase">{{ $t('distribution') }}</div>
    <div class="text-[15px] lg:text-[20px] font-open-sans text-center max-w-[800px] z-10">
        {{ $t('distribution-text') }}
    </div>
    <img class="absolute blur-lg z-[1]" src="../assets/img/balls.png" alt="">
    </div>
  <div class="slider relative pb-[200px] z-10" v-if="slides.length > 0" ref="sliderRef">
    <div class="slider-container" :style="{ transform: `translateX(${-currentIndex * 100}%)` }">
      <div class="slider-item flex justify-around flex-wrap" v-for="(slide, index) in slides" :key="index">
        <img class="max-w-[150px] max-h-[100px] h-[70px] py-4 lg:py-0" v-for="(item, itemIndex) in slide.items" :src="item.image" :alt="item.alt" :key="itemIndex">
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import image31 from '../assets/img/logos/image 31.png';
import image32 from '../assets/img/logos/image 32.png';
import image36 from '../assets/img/logos/image 36.png';
import image37 from '../assets/img/logos/image 37.png';
import image39 from '../assets/img/logos/image 39.png';
import image72 from '../assets/img/logos/image 72.png';
import image41 from '../assets/img/logos/image 41.png';
import image42 from '../assets/img/logos/image 42.png';
import image50 from '../assets/img/logos/image 50.svg';
import image51 from '../assets/img/logos/image 51.png';
import image70 from '../assets/img/logos/image 70.png';
import image71 from '../assets/img/logos/image 71.png';
import image73 from '../assets/img/logos/image 73.png';
import image74 from '../assets/img/logos/image 74.png';
import image75 from '../assets/img/logos/image 75.png';
import image80 from '../assets/img/logos/80.png';
import image81 from '../assets/img/logos/81.png';
import image83 from '../assets/img/logos/83.png';
import image84 from '../assets/img/logos/84.png';
import image85 from '../assets/img/logos/85.png';
import image86 from '../assets/img/logos/86.png';
import image87 from '../assets/img/logos/87.png';
import image100 from '../assets/img/logos/100.png';
import image101 from '../assets/img/logos/101.png';
import image102 from '../assets/img/logos/102.png';
import image103 from '../assets/img/logos/103.png';
import image104 from '../assets/img/logos/104.png';
import image105 from '../assets/img/logos/105.png';
import image106 from '../assets/img/logos/106.png';
import image107 from '../assets/img/logos/107.png';


const items = ref([
  [
    { image: image31, alt: 'Картинка 1' },
    { image: image41, alt: 'Картинка 2' },
    { image: image32, alt: 'Картинка 3' },
    { image: image50, alt: 'Картинка 4' },
    { image: image51, alt: 'Картинка 5' },
    { image: image39, alt: 'Картинка 5' },
    { image: image42, alt: 'Картинка 5' },
    { image: image37, alt: 'Картинка 5' },
  ],
  [
    { image: image70, alt: 'Картинка 6' },
    { image: image71, alt: 'Картинка 7' },
    { image: image72, alt: 'Картинка 8' },
    { image: image73, alt: 'Картинка 9' },
    { image: image74, alt: 'Картинка 10' },
    { image: image75, alt: 'Картинка 10' },
  ],
  [
    { image: image80, alt: 'Картинка 6' },
    { image: image81, alt: 'Картинка 7' },
    { image: image83, alt: 'Картинка 8' },
    { image: image84, alt: 'Картинка 9' },
    { image: image85, alt: 'Картинка 10' },
    { image: image86, alt: 'Картинка 10' },
    { image: image87, alt: 'Картинка 10' },
  ],
  [
    { image: image87, alt: 'Картинка 6' },
    { image: image100, alt: 'Картинка 7' },
    { image: image101, alt: 'Картинка 8' },
    { image: image102, alt: 'Картинка 9' },
    { image: image103, alt: 'Картинка 10' },
    { image: image104, alt: 'Картинка 10' },
    { image: image105, alt: 'Картинка 10' },
    { image: image106, alt: 'Картинка 10' },
    { image: image107, alt: 'Картинка 10' },
  ],
]);

const currentIndex = ref(0);
let slideInterval;

const sliderRef = ref(null);

onMounted(() => {
  startAutoSlide();
});

onBeforeUnmount(() => {
  stopAutoSlide();
});

function startAutoSlide() {
  slideInterval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % items.value.length;
  }, 3000);
}

function stopAutoSlide() {
  clearInterval(slideInterval);
}

// Создайте вычисляемое свойство slides, которое будет группировать картинки по слайдам
const slides = ref([]);

function createSlides() {
  slides.value = [];
  const numSlides = items.value.length;

  for (let i = 0; i < numSlides; i++) {
    const slideItems = items.value[i];
    slides.value.push({ items: slideItems });
  }
}

// Вызовите функцию createSlides, чтобы сформировать слайды из исходных картинок
createSlides();
</script>

<style>
.slider {
  width: 100%;
  overflow: hidden;
}

.slider-container {
  display: flex;
  transition: transform 0.5s ease-in-out;
  white-space: nowrap;
}

.slider-item {
  flex-shrink: 0;
  width: 100%;
  white-space: normal;
}
</style>
