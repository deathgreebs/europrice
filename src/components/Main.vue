<template>
    <div class="flex flex-col px-12 md:p-0 sm:flex-row mt-[60px] lg:mt-[130px] justify-between container">
        <div :class="{ 'fade-in': showText }" class="order-2 sm:order-1">
            <div class="max-w-[600px] text-montserrat text-[25px] lg:text-[54px] font-bold leading-[26px] lg:leading-[66px]">
                {{ $t('main-title') }}
            </div>
            <div class="max-w-[500px] text-open-sans text-[15px] lg:text-[20px] leading-[17px] lg:leading-[27px] mt-[20px]">
                {{ $t('main-subtitle') }}
            </div>
                <Btn 
                    @click="scrollToTarget3"
                    @mouseover="rotateImage(true)" 
                    @mouseleave="rotateImage(false)" 
                    class="mt-[20px] lg:mt-[40px] flex items-center smooth-scroll">
                    {{ $t('main-btn') }}
                    <span class="ml-[13px]">
                      <img src="../assets/img/icons/post-2.svg" alt="">
                    </span>
                </Btn>
        </div>
        <div :class="{ 'fade-in-2': showText }" class="order-1 sm:order-2 mb-6 sm:mb-0">
            <img src="../assets/img/picture.png" alt="">
        </div>
    </div>
</template>

<script setup>
    import { ref, inject, onMounted } from 'vue';
    import Btn from './Btn.vue'
    
    const scrollToTarget3 = () => {
      const targetElement3 = document.getElementById('target-section-3');
      if (targetElement3) {
        window.scrollTo({
          top: targetElement3.offsetTop,
          behavior: 'smooth',
        });
      }
};

    const showText = ref(false);

    onMounted(() => {
        showText.value = true;
    });

    const isHovered = ref(false)

    function rotateImage() {
      isHovered.value = !isHovered.value;
    }
</script>

<style>
    .rotate-45 {
        transform: rotate(180deg);
        transition: transform 0.9s ease;
    }
    .fade-in {
  opacity: 0;
  animation: fade-in-animation 1s ease-in-out forwards;
}

@keyframes fade-in-animation {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.fade-in-2 {
  opacity: 0;
  animation: fade-in-2-animation 1s ease-in-out forwards;
}

@keyframes fade-in-2-animation {
  0% {
    opacity: 0;
    transform: translateX(200px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>