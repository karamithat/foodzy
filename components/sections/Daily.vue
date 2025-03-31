<template>
  <section class="max-w-7xl mx-auto py-10 flex-wrap gap-6 px-4">
    <div class="flex gap-6 flex-col md:flex-row">
      <!-- Left Banner -->
      <div
        class="bg-cover bg-center md:w-1/4 rounded-xl relative overflow-hidden h-[350px] md:h-auto"
        style="background-image: url('/images/banner.jpg')"
      >
        <div
          class="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-8"
        >
          <h2 class="text-white font-semibold text-3xl mb-4">
            Bring nature into your home
          </h2>
          <button
            class="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
          >
            Shop Now →
          </button>
        </div>
      </div>

      <!-- Products -->
      <div class="flex-1 overflow-x-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            v-for="product in products"
            :key="product.id"
            class="bg-white rounded-xl shadow-[2px_10px_30px_rgba(0,0,0,0.1)] p-4 relative"
          >
            <div
              class="absolute top-0 left-0 px-3 py-1 rounded-br-lg rounded-tl-xl text-white text-sm font-semibold"
              :class="{
                'bg-green-500': product.badgeType === 'save',
                'bg-blue-400': product.badgeType === 'sale',
                'bg-orange-500': product.badgeType === 'best',
              }"
            >
              {{ product.badgeText }}
            </div>

            <img
              :src="product.image"
              :alt="product.title"
              class="h-32 mx-auto my-4 object-contain"
            />

            <div class="text-sm">
              <p class="text-gray-400">{{ product.brand }}</p>
              <h3 class="text-gray-800 font-semibold">{{ product.title }}</h3>
              <div class="text-yellow-400">★</div>
              <div class="flex gap-2 items-center">
                <span class="text-green-500 font-semibold">{{
                  product.price
                }}</span>
                <span class="text-gray-400 line-through">{{
                  product.oldPrice
                }}</span>
              </div>
              <div class="mt-2">
                <div class="bg-gray-200 h-1.5 rounded overflow-hidden">
                  <div
                    class="bg-red-500 h-full"
                    :style="{ width: product.soldPercentage + '%' }"
                  ></div>
                </div>
                <span class="text-xs text-gray-500"
                  >Sold: {{ product.sold }}/{{ product.stock }}</span
                >
              </div>
              <button
                class="w-full bg-red-500 hover:bg-red-600 text-white py-2 mt-2 rounded-lg"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const products = [
  {
    id: 1,
    badgeType: "save",
    badgeText: "Save 35%",
    image: "/images/product1.png",
    brand: "Hodo Foods",
    title: "All Natural Italian-Style Chicken Meatballs",
    price: "$238.85",
    oldPrice: "$245.8",
    sold: 90,
    stock: 120,
    soldPercentage: 75,
  },
  {
    id: 2,
    badgeType: "sale",
    badgeText: "Sale",
    image: "/images/product2.png",
    brand: "Hodo Foods",
    title: "Angie’s Boomchickapop Sweet and womnies",
    price: "$238.85",
    oldPrice: "$245.8",
    sold: 90,
    stock: 120,
    soldPercentage: 75,
  },
  {
    id: 3,
    badgeType: "best",
    badgeText: "Best sale",
    image: "/images/product3.png",
    brand: "Hodo Foods",
    title: "Foster Farms Takeout Crispy Classic",
    price: "$238.85",
    oldPrice: "$245.8",
    sold: 90,
    stock: 120,
    soldPercentage: 75,
  },
  {
    id: 4,
    badgeType: "save",
    badgeText: "Save 15%",
    image: "/images/product4.png",
    brand: "Hodo Foods",
    title: "Blue Diamond Almonds Lightly Salted",
    price: "$238.85",
    oldPrice: "$245.8",
    sold: 90,
    stock: 120,
    soldPercentage: 75,
  },
];
</script>
