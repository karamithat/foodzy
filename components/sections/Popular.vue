<template>
  <section class="py-10 flex flex-col items-center font-[inter] px-4">
    <span
      class="uppercase text-custom-red text-xs font-semibold tracking-[3px] mb-2 text-custom-red"
    >
      Customer Favorites
    </span>
    <h2 class="font-bold text-3xl text-gray-900 mb-8 text-center">
      Popular Categories
    </h2>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-6xl"
    >
      <div
        v-for="category in categories"
        :key="category.id"
        class="flex flex-col items-center bg-white rounded-2xl py-6 px-4 cursor-pointer shadow-[2px_10px_30px_rgba(0,0,0,0.1)] hover:shadow-xl transition-shadow duration-300"
      >
        <div
          class="bg-[#f5f0e3] rounded-full w-20 h-20 flex items-center justify-center mb-4"
        >
          <img
            :src="category.image"
            :alt="category.title"
            class="w-12 h-12 object-contain"
          />
        </div>
        <h3 class="text-gray-800 font-semibold text-base text-center">
          {{ category.title }}
        </h3>
        <span class="text-gray-500 text-sm text-center"
          >({{ category.count }} {{ category.subtitle }})</span
        >
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import burgerImg from "~/assets/images/burger.png";
import sandwichImg from "~/assets/images/sandwich.png";
import dessertImg from "~/assets/images/dessert.png";
import juiceImg from "~/assets/images/juice.png";
import saladImg from "~/assets/images/salad.png";
const categories = [
  {
    id: 1,
    title: "Main Dish",
    subtitle: "dishes",
    count: 86,
    image: burgerImg,
  },
  {
    id: 2,
    title: "Break Fast",
    subtitle: "break fast",
    count: 12,
    image: sandwichImg,
  },
  {
    id: 3,
    title: "Dessert",
    subtitle: "dessert",
    count: 48,
    image: dessertImg,
  },
  {
    id: 4,
    title: "Browse All",
    subtitle: "Items",
    count: 255,
    image: juiceImg,
  },
  {
    id: 5,
    title: "Breakfast Food",
    subtitle: "Items",
    count: 205,
    image: saladImg,
  },
];
</script>
