<template>
  <button
    class="bg-[#f53e32] text-white py-2 px-4 rounded-lg hover:bg-red-600 transition flex items-center gap-2"
    @click="$emit('click')"
  >
    <Icon :icon="icon" width="18" height="18" />
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

defineProps<{
  label: string;
  icon: string;
}>();
</script>
