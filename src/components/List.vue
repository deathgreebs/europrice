<template>
    <div class="flex justify-between items-center flex-col md:flex-row">
        <div class="pt-[60px] pr-[60px] pb-[70px] pl-[60px] border-b-[12px] shadow bg-[#FCFCFC] border-solid border-[#70CACD] rounded-[40px] w-fit" style="box-shadow: 10px 14px 24px rgba(112, 202, 205, 0.15);">
            <div class="uppercase font-montserrat font-bold text-[25px] lg:text-[32px] mb-[20px]">{{ $t('list-title') }}</div>
            <ul>
                <li class="flex items-center py-[15px] font-open-sans text-[15px] lg:text-[24px]"><img class="w-[36px] h-[36px] mr-[20px]" src="../assets/img/icons/list/tea-drink.svg" alt="">{{ $t('list-1') }}</li>
                <li class="flex items-center py-[15px] font-open-sans text-[15px] lg:text-[24px]"><img class="w-[36px] h-[36px] mr-[20px]" src="../assets/img/icons/list/money.svg" alt="">{{ $t('list-2') }}</li>
                <li class="flex items-center py-[15px] font-open-sans text-[15px] lg:text-[24px]"><img class="w-[36px] h-[36px] mr-[20px]" src="../assets/img/icons/list/truck.svg" alt="">{{ $t('list-3') }}</li>
                <li class="flex items-center py-[15px] font-open-sans text-[15px] lg:text-[24px]"><img class="w-[36px] h-[36px] mr-[20px]" src="../assets/img/icons/list/people.svg" alt="">{{ $t('list-4') }}</li>
                <li class="flex items-center py-[15px] font-open-sans text-[15px] lg:text-[24px]"><img class="w-[36px] h-[36px] mr-[20px]" src="../assets/img/icons/list/communication.svg" alt="">{{ $t('list-5') }}</li>
                <li class="flex items-center py-[15px] font-open-sans text-[15px] lg:text-[24px]"><img class="w-[36px] h-[36px] mr-[20px]" src="../assets/img/icons/list/money.svg" alt="">{{ $t('list-6') }}</li>
            </ul>
        </div>
        <div class="hidden md:block">
            <img src="../assets/img/woman.svg" alt="">
        </div>
    </div>
</template>