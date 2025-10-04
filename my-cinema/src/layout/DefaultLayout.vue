<template>
  <div class="min-h-screen bg-[--color-bg] text-zinc-200 flex bg-zinc-950">
    <Sidebar />
    <div class="flex-1 min-w-0">
      <Topbar />
      <main class="p-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from '../components/Sidebar.vue'
import Topbar from '../components/Topbar.vue'
</script>
