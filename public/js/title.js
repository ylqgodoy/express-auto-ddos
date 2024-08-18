if (document.addEventListener) {
  document.addEventListener("DOMContentLoaded", function () {
    loaded();
  });
} else if (document.attachEvent) {
  document.attachEvent("onreadystatechange", function () {
    loaded();
  });
}
function loaded() {
  setInterval(loop, 300);
}
var x = 0;
var titleText = [
  "a",
  "al",
  "all",
  "allm",
  "allmy",
  "allmyl",
  "allmyli",
  "allmylin",
  "allmylink",
  "allmylinks",
  "allmylink",
  "allmylin",
  "allmyli",
  "allmyl",
  "allmy",
  "allm",
  "all",
  "al",
  "a"
];

function loop() {
  document.getElementsByTagName("title")[0].innerHTML =
    titleText[x++ % titleText.length];
}

