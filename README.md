# MovieAPI-VanillaJs



## Project Description

MovieHub is a web app where users can search movie titles and receive back a show case of movies from the OMDB API database. Users can then select for more details on a specific movie to see other info such as director, actors, etc. I used the OMDB API and utilized two GET endpoints. One for a search query, and one for search by ID query.

## API and Data Sample

OMDB API is returning the data for a search query as follows:

```
"Search": [
        {
            "Title": "Starwars: Goretech",
            "Year": "2018",
            "imdbID": "tt9336300",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNTI5OTBhMGYtNTZlNS00MjMzLTk5NTEtZDZkODM5YjYzYmE5XkEyXkFqcGdeQXVyMzU0OTU0MzY@._V1_SX300.jpg"
        }

```
OMDB API is return a search by ID query as follows:

```
{
    "Title": "Spider-Man: No Way Home",
    "Year": "2021",
    "Rated": "PG-13",
    "Released": "17 Dec 2021",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "Jon Watts",
    "Writer": "Chris McKenna, Erik Sommers, Stan Lee",
    "Actors": "Tom Holland, Zendaya, Benedict Cumberbatch",
    "Plot": "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
    "Language": "English",
    "Country": "United States",
    "Awards": "4 wins & 26 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "8.7/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "93%"
        },
        {
            "Source": "Metacritic",
            "Value": "71/100"
        }
    ],
    "Metascore": "71",
    "imdbRating": "8.7",
    "imdbVotes": "414,761",
    "imdbID": "tt10872600",
    "Type": "movie",
    "DVD": "N/A",
    "BoxOffice": "$720,891,602",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
}
```
## Technologies Used
- jQuery - JavaScript Library | Used for document traversal and manipulation, and event handling
- Axios - JavaScript Library | Used to make HTTP Request
- Bootstrap - HTML,CSS,JavaScript Library | Used for styling & responsiveness
