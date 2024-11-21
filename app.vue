<script setup lang="ts">
useSeoMeta({
  title: 'Vue Challenge',
  ogTitle: 'Vue Challenge',
  description: 'This is a challenge to the Vue Challenge',
  ogDescription: 'This is a challenge to the Vue Challenge',
  ogImage: '/public/images/bg.jpg',
});
useHead({
  title: 'Vue Challenges',
  meta: [{ name: 'Vue Challenges', content: 'Vue Challenges' }],
  bodyAttrs: {
    class: 'test',
  },
});
</script>

<template>
  <NuxtPage />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
