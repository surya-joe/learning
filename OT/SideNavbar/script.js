let menuBtn = document.querySelector("#menuBtn");
let sidebar = document.querySelector(".sidebar");
let searchBox = document.querySelector("#searchBox");

menuBtn.onclick = function() {
    sidebar.classList.toggle("active");
}

searchBox.onclick = function() {
    sidebar.classList.toggle("active");
}