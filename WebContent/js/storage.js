function Storage() {

}

Storage.prototype.addMovieToLocalStorage = function (newMovie) {
    let movies = this.getMoviesFromLocalStorage();
    movies.push(newMovie);
    localStorage.setItem("movies", JSON.stringify(movies));
}

// Return movies array from LocalStorage
Storage.prototype.getMoviesFromLocalStorage = function () {
    let movies;

    if (localStorage.getItem("movies") === null)
        movies = [];
    else {
        movies = JSON.parse(localStorage.getItem("movies"));
    }
    return movies;
}