const request = require("request");
const cheerio = require("cheerio");

function getInfoFromScorecard(url){
    console.log("from scorecard.js" , url);
    // request(url , cb);
}

module.exports = {
    gifs:getInfoFromScorecard
}