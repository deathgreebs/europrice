<template>
  <div class="container mx-auto">
    <Header @selected-lang="handleOptionSelected"/>
    <Main />
    <Stats />
    <Company />
    <Slider />
    <List />
    <Feedbacks />
    <Form />
  </div>
  <Footer />
</template>

<script setup>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Stats from './components/Stats.vue';
import Company from './components/Company.vue';
import Slider from './components/Slider.vue';
import List from './components/List.vue';
import Feedbacks from './components/Feedbacks.vue';
import Form from './components/Form.vue';
import Footer from './components/Footer.vue';
import { ref, provide } from 'vue';
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n({useScope: 'global'})
provide('locale', locale);

const handleOptionSelected = (optionValue) => {
  locale.value = optionValue
}

</script>

<style scoped>
/* Styles go here */
</style>
