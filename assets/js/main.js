function dropdown(name) {
  console.log("hehe");
  var dropdown = document.querySelector(name);
  dropdown.classList.toggle("show-dropdown");
}

// product quantity
document
  .querySelector(".input-number-increment")
  .addEventListener("click", function () {
    var val = Number(document.querySelector(".input-number-quantity").value);
    console.log(typeof val);
    document.querySelector(".input-number-quantity").value = val + 1;
  });

document
  .querySelector(".input-number-decrement")
  .addEventListener("click", function () {
    var val = Number(document.querySelector(".input-number-quantity").value);
    console.log(typeof val);
    if (val !== 1)
      document.querySelector(".input-number-quantity").value = val - 1;
  });

JQUERY;
$(".input-number-increment").click(function () {
  var $input = $(this)
    .parents(".input-number-group-quantity")
    .find(".input-number-quantity");
  var val = parseInt($input.val(), 10);
  $input.val(val + 1);
});

$(".input-number-decrement").click(function () {
  var $input = $(this)
    .parents(".input-number-group-quantity")
    .find(".input-number-quantity");
  var val = parseInt($input.val(), 10);
  if (val !== 1) $input.val(val - 1);
});

// main product item
const images = Array.from(document.getElementsByClassName("imgCarousel"));

const mainPhoto = document.getElementById("mainPhoto");

function updateImage(event) {
  const image = event.target;

  mainPhoto.src = image.src;
}

images.forEach(function (image) {
  image.addEventListener("click", updateImage);
});

// Header nav bar scrolling

document.addEventListener("scroll", () => {
  // console.log(window.scrollY);
  const headerNavbar = document.querySelector(".header__navbar");
  if (window.scrollY > 400) {
    headerNavbar.style.position = "fixed";
    headerNavbar.style.top = "0";
    headerNavbar.style.animation = "flyout 0.5s linear";
  } else {
    headerNavbar.style.position = "relative";
    headerNavbar.style.animation = "none";
  }
});

// show hidden menu-xs

function showCart() {
  const modal = document.querySelector(".modal");
  modal.style.display = "block";
  const hiddenMenu = document.querySelector(".header__navbar-hidden-menu");
  hiddenMenu.style.display = "none";
  const cart = document.querySelector(".header__navbar-hidden-cart");
  cart.style.display = "block";
}

function showMenu() {
  const modal = document.querySelector(".modal");
  modal.style.display = "block";
  const cart = document.querySelector(".header__navbar-hidden-cart");
  cart.style.display = "none";
  const hiddenMenu = document.querySelector(".header__navbar-hidden-menu");
  hiddenMenu.style.display = "block";
}

// hide hidden menu-xs

function hideHiddenBar() {
  const overlay = document.querySelector(".modal__overlay");
  overlay.style.animation = "fadeOut 0.5s linear";
  const body = document.querySelector(".modal__body");
  body.style.animation = "flyLeftToRight ease-in 0.5s";
  setTimeout(() => {
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
    overlay.style.animation = "fadeIn 1s linear";
    body.style.animation = "flyRightToLeft ease-in 0.5s";
  }, 500);
}

// flip coin
function ready(fn) {
  if (document.readyState != "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

// JQUERY
jQuery(document).ready(function ($) {
  $("#coin").on("click", function () {
    var flipResult = Math.random();
    $("#coin").removeClass();
    setTimeout(function () {
      if (flipResult <= 0.5) {
        $("#coin").addClass("heads");
        console.log("it is head");
      } else {
        $("#coin").addClass("tails");
        console.log("it is tails");
      }
    }, 100);
  });
});

// click and drag to scrolling collection

const slider = document.querySelector(".newin__product-list");

const disable = [];
for (var i = 1; i <= 8; i++) {
  disable[i] = document.getElementById("disable-a" + i);
}

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  console.log("mousedown");
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
  console.log("mouseleave");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");

  for (var i = 1; i <= 8; i++) {
    disable[i].setAttribute("style", "pointer-events:fill");
  }
  console.log("mouseup");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(slider.scrollLeft);

  for (var i = 1; i <= 8; i++) {
    disable[i].setAttribute("style", "pointer-events:none");
  }
  console.log("mousemove");
});

// slide big sale collection
const rightbtn = document.querySelector(".arrow-right");
const leftbtn = document.querySelector(".arrow-left");

rightbtn.addEventListener("click", (e) => {
  slider.scrollLeft += document.getElementById("slide-width").offsetWidth;
});

leftbtn.addEventListener("click", (e) => {
  slider.scrollLeft -= document.getElementById("slide-width").offsetWidth;
});

//
