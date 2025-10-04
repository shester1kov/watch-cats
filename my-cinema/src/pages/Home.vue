<template>
  <section>
    <h1 class="text-3xl font-semibold mb-6">История просмотра</h1>
    <div class="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
      <MovieCard title="Марсианин" />
      <MovieCard title="Parker" />
      <MovieCard title="Titanic" />
      <MovieCard title="Бэтмен" />
    </div>
  </section>
</template>

<script setup lang="ts">
import MovieCard from '../components/MovieCard.vue'
</script>
