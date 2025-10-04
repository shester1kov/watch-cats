<template>
  <section>
    <h1 class="text-3xl font-semibold mb-6">Рекомендации</h1>
    <div class="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
      <MovieCard title="Фильм 1" />
      <MovieCard title="Фильм 2" />
      <MovieCard title="Фильм 3" />
      <MovieCard title="Фильм 4" />
    </div>
  </section>
</template>

<script setup lang="ts">
import MovieCard from '../components/MovieCard.vue'
</script>
