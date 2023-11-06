function search() {
    let input, filter, ul, li, txtValue;
    input = document.querySelector(".inputsearch");
    filter = input.value.toUpperCase();
    ul = document.querySelector(".menu-key");
    li = ul.getElementsByTagName("li");

    for (let i = 0; i < li.length; i++) {
        txtValue = li[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
             li[i].style.display = "block";
           
        } else {
            li[i].style.display = "none";
        }
    }
}