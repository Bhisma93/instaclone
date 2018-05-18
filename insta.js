var Ig_SEL = "[data-Ig]";
var gallery_SEL = "[data-gallery]";

var IgItems = document.querySelectorAll(Ig_SEL);
var galleryTarget = document.querySelector(gallery_SEL);

IgItems.forEach(function (pic) {
  pic.addEventListener('mouseover', function (event) {
    event.preventDefault();
    galleryTarget.setAttribute('src', pic.getAttribute('href'));
  })
});

IgItems.forEach(function (pic) {
    pic.addEventListener('click', function (event) {
      event.preventDefault();
      galleryTarget.setAttribute('src', pic.getAttribute('href'));
    })
  });