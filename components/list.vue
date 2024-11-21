<script setup lang="ts">
import { defineComponent, h, ref } from 'vue';

/**
 * Implement a functional component :
 * 1. Render the list elements (ul/li) with the list data
 * 2. Change the list item text color to red when clicked.
 */
const ListComponent = defineComponent({
  props: {
    list: {
      type: Array,
      required: true,
    },
    activeIndex: {
      type: Number,
      required: true,
    },
  },
  emits: ['toggle'],
  setup(props, { emit }) {
    return () =>
      h(
        'ul',
        props.list.map(({ name }, index) => {
          return h(
            'li',
            {
              style: {
                color: props.activeIndex === index ? 'red' : '',
              },
              onClick: () => emit('toggle', index),
            },
            name
          );
        })
      );
  },
});

const list = ref([{ name: 'John' }, { name: 'Doe' }, { name: 'Smith' }]);

const activeIndex = ref(0);

function toggle(index: number) {
  activeIndex.value = index;
}
</script>

<template>
  <ListComponent :list="list" :active-index="activeIndex" @toggle="toggle" />
</template>
