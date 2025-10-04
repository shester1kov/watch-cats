<script setup lang="ts">
import { Home, Star, Video, Settings } from 'lucide-vue-next'
import { useRoute, RouterLink } from 'vue-router'
const route = useRoute()
</script>

<template>
  <aside class="w-16 bg-[--color-panel] h-screen sticky top-0 flex flex-col items-center gap-4 py-4">
    <RouterLink to="/" class="p-3 rounded-2xl hover:bg-zinc-700" :class="{ 'text-[--color-accent] bg-[--color-accent]/20': route.name === 'home' }">
      <Home class="size-6" />
    </RouterLink>

    <RouterLink to="/popular" class="p-3 rounded-2xl hover:bg-zinc-700" :class="{ 'text-[--color-accent] bg-[--color-accent]/20': route.name === 'popular' }">
      <Video class="size-6" />
    </RouterLink>

    <RouterLink to="/recs" class="p-3 rounded-2xl hover:bg-zinc-700" :class="{ 'text-[--color-accent] bg-[--color-accent]/20': route.name === 'recs' }">
      <Star class="size-6" />
    </RouterLink>

    <RouterLink to="/settings" class="p-3 rounded-2xl hover:bg-zinc-700 mt-auto" :class="{ 'text-[--color-accent] bg-[--color-accent]/20': route.name === 'settings' }">
      <Settings class="size-6" />
    </RouterLink>


  </aside>
</template>


