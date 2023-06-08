//set initial count to 0
let currentValue = 0;

//select the value(which is what will be incremented and decremented) and buttons
const value = document.querySelector("#num");
const btns = document.querySelectorAll(".btn");

console.log(btns);

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){ // e accpets which button is begin selected( the event object)
    // currentTarget (which button was clicked)

    const choice = e.currentTarget.classList;

    if ( choice.contains('decrease')){//if the variable contains this particular class, then...
        currentValue--;
    } else if( choice.contains('reset')){
        currentValue = 0;
    } else if( choice.contains('increase')){
        currentValue++;
    }
    value.innerHTML = currentValue;

    if (currentValue < 0){
        document.getElementById('num').style.color = 'red';
    } else if (currentValue > 0){
        document.getElementById('num').style.color = 'green';
    } else if (currentValue == 0){
        document.getElementById('num').style.color = 'cadetblue';
    }
    })
})