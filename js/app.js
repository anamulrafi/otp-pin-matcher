function getPin(){
    const pin = generatePin();
    const pinSting = pin + '';
    if(pinSting === 4){
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

document.getElementById('generate-pin').addEventListener('click',function(){
    const pin = getPin();
    //display pin
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})