const API_KEY = "apikey=e3aaf36d"
// URL `http://www.omdbapi.com/?s=&${API_KEY}`

$(document).ready(() => {
  $("#searchForm").on("submit", (e) => {
    let searchText = $("#searchText").val()
    getMovies(searchText)
    e.preventDefault()
  })
})

async function getMovies (searchText) {
  let res = await axios.get(`http://www.omdbapi.com/?s=${searchText}&${API_KEY}`)
  let movies = res.data.Search
  let output = ""
  $.each(movies, (index, movie) => {
    output += `

    <div class="col-md-3">
        <div class="well text-center">
          <img src="${movie.Poster}">
          <h5>${movie.Title}</h5>
          <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
        </div>
    </div>

    `
  })
  $("#movies").html(output)
}

function movieSelected(id) {
  // Saving ID using session storage
  sessionStorage.setItem("movieId", id)
  window.location = "movie.html"
  return false
}

async function getMovie() {
  // grabbing and saving id to a variable using session storage
  let movieId = sessionStorage.getItem("movieId")
  let res = await axios.get(`http://www.omdbapi.com/?i=${movieId}&${API_KEY}`)
  let movie = res.data
  console.log(movie)
  let output =`
        <div class="row">
          <div class="col-md-4">
            <img src="${movie.Poster}" class="thumbnail">
          </div>
          <div class="col-md-8">
            <h2>${movie.Title}</h2>
            <ul class="list-group">
              <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
              <li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
              <li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
              <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
              <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
              <li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
              <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="well">
            <h3>Plot</h3>
            ${movie.Plot}
            <hr>
            <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
            <a href="index.html" class="btn btn-default">Back To Search</a>
          </div>
        </div>
      `
  
  
  $("#movie").html(output)
  
}