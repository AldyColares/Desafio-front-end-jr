
window.onload = function () {
    if (screen.width < 640 || screen.height < 480) {
        let element = document.getElementById('just-change-classe');
        element.classList.remove('container');
        element.classList.add('slider');
        var paragraph = document.getElementById("add-text");
        var text = document.createTextNode('Por favor, arraste para a direita.');
        paragraph.appendChild(text);
    }
}

