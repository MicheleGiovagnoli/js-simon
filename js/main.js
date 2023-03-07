const domNumbers = document.getElementById('numbers');
const domNumbersTotal = document.getElementById('numbers-total');
const domNumbersOk = document.getElementById('numbers-ok');

let numbers = [];
console.log(numbers);

for(let i = 0; i < 5; i++){
    const randomNumber = (min, max) => Math.floor((Math.random() * (max - min + 1)) + min);
    domNumbers.innerHTML = numbers;
    numbers.push(randomNumber(1,100));
}

setTimeout( function ricordaNumero(){
   domNumbers.classList.add('d-none');
    let arrayNumbers = [];
    let blackList = [];
    domNumbersTotal.innerHTML = blackList.length; 
    console.log(arrayNumbers);
    console.log(blackList);

   setTimeout(function numeriUtente(){

        alert('inserisci i 5 numeri appena usciti');
        let userNumbers;
        for(let i = 0; i < 5; i++){
            userNumbers = parseInt(prompt(i));
            arrayNumbers.push(userNumbers);
            if(numbers.includes(arrayNumbers[i])) {
                blackList.push(arrayNumbers[i]);
                domNumbersOk.innerHTML = blackList;
            }
        }
   },1000)
},5000);
