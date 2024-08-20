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
  "k",
  "ky",
  "kyz",
  "kyzh",
  "kyzha",
  "kyzhat",
  "kyzhate",
  "kyzhates",
  "kyzhatesn",
  "kyzhatesne",
  "kyzhatesneu",
  "kyzhatesneur",
  "kyzhatesneuro",
  "kyzhatesneurot",
  "kyzhatesneuroto",
  "kyzhatesneurotox",
  "kyzhatesneurotoxi",
  "kyzhatesneurotoxin",
  "kyzhatesneurotoxi",
  "kyzhatesneurotox",
  "kyzhatesneuroto",
  "kyzhatesneurot",
  "kyzhatesneuro",
  "kyzhatesneur",
  "kyzhatesne",
  "kyzhatesn",
  "kyzhates",
  "kyzhate",
  "kyzhat",
  "kyzha",
  "kyzh",
  "kyz",
  "ky",
  "k"
];

function loop() {
  document.getElementsByTagName("title")[0].innerHTML =
    titleText[x++ % titleText.length];
}

