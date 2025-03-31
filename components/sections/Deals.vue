<template>
  <section class="py-10 bg-white">
    <div class="max-w-6xl mx-auto px-4">
      <!-- Header -->
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-3xl font-bold text-gray-900">Deals Of The Day</h2>
        <a href="#" class="text-gray-600 hover:text-gray-800 text-sm"
          >All Deals ></a
        >
      </div>

      <!-- Cards Container -->
      <div class="overflow-x-auto no-scrollbar">
        <div class="flex gap-6">
          <div
            v-for="product in products"
            :key="product.id"
            class="min-w-[280px] bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img
              :src="product.image"
              :alt="product.title"
              class="h-44 w-full object-cover"
            />
            <div class="p-4">
              <h3 class="text-sm font-semibold text-gray-800 line-clamp-2 h-12">
                {{ product.title }}
              </h3>
              <div class="flex items-center mt-1 text-sm text-gray-500">
                <span class="text-yellow-400">★</span>
                <span class="ml-1">({{ product.rating }})</span>
              </div>
              <div class="text-sm text-gray-400 mt-1">
                By <span class="text-green-500">{{ product.brand }}</span>
              </div>
              <div class="flex items-center justify-between mt-3">
                <div>
                  <span class="text-lg font-semibold text-green-500">
                    ${{ product.price }}
                  </span>
                  <span class="text-xs line-through text-gray-400">
                    ${{ product.oldPrice }}
                  </span>
                </div>
                <button
                  class="bg-red-500 hover:bg-red-600 text-white text-sm py-1 px-3 rounded"
                >
                  🛒 Add
                </button>
              </div>
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
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    rating: 4.0,
    brand: "NestFood",
    price: "32.85",
    oldPrice: "33.8",
    image: "/images/product1.png",
  },
  {
    id: 2,
    title: "Perdue Simply Smart Organics Gluten Free",
    rating: 4.0,
    brand: "Old El Paso",
    price: "24.85",
    oldPrice: "26.8",
    image: "/images/product2.png",
  },
  {
    id: 3,
    title: "Signature Wood-Fired Mushroom and Caramelized",
    rating: 3.0,
    brand: "Progresso",
    price: "12.85",
    oldPrice: "13.8",
    image: "/images/product3.png",
  },
  {
    id: 4,
    title: "Simply Lemonade with Raspberry Juice",
    rating: 3.0,
    brand: "Yoplait",
    price: "15.85",
    oldPrice: "16.8",
    image: "/images/product4.png",
  },
  {
    id: 5,
    title: "Organic Fresh Apple Juice",
    rating: 4.5,
    brand: "FreshCo",
    price: "9.99",
    oldPrice: "12.5",
    image: "/images/product5.png",
  },
  {
    id: 6,
    title: "Natural Almond Butter Spread",
    rating: 4.7,
    brand: "Almondco",
    price: "11.75",
    oldPrice: "13.5",
    image: "/images/product6.png",
  },
  {
    id: 7,
    title: "Organic Greek Yogurt",
    rating: 4.2,
    brand: "GreekDeli",
    price: "7.95",
    oldPrice: "9.0",
    image: "/images/product7.png",
  },
  {
    id: 8,
    title: "Gluten Free Multigrain Crackers",
    rating: 4.8,
    brand: "CrackIt",
    price: "5.99",
    oldPrice: "7.2",
    image: "/images/product8.png",
  },
];
</script>

<style>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
