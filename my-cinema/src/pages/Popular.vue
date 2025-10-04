<template>
  <section>
    <h1 class="text-3xl font-semibold mb-6">Популярное</h1>
    <div class="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
      <MovieCard title="Начало" />
      <MovieCard title="Мстители" />
      <MovieCard title="Поездка" />
      <MovieCard title="Переводчик" />
      <MovieCard title="Avatar" />
    </div>
  </section>
</template>

<script setup lang="ts">
import MovieCard from '../components/MovieCard.vue'
</script>
