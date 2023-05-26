<template>
  <div class="flex flex-wrap sm:flex-nowrap justify-around md:justify-between items-center py-6 lg:py-10">
    <div class="">
      <Logo />
    </div>
    <ul class="flex justify-between">
      <li class="mr-[24px] sm:text-[10px] lg:text-[16px] font-montserrat font-medium"><a href="#target-section" @click.prevent="scrollToTarget">{{ $t('about') }}</a></li>
      <li class="font-montserrat sm:text-[10px] lg:text-[16px] font-medium"><a href="#target-section-2" @click.prevent="scrollToTarget2">{{ $t('distribution') }}</a></li>
    </ul>
    <div class="flex my-4">
      <div class="flex mr-[27px] font-montserrat font-medium sm:items-center">
        <span class="mr-[5px] sm:mr[5px] lg:mr[10px] h-min"><img class="sm:w-3/4 lg:w-full" src="../assets/img/icons/map.svg" alt=""></span>
        <a href="https://www.google.com/maps/place/%D0%A3%D0%B6%D0%B3%D0%BE%D1%80%D0%BE%D0%B4,+%D0%97%D0%B0%D0%BA%D0%B0%D1%80%D0%BF%D0%B0%D1%82%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C/@48.6193817,22.2796376,13z/data=!3m1!4b1!4m6!3m5!1s0x473919b944b6e3d9:0xda6ae0130042a3c!8m2!3d48.6208!4d22.287883!16zL20vMDJuMGNw" class="text-[14px] sm:text-[10px] lg:text-[16px]">
          {{ $t('location') }}
        </a>
      </div>
      <div class="flex font-montserrat font-medium mr-[24px] sm:items-center">
        <span class="mr-[5px] sm:mr[5px] lg:mr[10px] h-min"><img class="sm:w-3/4 lg:w-full" src="../assets/img/icons/tel.svg" alt=""></span>
        <a href="tel:+380954636143" class="text-[14px] sm:text-[10px] lg:text-[16px]">
          +38 (095) 463 61 43
        </a>
      </div> 
      <MySelect class="hidden lg:block" @option-selected="getLang"/>
    </div>
    <MySelect class="block lg:hidden" @option-selected="getLang"/>
    <!-- <MySelect class="lg:hidden" :options="selectOptions" :selectedOption="selectedLanguage" /> -->
  </div>
</template>

<script setup>
import Logo from './Logo.vue';
import MySelect from './MySelect.vue';
import { ref } from 'vue';

const scrollToTarget = () => {
  const targetElement = document.getElementById('target-section');
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth',
    });
  }
};

const scrollToTarget2 = () => {
  const targetElement2 = document.getElementById('target-section-2');
  if (targetElement2) {
    window.scrollTo({
      top: targetElement2.offsetTop,
      behavior: 'smooth',
    });
  }
};

const emit = defineEmits(['selected-lang'])
function getLang(optionValue) {
  emit('selected-lang', optionValue);
}

</script>

<style scoped>
  a {
    position: relative;
    transition: 0.3s;
  }
  a:active {
    color: #FAC016;
    transition: 0.3s;
  }
  a::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: #FAC016;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  a:active::before {
    transform: scaleX(0.2);
  }
  a:hover::before {
    transform: scaleX(0.50);
  }

</style>
