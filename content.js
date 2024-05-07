chrome.runtime.sendMessage({
  action: "extractCookies",
  tabUrl: window.location.href,
}, (cookies) => {
  const area = document.createElement("textarea");
  area.style.position = "absolute";
  area.style.border = "0";
  area.style.padding = "0";
  area.style.margin = "0";
  area.style.height = "1px";
  area.style.top = "-10px";
  area.innerText = JSON.stringify(cookies);
  document.body.appendChild(area, document.body.firstChild);
  area.focus();
  area.select();
  alert(JSON.stringify(cookies));
});
