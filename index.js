const images = document.querySelectorAll(".slide-in");
function debounce(func, wait = 20, inmediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!inmediate) {
        func.apply(context, args);
      }
      var callNow = inmediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
}

function checkSlides(e) {
  console.log(window.scrollY);

  images.forEach((img) => {
    const imageBottom = images.offsetTop + images.height;
    const isHalfShown = slideInAt > images.offsetTop;
    const isNotScrolled = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolled) {
      images.classList.add("active");
    } else {
      images.classList.remove("active");
    }
  });
  console.count(e);
}

window.addEventListener("scroll", debounce(checkSlides));
