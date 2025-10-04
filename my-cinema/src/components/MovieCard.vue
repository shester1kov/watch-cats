<template>
  <article class="w-40 md:w-44 lg:w-48 rounded-2xl overflow-hidden bg-zinc-800 shadow">
    <div class="aspect-[2/3] bg-zinc-700">
      <!-- Под постер. Пока — заглушка фоном -->
      <img v-if="src" :src="src" :alt="title" class="w-full h-full object-cover" />
    </div>
    <div class="p-2 text-sm truncate">{{ title }}</div>
  </article>
</template>

<script setup lang="ts">
defineProps<{ title: string; src?: string }>()
</script>
