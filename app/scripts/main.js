// Progress Bar
const progress = document.querySelector(".progress");
window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const width = (scrollTop / height) * 100;
  progress.style.width = `${width}%`;
});

// Menu
const menuToggle = document.querySelector(".header-toggle");
const menuHeader = document.querySelector(".header-menu");
const expandClass = "is-expand";
menuToggle.addEventListener("click", function () {
  menuHeader.classList.add(expandClass);
});
window.addEventListener("click", function (e) {
  if (!menuHeader.contains(e.target) && !e.target.matches(".header-toggle")) {
    menuHeader.classList.remove(expandClass);
  }
});

// Wedo Accordion
const accordionHeader = document.querySelectorAll(".wedo-item-header");
const bottom = document.querySelectorAll(".wedo-item-bottom");
[...accordionHeader].forEach((item) =>
  item.addEventListener("click", handleClickAccordion)
);
function handleClickAccordion(e) {
  const content = e.target.nextElementSibling;
  content.style.height = `${content.scrollHeight}px`;
  content.classList.toggle("is-active");
  if (!content.classList.contains("is-active")) {
    content.style.height = `0px`;
  }
  const icon = e.target.querySelector(".icon");
  icon.classList.toggle("fa-angle-down");
  icon.classList.toggle("fa-angle-up");
}

// Slick Slider
$(document).ready(function () {
  $(".quote-container").slick({
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});
