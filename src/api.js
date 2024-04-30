// import axios from "axios";

// export const fetchArticles = async (query, page) => {
//   const response = await axios.get(`http://hn.algolia.com/api/v1/search`, {
//     params: { query, page, hitsPerPage: 10 },
//   });

//   return response.data.hits;
// };

import axios from "axios";

const ACCESS_KEY = "8YUKB2KYb8l-Sn0ibgXsbqHbGXhWTizQm6zvfasOX5M";

export const fetchArticles = async (query, page) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=15&client_id=${ACCESS_KEY}`
  );

  return response.data;
};
