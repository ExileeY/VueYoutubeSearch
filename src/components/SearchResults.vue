<template>
  <div>
    <AppLoading v-if="isLoading" />
    <h2 v-else-if="results">Video Data</h2>
  </div>
</template>

<script>
import AppLoading from "./AppLoading.vue";
import { searchData } from "../api/youtubeApi";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "SearchResults",
  setup() {
    const route = useRoute();

    const isLoading = ref(false);
    const results = ref(null);

    const fetchResults = () => {
      const { search_query } = route.query;

      if (search_query) {
        isLoading.value = true;

        searchData(search_query)
          .then((response) => {
            isLoading.value = false;
            results.value = response.data;
          })
          .catch((error) => {
            isLoading.value = false;
            console.warn(error);
          });
      }
    };

    fetchResults();
    watch(() => route.query, fetchResults);

    return {
      isLoading,
      results,
    };
  },
  components: {
    AppLoading,
  },
};
</script>

<style scoped></style>
