// @ instructions
// Return the Nth 'films' value (in this case title).
// Rules: filmNumber starts at 1 and refers to the 'first' film,, and includes only the rang 1-3.
// Any numbers outside that range should throw an error.
// The error must mention the name of your favorite _extra cheesy_ movie.
//
// Given film #1, expected output: 'A New Hope'
// Given film #7, expected error: 'There are only 3 Star Wars movies. Fan fiction excluded.'

const obj = {
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "homeworld": "Tatooine",
    "films": [
      "A New Hope",
      "The Empire Strikes Back",
      "Return of the Jedi",
      "Revenge of the Sith",
      "The Force Awakens",
      1
    ],
}

function nthFilm(filmNumber) {
    if(1 <= filmNumber && filmNumber <= 3) {
        return obj.films[filmNumber - 1];
    } else {
        return 'Random answer with Error included'
    }
};

// gives you 
console.log(nthFilm(1));


console.log(obj.films.length);

// gives you the last item in the array
console.log(obj.films[obj.films.length -1]);