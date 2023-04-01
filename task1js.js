const paragraphs = ["Первый параграф", "Второй параграф", "Третий параграф", "Четвертый параграф", "Пятый параграф"];
const container = document.createElement("div");

paragraphs.forEach((text) => {
  const paragraph = document.createElement("p");
  paragraph.innerText = text;

  paragraph.addEventListener("click", () => {
    paragraph.innerText = "*".repeat(text.length);
  });

  container.appendChild(paragraph);
});

document.body.appendChild(container);