// https://api.telegram.org/bot1942760019:AAGKqQwhI6gdJj3AhDT_Vptt4odB130n8vg/getUpdates
// https://api.telegram.org/bot1942760019:AAGKqQwhI6gdJj3AhDT_Vptt4odB130n8vg/sendMessage?chat_id=-1001235146561&text=

// для кнопки - при событии нажатия - запустим функцию - внутри которой выберем класс инпута - и запишем его насильно в страничку бота.

document.querySelector('button').onclick = function(){
    if (document.querySelector('.message').value == "" || document.querySelector('.message').value == false){
        alert("Введите ваше имя!");}
    else{
        let message = document.querySelector('.message').value;
        let space = ": "
        let message1 = document.querySelector('.message1').value;
        const token = "1942760019:AAGKqQwhI6gdJj3AhDT_Vptt4odB130n8vg"
        let url = 'https://api.telegram.org/bot'+token+'/sendMessage?chat_id=-1001235146561&text='
        let xhttp = new XMLHttpRequest();
        xhttp.open("GET", url + message + space + message1, true);
        xhttp.send();
        
        playMusic()
        alert("Отправленно!");
        function playMusic(){
            var music = new Audio("./mp3/na-soobschenie-u-menya-prishla-sms-ka.mp3").play(); return false;
            }
        }
        
}

// './na-soobschenie-u-menya-prishla-sms-ka.mp3'