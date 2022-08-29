// ternary operator and switch

// //klau con tu true output expr1
// condition ? expr1 : expr2;
// function isUserValid(bool){
//     return bool ;
// }

// var answer = isUserValid(true) ? "you may enter" : "access denied"

// var automatedAnswer = "your account # is " + (isUserValid(false)? "1234" : "not available")

// function condition (){
//     if(isUserValid(true)){
//         return "you may enter";
//     }else {
//         return "acces denied"
//     }
// }

// var answer2 = condition();

function moveCommand (direction) {
    var whatHappens;
    switch(direction){
        case"forward":
            whatHappens = "you encounter a monster";
            break;
        case"back":
            whatHappens = "you arrived home";
            break;
        case"right":
            whatHappens = "you found a river";
            break;
        case"left":
            whatHappens = "you run into a troll";
            break;
        default: 
            whatHappens = "please enter a valid direction"    
    }
    return whatHappens;
}
