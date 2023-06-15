(function () {
    const image = document.querySelector('.fill');
    const emptyContainers = document.querySelectorAll('.empty');
    loadEvents(emptyContainers, image);
})();


function loadEvents(emptyContainers, image) {
    emptyContainers.forEach(div => {
        div.addEventListener("dragover", (e) => {
            e.preventDefault();
            console.log('over');
            div.classList.add("over");
        });
        div.addEventListener("dragleave", (e) => {
            console.log('leave');
            div.classList.remove("over");
        });
        div.addEventListener("drop", (e) => {
            e.preventDefault();
            console.log('drop');
        });
        div.addEventListener("dragstart", () => {
            console.log('dragstart');
            image.classList.add("hold");
        });
        div.addEventListener("dragend", () => {
            console.log('dragend');
            image.classList.remove("hold");
        });
    });
}