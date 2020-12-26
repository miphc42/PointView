var check = true;

document.addEventListener("DOMContentLoaded",function (){
  chrome.storage.local.get(null,function (obj){
    console.log(JSON.stringify(obj));
      var x = JSON.parse(JSON.stringify(obj))['onoroff'];
      console.log(x);
      check = x;
      if(x){
        document.getElementsByTagName("html")[0].style.backgroundColor =  '#B76FB7';
        document.getElementById('switchy').checked = false;
      }else{
        document.getElementsByTagName("html")[0].style.backgroundColor = '#7FBF7F';
        document.getElementById('switchy').checked = true;
      }
  });
  document.getElementById('switchy').onclick = function(){
    console.log("fdsaf")
    if(check){
    document.getElementsByTagName("html")[0].style.backgroundColor = '#7FBF7F';
    check = false;
    console.log("AAAAFASHFJKAHFJKAHF");
    chrome.storage.local.clear();
    chrome.storage.local.set({"onoroff":false},function (){
      console.log("Storage Succesful");
    });
    chrome.tabs.reload();
    }else{
        document.getElementsByTagName("html")[0].style.backgroundColor =  '#B76FB7';
        check = true;
        console.log("PPPPP")
        chrome.storage.local.clear();
        chrome.storage.local.set({"onoroff":true},function (){
          console.log("Storage Succesful");
        });
        chrome.tabs.reload();
    }
}

});

var MOUSE_VISITED_CLASSNAME = 'crx_mouse_visited';
var prevDOM = null;
var iframe = document.createElement('iframe');
var p = document.createElement('p');
p.id = 'linky';
iframe.id='linky2'
iframe.is = "x-frame-bypass";
p.style.display = "inline-block";

past = true
function upTo(el, tagName) {
    tagName = tagName.toLowerCase();
    if(el.nodeName=="A"){
        return el;
    }
    while (el && el.parentNode) {
      el = el.parentNode;
      if (el.tagName && el.tagName.toLowerCase() == tagName) {
        return el;
      }
      console.log("TAG",el.tagName);
    }
    return null;
  }

document.addEventListener("mousemove", mouseTrack);

function mouseTrack(e){
  if(!check){
    let srcElement = e.srcElement;
    var x = upTo(srcElement, 'A');
    if (x==null&&prevDOM != srcElement && srcElement.nodeName != 'SPAN' && srcElement.nodeName != 'A'&& iframe!=null&&srcElement.nodeName !="IFRAME") {
        past = true;
        iframe.remove();
        p.remove();
    }
    else if (past&&(srcElement.nodeName == 'A'||x!=null)) {
        if (prevDOM != null) {
            prevDOM.classList.remove(MOUSE_VISITED_CLASSNAME);
        }
        srcElement.classList.add(MOUSE_VISITED_CLASSNAME);
        prevDOM = srcElement;  
        var html = x.href;
        try {
            document.body.appendChild(p);
            // p.style.top = e.pageY + 'px'
            // p.style.left = e.pageX + 'px'
            // p.innerHTML = html;
            document.body.appendChild(iframe);
            iframe.contentWindow.document.open();
            iframe.contentWindow.document.write(html);
            iframe.contentWindow.document.location.href=html;
            iframe.contentWindow.document.close();
            iframe.style.top = e.pageY + 'px'
            iframe.style.left = e.pageX  +'px'
          }
          catch(err) {
            console.log("Errored");
          }
          past = false
        console.dir(srcElement);
    }
  }
}