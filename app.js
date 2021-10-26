const alarmSubmit = document.getElementById('alarmSubmit')

alarmSubmit.addEventListener('click', setAlarm);

var audio = new Audio('alarm sound.mp3');

function ringBell(){
    audio.play();
}

function setAlarm(e){
    e.preventDefault();

    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
    now = new Date();
    
    let timeToAlarm = alarmDate - now;
    
    if(timeToAlarm >= 0){
        setTimeout(() => {
            ringBell();
        }, timeToAlarm)
    }
}