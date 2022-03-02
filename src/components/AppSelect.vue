<template>
  <select
    class="app-select"
    @change="$emit('update:modelValue', $event.target.value)"
  >
    <slot />
  </select>
</template>

<script>
export default {
  name: "AppSelect",
};
</script>

<style scoped>
.app-select {
  padding: 10px 8px;
  margin: 8px 3px;
}
</style>
