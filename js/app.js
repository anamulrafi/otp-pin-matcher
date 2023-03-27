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
console.log(getPin());