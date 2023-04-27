hrs =  document.querySelector(".hour");
mins = document.querySelector(".min");
seconds = document.querySelector(".sec");
const sound = new Audio('ticking.mp3');
sound.muted = true;
setInterval(()=>{
    dt = new Date();
    hr = dt.getHours();
    minutes = dt.getMinutes();
    secs = dt.getSeconds();
    deghrs = hr*30 + minutes/2;
    degmin = minutes*6;
    degsec = secs * 6;
    hrs.style.transform = `rotate(${deghrs}deg)`;
    mins.style.transform = `rotate(${degmin}deg)`;
    seconds.style.transform = `rotate(${degsec}deg)`;
    sound.play();
},1000);