let request = require("request");
request("https://www.ugaoo.com/live-plants.html", cb);

function cb(err , res , body){
    console.log("error" , err);
    // console.log(res);
    console.log(body);
}