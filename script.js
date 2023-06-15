(function () {
    const image = document.querySelector('.fill');
    const emptyContainers = document.querySelectorAll('.empty');
    loadEvents(emptyContainers, image);
})();


function loadEvents(emptyContainers, image) {

    dragStart(image);
    dragEnd(image);

    emptyContainers.forEach(div => {
        dragOver(div);
        dragEnter(div);
        dragLeave(div);
        dragDrop(div, image);
    });
}

function dragStart(image) {
    image.addEventListener("dragstart", (e) => {
        image.classList.add("hold");
        setTimeout(() => {
            image.style = 'visibility: hidden';
        }, 0);
    });
}

function dragEnd(image) {
    image.addEventListener("dragend", (e) => {
        image.classList.remove("hold");
        image.style = '';
    });
}

function dragOver(div) {
    div.addEventListener("dragover", (e) => {
        e.preventDefault(); //Allows dragDrop to kick in
        div.classList.add("over");
    });
}

function dragLeave(div) {
    div.addEventListener("dragleave", (e) => {
        div.classList.remove("over");
    });
}

function dragEnter(div) {
    div.addEventListener("dragenter", (e) => {
        e.preventDefault();
    });
}

function dragDrop(div, image) {
    div.addEventListener("drop", (e) => {
        div.appendChild(image);
    });
}