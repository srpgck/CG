document.addEventListener("DOMContentLoaded", function () {
  var openButton = document.getElementById("openButton");
  openButton.addEventListener("click", function () {
    chrome.tabs.create({ url: "./rolette/index.html" });
  });
  var openButton = document.getElementById("openButtonH");
  openButton.addEventListener("click", function () {
    chrome.tabs.create({ url: "https://srpgck.github.io/8ballhtml/" });
  });
  var openButton = document.getElementById("openButtonbj");
  openButton.addEventListener("click", function () {
    chrome.tabs.create({ url: "./bj/index.html" });
  });
  let a = "";
  const randomNumber = Math.floor(Math.random() * 115) + 1;
  const url = chrome.runtime.getURL("./cdla/noti/" + randomNumber + ".txt");
  console.log(url); // Log the generated URL for debugging
  
  fetch(url)
    .then(function(response) {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then(function(data) {
      const rim = document.getElementById("rim");
      rim.src = data;
      console.log("File content:", data); // Log the content of the fetched file for debugging
    })
    .catch(function(error) {
      console.error("Fetch Error:", error);
    });
  
});
