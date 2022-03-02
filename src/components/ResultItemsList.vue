<template>
  <div class="list-items grid space-arround">
    <div v-for="item in items" :key="item.id" class="item-card">
      <img
        class="block-center"
        :src="item.snippet.thumbnails.medium.url"
        :alt="item.snippet.title"
      />
      <h2 class="text-center">
        {{ item.snippet.title }}
      </h2>
      <p>{{ item.snippet.description }}</p>
    </div>
  </div>

  <div class="nav-buttons space-arround">
    <AppButton class="btn-light" :disabled="!hasPrevPage">Back</AppButton>
    <AppButton class="btn-light" :disabled="!hasNextPage">Next</AppButton>
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
  setup(props) {
    return {
      hasPrevPage: computed(() => !!props.result.prevPageToken),
      hasNextPage: computed(() => !!props.result.nextPageToken),
      items: computed(() => props.result.items),
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
