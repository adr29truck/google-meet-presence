chrome.runtime.onMessage.addListener(
  async function (request, sender, sendResponse) {
    if (request.action == "users") {
      storeUsers(request.data)
    } else if (request.action == "send_users") {
      sendUsers(function (data) {
        chrome.tabs.sendMessage(sender.tab.id, JSON.parse(data))
      })
    } else if (request.action == 'reset') {
      chrome.storage.local.set({
        'users': []
      })
    }
    sendResponse({});
    return true;
  }
);

async function sendUsers(fn) {

  chrome.storage.local.get("users", function (result) {
    var temp = {}
    temp['data'] = result.users
    temp['action'] = "sending_users"
    fn(JSON.stringify(temp))
  })
}

function storeUsers(users) {
  chrome.storage.local.set({
    'users': JSON.stringify(users)
  });
}