
// document.getElementById('activate').onclick = function (){

// }
var MOUSE_VISITED_CLASSNAME = 'crx_mouse_visited';

var prevDOM = null;
var iframe = document.createElement('iframe');
var p = document.createElement('p');
p.id = 'linky';
p.style.display = "inline-block";
document.addEventListener('mousemove', function (e) {
    let srcElement = e.srcElement;
    console.log(srcElement.result)
    
    if(document.getElementById(srcElement.id)!=null){
        var x = srcElement.id;
        console.log(x);
        var el = document.getElementById(x).parentElement.nodeName;
        var link = document.getElementById(x).parentElement;
        console.log("AAA");
        console.log("ELELELLELE", el);
    }
    else{
        var el = "B";
    }

    if (prevDOM != srcElement && srcElement.nodeName != 'SPAN' && srcElement.nodeName != 'A'&& iframe!=null&&srcElement.nodeName !="IFRAME") {
        iframe.remove();
        p.remove();
        console.log("REMOVE");
    }
    else if (el == 'A' || srcElement.nodeName == 'A') {

        if (prevDOM != null) {
            prevDOM.classList.remove(MOUSE_VISITED_CLASSNAME);
        }

        srcElement.classList.add(MOUSE_VISITED_CLASSNAME);
        prevDOM = srcElement;
        console.info(srcElement.currentSrc);
        console.log("AAAA");
        console.log(srcElement.href);
        
        var html = link.href;
        console.log(html);
        try {
            document.body.appendChild(p);
            p.style.top = e.pageY + 'px'
            p.style.left = e.pageX + 'px'
            p.innerHTML = link.href;
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