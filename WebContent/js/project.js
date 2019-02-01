const form = document.querySelector("#film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");

// Init UI Object
const ui = new UI();

// Init Storage Object
const storage = new Storage();

eventListeners();

function eventListeners() {
    form.addEventListener("submit", addMovie);
    document.addEventListener("DOMContentLoaded", () => {
       let movies = storage.getMoviesFromLocalStorage();
       ui.loadAllMovies(movies);
    });
}

function addMovie(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === "") {
        // Error
        ui.displayMessages("Inputs cannot be empty!", "danger");
    } else {
        // New movie
        const newMovie = new Movie(title, director, url);

        // Add Movie to UI
        ui.addMovieToUI(newMovie);

        // Clear all inputs
        ui.clearInputs(titleElement, directorElement, urlElement);

        // Add Movie to LocalStorage
        storage.addMovieToLocalStorage(newMovie);

        // Show Success message
        ui.displayMessages("Movie has been added!", "success");
    }


    // Prevent Submit
    e.preventDefault();
}