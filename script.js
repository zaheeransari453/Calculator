let input = document.getElementById('input-box');
let buttons = document.querySelectorAll('button');

let str = " ";
let buttonArray = Array.from(buttons);

buttonArray.forEach(button =>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML=='='){
            str=eval(str);
            input.value = str;
        }
        else if(e.target.innerHTML=='AC'){
            str="";
            input.value=str;
        }
        else if(e.target.innerHTML=="DEL"){
            str=str.substring(0, str.length-1);
            input.value = str;
        }
        else{
            str+=e.target.innerHTML;
            input.value = str;
        }
    })
})