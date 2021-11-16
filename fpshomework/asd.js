var pics = new Array() //creates empty Array

//assign values to array population
//[ denotes index ] its like a house number, and array is the street name; array name index gives access to the indiv value
pics[0] = "images/coke.jpg"
pics[1] = "images/dr.jpg"
pics[2] = "images/pep.jpg"

var pics2 = new Array()

pics2[0] = "images/coke2.jpg"
pics2[1] = "images/dr2.jpg"
pics2[2] = "images/pep2.jpg"

//create an array holding the button element
//document.querySelectorAll grabs all of one element type
var btn = document.querySelectorAll('button')

//check your stored data in the console!
console.log(btn) //used for testing requires the dev tools to be open

//make the buttons clickable and runable for the game
//add event listeneres to each button
btn[0].addEventListener('click', function (e) {play(0) })
btn[1].addEventListener('click', function (e) {play(1) })
btn[2].addEventListener('click', function (e) {play(2) })

//array thats store the player and computer options ( one array for each)
//Player Id - pId
var pId = new Array("coke_p", "dr_p", "pep_p")
//pId[1] = "dr_p"
//Computer ID - cId
var cId = new Array("coke_c" ,"dr_c" ,"pep_c")
//create a function that will swap the regular images the highlighted ones (series 2 pics)
function swap(id, image){

    //access the image elements by ID from the HTML document
    document.getElementById(id).src = image

}

//play function
function play(id) {

    //setting up the stored image paths in JS to match the HTML
    //swap() Calls the function this gets it code to run!
    // values supplied inside of the are passed into the perameter variables
    swap(pId[0], pics[0])
    swap(pId[1], pics[1])
    swap(pId[2], pics[2])

    swap(cId[0], pics[0])
    swap(cId[1], pics[1])
    swap(cId[2], pics[2])

    //store the game choices to variables (player & comp)
    var p_choice = id
    //randomize the computers choice! maht.floor and * 2.9 limits choice
    
    
    var c_choice = Math.floor(Math.random() * 2.9)

    //swap the starting images with the highlighted ones
    swap(pId[p_choice], pics2[p_choice],)
    swap(cId[c_choice], pics2[c_choice],)
    //SWITCH Time - switch statements give us the option to determine a set of code to run based on apredertermined case value

    switch(p_choice) {
        //cases need to be built for ever option p_choice can be!
        //coke
        case 0://case for when p_choice == 0 
        if (c_choice == 0) {

            alert ("test")
            //callShowresults() and pass correct values for pchoice c choice and results
            showResults("coke!","coke!","It's a Draw")
        }
        else if (c_choice == 1) {
            alert("You LOSE to the computer!")
            showResults("coke!","dr!","You Suck")
        }
        else{

            alert("YOU WIN but stil lost cuz ur bad")
        }
        //dr
        break
        case 1:
            if (c_choice == 1) {
    
                alert ("test")
                showResults("dr","dr", "You Suck")
            }
            else if (c_choice == 2){
                alert("You LOSE to the computer!")}
            else  {
    
                alert("YOU WIN but stil lost cuz ur bad")
                showResults("dr","pep", "You Suck")
        
            }
           
            break
        //pep
        case 2:
            if (c_choice == 2) {
    
                alert ("Bloody hell lets call it a DRAW!")
                showResults("pep","pep","Its a draw")
            }
            else if (c_choice == 0){
                alert("You LOSE to the computer!")}
            else  {
    
                alert("YOU WIN but stil lost cuz ur bad")
                showResults("pep","dr","You Win")
            }
            break

        }//end switch statement


}
//funtion that writes the results back to the HTML page
function showResults(pChoice, cChoice, results) {

    document.getElementById("pChoice").innerHTML = pChoice
    document.getElementById("cChoice").innerHTML = cChoice
    document.getElementById("results").innerHTML = results


}
