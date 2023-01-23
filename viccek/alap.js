var tomb = 
[
"Mi az kicsi, fekete és a sarokban gubbaszt?    - Halott csecsemő, lakástűz után",
"Hány halott csecsemő kell egy villanykörte kicseréléséhez?      -3-nál biztos több mert a pincémben még mindig sötét van.",
"vicc2",
"vicc3",
"vicc4",
"vicc4"
]
var kepek = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg"
]

function vicc()
{
alert("hello");
var veletlen=Math.floor(Math.random() * tomb.length);
console.log(veletlen)
document.getElementById("vicchelye").innerHTML = tomb[veletlen];
document.getElementById("kephelye").src = veletlen+".jpg"
}

vicc()