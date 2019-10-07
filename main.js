var hungry = confirm("Do you want to go to lunch?")


if (hungry) {
    eat()
}
else {
    noteat()
}

function eat() {
    alert("Me too, lets figure out what to eat")
    var cuisine = prompt("Do you prefer Chinese, Indian, or Mexican?")
    if (cuisine.toLowerCase() == "chinese") {
        chinese()
    }

    else if (cuisine.toLowerCase() == "indian") {
        indian()
    }
    else if (cuisine.toLowerCase() == "mexican") {
        mexican()
    }
    else {
        alert("I didn't understand you, I've lost my apetite")
    }
}

function noteat() {
    alert("No wonder you're so thin!")
}

function chinese() {
    var spice = prompt("Do you like your food spicy or mild?")
    if (spice.toLowerCase() == "spicy") {
        alert("Let's go to Szchuan King")
        var tea = confirm("Would you like tea with your meal?")
        if (tea) {
            teatype()
        } else {
            alert("Good decision, too much caffeine")
        }
    }
    else if (spice.toLowerCase() == "mild") {
        alert("Let's go to Panda Express")
        var tea = confirm("Would you like tea with your meal?")
        if (tea) {
            teatype()
        } else {
            alert("Good decision, too much caffeine")
        }
    }
    else {
        alert("Please learn to type...try again next week!")
        
    }
}

function indian(){
    var hunger = prompt("What is your hunger level between 1 and 10?")
    if (hunger > 6 && hunger < 11) {
        alert("Wow, you're hungry..let's go to Taj Buffet")
    }
    else if (hunger > 3 && hunger < 7) {
        alert("Let's go to Curry House, they have a la carte")
    }
    else if (hunger > 0 && hunger < 4) {
        alert("Go eat a salad you vegan!!")
    }
    else {
        alert("I didn't understand, I'll just pick for us")
    }

}

function mexican(){
    
    var location = prompt("Do you want to go to Henderson or Summerlin?")
    if (location.toLowerCase() == "henderson") {
        alert("Juan's Flaming Fajitas is great!")
        var yesnomexican = confirm ("Do you want to go there?")
        if (yesnomexican) {
            alert("Cool, I'll drive")
        } 
        else {
            alert("No?? Fine, I'll go by myself")
        }
    }
    else if (location.toLowerCase() == "summerlin") {
        var drive = confirm("Can you drive?")
        if (drive) {
            alert("Cool, let's go to Red Rock")
        }
        else {
            alert("Fine, let's just go to taco bell down the street")
        }
    }
    else {
        alert("Please learn to type...try again next week!")
    }
}

function teatype(){

        var teachoice = prompt("Do you want Jasmine or Black?")
        if (teachoice.toLowerCase() == "jasmine") {
            alert("Great choice")
        } else if (teachoice.toLowerCase() == "black") {
            alert("That is an acquired taste")
        }
        else {
            alert("I didn't understand, I'll order you water")
        }



}
