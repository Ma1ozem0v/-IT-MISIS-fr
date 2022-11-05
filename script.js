//проверка имени
function validForm(){
    var nameFromInput = document.getElementById("name").value;
    
    console.log(nameFromInput)
    
    var reg_name = /^[a-za-яё]+$/i;
    
    if (reg_name.test(nameFromInput) == false){
        alert("Ошибка в поле ФИО. Должны быть только буквы.")
        }
}

document.querySelector(".button").addEventListener("click", validForm)




































//alert("Привет, я JS!");

//function guess() {
//    var guessNumber = 20;
//    
//    var numberOfUser = prompt("Введите что-нибудь:");
//        
//    console.log(numberOfUser);
//    
//    if (numberOfUser < guessNumber) {
//        alert("Сильно мало!")
//        return guess();
//    } else if (numberOfUser > guessNumber) {
//        alert("Сильно много!")
//        return guess();
//    } else {
//        return alert("Правильно!");
//    }
//}