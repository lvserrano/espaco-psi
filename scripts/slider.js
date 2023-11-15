let count = 1;
document.getElementById("radio1").checked = true;

// Adicione ouvintes de eventos a cada botão
for (let i = 1; i <= 6; i++) {
  document.getElementById("radio" + i).addEventListener("click", function () {
    count = i;
  });
}

setInterval(function () {
  nextImage();
}, 2500);

function nextImage() {
  count++;
  if (count > 6) {
    count = 1;
  }

  document.getElementById("radio" + count).checked = true;
}
