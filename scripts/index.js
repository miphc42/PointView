var MOUSE_VISITED_CLASSNAME = 'crx_mouse_visited';

var prevDOM = null;
var iframe = document.createElement('iframe');
var p = document.createElement('p');
var div = document.createElement('div');
p.id = 'linky';
iframe.id='linky2'

p.style.display = "inline-block";
div.id = 'divvy';
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
    let srcElement = e.srcElement;
    var x = upTo(srcElement, 'A');
    if (x==null&&prevDOM != srcElement && srcElement.nodeName != 'SPAN' && srcElement.nodeName != 'A'&& iframe!=null&&srcElement.nodeName !="IFRAME") {
        past = true;
        iframe.remove();
        div.remove();
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
            document.body.appendChild(div);
            iframe.contentWindow.document.open();
            iframe.contentWindow.document.write(html);
            iframe.contentWindow.document.location.href=html;
            iframe.contentWindow.document.close();
            iframe.style.top = e.pageY + 'px'
            iframe.style.left = e.pageX  +'px'
            div.style.top = e.pageY + 'px'
            div.style.left = e.pageX  +'px'

            
          }
          catch(err) {
            console.log("Errored");
          }
          past = false
        console.dir(srcElement);
    }
}