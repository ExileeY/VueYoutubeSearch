<template>
  <AppForm class="text-center" @submit="handleSubmit">
    <AppInput type="text" v-model="searchInput" />
    <AppButton class="btn-light btn-space-left"> Search </AppButton>
  </AppForm>

  <SearchResults />
</template>

<script>
import AppForm from "./AppForm.vue";
import AppInput from "./AppInput.vue";
import AppButton from "./AppButton.vue";
import SearchResults from "./SearchResults.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "YoutubeSearch",
  setup() {
    const router = useRouter();

    const searchInput = ref("");
    const handleSubmit = () => {
      if (searchInput.value) {
        router.push({
          name: "search",
          query: {
            search_query: searchInput.value,
          },
        });
      }
    };

    return {
      searchInput,
      handleSubmit,
    };
  },
  components: {
    AppForm,
    AppInput,
    AppButton,
    SearchResults,
  },
};
</script>
