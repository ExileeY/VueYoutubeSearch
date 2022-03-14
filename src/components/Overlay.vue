<template>
  <div class="overlay">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Overlay",
};
</script>

<style scoped>
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
  cursor: pointer;
}
</style>
