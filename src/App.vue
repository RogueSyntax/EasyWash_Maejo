<template>

<Header></Header>

  <RouterView />

  <Footer></Footer>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue"
</script>

<style scoped></style>
