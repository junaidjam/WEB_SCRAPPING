let request = require("request");
//cheerio
//cheerio parses HTML and it traverse the html so that the data can be manipulated acoording user's need
let cheerio = require("cheerio");
request("https://www.worldometers.info/coronavirus/", cb);

function cb(err , res , body){
    if (err){
        console.log("error" , err);
    }
    else{
        handlehtml(body);
    }
}

function handlehtml(html){
    let selecTool = cheerio.load(html);

    // let coronaStats = selecTool(".maincounter-number");

    //   console.log(coronaStats.text());

    let coronaStatsArr = selecTool(".maincounter-number");

    let totalCases = selecTool(coronaStatsArr[0]).text();
    console.log("Total Cases ->" + totalCases);

    let totalDeaths = selecTool(coronaStatsArr[1]).text();
    console.log("Total Cases ->" + totalDeaths);

    let totalRecovered = selecTool(coronaStatsArr[2]).text();
    console.log("Total Cases ->" + totalRecovered);
    
}