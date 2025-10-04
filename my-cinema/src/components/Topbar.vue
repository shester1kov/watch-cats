<script setup lang="ts">
import { Search } from 'lucide-vue-next'
</script>


<template>
  <header class="sticky top-0 z-10 bg-[--color-bg]/90 backdrop-blur supports-[backdrop-filter]:bg-[--color-bg]/60">
    <div class="h-16 px-6 flex items-center gap-4">
      <!-- пустое место, чтобы выровнять с сайдбаром на мобильных можно скрыть -->
      <div class="w-0 md:w-2" />
      <!-- поиск -->
      <div class="flex-1 flex justify-center">
        <div class="w-full max-w-3xl relative">
          <input
            type="text"
            placeholder="Поиск фильмов"
            class="w-full rounded-2xl bg-zinc-800/80 border border-zinc-700 h-11 px-5 pr-12 outline-none focus:ring-2 ring-[--color-accent]"
          />
          <button class="absolute right-1 top-1.5 h-8 w-8 rounded-xl grid place-items-center hover:bg-zinc-700 text-[--color-accent]">
            <Search class="size-5" />
          </button>
        </div>
      </div>
      <!-- профиль -->
      <RouterLink to="/profile" class="ml-auto flex items-center gap-3">
        <span class="hidden sm:block text-sm text-zinc-300">Профиль</span>
        <div class="size-10 rounded-full bg-zinc-700 grid place-items-center">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-5 0-9 2.5-9 5v3h18v-3c0-2.5-4-5-9-5z"/></svg>
        </div>
      </RouterLink>
    </div>
  </header>
</template>

<script setup lang="ts"></script>
