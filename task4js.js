 
  const images = [
    "https://tse2.mm.bing.net/th?id=OIP.aiL4lLwwzdZaAmRIdipKKgHaEK&pid=Api&P=0",
    "https://tse2.mm.bing.net/th?id=OIP.9PwtupYvlF265TcT-V7FJQHaE6&pid=Api&P=0",
    "https://tse4.mm.bing.net/th?id=OIP.krUse4bYanoTbbbCzhigWQHaEK&pid=Api&P=0",
    "https://tse3.mm.bing.net/th?id=OIP.JsOD_QyIz_274c73uvnFZwHaEK&pid=Api&P=0",
  ];
 
  const thumbnailContainer = document.getElementById("small-image");
  const mainImageContainer = document.getElementById("main-image");

  for (let i = 0; i < images.length; i++) {
    const thumbnail = document.createElement("img");
    thumbnail.src = images[i];
    thumbnail.className = "thumbnail";
    thumbnail.dataset.index = i;
    thumbnailContainer.appendChild(thumbnail);
  }

  thumbnailContainer.addEventListener("click", (event) => {
    const thumbnail = event.target;
    if (thumbnail.tagName === "IMG") {
      const index = parseInt(thumbnail.dataset.index);
      const imageUrl = images[index];
      const mainImage = document.createElement("img");
      mainImage.src = imageUrl;
      mainImage.id = "main-image";
      mainImageContainer.innerHTML = "";
      mainImageContainer.appendChild(mainImage);

      const thumbnails = thumbnailContainer.querySelectorAll(".thumbnail");
      for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].classList.remove("selected");
      }

      thumbnail.classList.add("selected");
    }
  });
  
  