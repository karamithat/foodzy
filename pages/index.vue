<template>
  <Hero :data="heroData" />
  <Popular
    title="Popular Categories"
    subtitle="Customer Favorites"
    :categories="categories"
  />
  <Daily
    :products="productData"
    bannerImage="/images/daily.png"
    bannerTitle="Bring nature into your home"
    bannerButtonText="Shop Now"
    bannerButtonIcon="material-symbols:arrow-right-alt"
    cartButtonText="Add to Cart"
    cartButtonIcon="material-symbols:shopping-cart"
    soldLabel="Sold:"
    header="Daily Best Sells"
  />
  <Menu
    :subtitle="subtitle"
    :title-line1="titleLine1"
    :title-line2="titleLine2"
    :dishes="dishes"
  />
  <Deals :products="dealsProducts" :settings="dealsSettings" />
  <People :leftImage="leftImage" :heading="heading" :featured="featured" />
  <Subscription
    :bannerContent="bannerContent"
    :formData="formData"
    :bannerImage="bannerImage"
    :features="features"
  />
  <!-- Diğer bölümleri de ekleyebilirsin -->
</template>

<script setup lang="ts">
import Hero from "../components/sections/Hero.vue";
import { heroData } from "~/data/hero/heroData";
import categories from "~/data/popular/categories";
import Popular from "../components/sections/Popular.vue";
import { productData } from "~/data/product/productData";
import Daily from "../components/sections/Daily.vue";
import { dishes, subtitle, titleLine1, titleLine2 } from "~/data/menu/menuData";
import Menu from "../components/sections/Menu.vue";
import { dealsProducts, dealsSettings } from "~/data/deals/dealsData";
import Deals from "../components/sections/Deals.vue";
import { featured, heading, leftImage } from "~/data/people/whyChooseData";
import People from "../components/sections/People.vue";
import Subscription from "../components/sections/Subscription.vue";
import {
  bannerContent,
  formData,
  bannerImage,
  features,
} from "~/data/subs/bannerData";
</script>
