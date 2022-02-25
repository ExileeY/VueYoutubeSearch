<template>
  <p class="content">
    {{ content }}
  </p>
</template>

<script>
  import { ref, toRefs, onBeforeUnmount } from 'vue'

  export default {
    name: 'AppLoading',
    props: {
      text: {
        type: String,
        default: 'Loading',
      },
      duration: {
        type: Number,
        default: 300,
      },
    },
    setup(props) {
      const { text, duration } = toRefs(props)

      const content = ref(text.value)

      const intervalId = window.setInterval(() => {
        content.value === text.value + "..."
          ? content.value = text.value
          : content.value += '.'
      }, duration.value)

      onBeforeUnmount(() => {
        window.clearInterval(intervalId)
      })

      return {
        content
      }
    },
  };
</script>

<style scoped>
  .content {
    font-size: 35px;
    position: absolute;
    left: 0;
    right: 0;
    margin-top: 20px;
    text-align: center;
  }
</style>
