import axios from "axios";

const api = "https://www.googleapis.com/youtube/v3";

const baseParams = {
  key: process.env.VUE_APP_YOUTUBE_API_KEY,
};

export const searchData = (optionalParams = {}) => {
  const url = `${api}/search`;

  return axios.get(url, {
    params: {
      ...baseParams,
      ...optionalParams,
      part: "snippet",
    },
  });
};
