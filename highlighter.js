console.log('Hello world!')
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.action == "sending_users") {
      users = JSON.parse(request.data)
      console.log(users);


      for (let element in elements) {
        // TODO: Select element path FIXME:
        if (users.includes(element .innerHTML)) {
          // The user is present do nothing
        } else {
          // The user was not present
          element.style.background = "lightcoral";
        }
      }
    }
    sendResponse({});
    return true;
  }
);



chrome.runtime.sendMessage({
  "action": 'send_users'
})