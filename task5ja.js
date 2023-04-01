
const words = [
    { en: "apple", ru: "яблоко" },
    { en: "book", ru: "книга" },
    { en: "cat", ru: "кошка" },
  ];
  
  const cardsContainer = document.getElementById("cards-container");
  
  words.forEach((word) => {
    
    const card = document.createElement("div");
   const enWord = document.createElement("p");
    enWord.innerText = word.en;
  
    const ruWord = document.createElement("p");
    ruWord.innerText = word.ru;
    ruWord.style.display = "none";
   
    card.appendChild(enWord);
    card.appendChild(ruWord);

    card.addEventListener("click", () => {
     
      if (enWord.style.display !== "none") {
        enWord.style.display = "none";
        ruWord.style.display = "block";
      }
      
      else {
        enWord.style.display = "block";
        ruWord.style.display = "none";
      }
    });
  
    
    cardsContainer.appendChild(card);
  });
  