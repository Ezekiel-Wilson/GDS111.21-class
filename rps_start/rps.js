//RPS part 1 javascript W6D1 class

//create an Array that will store the images being used
//ARRAY: Its just like a variable so its a data storage device but it can contain more than one value

var pics = new Array() //creates empty Array

//assign values to array population
//[ denotes index ] its like a house number, and array is the street name; array name index gives access to the indiv value
pics[0] = "images/rock.jpg"
pics[1] = "images/paper.jpg"
pics[2] = "images/scissors.jpg"

var pics2 = new Array()

pics2[0] = "images/rock2.jpg"
pics2[1] = "images/paper2.jpg"
pics2[2] = "images/scissors2.jpg"

//array thats store the player and computer options ( one array for each)
//Player Id - pId
var pId = new Array("rock_p", "paper_p", "scissors_p")
//pId[1] = "paper_p"
//Computer ID - cId
var cId = new Array("rock_c" ,"paper_c" ,"scissors_c")
//create a function that will swap the regular images the highlighted ones (series 2 pics)
function swap(id, image){

    //access the image elements by ID from the HTML document
    document.getElementById(id).src = image

}

//play function
function play(id) {

    //setting up the stored image paths in JS to match the HTML
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
        //Rock
        case 0://case for when p_choice == 0 
        if (c_choice == 0) {

            alert ("Bloody hell lets call it a DRAW!")
        }
        else if (c_choice == 1) {
            alert("You LOSE to the computer!")
        }
        else{

            alert("YOU WIN but stil lost cuz ur bad")
        }
        //paper
        break
        case 1:
            if (c_choice == 1) {
    
                alert ("Bloody hell lets call it a DRAW!")
            }
            else if (c_choice == 2){
                alert("You LOSE to the computer!")}
            else  {
    
                alert("YOU WIN but stil lost cuz ur bad")
            }
            break
        //scissors
        case 2:
            if (c_choice == 2) {
    
                alert ("Bloody hell lets call it a DRAW!")
            }
            else if (c_choice == 0){
                alert("You LOSE to the computer!")}
            else  {
    
                alert("YOU WIN but stil lost cuz ur bad")
            }
            break

        }//end switch statement
}
