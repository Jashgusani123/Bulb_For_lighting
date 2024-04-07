let con = document.getElementsByClassName("con");
let btn1 = document.getElementById("b1");
let btn2 = document.getElementById("b2");
let body = document.getElementById("body");

let color = ["black" , "white"];
let btncolor = ["white","darkgrey"];
// let img = ["url('Screenshot\ \(99\).png')","url('Screenshot\ \(98\).png')"]

btn1.addEventListener('mouseenter',function (){
    btn1.style.color ="white";
    body.style.backgroundImage="url('Screenshot\ \(99\).png')"
    
})
btn1.addEventListener('mouseleave',function (){
    btn1.style.color = "darkgrey";
    body.style.backgroundImage="url('Screenshot\ \(99\).png')"
    
})
btn2.addEventListener('mouseenter',function (){
    btn2.style.color = "white";
    body.style.backgroundImage ="url('Screenshot\ \(100\).png')"
    
    
})
btn2.addEventListener("mouseleave" , function (){
    btn2.style.color = "darkgrey";
    body.style.backgroundImage ="url('Screenshot\ \(100\).png')"
   
})