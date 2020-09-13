const axios= require('axios');
require('dotenv').config();
const countries  = require('./countries.json');

async function getNews(country){
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.NEWS_API_KEY}&pageSize=6`);
    return{
      "country":country,
      'articles' : response.data.articles
    };
  } catch (error) {
    console.error(error);
  }
}

module.exports = async function() {
  let newPromises = countries.map(getNews);
  return Promise.all(newPromises).then(newsObjects=>{
    console.log('newsObjects : ', newsObjects)
    return [].concat.apply([],newsObjects);
  });
}