import axios from "axios";

const baseUrl = "https://pixabay.com/api/";
const apiKey = "23539275-fb90155ac37cf87d4395ca2a5";


export default async function useRequest(value, page) {

  const result = await axios
    .get(
      `${baseUrl}?q=${value}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => {
      return ({ images: response.data.hits, loaded: true });
    })
  return result;
};
