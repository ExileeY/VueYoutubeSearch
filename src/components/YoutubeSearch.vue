<template>
  <AppForm class="center" @submit="fetchVideos">
    <AppInput type="text" v-model="searchableValue" />
    <AppButton class="btn-light btn-space-left"> Search </AppButton>
  </AppForm>
</template>

<script>
import AppForm from "./AppForm.vue";
import AppInput from "./AppInput.vue";
import AppButton from "./AppButton.vue";
import { ref } from "vue";

export default {
  name: "YoutubeSearch",
  setup() {
    const searchableValue = ref("");

    const fetchVideos = () => {
      console.log(searchableValue);
    };

    return {
      searchableValue,
      fetchVideos,
    };
  },
  components: {
    AppForm,
    AppInput,
    AppButton,
  },
};
</script>
