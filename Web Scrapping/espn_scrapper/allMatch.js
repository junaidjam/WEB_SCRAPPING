const request = require("request");
const cheerio = require("cheerio");
//const getScorecardObj = require("./scorecards");
const {gifd} = require("./scorecards");
function getAllMatch(url){
    // console.log("from allmatches.js" , url);
    request(url, cb);
}

function cb(err , res , body){
    if(err){
        console.error("error", err);
    }
    else{
        extractAllMatchLink(body);
    }
}

function extractAllMatchLink(html){
    let selecTool = cheerio.load(html);
    let scorecardElemarr = selecTool(`a[data-hover="Scorecard"]`);
    console.log(scorecardElemarr.length);
    //attr method -> Method for getting all attributes and their values
    // let relativeLink = anchorElem.attr("href");
    // console.log(relativeLink);
    // let fullLink  = "https://www.espncricinfo.com" + relativeLink;
    // console.log(fullLink);
}

module.exports = {
    getAllMatch: getAllMatch,
  }