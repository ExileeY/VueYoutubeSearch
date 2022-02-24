<template>
  <AppForm class="center-text" @submit="handleSubmit">
    <AppInput type="text" v-model="searchableValue" />
    <AppButton class="btn-light btn-space-left"> Search </AppButton>
  </AppForm>

  <h2 v-if="isLoading">Loading</h2>
  <h2 v-else-if="videosList">Video Data</h2>
</template>

<script>
import AppForm from "./AppForm.vue";
import AppInput from "./AppInput.vue";
import AppButton from "./AppButton.vue";
import { fetchVideos } from "../api/youtubeApi";
import { ref } from "vue";

export default {
  name: "YoutubeSearch",
  setup() {
    const searchableValue = ref("");

    const isLoading = ref(false);
    const videosList = ref(null);

    const handleSubmit = () => {
      isLoading.value = true;

      fetchVideos(searchableValue.value)
        .then((response) => {
          isLoading.value = false;
          videosList.value = response.data;
        })
        .catch((error) => {
          isLoading.value = false;
          console.warn(error);
        });
    };

    return {
      searchableValue,
      handleSubmit,
      isLoading,
      videosList,
    };
  },
  components: {
    AppForm,
    AppInput,
    AppButton,
  },
};
</script>
