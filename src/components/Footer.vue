<template>
    <div class="bg-[#2D2D2D] py-[10px] lg:py-[20px]">
      <div class="container mx-auto w-full flex flex-wrap flex-col sm:flex-row sm:flex-nowrap justify-around md:justify-between items-center ">
        <div>
        <div class="text-[20px] sm:text-[18px] lg:text-[20px] font-semibold leading-[29px] text-[#fff]">Euro<span class="font-bold text-[#FAC016]">PRICE.</span></div>
        </div>
      <div class="hidden md:flex">
        <div class="flex mr-[27px] font-montserrat font-medium sm:items-center">
          <span class="mr-[10px] text-[#fff] sm:mr[5px] lg:mr[10px] h-min"><img class="sm:w-3/4 lg:w-full" src="../assets/img/icons/map.svg" alt=""></span>
          <a href="https://www.google.com/maps/place/%D0%A3%D0%B6%D0%B3%D0%BE%D1%80%D0%BE%D0%B4,+%D0%97%D0%B0%D0%BA%D0%B0%D1%80%D0%BF%D0%B0%D1%82%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C/@48.6193817,22.2796376,13z/data=!3m1!4b1!4m6!3m5!1s0x473919b944b6e3d9:0xda6ae0130042a3c!8m2!3d48.6208!4d22.287883!16zL20vMDJuMGNw" class="text-[#fff] sm:text-[10px] lg:text-[14px]">
            {{ $t('location') }}
          </a>
        </div>
        <div class="flex font-montserrat font-medium mr-[24px] sm:items-center">
          <span class="mr-[10px] text-[#fff] sm:mr[5px] lg:mr[10px] h-min"><img class="sm:w-3/4 lg:w-full" src="../assets/img/icons/tel.svg" alt=""></span>
          <a href="tel:+380508081732" class="text-[#fff] sm:text-[10px] lg:text-[14px]">
            +38 (050) 808 17 32
          </a>
        </div> 
      </div>
      <div class="text-[#fff] text-[12px] font-montserrat my-4 sm:my-0">Copyright © 2023 - All right reserved</div>
      <ul class="flex items-center">
        <li class="mx-2"><a href="https://instagram.com/europrice_ua?igshid=YmMyMTA2M2Y="><img src="../assets/img/icons/inst.svg" alt=""></a></li>
        <li class="mx-2"><a href="https://invite.viber.com/?g2=AQBMiX9uuUuuSksmmxuoKirb73jl%2F5VEEjqvy4D1U8mN7XBIpOtN0oyPFJXS8nBx&lang=ru"><img src="../assets/img/icons/viber.svg" alt=""></a></li>
        <li class="mx-2"><a href="https://t.me/europriceua"><img src="../assets/img/icons/telegram.svg" alt=""></a></li>
      </ul>
      </div>
    </div>
  </template>

<script setup>
    import Logo from './Logo.vue';
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