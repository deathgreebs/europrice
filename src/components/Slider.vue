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
        <img class="max-h-[100px] py-2 my-2 mx-2 px-2 lg:py-0" v-for="(item, itemIndex) in slide.items" :src="item.image" :alt="item.alt" :key="itemIndex">
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import image1 from '../assets/img/logos/k-lavazza.png';
import image2 from '../assets/img/logos/k-bellarom.png';
import image3 from '../assets/img/logos/k-alvorada.png';
import image4 from '../assets/img/logos/k-J.J.Darboven.png';
import image5 from '../assets/img/logos/k-tchibo.png';
import image6 from '../assets/img/logos/k-movenpick.png';
import image7 from '../assets/img/logos/k-dallmayr.png';
import image8 from '../assets/img/logos/k-melitta.png';
import image11 from '../assets/img/logos/h-pg.png';
import image22 from '../assets/img/logos/h-dm.png';
import image33 from '../assets/img/logos/h-astonish.png';
import image44 from '../assets/img/logos/h-soft.png';
import image55 from '../assets/img/logos/h-chanteclair.png';
import image66 from '../assets/img/logos/h-passiongold.png';
import image111 from '../assets/img/logos/s-kinder.png';
import image222 from '../assets/img/logos/s-milka.png';
import image333 from '../assets/img/logos/s-orion.png';
import image444 from '../assets/img/logos/s-nestle.png';
import image555 from '../assets/img/logos/s-ferrero.png';
import image1111 from '../assets/img/logos/b-alesto.png';
import image2222 from '../assets/img/logos/b-mlekpol.png';
import image3333 from '../assets/img/logos/b-mlekovita.png';
import image4444 from '../assets/img/logos/b-vijofel.png';
import image5555 from '../assets/img/logos/b-kania.png';
import image6666 from '../assets/img/logos/b-monini.png';
import image7777 from '../assets/img/logos/b-barilla.png';
import image8888 from '../assets/img/logos/b-mk.png';
import image9999 from '../assets/img/logos/b-cimbalak.png';


const items = ref([
  [
    { image: image1, alt: 'Картинка 1' },
    { image: image2, alt: 'Картинка 3' },
    { image: image3, alt: 'Картинка 4' },
    { image: image4, alt: 'Картинка 5' },
    { image: image5, alt: 'Картинка 5' },
    { image: image6, alt: 'Картинка 5' },
    { image: image7, alt: 'Картинка 5' },
    { image: image8, alt: 'Картинка 5' },
  ],
  [
    { image: image11, alt: 'Картинка 1' },
    { image: image22, alt: 'Картинка 3' },
    { image: image33, alt: 'Картинка 4' },
    { image: image44, alt: 'Картинка 5' },
    { image: image55, alt: 'Картинка 5' },
    { image: image66, alt: 'Картинка 5' },
  ],
  [
    { image: image111, alt: 'Картинка 1' },
    { image: image222, alt: 'Картинка 3' },
    { image: image333, alt: 'Картинка 4' },
    { image: image444, alt: 'Картинка 5' },
    { image: image555, alt: 'Картинка 5' },
  ],
  [
    { image: image1111, alt: 'Картинка 1' },
    { image: image2222, alt: 'Картинка 3' },
    { image: image3333, alt: 'Картинка 4' },
    { image: image4444, alt: 'Картинка 5' },
    { image: image5555, alt: 'Картинка 5' },
    { image: image6666, alt: 'Картинка 5' },
    { image: image7777, alt: 'Картинка 5' },
    { image: image8888, alt: 'Картинка 5' },
    { image: image9999, alt: 'Картинка 5' },
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
