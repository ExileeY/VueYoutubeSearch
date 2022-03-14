import { ref, onBeforeUnmount } from "vue";

const useScrollListener = () => {
  const position = ref({
    posHeight: 0,
    posWidth: 0,
  });

  const scrollListener = () => {
    position.value = {
      posHeight: Math.round(window.scrollY),
      posWidth: Math.round(window.scrollX),
    };
  };

  window.addEventListener("scroll", scrollListener);

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", scrollListener);
  });

  return position;
};

export default useScrollListener;
