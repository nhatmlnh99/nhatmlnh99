
let name0 = localStorage.getItem("currentUser");
document.querySelector(".name").innerHTML = name0;
let user = document.querySelector(".user0");
let loginRegister = document.querySelector(".login_register")
let logOut = document.querySelector(".text-log-out");

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
logOut.addEventListener('click' , function() {
    if (localStorage.getItem('currentUser') !== null ) {
        localStorage.removeItem('currentUser') ;
        user.style.display = "none";
        loginRegister.style.display = "flex"
    } else {
        user.style.display = "flex";
        loginRegister.style.display = "none"
    }
})






let submit = document.querySelector(".submit");
let post_comment = document.getElementById("post-comment");
let list_post_comment = document.querySelector(".list-comment");

let comment = document.getElementById("comment");
let number = document.querySelector(".number");
let number_of_comments = document.querySelector(".number-of-comments")
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


$('.list-flim-hot').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows : false
    
  });

  
  

  let getListComment = JSON.parse(localStorage.getItem("listComment"));
  if (getListComment == null) {
    localStorage.setItem("listComment", JSON.stringify([]));
    location.reload();
  } else {
    post_comment.addEventListener("click", function () {
      // CALL FUNCTION
      // checkExistedUser(getListComment);
      if (checkComment(comment.value) == true) {
        getListComment.push({
          
          comment: comment.value,
        });
  
        localStorage.setItem("listComment", JSON.stringify(getListComment));
        location.reload();
      }
      comment.value = "";
      username.value = "";
    });
  }

  renderComment(getListComment);

  // Render comments
  function renderComment(arrayComments) {
    for (let i = 0; i < arrayComments.length; i++) {
      let new_item_comment = document.createElement("div");
      new_item_comment.className = "item-comment";
      new_item_comment.innerHTML = `
      <!-- img_container -->
      <div class="user-container">
      <div class="user"><i class="fa-solid fa-user"></i>
      </div>
  </div>
      
  <div class="content-list">
                            
  <div class="content_info_container">
      <div class="date_userpost">
      <h3 class=" name ">
      ${name0}
      </h3>

      </div>
     
  </div>
  <p class="content_description">
  ${arrayComments[i].comment}
  </p>
</div>
      
      
      `;
      list_post_comment.appendChild(new_item_comment);
    }
  }



function checkComment(comment) {
    if (comment == "") {
        alert("Hãy nhập bình luận");
        return false;
    }
    if(localStorage.getItem("currentUser") === null) {
      alert("Hãy đăng nhập để bình luận")
      return false
    }

    return true
}




number = getListComment.length;

number_of_comments.innerHTML = number + 1;



