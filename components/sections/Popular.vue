<template>
  <section class="py-10 flex flex-col items-center font-[inter] px-4">
    <span class="uppercase text-[#f53e32] text-s font-bold tracking-[3px] mb-2">
      {{ subtitle }}
    </span>
    <h2 class="font-bold text-4xl mb-8 text-center">{{ title }}</h2>

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
          <NuxtImg
            :src="category.image"
            :alt="category.title"
            width="48"
            height="48"
            class="object-contain"
          />
        </div>
        <h3 class="text-gray-800 font-semibold text-base text-center">
          {{ category.title }}
        </h3>
        <span class="text-gray-500 text-sm text-center">
          ({{ category.count }} {{ category.subtitle }})
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
  categories: Array<{
    id: number;
    title: string;
    subtitle: string;
    count: number;
    image: string;
  }>;
}>();
</script>
