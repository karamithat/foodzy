<template>
  <section class="max-w-[1610px] mx-auto py-10 px-4 font-[quicksand]">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-xl sm:text-2xl font-bold text-[#253D4E]">
        Daily Best Sells
      </h2>
      <ul class="flex items-center gap-6 text-sm sm:text-base">
        <li class="text-[#3bb77e] font-semibold cursor-pointer">Featured</li>
        <li class="text-[#253D4E] hover:text-[#3bb77e] cursor-pointer">
          Popular
        </li>
        <li class="text-[#253D4E] hover:text-[#3bb77e] cursor-pointer">
          New added
        </li>
      </ul>
    </div>
    <div class="flex flex-col md:flex-row gap-6">
      <div
        class="bg-cover bg-center w-full md:w-1/4 min-h-[300px] md:h-[520px] rounded-xl relative overflow-hidden"
      >
        <NuxtImg
          :src="bannerImage"
          class="absolute inset-0 w-full h-full object-cover z-0"
          alt="Banner Image"
        />
        <div
          class="absolute inset-0 bg-[#e5dc8942] flex flex-col justify-start items-start p-6 lg:p-20 gap-6 md:gap-14 h-full z-10"
        >
          <h2 class="text-white font-bold text-2xl md:text-4xl leading-tight">
            {{ bannerTitle }}
          </h2>
          <BaseButton :label="bannerButtonText" :icon="bannerButtonIcon" />
        </div>
      </div>

      <div class="flex-1 overflow-x-auto">
        <div class="relative flex-1">
          <div
            class="hidden lg:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full w-10 h-10 shadow-md"
          >
            <Icon icon="mdi:chevron-left" width="24" height="24" />
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 min-h-[520px]"
          >
            <div
              v-for="product in products"
              :key="product.id"
              class="bg-white border border-gray-200 rounded-[15px] p-4 relative flex flex-col justify-between h-[520px]"
            >
              <div
                class="absolute top-0 left-0 px-3 py-1 rounded-br-2xl rounded-tl-xl text-white text-sm font-semibold"
                :class="{
                  'bg-[#3bb77e]': product.badgeType === 'save',
                  'bg-[#67bcee]': product.badgeType === 'sale',
                  'bg-[#f59758]': product.badgeType === 'best',
                  'bg-[#f74b81]': product.badgeType === 'save2',
                }"
              >
                {{ product.badgeText }}
              </div>

              <div class="flex justify-center items-center h-[260px] mb-4">
                <NuxtImg
                  :src="product.image"
                  :alt="product.title"
                  class="h-full object-contain"
                />
              </div>

              <div class="text-sm text-left flex flex-col gap-2">
                <p class="text-gray-400">{{ product.brand }}</p>
                <h3 class="text-gray-800 font-semibold">{{ product.title }}</h3>
                <div class="text-yellow-400">★</div>
                <div class="flex gap-2 items-center">
                  <span class="text-green-500 font-semibold">{{
                    product.price
                  }}</span>
                  <span class="text-gray-400 line-through">{{
                    product.oldPrice
                  }}</span>
                </div>
              </div>

              <div class="mt-4">
                <div class="bg-gray-200 h-1.5 rounded overflow-hidden">
                  <div
                    class="bg-red-500 h-full"
                    :style="{ width: product.soldPercentage + '%' }"
                  ></div>
                </div>
                <span class="text-xs text-gray-500 block mt-1">
                  {{ soldLabel }} {{ product.sold }}/{{ product.stock }}
                </span>
                <BaseButton
                  :label="bannerButtonText"
                  :icon="cartButtonIcon"
                  class="mt-4 w-full flex items-center justify-center"
                />
              </div>
            </div>
          </div>
          <div
            class="hidden lg:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full w-10 h-10 shadow-md"
          >
            <Icon icon="mdi:chevron-right" width="24" height="24" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from "../ui/BaseButton.vue";
import { Icon } from "@iconify/vue";

defineProps<{
  products: Array<{
    id: number;
    badgeType: string;
    badgeText: string;
    image: string;
    brand: string;
    title: string;
    price: string;
    oldPrice: string;
    sold: number;
    stock: number;
    soldPercentage: number;
  }>;
  bannerImage: string;
  bannerTitle: string;
  bannerButtonText: string;
  bannerButtonIcon: string;
  cartButtonText: string;
  cartButtonIcon: string;
  soldLabel: string;
}>();
</script>
