import $ from "jquery";

const useScrollBehavior = () => {
  const scrollToTop = ({ duration = 3000, delay = 0 } = {}) => {
    setTimeout(() => {
      $("html, body").animate({ scrollTop: 0 }, duration);
    }, delay)
  };

  return { scrollToTop };
};

export default useScrollBehavior;
