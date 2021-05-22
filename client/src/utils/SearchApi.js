import axios from "axios";

export default {
  GetImages: async function (value) {
    const options = {
      request: "GET",
      url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI",
      params: {
        q: value,
        pageNumber: "1",
        pageSize: "6",
        autoCorrect: "false",
        safeSearch: "true"
      },
      headers: {
        "x-rapidapi-key": "e5b88ed468msh9dca9a423cb0f1dp171c0ajsn7a8491e207dc",
        "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
       "Access-Control-Allow-Origin": "*"
      },
    };

    return axios.request(options)
   
    ;
  },
};
