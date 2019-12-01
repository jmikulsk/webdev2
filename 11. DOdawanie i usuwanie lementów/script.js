window.onload = function () {

    setTimeout(function () {
        let nowyElement = document.createElement('div');
        nowyElement.textContent='6';
        nowyElement.classList.add('box');
        document.getElementById('container').appendChild(nowyElement);
    },2000);

    setTimeout(function () {
        let usuwany = document.getElementById('special');
        let rodzic = document.getElementById('container')
        rodzic.removeChild(usuwany)
    },4000)

}