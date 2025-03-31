<template>
  <section class="py-10 bg-white">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center gap-8">
        <!-- Left Side: Image -->
        <div class="md:w-1/2 w-full">
          <img
            src="../../assets/images/logo.png"
            alt="Food"
            class="rounded-2xl object-cover w-full h-auto"
          />
        </div>

        <!-- Right Side: Content -->
        <div class="md:w-1/2 w-full">
          <h2 class="text-3xl font-bold text-gray-800 mb-6">
            Why People Choose us?
          </h2>

          <div class="flex flex-col gap-6">
            <div
              v-for="item in features"
              :key="item.id"
              class="flex gap-4 items-start bg-gray-50 p-4 rounded-xl shadow-md"
            >
              <div
                class="bg-[#f5f0e3] p-3 rounded-full flex items-center justify-center"
              >
                <img
                  :src="item.icon"
                  :alt="item.title"
                  class="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h3 class="font-semibold text-lg text-gray-900">
                  {{ item.title }}
                </h3>
                <p class="text-sm text-gray-500">{{ item.description }}</p>
              </div>
            </div>
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
    title: "Convenient and Reliable",
    description:
      "Whether you dine in, take out, or order delivery, our service is convenient, fast, and reliable, making mealtime hassle-free.",
    icon: "/images/delivery-icon.png",
  },
  {
    id: 2,
    title: "Variety of Options",
    description:
      "From hearty meals to light snacks, we offer a wide range of options to suit every taste and craving.",
    icon: "/images/menu-icon.png",
  },
  {
    id: 3,
    title: "Eat Burger",
    description:
      "Our burgers are grilled to perfection, with juicy patties and flavorful toppings that make every bite a delicious experience.",
    icon: "/images/burger-icon.png",
  },
];
</script>

<style scoped>
@media (max-width: 768px) {
  h2 {
    text-align: center;
  }
}
</style>
