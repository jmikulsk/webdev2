function jakLiczba(liczba)
{
    if(liczba%2==0)
    {
        console.log('Liczba: '+ liczba+' jest parzysta');
    }
    else{
        console.log('Liczba: '+ liczba+ ' jest nieparzysta ');
    }
}
jakLiczba(5);
jakLiczba(4);

function podzielna3(){
    let tab=[];
    for(var i = 1; i<101;i++){
        if(i%3==0){
            // console.log(i);

            tab.push(i);

        }



    }
    console.log(tab);
}
podzielna3();
