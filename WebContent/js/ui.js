// UI Class
function UI() {

}

UI.prototype.addMovieToUI = function (newMovie) {
// <tr>
//     <td><img src="" class="img-fluid img-thumbnail"></td>
//         <td></td>
//         <td></td>
//         <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
// </tr>

    const movieList = document.getElementById("films");

    movieList.innerHTML += `
        <tr>
            <td><img src="${newMovie.link}" class="img-fluid img-thumbnail"></td>
            <td>${newMovie.title}</td>
            <td>${newMovie.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Delete Movie</a></td>
        </tr>
    `;
}

UI.prototype.clearInputs = function (e1, e2, e3) {
    e1.value = "";
    e2.value = "";
    e3.value = "";
    e1.focus();
}

UI.prototype.displayMessages = function (message, type) {
    // Select div
    const cardBody = document.querySelector(".card-body");

    // Create div element
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;

    // append div to element to card-body
    cardBody.appendChild(div);

    // setTimeout -> delete appended div after 1 second.
    setTimeout(() => div.remove(), 1000);
}