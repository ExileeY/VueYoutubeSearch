<template>
  <input
    class="app-input"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
  export default {
    name: 'AppInput',
    props: ['modelValue'],
    emits: ['onUpdate:modelValue']
  }
</script>

<style scoped>
  .app-input {
    padding: 10px 8px;
    margin: 8px 0;
  }
</style>