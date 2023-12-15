<template>
    <div id="target-section" class="flex flex-col md:items-start items-center md:flex-row justify-between mx-auto md:mt-[220px] mt-[60px] container">
        <div class="relative w-[350px] md:w-[888px]">
            <img class="absolute md:top-[-60px] top-[-50px] left-[-100px] z-[0]" src="../assets/img/c-dots.svg" alt="">
            <img class="hidden absolute max-w-[888px] w-full h-[225px] bottom-[-130px] right-[-455px]" src="../assets/img/curve.svg" alt="">
            <img class="relative z-10 md:absolute w-[350px] lg:w-auto sm:right-auto" src="../assets/img/company.png" alt="">
        </div>
        <div class="max-w-[500px] p-4 md:w-[680px] md:mt-0 mt-8">
            <div class="font-montserrat font-bold text-[20px] lg:text-[32px] sm:text-[25px] mb-[30px] z-10 uppercase text-white">{{ $t('about') }}</div>
            <p class="z-10 font-open-sans sm:text-[15px] lg:text-[20px] text-white">{{ $t('c-descr') }}</p>
        </div>
    </div>  
</template>