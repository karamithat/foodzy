<template>
  <footer
    class="bg-gray-50 font-[poppins] text-gray-600 py-10 px-4 lg:px-20 text-sm"
  >
    <div
      class="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      <!-- Logo and Contact -->
      <div>
        <div class="flex items-center mb-4">
          <NuxtImg
            :src="data.logo.src"
            :alt="data.logo.alt"
            class="w-10 h-10 rounded-full"
          />
          <div class="ml-2">
            <h3 class="text-xl font-bold text-gray-900">
              {{ data.logo.name }}
            </h3>
            <p class="text-xs text-gray-500">{{ data.logo.tagline }}</p>
          </div>
        </div>
        <p class="mb-4">{{ data.logo.description }}</p>
        <ul class="space-y-2">
          <li
            v-for="(contact, index) in data.contact"
            :key="index"
            class="flex items-center gap-2"
          >
            <Icon :icon="contact.icon" class="text-red-500 w-5 h-5" />
            <span>{{ contact.text }}</span>
          </li>
        </ul>
      </div>

      <!-- Company Links -->
      <div>
        <h3 class="font-semibold text-gray-900 mb-4 text-base md:text-lg">
          {{ data.company.title }}
        </h3>
        <ul class="space-y-3">
          <li v-for="(link, index) in data.company.links" :key="index">
            <NuxtLink :to="link.href" class="hover:text-red-500">{{
              link.label
            }}</NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Category Links -->
      <div>
        <h3 class="font-semibold text-gray-900 mb-4 text-base md:text-lg">
          {{ data.category.title }}
        </h3>
        <ul class="space-y-3">
          <li v-for="(link, index) in data.category.links" :key="index">
            <NuxtLink :to="link.href" class="hover:text-red-500">{{
              link.label
            }}</NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Newsletter -->
      <div>
        <h3 class="font-semibold text-gray-900 mb-4 text-base md:text-lg">
          {{ data.newsletter.title }}
        </h3>
        <div
          class="flex items-center bg-white border rounded-lg overflow-hidden mb-4"
        >
          <input
            type="email"
            :placeholder="data.newsletter.placeholder"
            class="flex-1 py-2 px-4 outline-none text-sm"
          />
          <button class="bg-white text-gray-600 px-3">
            <Icon :icon="data.newsletter.icon" />
          </button>
        </div>

        <!-- Social Media -->
        <div class="flex space-x-1 mb-4">
          <a
            v-for="(social, index) in data.socials"
            :key="index"
            :href="social.href"
            class="border rounded-md p-2 hover:bg-gray-100 bg-white"
          >
            <Icon :icon="social.icon" />
          </a>
        </div>

        <div class="grid grid-cols-5 gap-2">
          <NuxtImg
            v-for="(thumb, index) in data.thumbnails"
            :key="index"
            :src="thumb"
            class="rounded-lg object-cover w-full h-12"
            :alt="`thumb${index + 1}`"
          />
        </div>
      </div>
    </div>

    <!-- Bottom footer -->
    <div class="mt-8 border-t border-gray-200">
      <div
        class="max-w-screen-xl mx-auto pt-6 px-4 lg:px-20 text-sm text-center text-gray-600"
      >
        <p>
          © 2025
          <span class="text-red-500 font-semibold">{{ data.bottom.brand }}</span
          >,
          {{ data.bottom.text }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { NuxtImg } from "#components";
import { defineProps } from "vue";

const props = defineProps<{
  data: {
    logo: {
      src: string;
      alt: string;
      name: string;
      tagline: string;
      description: string;
    };
    contact: { icon: string; text: string }[];
    company: {
      title: string;
      links: { label: string; href: string }[];
    };
    category: {
      title: string;
      links: { label: string; href: string }[];
    };
    newsletter: {
      title: string;
      placeholder: string;
      icon: string;
    };
    socials: { icon: string; href: string }[];
    thumbnails: string[];
    bottom: {
      brand: string;
      text: string;
    };
  };
}>();
</script>
