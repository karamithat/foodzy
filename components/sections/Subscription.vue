<template>
  <section class="py-12 bg-white px-4">
    <div class="max-w-6xl mx-auto flex flex-col gap-8">
      <!-- Main Banner -->
      <div
        class="bg-gradient-to-r from-[#645e33] to-[#222] rounded-2xl flex flex-col md:flex-row items-center justify-between overflow-hidden"
      >
        <!-- Left Content -->
        <div class="px-6 py-10 md:p-12 text-white flex flex-col gap-6 md:w-2/3">
          <h2 class="text-3xl md:text-4xl font-bold">
            Stay home & get your daily<br />
            needs from our shop
          </h2>
          <p class="text-sm md:text-base text-gray-200">
            Start Your Daily Shopping with
            <span class="text-green-400 font-semibold">Nest Mart</span>
          </p>

          <!-- Subscription Form -->
          <div class="flex w-full">
            <input
              type="email"
              placeholder="Your email address"
              class="w-full py-3 px-4 rounded-l-full text-sm outline-none text-gray-700"
            />
            <button
              class="bg-red-500 text-white px-6 py-3 rounded-r-full hover:bg-red-600 transition"
            >
              Subscribe
            </button>
          </div>
        </div>

        <!-- Right Image -->
        <div class="hidden md:block md:w-1/3 relative">
          <img
            src="../../assets/images/logo.png"
            alt="Delivery Man"
            class="object-contain w-full h-full"
          />
        </div>
      </div>

      <!-- Features Section -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div
          v-for="feature in features"
          :key="feature.id"
          class="flex items-center gap-3 bg-gray-50 p-4 rounded-xl shadow-sm"
        >
          <img :src="feature.icon" alt="icon" class="w-8 h-8" />
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
const features = [
  {
    id: 1,
    icon: "/images/prices-icon.png",
    title: "Best prices & offers",
    subtitle: "Orders $50 or more",
  },
  {
    id: 2,
    icon: "/images/delivery-icon.png",
    title: "Free delivery",
    subtitle: "24/7 amazing services",
  },
  {
    id: 3,
    icon: "/images/daily-deal-icon.png",
    title: "Great daily deal",
    subtitle: "When you sign up",
  },
  {
    id: 4,
    icon: "/images/assortment-icon.png",
    title: "Wide assortment",
    subtitle: "Mega Discounts",
  },
  {
    id: 5,
    icon: "/images/returns-icon.png",
    title: "Easy returns",
    subtitle: "Within 30 days",
  },
];
</script>

<style scoped>
@media (max-width: 768px) {
  h2 {
    text-align: center;
  }

  .bg-gradient-to-r {
    text-align: center;
  }
}
</style>
