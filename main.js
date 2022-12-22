var counter = 0;

var header = document.getElementById("title");
var button = document.getElementById("thebutton");
var footer = document.getElementById("footer");

function hide(b) {
  b.hidden = true;
}

function addNewProduct() {
  var copy = document.getElementById("productRow").cloneNode(true);
  var table = document.getElementById("ProductsTable");

  table.appendChild(copy);
}

function createButtons() {
  console.log("createButtons was clicked");
  var buttonText = "New Button " + counter++;
  var newButton =
    "<button class='btn btn-info' onclick='hide(this)'>" +
    buttonText +
    "</button>";

  document.getElementById("buttons").innerHTML += newButton;
}

button.onclick = function () {
  header.textContent = footer.textContent + " " + counter;
  counter++;
  footer.hidden = !footer.hidden;
};

var currentWidth = 150;

button.onwheel = function (e) {
  button.style.width = currentWidth + "px";
  var widthChange = 5;
  if (e.wheelDelta < 0) {
    widthChange = -widthChange;
  }
  currentWidth += widthChange;
  e.preventDefault();
};
