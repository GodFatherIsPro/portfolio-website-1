let serv = document.getElementById('service');
var x = window.matchMedia("(min-width: 1170px)")
console.log(serv)
if(x.matches){
        serv.addEventListener('mouseover', function run(){
            doc1=document.getElementsByClassName("serimg")
            for(let i=0;i<doc1.length;i++){
            doc1[i].style.animationName='serimganim';
            doc1[i].style.animationIterationCount = "1";
            doc1[i].style.animationDuration="2s"
            doc1[i].style.animationTimingFunction = "ease-out";
            doc1[i].style.animationFillMode = "forwards";
            console.log('hello')
        }
        })};
function readmorep1(){
    let para1 = document.getElementById("parahserv1"); 
        if(para1.style.display == 'none'){
        para1.style.display = 'block';
        }
        else{
        para1.style.display = 'none';
        }
}
function readmorep2(){
    let para1 = document.getElementById("parahserv2"); 
        if(para1.style.display != 'none'){
        para1.style.display = 'none';
        }
        else{
        para1.style.display = 'block';
        }
}
function readmorep3(){
    let para1 = document.getElementById("parahserv3"); 
        if(para1.style.display != 'none'){
        para1.style.display = 'none';
        }
        else{
        para1.style.display = 'block';
        }
}