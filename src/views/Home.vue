<template>
  <div class="home">
    <YoutubeSearch />
  </div>
</template>

<script>
import YoutubeSearch from "@/components/YoutubeSearch.vue";

export default {
  name: "Home",
  components: {
    YoutubeSearch,
  },
};
</script>
