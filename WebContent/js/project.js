const form = document.querySelector("#film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");

// Init UI Object
const ui = new UI();

eventListeners();

function eventListeners() {
    form.addEventListener("submit", addMovie);
}

function addMovie(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === "") {
        // Error
    } else {
        // New movie
        const newMovie = new Movie(title, director, url);

        ui.addMovieToUI(newMovie);
    }


    // Prevent Submit
    e.preventDefault();
}