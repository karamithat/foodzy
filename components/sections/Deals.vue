<template>
  <section class="py-10 bg-white">
    <div class="max-w-[1600px] mx-auto px-4">
      <!-- Header -->
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-3xl font-bold text-gray-900">{{ settings.title }}</h2>
        <a
          :href="settings.moreLink"
          class="text-gray-600 hover:text-gray-800 text-sm"
        >
          {{ settings.moreText }}
        </a>
      </div>

      <!-- Card Container -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="product in products"
          :key="product.id"
          class="relative w-full max-w-sm mx-auto"
        >
          <!-- Ürün Görseli -->
          <img
            :src="product.image"
            :alt="product.title"
            class="w-full h-80 object-cover rounded-2xl"
          />

          <!-- Ürün Bilgi Kutusu -->
          <div
            class="absolute left-1/2 -translate-x-1/2 -bottom-6 bg-white w-[90%] rounded-2xl shadow-md px-5 py-4 z-10"
          >
            <h3 class="text-base font-semibold text-gray-800 mb-1 leading-snug">
              {{ product.title }}
            </h3>

            <!-- Rating -->
            <div class="flex items-center gap-7 text-sm text-gray-500">
              <span class="text-yellow-400">★</span>
              <span class="ml-1 text-gray-400">({{ product.rating }})</span>
            </div>

            <!-- Marka -->
            <p class="text-sm text-gray-400 mt-1">
              By <span class="text-green-500">{{ product.brand }}</span>
            </p>

            <!-- Fiyat ve Buton -->
            <div class="flex justify-between items-center mt-3">
              <div>
                <span class="text-lg font-semibold text-green-500">
                  ${{ product.price }}
                </span>
                <span class="text-xs text-gray-400 line-through ml-1">
                  ${{ product.oldPrice }}
                </span>
              </div>
              <BaseButton
                :label="settings.buttonText"
                :icon="settings.buttonIcon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from "@/components/ui/BaseButton.vue";
defineProps<{
  products: Array<{
    id: number;
    title: string;
    rating: string;
    brand: string;
    price: string;
    oldPrice: string;
    image: string;
  }>;
  settings: {
    title: string;
    moreText: string;
    moreLink: string;
    buttonText: string;
    buttonIcon: string;
  };
}>();
</script>
