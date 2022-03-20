import $ from "jquery";

const useScrollBehavior = () => {
  const scrollToTop = ({ duration } = { duration: 1000 }) => {
    $("html, body").animate({ scrollTop: 0 }, duration);
  };

  return { scrollToTop };
};

export default useScrollBehavior;
