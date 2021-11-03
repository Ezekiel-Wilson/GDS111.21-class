//start by declaring known variables with starting values
// variable: data storage device friendly name for info

var totalAmmo = 6 //ammocache value
var maxAmmo = 6 //gun capactiy for 


//below ensures the current gun capacity for ammo is full before w estart
var currentAmmo = maxAmmo

//shoot function -- handles updating the current ammo on screen (so as button is clicked, current ammo goes down)
function shoot() {

    
    if (currentAmmo > 0) {

       
        currentAmmo-- 
    
    document.getElementById("gun").play();
    document.getElementById("gun").currentTime= 0;}
    updatescreen()


}

//function to update the total and current ammo values on screen
function updatescreen() {

    //first, connect the HTML elements holding the ammo values to your JS, and write inside of the elements the current ammo values from JS
    document.getElementById("total-ammo").innerHTML = "" + totalAmmo
    document.getElementById("current-ammo").innerHTML = "" + currentAmmo


}//updatescren() CLOSE

//functions can also be PASSED VALUES; these values ar ecalled parameters (a , b) and must be sent ot the function during the clal in order for the function to work(func relies on this data to do its job!)
function getDiff(a,b) {
    var c = a - b
    //once c is calculated, the value will be retunred to where the function was CALLED 
    return c


}//getDiff() CLOSE

//reload function reloading the currents guns mamo to fire again
function reload() {

    //find the value of idfference by calling getdiff an dsending ammo values
    //once getdiff does its job it reutnrs to c to where it was called
    //REMEMBER: storage ( = ) happens from right to left!
    var difference = getDiff(maxAmmo, currentAmmo) //getDiff (a = Max, b = current, c=difference)

    if (difference > 0 && totalAmmo !=0) {

        document.getElementById("reload").play();
    }

    if (totalAmmo >= difference) {

        currentAmmo += difference //currentAmmo = current ammo + difference
        totalAmmo -= difference //totalammo = totalammo - difference
    }

    else {//when the if conditio nis false the else runs

        currentAmmo += totalAmmo
        totalAmmo -= totalAmmo // totalAmmo = 0

    }
    updatescreen()


}//reload