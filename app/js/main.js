window.onload = function () {

    var buttons = document.querySelectorAll('.actions input');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = btnClick;

    }

}

function btnClick(e) {
    var name = this.getAttribute('name')
    console.log(name)
}