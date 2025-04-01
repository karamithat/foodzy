<template>
  <section class="py-10 bg-white font-[nunito]">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex flex-col lg:flex-row items-start gap-10">
        <!-- Left Side: Image (1/3 genişlik) -->
        <div class="shrink-0 lg:w-1/3 w-full">
          <div
            class="relative w-full h-[320px] lg:h-[360px] overflow-hidden rounded-2xl"
          >
            <NuxtImg
              :src="leftImage"
              alt="Food"
              class="absolute inset-0 w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        <!-- Right Side: Content (2/3 genişlik) -->
        <div class="flex-1 lg:w-2/3">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            {{ heading }}
          </h2>

          <div class="flex flex-col gap-6">
            <div
              v-for="item in features"
              :key="item.id"
              class="flex gap-4 items-start bg-gray-50 p-4 rounded-xl shadow-sm"
            >
              <div
                class="bg-[#f5f0e3] p-3 rounded-full flex items-center justify-center"
              >
                <NuxtImg
                  :src="item.icon"
                  :alt="item.title"
                  class="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h3 class="font-semibold text-lg text-gray-900">
                  {{ item.title }}
                </h3>
                <p class="text-sm text-gray-500">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { NuxtImg } from "#components";

const props = defineProps<{
  leftImage: string;
  heading: string;
  features: Array<{
    id: number;
    title: string;
    description: string;
    icon: string;
  }>;
}>();
</script>
