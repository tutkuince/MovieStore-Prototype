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