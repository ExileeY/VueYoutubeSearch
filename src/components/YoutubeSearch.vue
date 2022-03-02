<template>
  <AppForm class="text-center" @submit="handleSubmit">
    <AppSelect name="item-type" v-model="typeInput">
      <option value="channel">Channels</option>
      <option value="video">Videos</option>
      <option value="playlist">Playlists</option>
    </AppSelect>
    <AppInput type="text" v-model="searchInput" />
    <AppButton class="btn-light btn-space-left"> Search </AppButton>
  </AppForm>

  <SearchResult />
</template>

<script>
import AppForm from "./AppForm.vue";
import AppSelect from "./AppSelect.vue";
import AppInput from "./AppInput.vue";
import AppButton from "./AppButton.vue";
import SearchResult from "./SearchResult.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "YoutubeSearch",
  setup() {
    const router = useRouter();

    const searchInput = ref("");
    const typeInput = ref("channel");
    const handleSubmit = () => {
      if (searchInput.value) {
        router.push({
          name: "search",
          query: {
            q: searchInput.value,
            type: typeInput.value,
          },
        });
      }
    };

    return {
      searchInput,
      typeInput,
      handleSubmit,
    };
  },
  components: {
    AppForm,
    AppSelect,
    AppInput,
    AppButton,
    SearchResult,
  },
};
</script>
