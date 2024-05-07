chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "extractCookies") {
    chrome.cookies.getAll({ url: message.tabUrl }, (cookies) => {
      sendResponse(cookies);
    });
  }
  return true;
});
