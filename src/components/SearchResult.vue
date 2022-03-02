<template>
  <div>
    <AppLoading v-if="isLoading" />
    <ResultItemsList
      v-else-if="result"
      :result="result"
      @prevPage="prevPage"
      @nextPage="nextPage"
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
    const { q: searchableValue } = route.query;

    const isLoading = ref(false);
    const result = ref(null);

    const fetchResult = () => {
      if (searchableValue) {
        isLoading.value = true;

        searchData({ q: searchableValue })
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
    const nextPage = () => {
      isLoading.value = true

      searchData({
        q: searchableValue,
        pageToken: result.value.nextPageToken
      })
        .then((response) => {
          isLoading.value = false;
          result.value = response.data;
        })
        .catch((error) => {
          isLoading.value = false;
          console.warn(error)
        })
    }
    const prevPage = () => {
      isLoading.value = true

      searchData({
        q: searchableValue,
        pageToken: result.value.prevPageToken
      })
        .then((response) => {
          isLoading.value = false;
          result.value = response.data;
        })
        .catch((error) => {
          isLoading.value = false;
          console.warn(error)
        })
    }

    fetchResult();
    watch(() => route.query, fetchResult);

    return {
      isLoading,
      result,
      prevPage,
      nextPage,
    };
  },
  components: {
    AppLoading,
    ResultItemsList,
  },
};
</script>

<style scoped></style>
