<template>
  <button class="app-btn">
    <slot />
  </button>
</template>

<script>
export default {
  name: "AppButton",
};
</script>

<style scoped>
.app-btn {
  border: none;
  padding: 12px 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
</style>
