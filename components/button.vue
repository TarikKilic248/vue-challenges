<script setup lang="ts">
defineProps({
  btnText: {
    type: String,
    required: true,
    default: 'default',
    validator: (value) => {
      if (typeof value !== 'string') return false;
      return ['primary', 'ghost', 'dashed', 'link', 'text', 'default'].includes(
        value
      );
    },
  },
});
</script>

<template>
  <button>{{ btnText }}</button>
</template>

<style scoped></style>
