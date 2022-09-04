const itemService  = require("../services/Item.Service");


const searchItems = async (query) => {
   const items = await itemService.searchItems(query); 
   let response = filterSearchResults(items)
   return response;
};
const getDetailsById = async (id) => {
   let items = await itemService.getDetailsById(id); 
   let response = filterDetailsResponse(items);
   return response;
};

function filterDetailsResponse(data){

   let response ={"author": {
      "name": "Kevin",
      "lastname": "Lewicki"
    },
  }
  response.item = {...data[0], ...data[1]}
  return response;
}

function filterSearchResults(data){
   let response =
   {
     "author": {
       "name": "Kevin",
       "lastname": "Lewicki"
     },
   }
 
   let categorias = data.filters[0]?.values[0]?.path_from_root?.map(e => e.name);
   response.categories = categorias
   response.items = data.results
   return response
}


module.exports = { searchItems ,getDetailsById};
