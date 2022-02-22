<template>
  <form @submit.prevent="$emit('submit')">
    <slot />
  </form>
</template>

<script>
export default {
  name: "AppForm",
  emits: ["submit"],
};
</script>
