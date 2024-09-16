const ver = "2B1"
document.addEventListener("DOMContentLoaded", function () {
  const cardsContainer = document.getElementById('cards');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');

  const cardData = [
      {
          image: './roul.jpg',
          title: 'Rulet',
          buttonLabel: 'Rulet Ac',
          buttonId:"rolette"
      },
      {
          image: './billard.jpg',
          title: 'Bilardo',
          buttonLabel: 'Bilardo Ac',
          buttonId:"billard"
      },
      {
          image: './bj.jpg',
          title: 'Blackjack',
          buttonLabel: 'Blackjack Ac',
          buttonId:"blackjack"
      }
      ,
      {
          image: './dixiz.jpg',
          title: 'Dixizz Hoca Efendi ile Sadirvan Vaazlari',
          buttonLabel: 'Dixizz Ai Ac',
          buttonId:"dixizai"
      }
  ];

  let currentCardIndex = 0;

  function createCard(data, index) {
      const card = document.createElement('div');
      card.classList.add('absolute', 'w-full', 'h-full', 'rounded-lg', 'shadow-lg', 'overflow-hidden', 'transform', 'transition-transform', 'duration-500', 'ease-in-out');

      // Blur, konumlandırma, boyutlandırma ve z-index
      let scale = 1;
      let opacity = 1;
      let translateX = '0'; 
      let zIndex = cardData.length - index;

      if (index < currentCardIndex) {
          translateX = '-150%'; // Soldaki kartlar tamamen dışarıda
          opacity = 0;
      } else if (index > currentCardIndex) {
          translateX = '150%'; // Sağdaki kartlar tamamen dışarıda
          opacity = 0;
      } else if (index === currentCardIndex -1) { // Bir önceki kart
          translateX = '-50%';
          opacity = 0.5;
          scale = 0.9;
      } else if (index === currentCardIndex + 1) { // Bir sonraki kart
          translateX = '50%';
          opacity = 0.5;
          scale = 0.9;
      }


      card.style.transform = `translateX(${translateX}) scale(${scale})`;
      card.style.opacity = opacity;
      card.style.zIndex = zIndex;

      card.innerHTML = `
          <img src="${data.image}" class="object-cover w-full h-3/5">
          <div class="p-4">
              <h2 class="text-xl font-bold mb-2">${data.title}</h2>
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" id="${data.buttonId}">
                  ${data.buttonLabel}
              </button>
          </div>
      `;

      cardsContainer.appendChild(card);
  }

  function updateCards() {
      cardsContainer.innerHTML = ''; // Kartları temizle
      cardData.forEach((data, index) => createCard(data, index));
      document.getElementById("rolette").addEventListener("click", function () {
        chrome.tabs.create({ url: "./rolette/index.html" });
      });
      //var openButton = document.getElementById("billard");
      document.getElementById("billard").addEventListener("click", function () {
        chrome.tabs.create({ url: "https://srpgck.github.io/8ballhtml/" });
      });
      //var openButton = document.getElementById("blackjack");
      document.getElementById("blackjack").addEventListener("click", function () {
        chrome.tabs.create({ url: "./bj/index.html" });
      });
      //var openButton = document.getElementById("dixizai");
      document.getElementById("dixizai").addEventListener("click", function () {
        chrome.tabs.create({ url: "./dai/index.html" });
      });
  }

  prevButton.addEventListener('click', () => {
      if (currentCardIndex > 0) {
          currentCardIndex--;
          updateCards();
      }
  });

  nextButton.addEventListener('click', () => {
      if (currentCardIndex < cardData.length - 1) {
          currentCardIndex++;
          updateCards();
      }
  });
  function checkForUpdates() {
    // GitHub'daki son sürüm bilgilerini al
    fetch("https://raw.githubusercontent.com/srpgck/CG/main/version")
      .then(response => response.text())
      .then(data => {
        const latestVersion = data;
  
  
        if (latestVersion !== ver) {
          showUpdateNotification(latestVersion);
        }
      })
      .catch(error => {
        console.error("Güncelleme kontrolü sırasında hata:", error);
      });
  }
  
  function showUpdateNotification(latestVersion) {
    const notification = document.createElement("div");
    notification.classList.add("update-notification");
    notification.innerHTML = `
    <div class="notification-container">
    <div class="notification-content">
    <p class="notification-message">Yeni bir surum mevcut: ${latestVersion}</p>
    <button id="close-notification" class="notification-button">Kapat</button>
    </div>
    <style>
  .notification-container {
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 1000;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 10px;
    display: flex;
    align-items: center;
  }
  
  .notification-content {
    display: flex;
    align-items: center;
  }
  
  .notification-message {
    margin-right: 10px;
    font-size: 16px;
    font-weight: 500;
  }
  
  .notification-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .notification-button:hover {
    background-color: #0056b3;
  }
  </style>
  </div>
  
  
    `;
  
    document.body.appendChild(notification);
  
    const closeButton = document.getElementById("close-notification");
    closeButton.addEventListener("click", () => {
      notification.remove();
    });
  }
  
  // Güncelleme kontrolünü düzenli olarak çalıştır
  checkForUpdates()
  // Başlangıçta kartları oluştur
  updateCards();
  //var openButton = document.getElementById("rolette");
 
  
  let a = "";
  const randomNumber = Math.floor(Math.random() * 142) + 1;
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
