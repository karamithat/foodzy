<template>
  <section class="py-10 px-4 bg-white font-[inter]">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div
        class="flex flex-col md:flex-row md:justify-between md:items-center mb-8"
      >
        <div>
          <span
            class="uppercase text-red-500 text-xs font-semibold tracking-[3px]"
          >
            {{ subtitle }}
          </span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            {{ titleLine1 }}<br />{{ titleLine2 }}
          </h2>
        </div>

        <!-- Carousel Buttons -->
        <div class="flex gap-6 mt-4 md:mt-0">
          <button
            class="w-10 h-10 rounded-full bg-gray-100 text-gray-500 hover:bg-red-500 hover:text-white transition cursor-pointer"
          >
            &lt;
          </button>
          <button
            class="w-10 h-10 rounded-full bg-red-500 text-white hover:bg-red-600 transition cursor-pointer"
          >
            &gt;
          </button>
        </div>
      </div>

      <!-- Cards -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative"
      >
        <div
          v-for="(dish, index) in localDishes"
          :key="dish.id"
          class="relative bg-white w-full h-[340px] rounded-xl shadow-[2px_10px_30px_rgba(0,0,0,0.1)] p-6 hover:shadow-xl transition flex flex-col justify-start items-center"
        >
          <!-- Heart Button -->
          <button
            @click="toggleFavorite(index)"
            class="absolute top-0 right-0 bg-red-500 text-white p-4 rounded-tr-[17px] rounded-bl-3xl hover:bg-red-600 transition cursor-pointer"
          >
            <Icon
              :icon="dish.isFavorite ? 'mdi:heart' : 'mdi:cards-heart-outline'"
              width="24"
              height="24"
            />
          </button>

          <NuxtImg
            :src="dish.image"
            :alt="dish.title"
            class="w-48 h-48 object-cover rounded-full mb-3"
          />

          <div class="w-full text-left">
            <h3 class="text-lg font-semibold text-gray-800 mb-1">
              {{ dish.title }}
            </h3>
            <p class="text-sm text-gray-500">{{ dish.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import { NuxtImg } from "#components";

const props = defineProps<{
  subtitle: string;
  titleLine1: string;
  titleLine2: string;
  dishes: {
    id: number;
    title: string;
    description: string;
    image: string;
    isFavorite: boolean;
  }[];
}>();

const localDishes = ref([...props.dishes]);

const toggleFavorite = (index: number) => {
  localDishes.value[index].isFavorite = !localDishes.value[index].isFavorite;
};
</script>
