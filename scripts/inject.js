var s = document.createElement('script');
  
chrome.storage.local.get(null,function (obj){
    console.log(JSON.stringify(obj));
      var x = JSON.parse(JSON.stringify(obj))['onoroff'];
      console.log(x);
      check = x;
      if(!x){
        s.src = chrome.runtime.getURL('scripts/index.js');
        s.onload = function() {
            this.remove();
        };
        
        (document.head || document.documentElement).appendChild(s);
      }
  });
