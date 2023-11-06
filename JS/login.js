let input_username = document.querySelector('.username');
let input_password = document.querySelector('.password');
let login_btn = document.querySelector('.button');

function checkUser(input_username, input_password, list_user_registered) {
    let isUserExist = false;
    for (let i = 0; i < list_user_registered.length; i++) {
        if (
            input_username == list_user_registered[i].username &&
            input_password == list_user_registered[i].password
        ) {
            isUserExist = true;
            window.location.href = "home_phimmienphi.html"
            return alert("Đăng nhập thành công");
            
        } 
        else if ( input_username == list_user_registered[i].username &&
        input_password != list_user_registered[i].password) {
            return alert("Sai mật khẩu");
        }
    }
    if (!isUserExist) {
        return alert("Tài khoản không tồn tại");
    }
};

login_btn.addEventListener("click", function (event) {
    event.preventDefault();
    if (input_username.value == "" || input_password.value == "") {
        if (input_username.value == "") {
            alert("Thiếu email hoặc số điện thoại ");
        } else if (input_password.value == "") {
            alert("Thiếu password");
        }
    } else {
        let list_user_registered = JSON.parse(localStorage.getItem("User"));
        let check = checkUser(
            input_username.value,
            input_password.value,
            list_user_registered
        );
        input_username.value = "";
        input_password.value = "";
    }
   
});
