<!-- pages/index.vue -->
<template>
  <Hero />
  <Popular />
  <Daily />
  <Menu />
  <Deals />
  <People />
  <Subscription />
  <!-- Diğer bölümleri de ekleyebilirsin -->
</template>

<script setup lang="ts">
import Hero from "../components/sections/Hero.vue";
import Popular from "../components/sections/Popular.vue";
import Daily from "../components/sections/Daily.vue";
import Menu from "../components/sections/Menu.vue";
import Deals from "../components/sections/Deals.vue";
import People from "../components/sections/People.vue";
import Subscription from "../components/sections/Subscription.vue";
</script>
