const container = document.getElementById('container');

for (let i = 0; i <= 255; i += 5) {
  const div = document.createElement('div');
  div.classList.add('colorful-div');
  div.style.backgroundColor = `rgb(128, 128, ${i})`;
  container.appendChild(div);
}
