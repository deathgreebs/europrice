<template>
    <div class="md:mt-[160px] mt-[60px] uppercase relative font-montserrat md:py-[110px] sm:py-[60px] py-[30px] font-bold text-[15px] md:text-[32px] flex flex-col items-center justify-center bg-contain @apply shadow-[0px_4px_61px_40px_rgba(237,237,237,1)] bg-[url('../assets/img/doors-bg.png')]">
        <img class="absolute bottom-[-10px] sm:bottom-[-40px] left-[20px] w-[27%] sm:w-[25%]" src="../assets/img/products-left.png" alt="">
        <div class="flex">
            {{ $t('shop-text') }} <div class="mx-[5px] sm:mx-[10px] font-semibold text-[#151515]">Euro<span class="font-bold text-[#FAC016]">PRICE</span></div> - {{ $t('shop-text2') }}
        </div>
        <a href="https://eupricemarket.com.ua"><Btn class="w-[120px] h-[60px] text-[10px] sm:w-auto sm:h-auto sm:text-[15px] mt-[40px]">{{ $t('shop-btn') }}</Btn></a>
        <img class="absolute bottom-[-10px] sm:bottom-[-50px] right-0 w-[27%] sm:w-[25%]" src="../assets/img/products-right.png" alt="">
    </div>
</template>
<script setup>
import Btn from './Btn.vue'

</script>