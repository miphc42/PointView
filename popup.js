
// document.getElementById('activate').onclick = function (){

// }
// Unique ID for the className.
var MOUSE_VISITED_CLASSNAME = 'crx_mouse_visited';

// Previous dom, that we want to track, so we can remove the previous styling.
var prevDOM = null;
var iframe = document.createElement('iframe');
var p = document.createElement('p');
// Mouse listener for any move event on the current document.
document.addEventListener('mousemove', function (e) {
    let srcElement = e.srcElement;
    console.log(srcElement.result)
   
    if (prevDOM != srcElement && srcElement.nodeName != 'A'&& iframe!=null&&srcElement.nodeName !="IFRAME") {
        iframe.remove();
        p.remove();
        console.log("REMOVE");
    }
    // Lets check if our underlying element is a IMG.
    else if (srcElement.nodeName == 'A') {

        // For NPE checking, we check safely. We need to remove the class name
        // Since we will be styling the new one after.
        if (prevDOM != null) {
            prevDOM.classList.remove(MOUSE_VISITED_CLASSNAME);
        }

        // Add a visited class name to the element. So we can style it.
        srcElement.classList.add(MOUSE_VISITED_CLASSNAME);

        // The current element is now the previous. So we can remove the class
        // during the next ieration.
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