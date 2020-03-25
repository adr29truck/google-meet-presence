chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.action == "presence") {
      takePresence()
      chrome.runtime.sendMessage({action: 'taking'})
    }
    sendResponse({});
    return true;
  }
);

function takePresence() {
  var stored = document.querySelectorAll('.Dxboad')
  console.log(stored)
  if (stored.length == 0) {

    document.querySelectorAll(".uArJ5e.UQuaGc.kCyAyd.kW31ib.foXzLb")[0].click()
    document.querySelector(".ThdJC.kaAt2.c0XF8e.s7PhZd.Z9zn3b.sUgV6e").click()

    setTimeout(function () {
      stored = document.querySelectorAll('.Dxboad')
      console.log('_____')
      console.log(stored)
      handleData(stored)
    }, 2000)
    
  } else {
    console.log(stored)
    handleData(stored)
  }
}

function handleData(elements) {
  list = []
  elements.forEach(function (element) {
    list.push(element.childNodes[0].innerHTML);
  })
  chrome.runtime.sendMessage({
    "action": 'users',
    "data": JSON.stringify(list)
  })
  setTimeout(function(){
    chrome.runtime.sendMessage({action: 'complete'})
  }, 20)
  
}