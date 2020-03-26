var fs = require("fs");
var id =require("uniqid");
var obf = require("javascript-obfuscator");
var md5=require("md5");
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
function replaceAll(str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}
function escapeRegExp(string) {
    return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
function rtag(){
    let file = fs.readFileSync("./files/ids.txt","utf8");


    var arr = shuffle(file.split(";"));
    var finalstr = "";
    for (var i = 0;i < arr.length; i++){
        finalstr += Buffer.from(arr[i].trim()).toString("base64") + ";";
    }
    return finalstr.trim().slice(0,-1);
}
function rjs(){
    let file = fs.readFileSync("./files/js.txt","utf8");


    var arr = shuffle(file.split(";"));
    var finalstr = "";
    for (var i = 0;i < 5; i++){
        finalstr += Buffer.from(arr[i].trim()).toString("base64") + ";";
    }
    return finalstr.trim().slice(0,-1);
}
var script = fs.readFileSync("./files/anti-adblock.js","utf8");
var name  ="a"+ id();

for (var i = 1;i <= 6; i++) {
    script = replaceAll(script,"{f"+i+"}" ,"a"+md5(id()) );

}
script =replaceAll(script,"{classname}" ,name );
script =replaceAll(script,"{tag}" ,rtag() );
script = replaceAll(script,"{script}" ,rjs() );



fs.writeFileSync("./output.txt",script.trim());