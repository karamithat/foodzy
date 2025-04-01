<template>
  <section
    class="relative bg-cover bg-center text-white overflow-hidden min-h-[600px] sm:min-h-[600px] md:min-h-[650px] lg:min-h-[700px]"
    :style="`background-image: url('${data.backgroundImage}')`"
  >
    <img
      :src="data.lightOverlay"
      alt="Light Overlay"
      class="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-65 pointer-events-none z-0"
    />

    <img
      :src="data.blackOverlay"
      alt="Yellow overlay"
      class="absolute top-0 left-0 h-full pointer-events-none z-10"
    />

    <img
      :src="data.chiliImage"
      alt="Chili"
      class="absolute z-20 object-contain w-[80px] sm:w-[120px] md:w-[150px] lg:w-[180px] top-[40px] sm:top-[100px] md:top-[120px] left-[10px] sm:left-[60px] md:left-[80px]"
    />

    <!-- Main Content -->
    <div
      class="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20"
    >
      <div
        class="flex flex-col-reverse lg:flex-row justify-between items-center"
      >
        <div class="flex flex-col justify-center text-center max-w-2xl w-full">
          <h2
            class="font-[inspiration] text-[#CBB777] text-[42px] sm:text-[58px] lg:text-[70px] leading-none -rotate-6"
          >
            {{ data.superText }}
          </h2>
          <h1
            class="font-[inter] text-[#FFF4D9] font-bold text-[42px] sm:text-[58px] lg:text-[72px] leading-none -rotate-6"
          >
            {{ data.deliciousText }}
          </h1>

          <div class="relative mt-5">
            <img
              :src="data.textMaskImage"
              alt="Mask"
              class="w-full max-w-lg mx-auto"
            />
            <div
              class="absolute inset-0 flex flex-col items-center justify-center font-[krona_one] text-[#34201B] text-[28px] sm:text-[48px] lg:text-[60px] uppercase -rotate-6"
            >
              <span>{{ data.maskTextLine1 }}</span>
              <span class="mt-1">{{ data.maskTextLine2 }}</span>
            </div>
          </div>
        </div>

        <div class="w-full max-w-sm lg:max-w-xl mb-10 lg:mb-0">
          <img
            :src="data.heroImage"
            :alt="data.heroAlt"
            class="w-full object-contain"
          />
        </div>
      </div>

      <div
        class="mt-10 lg:mx-20 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 text-sm text-white font-[montserrat]"
      >
        <div class="w-full lg:w-auto flex justify-center lg:justify-start">
          <button
            class="flex overflow-hidden rounded-full shadow-md cursor-pointer"
          >
            <div class="bg-[#3b261c] flex items-center justify-center px-4">
              <Icon :icon="data.buttonIcon" class="w-5 h-5 text-[#d9c48c]" />
            </div>
            <div
              class="bg-[#d9c48c] text-[#3b261c] px-8 py-4 text-sm font-bold flex items-center"
            >
              {{ data.buttonText }}
            </div>
          </button>
        </div>

        <!--  Social & Contact -->
        <div
          class="flex flex-col items-center lg:items-end w-full lg:w-auto text-center lg:text-right"
        >
          <p class="mb-2 font-semibold text-[#cbb678]">
            {{ data.followUsText }}
          </p>
          <div class="flex items-center gap-4 mb-4">
            <div
              v-for="(social, index) in data.socialIcons"
              :key="index"
              class="w-9 h-9 flex items-center justify-center border border-white rounded-full hover:border-yellow-400 transition"
            >
              <Icon
                :icon="social"
                class="w-5 h-5 text-white hover:text-yellow-400"
              />
            </div>
          </div>
          <div>
            <span class="font-semibold text-[#cbb678]">{{
              data.callLabel
            }}</span>
            <span class="ml-1 text-[#cbb678]">{{ data.phone }}</span>
            <p class="text-xs">{{ data.website }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

defineProps<{
  data: {
    backgroundImage: string;
    lightOverlay: string;
    blackOverlay: string;
    chiliImage: string;
    superText: string;
    deliciousText: string;
    textMaskImage: string;
    maskTextLine1: string;
    maskTextLine2: string;
    heroImage: string;
    heroAlt: string;
    buttonIcon: string;
    buttonText: string;
    followUsText: string;
    socialIcons: string[];
    callLabel: string;
    phone: string;
    website: string;
  };
}>();
</script>
