function getPin(){
    const pin = generatePin();
    const pinSting = pin + '';
    if(pinSting.length === 4){
        return pin;
    }
    else{     
        return pin ;
    }
}
function generatePin(){
    const random =Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    //display pin
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

// deligate
document.getElementById('calculator').addEventListener('click', function(event){
    const numbers = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value;
    if(isNaN(numbers)){
        if(numbers === 'C'){
            typedNumberField.value = '';
        } 
        else if(numbers === '<'){
        const digit = previousTypedNumber.split('');
        digit.pop();
        const remainingDigits = digit.join('');
        typedNumberField.value = remainingDigits;
        }
    }
    else{  
    const newTypedNumber = previousTypedNumber + numbers;
    typedNumberField.value = newTypedNumber;

    }
})
document.getElementById('verify-pin').addEventListener('click', function(){
    const  displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;

    if(typedNumber === currentPin){
        console.log('correct Pin');

    }
    else{
        console.log('incorrect pin');
    }
})