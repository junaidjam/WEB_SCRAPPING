let request = require("request");
request("https://www.worldometers.info/coronavirus/", cb);

function cb(err , res , body){
    console.log("error" , err);
    // console.log(res);
    console.log(body);
}