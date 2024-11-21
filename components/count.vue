<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const count = ref(0)
let intervalId
const theme = ref('red')

const colors = ['blue', 'yellow', 'red', 'green']

onMounted(() => {
  intervalId = setInterval(() => {
    count.value++
  }, 1000)
  setInterval(() => {
    theme.value = colors[Math.floor(Math.random() * 4)]
  }, 1000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <span>Make it not to change: <p>{{ count }}</p></span>
</template>

<style scoped>
p {
  color: v-bind(theme);
  font-size: 44px;
  transition: color 0.5s ease-in-out;
}

:global(span){
    background-color: #f1f1f1;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #333;
    font-size: 20px;
}
</style>
