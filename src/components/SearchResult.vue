<template>
  <div>
    <AppLoading v-if="isLoading" />
    <ResultItemsList
      v-else-if="result"
      :result="result"
      @switchPage="switchPage"
    />
  </div>
</template>

<script>
import AppLoading from "./AppLoading.vue";
import ResultItemsList from "./ResultItemsList.vue";
import { searchData } from "../api/youtubeApi";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "SearchResult",
  setup() {
    const route = useRoute();

    const isLoading = ref(false);
    const result = ref(null);

    const defaultSearchParams = {
      q: route.query.q,
    };
    const fetchResult = (searchParams = defaultSearchParams) => {
      if (searchParams.q) {
        isLoading.value = true;

        searchData(searchParams)
          .then((response) => {
            isLoading.value = false;
            result.value = response.data;
          })
          .catch((error) => {
            isLoading.value = false;
            console.warn(error);
          });
      }
    };
    const switchPage = (pageToken) => {
      fetchResult({
        ...defaultSearchParams,
        pageToken,
      });
    };

    fetchResult();
    watch(() => route.query, fetchResult);

    return {
      isLoading,
      result,
      switchPage,
    };
  },
  components: {
    AppLoading,
    ResultItemsList,
  },
};
</script>

<style scoped></style>
