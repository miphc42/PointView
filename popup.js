
// document.getElementById('activate').onclick = function (){

// }
var MOUSE_VISITED_CLASSNAME = 'crx_mouse_visited';

var prevDOM = null;
var iframe = document.createElement('iframe');
var p = document.createElement('p');
p.id = 'linky';
iframe.id='linky2'
// iframe.is="x-frame-bypass"
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
document.addEventListener('mousemove', function (e) {
    console.log(e.pageX, e.pageY)
    let srcElement = e.srcElement;
    console.log(srcElement.result)
    var x = upTo(srcElement, 'A');
//    if(x){
//         console.log("BPOO",document.getElementById(srcElement.id));
//         var x = srcElement.id;
//         console.log(x);
//         var el = document.getElementById(x).parentElement.nodeName;
//         var link = document.getElementById(x).parentElement;
//         console.log("AAA");
//         console.log("ELELELLELE", el);
//     }
//     else{
//         var el = "B";
//         var link = srcElement;
//     }

    if (x==null&&prevDOM != srcElement && srcElement.nodeName != 'SPAN' && srcElement.nodeName != 'A'&& iframe!=null&&srcElement.nodeName !="IFRAME") {
       
        past = true;
        iframe.remove();
        // p.remove();
        console.log("REMOVE");
    }
    else if (past&&(srcElement.nodeName == 'A'||x!=null)) {
        if (prevDOM != null) {
            prevDOM.classList.remove(MOUSE_VISITED_CLASSNAME);
        }

        srcElement.classList.add(MOUSE_VISITED_CLASSNAME);
        prevDOM = srcElement;
        console.info(srcElement.currentSrc);
        console.log("AAAA");
        console.log(srcElement.href);
        
        var html = x.href;
        console.log(html);
        try {
            document.body.appendChild(p);
            p.style.top = e.pageY + 'px'
            p.style.left = e.pageX + 'px'
            p.innerHTML = html;
            console.log(e.pageX, e.pageY);
            document.body.appendChild(iframe);
            
            
            console.log("BOBO O")
        //     console.log(e.clientX + 'px', e.clientY + 'px' )
        //     iframe.contentWindow.document.open();
        //     iframe.contentWindow.document.write(html);
        //     iframe.contentWindow.document.location.href=html;
        //    iframe.contentWindow.document.close();
        //    iframe.style.top = e.pageY + 'px'
        //     iframe.style.left = e.pageX  +'px'
            console.log("EEEEEEEEEEE", e.pageX+'px',e.pageY+ 'px');
            console.log("IFRAMEMMEME", iframe.style.left +'px', iframe.style.top+'px');
          }
          catch(err) {
            console.log("AAA");
          }
          past = false
        

        console.log("BBB");
        console.dir(srcElement);
    }
}, false);