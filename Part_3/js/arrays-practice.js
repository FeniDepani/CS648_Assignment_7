
//STEP 1
var movies = ["The Godfather", "The Dark Knight", "Extraction", "Hustlers", "Lion King"];
window.console.log(movies[1]);

//STEP 2
var movies = new Array(5);
movies[0] = "The Godfather";
movies[1] = "The Dark Knight";
movies[2] = "Extraction";
movies[3] = "Hustlers";
movies[4] = "Lion King";
window.console.log(movies[0]);

//STEP 3
var movies = new Array(5);
movies[0] = "The Godfather";
movies[1] = "The Dark Knight";
movies[2] = "Titanic";
movies[3] = "Hustlers";
movies[4] = "Lion King";
movies.splice(2, 0, "Avengers");
window.console.log(movies.length);

//STEP 4
var movies = [];
movies[0] = "The Godfather";
movies[1] = "The Dark Knight";
movies[2] = "Extraction";
movies[3] = "Hustlers";
movies[4] = "Lion King";
movies.splice(0, 1);
window.console.log(movies);

//STEP 5
movies = [];
movies[0] = "The Godfather";
movies[1] = "The Dark Knight";
movies[2] = "Titanic";
movies[3] = "Hustlers";
movies[4] = "Extraction";
movies[5] = "Fast and Furious";
movies[6] = "King Kong";
var i;
for ( i= 0; i < movies.length; i += 1) {
    window.console.log(movies[i]);
}

//STEP 6

movies = [];
movies[0] = "The Godfather";
movies[1] = "The Dark Knight";
movies[2] = "Extraction";
movies[3] = "Hustlers";
movies[4] = "Lion King";
movies[5] = "Fast and Furious";
movies[6] = "King Kong";
var i;
for (i in movies) {
    window.console.log(movies[i]);
}

//STEP 7
movies = [];
movies[0] = "The Godfather";
movies[1] = "The Dark Knight";
movies[2] = "Titanic";
movies[3] = "Extraction";
movies[4] = "Lion King";
movies[5] = "Fast and Furious";
movies[6] = "King Kong";
movies.sort();
for (var i in movies) {
    window.console.log(movies[i]);
}

//STEP 8
movies = [];
movies[0] = "The Godfather";
movies[1] = "The Dark Knight";
movies[2] = "Titanic";
movies[3] = "Hustlers";
movies[4] = "Lion King";
movies[5] = "Fast and Furious";
movies[6] = "Extraction";
leastFavMovies = [];
leastFavMovies[0]="The Room";
leastFavMovies[1]="Maniac";
leastFavMovies[2]="Robot Monster"
window.console.log("\n");
window.console.log("Movies I like:");
window.console.log("\n");
for (movie in movies) {
    window.console.log(movies[movie]);
}
window.console.log("\n");
window.console.log("Movies I regret watching:");
window.console.log("\n");
for (movie in leastFavMovies) {
        window.console.log(leastFavMovies[movie]);
}
window.console.log("\n");


//STEP 9

movies = [];
movies[0] = "The Godfather";
movies[1] = "The Dark Knight";
movies[2] = "Titanic";
movies[3] = "Hustlers";
movies[4] = "Lion King";
movies[5] = "Fast and Furious";
movies[6] = "King Kong";
leastFavMovies = [];
leastFavMovies[0]="The Room";
leastFavMovies[1]="Maniac";
leastFavMovies[2]="Robot Monster"
movies = movies.concat(leastFavMovies);
movies.sort();
movies.reverse();
for (index in movies) {
    window.console.log(movies[index]);
}

//STEP 10

movies = [];
movies[0] = "The Godfather";
movies[1] = "The Dark Knight";
movies[2] = "Titanic";
movies[3] = "Extraction";
movies[4] = "Lion King";
movies[5] = "Fast and Furious";
movies[6] = "King Kong";
leastFavMovies = [];
leastFavMovies[0]="The Room";
leastFavMovies[1]="Maniac";
leastFavMovies[2]="Robot Monster"
movies = movies.concat(leastFavMovies);
movies.sort();
movies.reverse();
window.console.log(movies.pop());