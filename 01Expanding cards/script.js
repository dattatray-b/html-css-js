// bascially we are just changing class to active for 
// each div



const panels = document.querySelectorAll('.panel');
// this panels stores a node list kind of an arry consisting fo all panel


// now will looping through this node list


// using higher order method foreach which takes function as argument


panels.forEach( (panel) => {
    // console.log(panel)

    panel.addEventListener( 'click', () => {
        // console.log('123')
        revmoveActiveClases()
        // this above function will remove active classes on all 
        // the cards before adding to clicked one
        panel.classList.add('active')
        // this addes the class of active on the card which is clicked
    })
})



function revmoveActiveClases(){
    panels.forEach( (panel) => {
        panel.classList.remove('active')
    })
}