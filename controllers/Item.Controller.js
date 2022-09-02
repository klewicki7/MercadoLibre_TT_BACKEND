const itemService  = require("../services/Item.Service");


const searchItems = async (query) => {
   const items = await itemService.searchItems(query); 
   return items;
};
const getDetailsById = async (id) => {
   let items = await itemService.getDetailsById(id); 
   return items;
};

module.exports = { searchItems ,getDetailsById};
