const GOOGLE_API_KEY = "AIzaSyDbW_oPhAp309IgCXXgD-5lDXmo8sCicdo";

const GOOGLE_API_KEY2 = "AIzaSyBEaIh3AuOoEc9gRLiFKi0fwz_wFnFzeQA";

const GOOGLE_API_KEY3 = "AIzaSyBnf3Y0qm3-Gg9HMtFgcCWNbwrhGHnmcGI";

const GOOGLE_API_KEY4 = "AIzaSyBg_nk3cxIJi9kbfWkEI4j_EfYuYLBCaw4";

export const YOUTUBE_VIDEOS_API =
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=US&key=` +
  GOOGLE_API_KEY;

export const YOUTUBE_CHANNELS_API =
  `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=` +
  GOOGLE_API_KEY +
  `&id=`;

export const YOUTUBE_VIDEO_PLAYER_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  GOOGLE_API_KEY +
  "&id=";

export const COMMENTS_API =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&key=" +
  GOOGLE_API_KEY + "&videoId=";

export const buildVideoApiUrl = (videoId) => {
  return (
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=` +
    GOOGLE_API_KEY
  );
};

// https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=AIzaSyDbW_oPhAp309IgCXXgD-5lDXmo8sCicdo&id=gHnWkmW6qRI

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const searchResultsApi = (searchQuery) => {
  return (
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchQuery}&key=` +
    GOOGLE_API_KEY
  );
};

export const LIVE_CHAT_LIMIT = 25;
