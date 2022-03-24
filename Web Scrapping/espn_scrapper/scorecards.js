const request = require("request");
const cheerio = require("cheerio");

function getInfoFromScorecard(url){
    // console.log("from scorecard.js" , url);
    // we have a url of a scorecard , we want to get html of that scorecard
    request(url , cb);
}

function cb(err , res, body){
    if(err){
        console.log(err);
    }
    else{
        getMatchDetails(body);
    }
}
function getMatchDetails(html){
    //selectoo contains html of ith score card
    let selecTool = cheerio.load(html);

    //1. get team names
    let teamNames = selecTool(".name-detail>.name-link");
    // console.log(teamNames.text());

    let team1 = selecTool(teamNames[0]).text();
    let team2 = selecTool(teamNames[1]).text();
    console.log("\nMATCH--->" + team1 + " V/S " + team2);
    
    // 2. get venue
    // 3. get date
    let desc = selecTool(".match-header-info.match-info-MATCH")
    // console,log(desc.text());

    let descArr = desc.text().split(",");
    // console.log(descArr);
    let dateOfMatch = descArr[2];
    let venueOfMatch = descArr[1];
    // console.log("\nMatch ------------");
    console.log(dateOfMatch);
    console.log(venueOfMatch);
    
    // 4. get result
    let matchResEle = selecTool(
        ".match-info.match-info-MATCH.match-info-MATCH-half-width>.status-text"
      );
      console.log(matchResEle.text());
}

module.exports = {
    gifs:getInfoFromScorecard
}