
// document.getElementById('activate').onclick = function (){

// }
var MOUSE_VISITED_CLASSNAME = 'crx_mouse_visited';

var prevDOM = null;
var iframe = document.createElement('iframe');
var p = document.createElement('p');
document.addEventListener('mousemove', function (e) {
    let srcElement = e.srcElement;
    console.log(srcElement.result)
   
    if (prevDOM != srcElement && srcElement.nodeName != 'A'&& iframe!=null&&srcElement.nodeName !="IFRAME") {
        iframe.remove();
        p.remove();
        console.log("REMOVE");
    }
    else if (srcElement.nodeName == 'A') {

        if (prevDOM != null) {
            prevDOM.classList.remove(MOUSE_VISITED_CLASSNAME);
        }

        srcElement.classList.add(MOUSE_VISITED_CLASSNAME);
        prevDOM = srcElement;
        console.info(srcElement.currentSrc);
        console.log("AAAA");
        console.log(srcElement.href);
        
        var html = srcElement.href;
        try {
            document.body.appendChild(p);
            p.innerHTML = srcElement.href;
            // iframe.contentWindow.document.open();
            // iframe.contentWindow.document.write(html);
            // iframe.contentWindow.document.location.href=srcElement.href;
            // iframe.contentWindow.document.close();
          }
          catch(err) {
            console.log("AAA");
          }
       
        

        console.log("BBB");
        console.dir(srcElement);
    }
}, false);