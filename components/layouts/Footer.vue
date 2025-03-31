<template>
  <footer class="bg-gray-50 font-poppins text-gray-600 py-10 px-4 lg:px-20">
    <div
      class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      <!-- Logo ve iletişim bilgileri -->
      <div>
        <div class="flex items-center mb-4">
          <img
            src="~/assets/images/logo.png"
            alt="Foodzy Logo"
            class="w-10 h-10 rounded-full"
          />
          <div class="ml-2">
            <h3 class="text-xl font-bold text-gray-900">Foodzy</h3>
            <p class="text-sm text-gray-500">A Treasure of Tastes</p>
          </div>
        </div>
        <p class="mb-4">
          FoodTrove is the biggest market of grocery products. Get your daily
          needs from our store.
        </p>
        <ul class="space-y-2">
          <li class="flex items-center gap-2">
            <i class="text-red-500 ri-map-pin-line"></i>
            <span
              >51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783,
              USA.</span
            >
          </li>
          <li class="flex items-center gap-2">
            <i class="text-red-500 ri-mail-line"></i>
            <span>example@email.com</span>
          </li>
          <li class="flex items-center gap-2">
            <i class="text-red-500 ri-phone-line"></i>
            <span>+91 123 4567890</span>
          </li>
        </ul>
      </div>

      <!-- Company Links -->
      <div>
        <h3 class="font-semibold text-gray-900 mb-4">Company</h3>
        <ul class="space-y-3">
          <li><a href="#" class="hover:text-red-500">About Us</a></li>
          <li>
            <a href="#" class="hover:text-red-500">Delivery Information</a>
          </li>
          <li><a href="#" class="hover:text-red-500">Privacy Policy</a></li>
          <li><a href="#" class="hover:text-red-500">Terms & Conditions</a></li>
          <li><a href="#" class="hover:text-red-500">Contact Us</a></li>
          <li><a href="#" class="hover:text-red-500">Support Center</a></li>
        </ul>
      </div>

      <!-- Category Links -->
      <div>
        <h3 class="font-semibold text-gray-900 mb-4">Category</h3>
        <ul class="space-y-3">
          <li><a href="#" class="hover:text-red-500">Dairy & Bakery</a></li>
          <li><a href="#" class="hover:text-red-500">Fruits & Vegetable</a></li>
          <li><a href="#" class="hover:text-red-500">Snack & Spice</a></li>
          <li><a href="#" class="hover:text-red-500">Juice & Drinks</a></li>
          <li><a href="#" class="hover:text-red-500">Chicken & Meat</a></li>
          <li><a href="#" class="hover:text-red-500">Fast Food</a></li>
        </ul>
      </div>

      <!-- Newsletter -->
      <div>
        <h3 class="font-semibold text-gray-900 mb-4">
          Subscribe Our Newsletter
        </h3>
        <div
          class="flex items-center bg-white border rounded-lg overflow-hidden mb-4"
        >
          <input
            type="email"
            placeholder="Search here..."
            class="flex-1 py-2 px-4 outline-none"
          />
          <button class="bg-white text-gray-600 px-3">
            <i class="ri-send-plane-fill"></i>
          </button>
        </div>

        <!-- Sosyal medya iconları -->
        <div class="flex space-x-3 mb-4">
          <a href="#" class="border rounded-md p-2 hover:bg-gray-100">
            <i class="ri-facebook-fill"></i>
          </a>
          <a href="#" class="border rounded-md p-2 hover:bg-gray-100">
            <i class="ri-twitter-x-line"></i>
          </a>
          <a href="#" class="border rounded-md p-2 hover:bg-gray-100">
            <i class="ri-dribbble-line"></i>
          </a>
          <a href="#" class="border rounded-md p-2 hover:bg-gray-100">
            <i class="ri-instagram-line"></i>
          </a>
        </div>

        <!-- Fotoğraf küçük resimler -->
        <div class="grid grid-cols-4 gap-2">
          <img
            src="~/assets/images/logo.png"
            class="rounded-lg object-cover w-full h-12"
            alt="thumb1"
          />
          <img
            src="~/assets/images/logo.png"
            class="rounded-lg object-cover w-full h-12"
            alt="thumb2"
          />
          <img
            src="~/assets/images/logo.png"
            class="rounded-lg object-cover w-full h-12"
            alt="thumb3"
          />
          <img
            src="~/assets/images/logo.png"
            class="rounded-lg object-cover w-full h-12"
            alt="thumb4"
          />
        </div>
      </div>
    </div>

    <!-- Alt footer kısmı -->
    <div
      class="border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm"
    >
      <p>
        © 2025 <span class="text-red-500">Foodzy</span>, All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup></script>
