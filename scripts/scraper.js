var axios = require("axios");
var cheerio = require("cheerio");

function scrapeSite(){

  return axios.get("http://www.nytimes.com").then(function(respose){
    var $ = cheerio.load(response.data);

    var articles = [];

    //class from the element on the NYT site
    $(".assetWrapper").each(function (i, element) {

      //search for and grab the information from the site and store it in an object
      var article = {
        headline: $(this).find("h2").text().trim(),
        url: "http://www.nytimes.com" + $(this).find("a").attr("href"),
        summary: $(this).find("p").text().trim()
      };

      articles.push(article);
  })
  return articles;
})}

module.exports = scrapeSite;