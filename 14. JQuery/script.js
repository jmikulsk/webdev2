window.onload= function () {

    let form = document.getElementById('formularz');
    form.addEventListener('submit',function (e) {
        e.preventDefault();
        let wartosc= document.getElementById('name').value;

        if(wartosc.length>=3){
            console.log('Poprawana wartość');
            document.getElementById('error').setAttribute('hidden','');
            // this.unbind('submit').submit();
            e.currentTarget.submit();
        }
        else {
            document.getElementById('error').removeAttribute('hidden');
        }

    })












}