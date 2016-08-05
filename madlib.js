var letsAGo = function() {
    var promptResponse = prompt("Are you ready for this exciting MadLib? Yes or No", "Yes");
    if (promptResponse === "Yes") {
      alert("Yay! Let's a go!");
      madLib();
    } else {
        alert("Boo!");
    }
};

function madLib() {
    var madLibObj = {
        adj1: prompt("Choose an adjective."),
        pluralNoun: prompt("Choose a plural noun."),
        ingVerb: prompt("Choose a verb ending in ing."),
        noun1: prompt("Choose a noun."),
        pluralNoun2: prompt("Choose a plural noun."),
        celebrityFemale: prompt("Choose a celebrity female."),
        maleInRoom: prompt("Choose a male name."),
        sillyWord: prompt("Choose a silly word."),
        sillyVerb: prompt("Choose a silly verb."),
        typeOfFoodPlural: prompt("Choose a type of food (plural)."),
        noun2: prompt("Choose a noun."),
        typeOfFood: prompt("Choose a type of food."),
        adj2: prompt("Choose an adjective."),
        adj3: prompt("Choose an adjective."),
        typeOfShoes: prompt("Choose a type of shoe (plural)."),
        somethingAlive: prompt("Choose something alive."),
        noun3: prompt("Choose a noun."),
        ingVerb2: prompt("Choose a verb ending in ing."),
        adj4: prompt("Choose an adjective."),
        sillyNoun: prompt("Choose a silly noun.")
    };

    console.log("One of the " +  madLibObj.adj1 + " things about summer is that my " + madLibObj.pluralNoun + " are " + madLibObj.ingVerb + " a huge party! I decided to throw a back yard " + madLibObj.noun1 + " for all of my family and " + madLibObj.pluralNoun2 + ". I have invited my best friend " + madLibObj.celebrityFemale + ", " + madLibObj.maleInRoom + ", and of course my neighbor, Ms. " + madLibObj.sillyWord + ". My dad is going to " + madLibObj.sillyVerb + " hamburgers and " + madLibObj.typeOfFoodPlural + " on his shiny new " + noun2 + ". He always thinks his " + madLibObj.typeOfFood + " tastes really " + madLibObj.adj2 + ", but I think they taste like " + madLibObj.adj3 + " " + madLibObj.typeOfShoes + ". My mom is going to make her famous " + madLibObj.somethingAlive + " salad, which is my favorite " + madLibObj.noun3 + " ever! My mom said, after we finish " + madLibObj.ingVerb2 + ", we can go swimming in our new " + madLibObj.adj4 + " " + madLibObj.sillyNoun + "!");
};

letsAGo();
