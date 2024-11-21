<script setup lang="ts">
definePageMeta({
  name: 'homepage',
  path: '/',
});
</script>
<template>
  <NuxtLayout>
    <template #header>
      <div>
        <p>header</p>
        <ULink
          to="/about"
          active-class="text-primary"
          inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >
          About
        </ULink>
        <ULink
          to="/contact"
          active-class="text-primary"
          inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >
          Contact
        </ULink>
        <Dark />
      </div>
    </template>
    <template #sidebar>
      <div>
        <p>sidebar</p>
        <Count />
      </div>
    </template>
    <template #main>
      <div>
        <p>main</p>
        <Hello />
        <Button btn-text="link" />
        <List />
      </div>
    </template>
  </NuxtLayout>
</template>
