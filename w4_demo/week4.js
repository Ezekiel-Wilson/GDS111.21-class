//RIDDLE JavaScript File

//JS is a scripting langugae that can change stuff on the HTML pagel it is not a markup language so it will follow more fundamental logic related to other computer programming styles

//VARIABLES - Variables store data (information) to be used in the script/program they are friendly  names to refer to info as// think about variables as the contact names in your phone: you dont need to remember everyones number you just need to remember their name the phone gets the number through the name.

//each variable will store the answer to a riddle question
//JS requires vars to be declared as such 
var store1 ="A Map" //answer to question 1
var store2 ="Echo"
var store3 ="NOON"

//**Variable Names must be uniqure they are also CasE SenSiTivE */
//total != Total !=TOTAL



//FUNCTIONS - perform tasks they have a set of processes assigned to them and when they are CALLED  their tasks are performed

//function below will talk to the HTML DOM Document object mode and get specific elements by their id then push info to their innerHTML inbetween the open and close of the tag
function answer1() {


    document.getElementById("question1").innerHTML = store1;
}
function answer2() {

    document.getElementById("question2").innerHTML = store2;
}
function answer3(){

    document.getElementById("question3").innerHTML = store3;
}

  
