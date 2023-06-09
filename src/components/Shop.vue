<template>
    <div class="md:mt-[160px] mt-[60px] uppercase relative font-montserrat md:py-[110px] sm:py-[60px] py-[30px] font-bold text-[15px] md:text-[32px] flex flex-col items-center justify-center bg-[url('../assets/img/doors-bg.png')]">
        <img class="absolute bottom-[-10px] sm:bottom-[-40px] left-[20px] w-[27%] sm:w-[25%]" src="../assets/img/products-left.png" alt="">
        <div class="flex">
            Відвідайте <div class="mx-[5px] sm:mx-[10px] font-semibold text-[#151515]">Euro<span class="font-bold text-[#FAC016]">PRICE</span></div> - це зручно!
        </div>
        <a href="https://eupricemarket.com.ua"><Btn class="w-[120px] h-[60px] text-[10px] sm:w-auto sm:h-auto sm:text-[15px] mt-[40px]">Перейти до магазину</Btn></a>
        <img class="absolute bottom-[-10px] sm:bottom-[-50px] right-0 w-[27%] sm:w-[25%]" src="../assets/img/products-right.png" alt="">
    </div>
</template>
<script setup>
import Btn from './Btn.vue'

</script>