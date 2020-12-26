var x = true;
chrome.storage.local.get(null,function (obj){
    x = JSON.parse(JSON.stringify(obj))['onoroff'];
});
chrome.storage.local.set({"onoroff":x},function (){
    console.log("A Storage Succesful");
});
