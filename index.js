function moreLinkFunction() {
    let btnId = document.getElementById('more_link_dropdown');
    if (btnId.style.display == 'block') {
        btnId.style.display = 'none';
    } else {
        btnId.style.display = 'block';
    }
}

// let menuItem = document.getElementById('main-menu-women');
// let menuToggle = document.getElementById('main-menu-women-toggle');
// menuItem.addEventListener('mouseover',toggleFunction);
// menuToggle.addEventListener('mouseover',toggleFunction);
// menuItem.addEventListener('mouseout',hideToggleFunction);
// menuToggle.addEventListener('mouseout',hideToggleFunction);

// function toggleFunction() {
//     let menuToggle = document.getElementById('main-menu-women-toggle');
//     menuToggle.className = menuToggle.className.replace('hide', 'show');
// };

// function hideToggleFunction() {
//     let menuToggle = document.getElementById('main-menu-women-toggle');
//     menuToggle.className = menuToggle.className.replace('show', 'hide');
// }