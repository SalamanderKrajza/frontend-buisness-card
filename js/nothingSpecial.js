function getRandomIntInclusive(min, max) {
  // Function returns random number from min to max
  // Source: https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Math/random
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function nothingSpecial() {
  myimage = document.querySelector(".business-card__image");
  myimage.src = `img/148-${getRandomIntInclusive(1, 7)}.png`;
  setTimeout(function () {
    myimage.src = "img/148.png";
  }, 1000);
}
