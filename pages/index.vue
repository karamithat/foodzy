<!-- pages/index.vue -->
<template>
  <!-- <Hero /> -->
  <!-- <Popular
    title="Popular Categories"
    subtitle="Customer Favorites"
    :categories="categories"
  /> -->
  <!-- <Daily
    :products="productData"
    bannerImage="/images/daily.png"
    bannerTitle="Bring nature into your home"
    bannerButtonText="Shop Now"
    bannerButtonIcon="material-symbols:arrow-right-alt"
    cartButtonText="Add to Cart"
    cartButtonIcon="material-symbols:shopping-cart"
    soldLabel="Sold:"
  /> -->
  <!-- <Menu
    :subtitle="subtitle"
    :title-line1="titleLine1"
    :title-line2="titleLine2"
    :dishes="dishes"
  /> -->
  <Deals :products="dealsProducts" :settings="dealsSettings" />
  <!-- <People /> -->
  <!-- <Subscription />  -->
  <!-- Diğer bölümleri de ekleyebilirsin -->
</template>

<script setup lang="ts">
// import Hero from "../components/sections/Hero.vue";
// import categories from "~/data/popular/categories";
// import Popular from "../components/sections/Popular.vue";
// import { productData } from "~/data/product/productData";
// import Daily from "../components/sections/Daily.vue";
// import { dishes, subtitle, titleLine1, titleLine2 } from "~/data/menu/menuData";
// import Menu from "../components/sections/Menu.vue";
import { dealsProducts, dealsSettings } from "~/data/deals/dealsData";
import Deals from "../components/sections/Deals.vue";
// import People from "../components/sections/People.vue";
// import Subscription from "../components/sections/Subscription.vue";
</script>
