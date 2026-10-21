// WAP to store movie names with rating in a object list, display them on html using <ul> tag.Perform the CRUD operation.
let movies = [
    { name: "3 Idiots", rating: 9 },
    { name: "Dangal", rating: 8.5 },
    { name: "Pathaan", rating: 7 }
];
// READ: Display movies on HTML
function displayMovies() {
    let list = document.getElementById("movieList");
    list.innerHTML = "";

    movies.forEach(function(movie) {
        let li = document.createElement("li");
        li.textContent = movie.name + " - Rating: " + movie.rating;
        list.appendChild(li);
    });
}
// CREATE: Add a new movie
function addMovie() {
    let name = document.getElementById("name").value.trim();
    let rating = document.getElementById("rating").value;

    if (name === "" || rating === "" || rating < 0 || rating > 10) {
        alert("Enter a movie name and rating between 0 and 10.");
        return;
    }
    movies.push({
        name: name,
        rating: Number(rating)
    });
    displayMovies();
    clearInputs();
}
// UPDATE: Change an existing movie's rating
function updateMovie() {
    let name = document.getElementById("name").value.trim();
    let rating = document.getElementById("rating").value;
    let movie = movies.find(function(movie) {
        return movie.name.toLowerCase() === name.toLowerCase();
    });
    if (movie && rating !== "" && rating >= 0 && rating <= 10) {
        movie.rating = Number(rating);
        displayMovies();
        clearInputs();
    } else {
        alert("Movie not found or invalid rating!");
    }
}
// DELETE: Remove a movie
function deleteMovie() {
    let name = document.getElementById("name").value.trim();

    let index = movies.findIndex(function(movie) {
        return movie.name.toLowerCase() === name.toLowerCase();
    });
    if (index !== -1) {
        movies.splice(index, 1);
        displayMovies();
        clearInputs();
    } else {
        alert("Movie not found!");
    }
}
// Clear input fields
function clearInputs() {
    document.getElementById("name").value = "";
    document.getElementById("rating").value = "";
}
// Display initial movie list
displayMovies();
