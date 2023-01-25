var header = document.getElementById('header');
var navigationHeader = document.getElementById('navigation-header');
var content = document.getElementById('content');
var showSidebar = false;


const button = document.querySelectorAll(".botao-header");

button.forEach(function(item) {
    item.addEventListener("click", function() {
        showSidebar = !showSidebar;
        console.log(showSidebar);
    });
});

function toggleSidebar() {
    showSidebar = !showSidebar;
    console.log(toggleSidebar);

    if (showSidebar) {
        navigationHeader.style.marginLeft = '-10vw';
        navigationHeader.style.animationName = 'showSidebar';
    } else {
        navigationHeader.style.marginLeft = '-100vw';
    }
}