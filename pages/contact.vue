<script setup lang="ts">
definePageMeta({
  name: 'contact',
});
</script>

<template>
  <div>
    <p>Contact page</p>
    <ULink
      to="/"
      active-class="text-primary"
      inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
      >Home</ULink
    >
    <ULink
      to="/about"
      active-class="text-primary"
      inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
      >About</ULink
    >
  </div>
</template>
