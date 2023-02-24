let opq = document.getElementById('image').style.opacity;

let text =  document.querySelector(".eww");

let int = 0;

let interval = setInterval(percentage, 15);

function percentage(){
    int++;
    if(int > 99){
        clearInterval(interval)
    }
    text.innerText = `${int}%`;
    if(int === 100){
        text.style.display = "none"
    }
    setTimeout( ()=>{
        for(let i = 0 ; i <= 1 ; i = i + 0.1){
            document.getElementById('image').style.opacity = `${i}`;
        }
    },int)
    
}