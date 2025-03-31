<template>
  <section class="py-10 px-4 bg-white">
    <div class="max-w-6xl mx-auto">
      <div
        class="flex flex-col md:flex-row md:justify-between md:items-center mb-8"
      >
        <div>
          <span
            class="uppercase text-red-500 text-xs font-semibold tracking-[3px]"
          >
            Special Dishes
          </span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Standout Dishes<br />From Our Menu
          </h2>
        </div>
        <!-- Carousel Buttons -->
        <div class="flex gap-2 mt-4 md:mt-0">
          <button
            class="w-10 h-10 rounded-full bg-gray-100 text-gray-500 hover:bg-red-500 hover:text-white transition"
          >
            <span>&lt;</span>
          </button>
          <button
            class="w-10 h-10 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
          >
            <span>&gt;</span>
          </button>
        </div>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="dish in dishes"
          :key="dish.id"
          class="relative bg-white rounded-xl shadow-[2px_10px_30px_rgba(0,0,0,0.1)] p-6 hover:shadow-xl transition"
        >
          <button
            class="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-tr-xl rounded-bl-xl hover:bg-red-600 transition"
          >
            ❤️
          </button>
          <img
            :src="dish.image"
            :alt="dish.title"
            class="w-32 h-32 object-cover rounded-full mx-auto mb-4"
          />
          <h3 class="text-lg font-semibold text-center text-gray-800">
            {{ dish.title }}
          </h3>
          <p class="text-sm text-gray-500 text-center">
            {{ dish.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const dishes = [
  {
    id: 1,
    title: "Fattoush salad",
    description: "Description of the item",
    image: "/images/fattoush-salad.png",
  },
  {
    id: 2,
    title: "Vegetable salad",
    description: "Description of the item",
    image: "/images/vegetable-salad.png",
  },
  {
    id: 3,
    title: "Egg vegi salad",
    description: "Description of the item",
    image: "/images/egg-vegi-salad.png",
  },
];
</script>
