const { default: axios } = require("axios");

const searchItems = async (query) => {
  const data = await axios({
    method: "get",
    url: `https://api.mercadolibre.com/sites/MLA/search?q=${query}`,
    responseType: "json",
  }).then((res) => res.data);
  return data;
};
const getDetailsById = async (id) => {
  const data = await Promise.allSettled([
    axios({
      method: "get",
      url: `https://api.mercadolibre.com/items/${id}`,
      responseType: "json",
    }),
    axios({
      method: "get",
      url: `https://api.mercadolibre.com/items/${id}/description`,
      responseType: "json",
    }),
  ]).then((results) => results.map((result) => result.value.data));

  return data;
};

module.exports = { searchItems, getDetailsById };
