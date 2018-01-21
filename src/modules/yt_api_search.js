var axios = require('axios');

function getApiData(options, callback){
    axios.get('https://www.googleapis.com/youtube/v3/search',{
       params:{
           part: 'snippet',
           q : options.term,
           maxResults : options.results,
           key: options.key
       }
   })
   .then(function(res){
    callback(res.data.items)
   })
   .catch(function(error){
       console.log(error);
   })
}
module.exports = getApiData;