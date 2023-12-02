
let username = localStorage.getItem("currentUser");
document.querySelector(".name").innerHTML = username;
let user = document.querySelector(".user0");
let loginRegister = document.querySelector(".login_register")
let logOut = document.querySelector(".text-log-out");










logOut.addEventListener('click' , function() {
    if (localStorage.getItem('currentUser') !== null ) {
        localStorage.removeItem("currentUser")
        user.style.display = "none";
        loginRegister.style.display = "flex"
    } else {
        user.style.display = "flex";
        loginRegister.style.display = "none"
    }
})




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

let icon = document.querySelectorAll(".fa-heart");
for(let i = 0 ; i < icon.length ; i++) {

    icon[i].addEventListener("click" , function () {
        if(icon[i].style.color === "white") {
            icon[i].style.color = "red"
        } else {
            icon[i].style.color = "white"
        }
    })
}
// Khôi phục dữ liệu sau khi tải lại trang
window.onload = () => {
    let account = localStorage.getItem('currentUser');
    if (account === null ) {
        user.style.display = "none";
        loginRegister.style.display = "flex"
    } else {
        user.style.display = "flex";
        loginRegister.style.display = "none"
    }
  };
