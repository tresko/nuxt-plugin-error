<template>
  <div>
    Count: {{ todoStore.count }}

    <button @click="todoStore.addCount">Add count</button>
  </div>
</template>

<script setup lang="ts">
import {useTodoStore} from '~/stores//todoStore'

const todoStore = useTodoStore()
</script>
