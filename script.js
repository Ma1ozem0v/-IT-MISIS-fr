//alert("Привет, я JS!");

function guess() {
    var guessNumber = 20;
    
    var numberOfUser = prompt("Введите что-нибудь:");
        
    console.log(numberOfUser);
    
    if (numberOfUser < guessNumber) {
        alert("Сильно мало!")
        return guess();
    } else if (numberOfUser > guessNumber) {
        alert("Сильно много!")
        return guess();
    } else {
        return alert("Правильно!");
    }
}

function validForm(){
    var nameFromInput = document.getElementById("name").value;
    
    console.log(nameFromInput)
    
    var reg_name = /^[a-za-яё]+$/i;
    
    if (reg_name.test(nameFromInput) == false){
        console.log("Ошибка в поле ФИО. Должны быть только буквы.")
        }
}

document.querySelector(".button").addEventListener("click", validForm)




































//guess();

//function timer(){
//    alert("Ты здесь слишком долго!!!")
//    window.location.href="https:\\recrut.mil.ru/";
//}

//setTimeout(timer, 3000);
