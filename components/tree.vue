<script setup lang="ts">
interface TreeData {
  key: string
  title: string
  children: TreeData[]
}
defineProps<{ data: TreeData[] }>()
</script>

<template>
  <ul>
    <li v-for="item in data" :key="item.key">
      {{ item.title }}
      <TreeComponent v-if="item.children" :data="item.children" />
    </li>
  </ul>
</template>
