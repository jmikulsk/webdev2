window.onload = function () {
// document.getElementById('container').style.border = '5px solid red';
// document.querySelector('.box').style.border = '5px solid red';  pierwszy z boxów

// let array =document.getElementsByClassName('box');
// for(let i=0;i<array.length;i++)
// {
//     array[i].style.border = '5px solid red';
// }
//     for(let element of array){
//         element.style.border = '5px solid blue';
//     }

    let array =document.getElementsByTagName('div');
    for(let element of array){
        element.style.border = '5px solid blue';
    }
}