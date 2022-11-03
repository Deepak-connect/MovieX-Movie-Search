const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMG_URL = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

let movieContainer = document.getElementById('movie-container');
let form = document.getElementById('form');
let search = document.getElementById('search');

getMovies(API_URL);

function getMovies(url){
    fetch(url).then(response => response.json())
    .then(data =>{
        showMovies(data.results); 
    })
}

function showMovies(data){
    movieContainer.innerHTML='';
    data.forEach((element) => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <img src="${IMG_URL + element.poster_path}" alt="">
            <div class="movie-info">
                <h2>${element.original_title}</h2>
                <p>${element.vote_average}</p>
            </div>
            <div class="overview">
                <h3>${element.original_title}</h3>
                <h4>Overview</h3>
                <p>${element.overview}</p>
            </div>`

        movieContainer.append(movieCard);
    })
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let searchQuery = search.value
    if(searchQuery){
        getMovies(SEARCH_API + searchQuery);
    }
    else{
        getMovies(API_URL);
    }
    
})