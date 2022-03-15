<template>
  <div class="list-items grid space-arround">
    <div v-for="item in items" :key="item.id" class="item-card">
      <img
        class="block-center"
        :src="item.snippet.thumbnails.medium.url"
        :alt="item.snippet.title"
      />

      <a :href="itemUrl({ itemType: $route.query.type, itemId: item.id })">
        <h2 class="text-center">{{ item.snippet.title }}</h2>
      </a>

      <p>{{ item.snippet.description }}</p>
    </div>
  </div>

  <div class="nav-buttons space-arround">
    <AppButton
      class="btn-light"
      :disabled="!hasPrevPage"
      @click="$emit('switchPage', result.prevPageToken)"
    >
      Back
    </AppButton>

    <AppButton
      class="btn-light"
      :disabled="!hasNextPage"
      @click="$emit('switchPage', result.nextPageToken)"
    >
      Next
    </AppButton>
  </div>
</template>

<script>
import AppButton from "./AppButton.vue";
import { computed } from "@vue/runtime-core";

export default {
  name: "ResultItemsList",
  props: {
    result: {
      type: Object,
      required: true,
    },
  },
  emits: ["switchPage"],
  setup(props) {
    return {
      hasPrevPage: computed(() => !!props.result.prevPageToken),
      hasNextPage: computed(() => !!props.result.nextPageToken),
      items: computed(() => props.result.items),
      itemUrl: computed(() => ({ itemType, itemId }) => {
        switch (itemType) {
          case "video":
            return `https://www.youtube.com/watch?v=${itemId.videoId}`;
          case "playlist":
            return `https://www.youtube.com/playlist?list=${itemId.playlistId}`;
          case "channel":
            return `https://www.youtube.com/channel/${itemId.channelId}`;
          default:
            return null;
        }
      }),
    };
  },
  components: {
    AppButton,
  },
};
</script>

<style scoped>
.list-items {
  margin: 20px 0;
}
.item-card {
  width: 320px;
  margin-top: 50px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 3px;
}
.item-card a {
  cursor: pointer;
  color: #000;
  text-decoration: none;
}
.grid {
  display: flex;
  flex-wrap: wrap;
}
.space-arround {
  display: flex;
  justify-content: space-around;
}
.nav-buttons button {
  width: 150px;
}
</style>
