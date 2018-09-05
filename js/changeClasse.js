
window.onload = function () {
    if (screen.width < 640 || screen.height < 480) {
        let element = document.getElementById('justchangeClasse');
        element.classList.remove('container');
        element.classList.add('slider');
    }
}

