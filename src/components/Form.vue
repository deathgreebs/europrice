<template>
    <div ref="targetSection3" id="target-section-3" class="flex flex-col lg:justify-between lg:items-center lg:flex-row mt-[180px] mb-[120px]">
        <div class="relative mb-6 px-6">
            <img class="absolute blur-xl z-[1] left-[-30px] top-[-100px]" src="../assets/img/form-balls.png" alt="">
            <div class="relative z-10 uppercase mb-4 font-montserrat text-[25px] sm:text-[32px] font-bold">{{ $t('form-title') }}</div>
            <div class="relative z-10 mb-6 text-[15px] sm:text-[20px] font-open-sans">{{ $t('form-subtitle') }}</div>
            <div class="relative z-10 flex items-center mb-2"><span><img src="../assets/img/icons/post.svg" alt=""></span><a href="" class="ml-2">euprice.ua@gmail.com</a></div>
            <div class="relative z-10 flex items-center"><span><img src="../assets/img/icons/tel.svg" alt=""></span><a href="tel:+380954636143" class="ml-2">+38 (095) 463 61 43</a></div>
        </div>
    <form @submit="handleSubmit" class="flex flex-col w-full lg:w-1/3">
        <div class="flex w-full">
            <input class="w-full m-2 px-[16px] py-[14px] rounded" v-model="name" type="text" :placeholder="$t('form-name')" required>
            <input class="w-full m-2 px-[16px] py-[14px] rounded" v-model="phoneNumber" type="tel" :placeholder="$t('form-tel')" required>
        </div>
      <input class="m-2 px-[16px] py-[14px] rounded" v-model="email" type="email" :placeholder="$t('form-email')" required>
      <textarea class="m-2 px-[16px] py-[14px] rounded" v-model="message" :placeholder="$t('form-msg')"></textarea>
      <Btn class="m-2 text-[15px]" type="submit">{{ $t('form-btn') }}</Btn>
    </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Btn from './Btn.vue';
  import axios from 'axios';
  
  const name = ref('');
  const phoneNumber = ref('');
  const email = ref('');
  const message = ref('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const telegramBotToken = '6022677082:AAEmelFk4w3pCJf1-J4kL5oy9mi_C2XBssQ';
    const chatId = '5900306776';
  
    const text = `
    НОВА ЗАЯВКА 
      Имя: ${name.value}
      Номер телефона: ${phoneNumber.value}
      Email: ${email.value}
      Сообщение: ${message.value}
    `;
  
    const apiUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
    const params = new URLSearchParams({
      chat_id: chatId,
      text
    });
  
    try {
      await axios.post(apiUrl, params);
  
      // Очистка полей формы
      name.value = '';
      phoneNumber.value = '';
      email.value = '';
      message.value = '';
  
      console.log('Сообщение отправлено через Telegram');
    } catch (error) {
      console.error('Ошибка отправки сообщения через Telegram', error);
    }
  };
  </script>
