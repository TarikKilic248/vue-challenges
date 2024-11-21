<script setup lang="ts">
definePageMeta({
  name: 'about',
});
</script>

<template>
  <div>
    <p>About page</p>
    <ULink
      to="/"
      active-class="text-primary"
      inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
      >Home</ULink
    >
    <ULink
      to="/contact"
      active-class="text-primary"
      inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
      >Contact</ULink
    >
  </div>
</template>
