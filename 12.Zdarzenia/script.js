window.onload =function () {

    let clickCounter = 0;
    let dblClickcCounter = 0;
    let keyDownCounter = 0;

    document.addEventListener('click',function () {
        document.getElementById('click-counter').textContent = ++clickCounter;


    })
    document.addEventListener('dblclick',function () {
        document.getElementById('dbl-click-counter').textContent = ++dblClickcCounter;

    })
    document.addEventListener('keydown',function () {
        document.getElementById('key-down-counter').textContent = ++keyDownCounter;

    })


    let button = document.getElementById('add-element');
    let boxContainer = document.getElementById('box-container');
    let licznik =1;
    button.addEventListener('click', function () {
        let nowyElement = document.createElement('div');
        nowyElement.classList.add('box');
        nowyElement.textContent=licznik;
        ++licznik;
        boxContainer.appendChild(nowyElement);

    });
    boxContainer.addEventListener('click',function (e) {
        console.log(e);
        if(e.target.className.includes('box')){
            this.removeChild(e.target);
            // e.target.style.border='5px solid blue'
            licznik--;
        }

    })

}