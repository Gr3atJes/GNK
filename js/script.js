function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
$('.carousel').carousel()
$('#myCarousel').on('slide.bs.carousel', function () {
  $('.carousel').carousel({
    interval: 2000
  })
})
