document.addEventListener('DOMContentLoaded', function () {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function () {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "presence"
      }, function (response) {
        console.log(response);
      });
    });

  });
}, false);


chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.action == "taking") {
      taking()
    } else if (request.action == "complete") {
      complete()
    }
    sendResponse({});
    return true;
  })

  
  function taking() {
    temp = document.getElementById('checkPage')
    console.log(temp)
    if (temp.innerHTML != 'Complete') {
      temp.innerHTML = 'Hold tight..'
    }
  }
  
function complete() {
  temp = document.getElementById('checkPage')
  console.log(temp)
  if (temp.innerHTML == 'Hold tight..') {
    temp.innerHTML = 'Complete'
  }
}