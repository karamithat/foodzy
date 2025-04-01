<script setup lang="ts">
import Navbar from "../components/layouts/Navbar.vue";
import Footer from "../components/layouts/Footer.vue";
import { navigationLinks } from "../data/header/navigation";
import { phoneLinks } from "../data/header/phoneLinks";
import { userLinks } from "~/data/header/userLinks";
import { titleLinks } from "~/data/header/title";
import { footerData } from "~/data/footer/footerData";
</script>

<template>
  <div>
    <!-- Navbar -->
    <Navbar
      :links="navigationLinks"
      :phones="phoneLinks"
      :users="userLinks"
      :titles="titleLinks"
    />

    <!-- Sayfa içeriği -->
    <NuxtPage />

    <Footer :data="footerData" />
  </div>
</template>
