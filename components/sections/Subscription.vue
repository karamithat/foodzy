<template>
  <section class="relative py-6 bg-white px-4 font-[quicksand]">
    <div class="max-w-[85%] mx-auto flex flex-col gap-12 relative">
      <!-- Main Banner -->
      <div
        class="bg-gradient-to-r from-[#645e33] to-[#222] rounded-2xl relative flex flex-col md:flex-row items-start justify-between overflow-hidden min-h-[400px] p-6 md:p-12"
      >
        <!-- Text Content -->
        <div
          class="text-white flex flex-col gap-6 z-10 relative w-full xl:w-1/3 my-5"
        >
          <h2 class="text-3xl md:text-4xl font-bold leading-snug">
            {{ bannerContent.title }}
          </h2>
          <p class="text-sm md:text-base text-gray-200">
            {{ bannerContent.subtitle }}
            <span class="text-green-400 font-semibold">{{
              bannerContent.highlight
            }}</span>
          </p>

          <!-- Form -->
          <div
            class="w-full max-w-md bg-white rounded-full shadow-sm overflow-hidden md:flex md:items-center"
          >
            <!-- Left: Icon + Input -->
            <div class="flex items-center gap-2 px-4 py-3 text-gray-400 w-full">
              <Icon :icon="formData.icon" width="24" height="24" />
              <input
                type="email"
                :placeholder="formData.placeholder"
                class="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
              />
            </div>

            <!-- Button -->
            <button
              class="w-full md:w-auto bg-[#f44336] text-white mr-7 px-9 py-4 text-sm font-semibold hover:bg-[#d9372d] transition rounded-full md:rounded-r-full"
            >
              {{ formData.buttonText }}
            </button>
          </div>
        </div>

        <!-- Right Image -->
        <NuxtImg
          :src="bannerImage"
          alt="Delivery Man"
          class="hidden md:block absolute bottom-0 right-20 w-[320px] md:w-[420px] lg:w-[540px]"
        />
      </div>

      <!-- Features Section -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1">
        <div
          v-for="feature in features"
          :key="feature.id"
          class="flex items-center gap-3 bg-gray-50 p-4 rounded-xl shadow-sm"
        >
          <NuxtImg :src="feature.icon" alt="icon" class="w-8 h-8" />
          <div>
            <h4 class="font-semibold text-sm">{{ feature.title }}</h4>
            <p class="text-xs text-gray-500">{{ feature.subtitle }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { NuxtImg } from "#components";

defineProps<{
  bannerContent: {
    title: string;
    subtitle: string;
    highlight: string;
  };
  formData: {
    placeholder: string;
    buttonText: string;
    icon: string;
  };
  bannerImage: string;
  features: {
    id: number;
    icon: string;
    title: string;
    subtitle: string;
  }[];
}>();
</script>
