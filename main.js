var hungry = confirm("Do you want to play the lunch?")


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
    var spice = prompt("Do you like your food spicy or mild?")
    if (spice.toLowerCase() == "spicy") {
        alert("Let's go to Taj Palace")
    }
    else if (spice.toLowerCase() == "mild") {
        alert("Let's go to Curry House")
    }
    else {
        alert("Please learn to type...try again next week!")
    }

}

function mexican(){
    var spice = prompt("Do you like your food spicy or mild?")
    if (spice.toLowerCase() == "spicy") {
        alert("Let's go to Roberto's")
    }
    else if (spice.toLowerCase() == "mild") {
        alert("Let's go to Taco Bell")
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
