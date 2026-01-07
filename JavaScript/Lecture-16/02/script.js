const parent = document.getElementById('container');
function changeColor(e) {
    const child = e.target;
    const body = document.querySelector('body');
    body.style.backgroundColor = child.id;
}

parent.addEventListener('click', changeColor);