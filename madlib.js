var promptResponse = prompt("Are you ready for this exciting MadLib? Yes or No", "Yes");

var sillyAlert = function(alertResponse) {
    if (promptResponse === "Yes") {
      alert("Yay! Let's a go!");
      madLib();
    } else {
        alert("Boo! You suck!");
    }
};

sillyAlert(promptResponse);

function madLib() {
    var adj1 = prompt("Choose an adjective.");
    var pluralNoun = prompt("Choose a plural noun.");
    var ingVerb = prompt("Choose a verb ending in ing.");
    var noun1 = prompt("Choose a noun.");
    var pluralNoun2 = prompt("Choose a plural noun.");
    var celebrityFemale = prompt("Choose a celebrity female.");
    var maleInRoom = prompt("Choose a male name.");
    var sillyWord = prompt("Choose a silly word.");
    var sillyVerb = prompt("Choose a silly verb.");
    var typeOfFoodPlural = prompt("Choose a type of food (plural).");
    var noun2 = prompt("Choose a noun.");
    var typeOfFood = prompt("Choose a type of food.");
    var adj2 = prompt("Choose an adjective.");
    var adj3 = prompt("Choose an adjective.");
    var typeOfShoes = prompt("Choose a type of shoe (plural).");
    var somethingAlive = prompt("Choose something alive.");
    var noun3 = prompt("Choose a noun.");
    var ingVerb2 = prompt("Choose a verb ending in ing.");
    var adj4 = prompt("Choose an adjective.");
    var sillyNoun = prompt("Choose a silly noun.");

    console.log("One of the " +  adj1 + " things about summer is that my " + pluralNoun + " are " + ingVerb + " a huge party! I decided to throw a back yard " + noun1 + " for all of my family and " + pluralNoun2 + ". I have invited my best friend " + celebrityFemale + ", " + maleInRoom + ", and of course my neighbor, Ms. " + sillyWord + ". My dad is going to " + sillyVerb + " hamburgers and " + typeOfFoodPlural + " on his shiny new " + noun2 + ". He always thinks his " + typeOfFood + " tastes really " + adj2 + ", but I think they taste like " + adj3 + " " + typeOfShoes + ". My mom is going to make her famous " + somethingAlive + " salad, which is my favorite " + noun3 + " ever! My mom said, after we finish " + ingVerb2 + ", we can go swimming in our new " + adj4 + " " + sillyNoun + "!");
};


