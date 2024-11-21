<script setup lang="ts">
</script>

<template>
  <div class="fixed h-full w-full bg-gradient-to-r from-orange-100 via-orange-300 to-stone-600">
    <!-- Header Slot'u -->
    <div
      class="flex w-full h-1/6 mb-5 p-2 dark:bg-gray-900 bg-gray-100 lg:rounded-md
      shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
    >
      <slot name="header" />
    </div>

    <!-- Ana İçerik ve Yan Menü Slot'ları -->
    <div
      class="flex justify-between w-full h-full poppins gap-5"
    >
      <!-- Sidebar Slot'u -->
      <div
        class="flex flex-col w-4/12 h-full p-2 dark:bg-gray-900 bg-gray-100 lg:rounded-md
      shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
      >
        <slot name="sidebar" />
      </div>

      <!-- Main Slot'u -->
      <div
        class="flex flex-col w-8/12 h-full p-2 dark:bg-gray-900 bg-gray-100 lg:rounded-md
      shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
      >
        <slot name="main" />
      </div>
    </div>
  </div>
</template>
