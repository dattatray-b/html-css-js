console.log("hello")


const boxes = document.querySelectorAll('.box');

boxComming();

window.addEventListener('scroll', boxComming);
// we want to fire off the event on window so
// we add scroll event and the function boxComming.


function boxComming(){

    const activateScroll = window.innerHeight / 2;
    // we want to make start comming for boxes at half 
    // of the window length.

    console.log(activateScroll);

    boxes.forEach( box => {

        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < activateScroll){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }

    })
}


