<template>
  <AppForm class="text-center" @submit="handleSubmit">
    <AppInput type="text" v-model="searchableValue" />
    <AppButton class="btn-light btn-space-left"> Search </AppButton>
  </AppForm>

  <div>
    <AppLoading v-if="isLoading"/>
    <h2 v-else-if="data">Video Data</h2>
  </div>
</template>

<script>
import AppForm from "./AppForm.vue";
import AppInput from "./AppInput.vue";
import AppButton from "./AppButton.vue";
import AppLoading from "./AppLoading.vue";
import { searchData } from "../api/youtubeApi";
import { ref } from "vue";

export default {
  name: "YoutubeSearch",
  setup() {
    const searchableValue = ref("");

    const isLoading = ref(false);
    const data = ref(null);

    const handleSubmit = () => {
      isLoading.value = true;

      searchData(searchableValue.value)
        .then((response) => {
          isLoading.value = false;
          data.value = response.data;
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
      data,
    };
  },
  components: {
    AppForm,
    AppInput,
    AppButton,
    AppLoading,
  },
};
</script>
