<template>
  <div>
    <AppLoading v-if="isLoading" />
    <ResultItemsList v-else-if="result" :result="result"/>
  </div>
</template>

<script>
import AppLoading from "./AppLoading.vue";
import { searchData } from "../api/youtubeApi";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "SearchResult",
  setup() {
    const route = useRoute();

    const isLoading = ref(false);
    const result = ref(null);

    const fetchResult = () => {
      const { q: searchableValue } = route.query;

      if (searchableValue) {
        isLoading.value = true;

        searchData(searchableValue)
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

    fetchResult();
    watch(() => route.query, fetchResult);

    return {
      isLoading,
      result,
    };
  },
  components: {
    AppLoading,
  },
};
</script>

<style scoped></style>
