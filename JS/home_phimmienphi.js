
// function input() {
//     if(input.value == "") {
//         ul.style.display = "none "
//     } else if(input.value != "") {
//         ul.style.display = "block"
//     }
    
// }
function search() {
    let input, filter, ul, li, txtValue;
    input = document.querySelector(".inputsearch");
    filter = input.value.toUpperCase();
    ul = document.querySelector(".menu-key");
    li = ul.getElementsByTagName("li");

    if(input.value == "") {
        ul.style.display = "none "
    } else if(input.value != "") {
        ul.style.display = "block"
    }
    for (let i = 0; i < li.length; i++) {
        txtValue = li[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
             li[i].style.display = "block";
           
        } else {
            li[i].style.display = "none";
        }
    }
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}