<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const isMenuOpen = ref(false);

const props = defineProps<{
  links: Array<{
    id: number;
    label: string;
    url: string;
    hasDropdown: boolean;
  }>;
  users: Array<{
    id: number;
    label: string;
    icon: string;
    url: string;
  }>;
  phones: Array<{
    id: number;
    icon: string;
    tel: string;
  }>;
  titles: Array<{
    id: number;
    title: string;
    subtitle: string;
  }>;
}>();
</script>

<template>
  <header class="bg-white">
    <!-- Top Navigation Bar (full width 1920px) -->
    <div class="shadow-md">
      <div
        class="mx-auto max-w-screen-xl h-[55px] flex justify-between items-center px-4"
      >
        <!-- Mobile Hamburger Menu -->
        <button @click="isMenuOpen = !isMenuOpen" class="p-2">
          <img src="~/assets/images/toggle.png" alt="Toggle" />
        </button>

        <!-- Desktop Navigation Menu -->
        <ul
          class="hidden lg:flex space-x-6 font-[Poppins] font-medium text-sm leading-5 tracking-[0.48px] items-center"
        >
          <li v-for="link in links" :key="link.id">
            <NuxtLink
              :to="link.url"
              class="relative flex items-center text-black hover:text-red-500 transition-colors duration-300 group"
            >
              {{ link.label }}
              <Icon
                v-if="link.hasDropdown"
                icon="material-symbols:keyboard-arrow-down-rounded"
                width="24"
                height="24"
                class="ml-1"
              />

              <!-- Hover underline effect -->
              <span
                class="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-red-500 transition-all duration-300"
              ></span>
            </NuxtLink>
          </li>
        </ul>

        <!-- Right phone number -->
        <div
          v-for="phone in phones"
          :key="phone.id"
          class="flex items-center gap-2 text-[15px] font-segoe tracking-[0.48px]"
        >
          <Icon :icon="phone.icon" class="w-5 h-5" />
          <span>{{ phone.tel }}</span>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <transition name="fade">
      <nav
        v-if="isMenuOpen"
        class="absolute md:hidden top-[55px] w-full bg-white border-y border-gray-200 px-4 py-2 z-50"
      >
        <NuxtLink
          v-for="link in links"
          :key="link.id"
          :to="link.url"
          class="block py-2 hover:text-red-500"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
    </transition>

    <!-- Bottom Section (full width 1920px) -->
    <div class="py-2 shadow-sm">
      <div
        class="max-w-screen-xl mx-auto px-4 flex flex-wrap items-center justify-between gap-y-3"
      >
        <!-- Logo -->
        <div class="flex items-center gap-2 flex-shrink-0 order-1 font-[inter]">
          <img
            src="~/assets/images/logo.png"
            alt="Foodzy"
            width="82"
            height="82"
          />
          <div v-for="title in titles" :key="title.id">
            <h1 class="font-[900] text-[24px]">{{ title.title }}</h1>
            <p class="text-xs font-semibold text-[#]">{{ title.subtitle }}</p>
          </div>
        </div>

        <!-- Account Actions -->
        <div
          class="flex items-center gap-4 text-sm flex-shrink-0 order-2 lg:order-3 font-poppins font-medium text-[15px] tracking-[0.48px]"
        >
          <NuxtLink
            v-for="user in users"
            :key="user.id"
            :to="user.url"
            class="flex items-center gap-2 hover:text-red-500"
          >
            <Icon :icon="user.icon" width="21" height="19" />
            <span class="hidden sm:inline">{{ user.label }}</span>
          </NuxtLink>
        </div>
        <!-- Search Bar -->
        <div
          class="w-full lg:w-auto lg:flex-grow lg:max-w-xl order-3 lg:order-2 flex border border-[#64b496] rounded-md overflow-hidden"
        >
          <input
            type="text"
            placeholder="Search For items..."
            class="px-4 py-2 outline-none flex-grow min-w-0"
          />
          <div
            class="relative inline-flex items-center border-l border-[#64b496] flex-shrink-0"
          >
            <select
              class="appearance-none bg-white px-4 py-2 outline-none pr-8 text-sm text-gray-700"
            >
              <option>All Categories</option>
              <option>Category 1</option>
              <option>Category 2</option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500"
            >
              <Icon icon="mdi:chevron-down" class="w-5 h-5" />
            </div>
          </div>
          <button
            class="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 flex-shrink-0 border-none"
          >
            <Icon icon="fluent:search-20-regular" width="20" height="20" />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
