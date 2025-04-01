<template>
  <section
    class="relative flex items-center justify-center bg-cover bg-center h-[calc(100vh-142px)] text-white overflow-hidden"
    style="background-image: url('/hero-bg.png')"
  >
    <!-- Light Effect -->
    <img
      src="/light.png"
      alt="Light Overlay"
      class="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-65 pointer-events-none z-0"
    />

    <!-- Background Decorative Overlay (Yellow) -->
    <imgx
      src="/bg-image.png"
      alt="Yellow overlay behind content"
      class="absolute w-[90%] max-w-[1600px] left-1/2 -translate-x-1/2 top-[30%] md:top-[28%] z-10"
    />

    <!-- Chili Pepper -->
    <img
      src="/chili-pepper.png"
      alt="Chili"
      class="absolute z-20 w-[203px] h-[283px] -top-[43px] -left-[39px] object-contain"
    />

    <!-- Content -->
    <div
      class="relative container mx-auto px-4 sm:px-6 lg:px-8 z-30 py-16 md:py-24"
    >
      <div
        class="flex flex-col-reverse lg:flex-row justify-between items-center"
      >
        <!-- Left Side Text -->
        <div class="text-center lg:text-left max-w-2xl">
          <h2
            class="font-[inspiration] text-[#CBB777] text-[60px] sm:text-[70px] lg:text-[80px] leading-none -rotate-6"
          >
            Super
          </h2>
          <h1
            class="font-[inter] text-[#FFF4D9] font-bold text-[60px] sm:text-[70px] lg:text-[83px] leading-none -rotate-6"
          >
            Delicious
          </h1>

          <!-- Roast Turkey with bg -->
          <div class="relative mt-4">
            <img
              src="/Mask-group.png"
              alt="bg text mask"
              class="w-full max-w-lg mx-auto"
            />
            <div
              class="absolute inset-0 flex flex-col items-center justify-center font-[krona] text-[#34201B] text-[60px] sm:text-[80px] lg:text-[97px] uppercase -rotate-6"
            >
              <span>Roast</span>
              <span class="mt-2">Turkey</span>
            </div>
          </div>

          <!-- CTA Button -->
          <div class="mt-8 flex justify-center lg:justify-start">
            <button
              class="bg-[#FFF4D9] hover:bg-yellow-100 text-[#34201B] text-lg font-semibold px-6 py-3 rounded-full flex items-center gap-2"
            >
              <Icon name="ri:arrow-right-line" class="w-5 h-5" />
              Order Now
            </button>
          </div>
        </div>

        <!-- Right Image -->
        <div class="w-full max-w-md lg:max-w-xl mb-12 lg:mb-0">
          <img
            src="/roast-turkey.png"
            alt="Roast Turkey"
            class="w-full object-contain"
          />
        </div>
      </div>

      <!-- Social & Call Section -->
      <div
        class="mt-12 flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-white"
      >
        <div class="flex items-center gap-4">
          <span>Follow Us Now</span>
          <Icon
            name="ri:facebook-circle-fill"
            class="w-6 h-6 hover:text-yellow-400"
          />
          <Icon
            name="ri:instagram-fill"
            class="w-6 h-6 hover:text-yellow-400"
          />
          <Icon name="ri:twitter-fill" class="w-6 h-6 hover:text-yellow-400" />
          <Icon name="ri:youtube-fill" class="w-6 h-6 hover:text-yellow-400" />
        </div>

        <div class="text-center">
          <span class="font-semibold">Call Us :</span>
          <span class="ml-1">658-7854-9634</span>
          <p class="text-xs">Typeyourwebsitehere</p>
        </div>
      </div>
    </div>
  </section>
</template>
