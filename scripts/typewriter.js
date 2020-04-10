var i = 0;
var txt = 'I år och dar har ni väntat men nu är snart väntan över!';
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("welcome").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
