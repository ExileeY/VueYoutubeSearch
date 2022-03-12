<template>
  <div>
    <Teleport to="#loading">
      <Overlay v-if="isLoading">
        <AppLoading/>
      </Overlay>
    </Teleport>

    <ResultItemsList
      v-if="result"
      :result="result"
      @switchPage="switchPage"
    />
  </div>
</template>

<script>
import Overlay from "./Overlay.vue"
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

    const fetchResult = (optionalParams = {}) => {
      const searchParams = {
        ...optionalParams,
        q: route.query.q,
        type: route.query.type,
        maxResults: 20,
      };

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
    const switchPage = (pageToken) => fetchResult({ pageToken });

    fetchResult();
    watch(() => route.query, fetchResult);

    return {
      isLoading,
      result,
      switchPage,
    };
  },
  components: {
    Overlay,
    AppLoading,
    ResultItemsList,
  },
};
</script>

<style scoped></style>
