
let submit = document.querySelector(".submit");
let post_comment = document.getElementById("post-comment");
let list_post_comment = document.querySelector(".list-comment");
let username = document.getElementById("name");
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
          username: username.value,
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
          <span id="name">nhatmlnh</span>

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
    return true
}

number = getListComment.length;

number_of_comments.innerHTML = number + 1;


