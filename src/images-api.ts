import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export type Image = {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  description: string;
};

export type ImagesData = {
  results: Image[];
  total: number;
  total_pages: number;
};

export const getImages = async (
  topic: string,
  currentPage: number
): Promise<ImagesData> => {
  const response = await axios.get<ImagesData>("/search/photos", {
    params: {
      client_id: "tQOWcEhyyiKRs0sf4Raz_hFvY4mwmzU-LTkGX0hQOrw",
      query: topic,
      page: currentPage,
      per_page: 15,
    },
  });
  console.log(response.data);
  return response.data;
};
