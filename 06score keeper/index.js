console.log("hi!");

const target = 7;

let p1s = document.querySelector(".score1").innerHTML;
let p2s =  document.querySelector(".score2").innerHTML;
const reset = document.querySelector(".reset")
const p1 =  document.querySelector(".one")
const p2 =  document.querySelector(".two")

function decider(x,y){
    if((x === 7) || (y === 7)){
        if(x === 7){
            document.querySelector(".score1").style.color = "green";
            document.querySelector(".score2").style.color = "red";
        }
        else if(y === 7){
            document.querySelector(".score2").style.color = "green";
            document.querySelector(".score1").style.color = "red";
        }
    }
}

function resetBtn(){
    p1s= p2s = 0;
    document.querySelector(".score1").innerHTML = 0;
    document.querySelector(".score2").innerHTML = 0;
    document.querySelector(".score2").style.color = "BLACK"
    document.querySelector(".score1").style.color = "BLACK"
}


p1.addEventListener("click", function () {
    p1s++;
    if(p1s <= 7){
        document.querySelector(".score1").innerHTML = p1s;
    }
    decider(p1s, p2s);

});

p2.addEventListener("click", function () {
    p2s++;
    if(p2s <= 7){
        document.querySelector(".score2").innerHTML = p2s;
    }
    decider(p1s, p2s);
});


reset.addEventListener("click" , resetBtn);


