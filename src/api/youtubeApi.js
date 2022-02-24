import axios from "axios";

const url = `https://www.googleapis.com/youtube/v3/search?key=${process.env.VUE_APP_YOUTUBE_API_KEY}`;

export const fetchVideos = (searchableValue) => {
  return axios.get(url, {
    params: {
      part: "snippet",
      q: searchableValue,
    },
  });
};
