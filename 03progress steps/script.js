const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('Next');

const circles = document.querySelectorAll('.circle')

// we used quersyselector all as there are more than one
// plus circle class with dot '.circle'


console.log(circles);


let currentActive = 1;

next.addEventListener('click',()=>{
    currentActive++;

    
    if( currentActive > circles.length){
        currentActive = circles.length;
    }

    // console.log(currentActive);

    update();
})


prev.addEventListener('click',()=>{
    currentActive--;

    
    if( currentActive < 1){
        currentActive = 1;
    }

    // console.log(currentActive);
    update()
})

function update(){
    circles.forEach((circle,idx) => {
        if(idx < currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })
    
    const actives = document.querySelectorAll('.active')

    // console.log((actives.length / circles.length) * 100)

    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100  + '%'

    // this for blue line to progress  this % sign is added as to concat the string 
    // for unit

    if( currentActive === 1){
        prev.disabled = true
    }else if( currentActive === circles.length){
        next.disabled = true
    }else{
        prev.disabled = false
        next.disabled = false
    }
}