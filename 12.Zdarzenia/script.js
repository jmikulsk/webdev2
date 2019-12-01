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


}