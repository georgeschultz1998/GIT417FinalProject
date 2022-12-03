"use strict";

// Function to update details for apt5
function updateApt5() {
    document.getElementById("desc").innerText = "Upstairs Studio Apartment";
    document.getElementById("rent").innerText = "Rent-$850";
    document.getElementById("bed").innerText = "Studio";
    document.getElementById("bath").innerText = "1 Bathroom";
    document.getElementById("sqft").innerText = "600 sqft";
    document.getElementById("pet").innerText = "Under 25 pound pet OK";
    document.getElementById("avail").innerText = "RENTED 09/22";
    document.getElementById("apartmentimg").src = "images/Apartment5.png";
}

// Function to update details for apt6
function updateApt6() {
    document.getElementById("desc").innerText = "Upstairs 1 Bed Apartment";
    document.getElementById("rent").innerText = "Rent-$950";
    document.getElementById("bed").innerText = "1 Bedroom";
    document.getElementById("bath").innerText = "1 Bathroom";
    document.getElementById("sqft").innerText = "700 sqft";
    document.getElementById("pet").innerText = "Under 25 pound pet OK";
    document.getElementById("avail").innerText = "AVAILABLE NOW";
    document.getElementById("apartmentimg").src = "images/Apartment6.png";
}

// Function to update details for apt8
function updateApt8() {
    document.getElementById("desc").innerText = "Downstairs 1 Bed Apartment";
    document.getElementById("rent").innerText = "Rent-$950";
    document.getElementById("bed").innerText = "1 Bedroom";
    document.getElementById("bath").innerText = "1 Bathroom";
    document.getElementById("sqft").innerText = "700 sqft";
    document.getElementById("pet").innerText = "Under 25 pound pet OK";
    document.getElementById("avail").innerText = "AVAILABLE 01/23";
    document.getElementById("apartmentimg").src = "images/Apartment8.png";
}

// Function to update details for apt14
function updateApt14() {
    document.getElementById("desc").innerText = "Downstairs 2 Bed Apartment";
    document.getElementById("rent").innerText = "Rent-$1,050";
    document.getElementById("bed").innerText = "2 Bedroom";
    document.getElementById("bath").innerText = "1 Bathroom";
    document.getElementById("sqft").innerText = "800 sqft";
    document.getElementById("pet").innerText = "Under 25 pound pet OK";
    document.getElementById("avail").innerText = "RENTED 11/22";
    document.getElementById("apartmentimg").src = "images/Apartment14.png";
}

// Function to update details for apt15
function updateApt15() {
    document.getElementById("desc").innerText = "Upstairs 1 Bed Apartment";
    document.getElementById("rent").innerText = "Rent-$950";
    document.getElementById("bed").innerText = "1 Bedroom";
    document.getElementById("bath").innerText = "1 Bathroom";
    document.getElementById("sqft").innerText = "700 sqft";
    document.getElementById("pet").innerText = "Under 25 pound pet OK";
    document.getElementById("avail").innerText = "RENTED 05/22";
    document.getElementById("apartmentimg").src = "images/Apartment15.png";
}

// Function to activate dark mode
function updateColorsTwo() {
    document.getElementById("maindiv").style.color = "white";
    document.getElementById("navdiv").style.backgroundColor = "darkblue"
    document.getElementById("unitsdiv").style.backgroundColor = "darkblue"
    document.getElementById("maindiv").style.backgroundColor = "darkblue"
    document.getElementById("headerdiv").style.backgroundColor = "darkblue";
    document.getElementById("headerdiv > a").style.backgroundColor = "darkblue";
    document.getElementById("headerdiv a").style.backgroundColor = "darkblue";
    document.getElementById("formdiv").style.backgroundColor = "darkblue";
    document.getElementById("contact").style.backgroundColor = "darkblue";
    document.getElementById("navunit").style.backgroundColor = "darkblue";
    document.getElementsByClassName("clabel").color = "white";
}

// Function to activate light mode
function updateColors() {
    document.getElementById("maindiv").style.color = "black";
    document.getElementById("unitsdiv").style.backgroundColor = "lightblue"
    document.getElementById("navdiv").style.backgroundColor = "lightblue"
    document.getElementById("maindiv").style.backgroundColor = "lightblue"
    document.getElementById("headerdiv").style.backgroundColor = "lightblue";
    document.getElementById("headerdiv > a").style.backgroundColor = "lightblue";
    document.getElementById("headerdiv a").style.backgroundColor = "lightblue";
    document.getElementById("formdiv").style.backgroundColor = "lightblue";
    document.getElementById("contact").style.backgroundColor = "lightblue";
    document.getElementById("navunit").style.backgroundColor = "lightblue";
    document.getElementById("navdiv").style.backgroundColor = "lightblue";
    document.getElementsByClassName("clabel").color = "black";

}

// Function for the Game Play
function response(){
    let ranNum=parseInt(Math.floor(Math.random()*10)+1);
    console.log("Random Number= "+ranNum);
    let inputValue=document.getElementById("numGuess").value;
    let result=parseInt(inputValue);
    console.log("Your Guess= "+result);

    if(result==ranNum){
        console.log("----You Win");
        document.getElementById('Result').innerHtML= "You Win";
    } else {
        console.log("----You Lose It Was "+ranNum);
        document.getElementById('Result').innerHTML="You Lose It Was: "+ranNum;
    }
}
