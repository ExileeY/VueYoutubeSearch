<template>
  <div>
    <Teleport to="#loading">
      <Overlay v-if="isLoading">
        <AppLoading />
      </Overlay>
    </Teleport>

    <ResultItemsList v-if="result" :result="result" @switchPage="switchPage" />
  </div>
</template>

<script>
import Overlay from "./Overlay.vue";
import AppLoading from "./AppLoading.vue";
import ResultItemsList from "./ResultItemsList.vue";
import { searchData } from "../api/youtubeApi";
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import useScrollBehavior from "../hooks/useScrollBehavior";

export default {
  name: "SearchResult",
  setup() {
    const router = useRouter();
    const route = useRoute();
    const { scrollToTop } = useScrollBehavior();

    const isLoading = ref(false);
    const result = ref(null);

    const fetchResult = () => {
      const { q, type, pageToken } = route.query;

      const searchParams = {
        q,
        type,
        pageToken,
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
    const switchPage = (pageToken) => {
      router.push({
        name: "search",
        query: {
          ...route.query,
          pageToken,
        },
      });
      scrollToTop({ delay: 1000 });
    };

    fetchResult();
    watch(
      [
        () => route.query.q,
        () => route.query.type,
        () => route.query.pageToken,
      ],
      fetchResult
    );

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
