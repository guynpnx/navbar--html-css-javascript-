const div = document.getElementById("sub-menu");
const ul = document.getElementById("menu");
function show_menu() {
    document.getElementById('menu').classList.add("show");
}
function hide_menu() {
    document.getElementById('menu').classList.remove("show");
}
div.addEventListener("click", function () {
    // if (ul.className == "") {
    //     show_menu();
    // } else {
    //     hide_menu();
    // }
    switch(ul.className){
        case "":
            show_menu();
        break
        case "show":
            hide_menu();
        break
    }
});