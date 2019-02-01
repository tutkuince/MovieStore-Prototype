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

Storage.prototype.deleteMovieFromLocalStorage = function (title) {
    let movies = this.getMoviesFromLocalStorage();

    movies.forEach((movie, index) => {
       if(movie.title === title){
           movies.splice(index, 1);
       }
    });
    localStorage.setItem("movies", JSON.stringify(movies));
}