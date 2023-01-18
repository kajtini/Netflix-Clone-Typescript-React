const API_KEY = "df6849d7a57f7af857e1c8a989d68981";

const requests = {
  fetchTopRated: `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchPopular: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;
