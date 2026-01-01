import * as actions from './actionTypes'
import { Movieapi } from './assets/api'
import { TVseriesapi } from './assets/api'

export const getMovies = () => {
    return async (dispatch) => {
        const url = Movieapi;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '67ec1bbea9mshdecdfa2dddd2b6ep1f7e24jsnb9d77efd817e',
                'x-rapidapi-host': 'imdb236.p.rapidapi.com'
            }
        };
        try {
            const response = await fetch(url, options);
            const result = await response.json();

            // const result = [
            //     {
            //         "id": "tt7068946",
            //         "url": "https://www.imdb.com/title/tt7068946/",
            //         "primaryTitle": "The Accountant 2",
            //         "originalTitle": "The Accountant 2",
            //         "type": "movie",
            //         "description": "Christian Wolff applies his brilliant mind and illegal methods to reconstruct the unsolved puzzle of a Treasury chief's murder.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BYjFiY2I0NTEtNjdjNy00MTljLThkOWYtMzNiYjYyMDcxYjhkXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYjFiY2I0NTEtNjdjNy00MTljLThkOWYtMzNiYjYyMDcxYjhkXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYjFiY2I0NTEtNjdjNy00MTljLThkOWYtMzNiYjYyMDcxYjhkXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=3wRCOqyDI6E",
            //         "contentRating": "R",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-04-25",
            //         "interests": [
            //             "Whodunnit",
            //             "Action",
            //             "Crime",
            //             "Drama",
            //             "Mystery",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Cowboy Palace Saloon - 21635 Devonshire St, Chatsworth, Los Angeles, California, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co1025982",
            //                 "name": "Amazon MGM Studios"
            //             },
            //             {
            //                 "id": "co0961831",
            //                 "name": "Artists Equity"
            //             },
            //             {
            //                 "id": "co0655304",
            //                 "name": "51 Entertainment"
            //             }
            //         ],
            //         "budget": 80000000,
            //         "grossWorldwide": 102123366,
            //         "genres": [
            //             "Action",
            //             "Crime",
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 132,
            //         "averageRating": 6.8,
            //         "numVotes": 57821,
            //         "metascore": 58
            //     },
            //     {
            //         "id": "tt7181546",
            //         "url": "https://www.imdb.com/title/tt7181546/",
            //         "primaryTitle": "From the World of John Wick: Ballerina",
            //         "originalTitle": "Ballerina",
            //         "type": "movie",
            //         "description": "An assassin trained in the traditions of the Ruska Roma organization sets out to seek revenge after her father's death.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BNzdhZmY2OTQtYWI4OC00ZThkLTlhZjAtNzE2YzRjM2Q5YjJlXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNzdhZmY2OTQtYWI4OC00ZThkLTlhZjAtNzE2YzRjM2Q5YjJlXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNzdhZmY2OTQtYWI4OC00ZThkLTlhZjAtNzE2YzRjM2Q5YjJlXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=0FSwsrFpkbw",
            //         "contentRating": "R",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-06-06",
            //         "interests": [
            //             "Gun Fu",
            //             "Martial Arts",
            //             "One-Person Army Action",
            //             "Action",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://ballerinamovie2025.com/"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Hungary"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0006881",
            //                 "name": "Lionsgate"
            //             },
            //             {
            //                 "id": "co0172670",
            //                 "name": "Thunder Road Pictures"
            //             },
            //             {
            //                 "id": "co0836036",
            //                 "name": "87Eleven Entertainment"
            //             }
            //         ],
            //         "budget": 90000000,
            //         "grossWorldwide": 58432471,
            //         "genres": [
            //             "Action",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 124,
            //         "averageRating": 7.3,
            //         "numVotes": 22807,
            //         "metascore": 59
            //     },
            //     {
            //         "id": "tt31193180",
            //         "url": "https://www.imdb.com/title/tt31193180/",
            //         "primaryTitle": "Sinners",
            //         "originalTitle": "Sinners",
            //         "type": "movie",
            //         "description": "Trying to leave their troubled lives behind, twin brothers return to their hometown to start again, only to discover that an even greater evil is waiting to welcome them back.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BNjIwZWY4ZDEtMmIxZS00NDA4LTg4ZGMtMzUwZTYyNzgxMzk5XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNjIwZWY4ZDEtMmIxZS00NDA4LTg4ZGMtMzUwZTYyNzgxMzk5XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNjIwZWY4ZDEtMmIxZS00NDA4LTg4ZGMtMzUwZTYyNzgxMzk5XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=bKGxHflevuk",
            //         "contentRating": "R",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-04-18",
            //         "interests": [
            //             "Period Drama",
            //             "Supernatural Horror",
            //             "Vampire Horror",
            //             "Action",
            //             "Drama",
            //             "Horror",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US",
            //             "AU",
            //             "CA"
            //         ],
            //         "externalLinks": [
            //             "https://www.sinnersmovie.com/"
            //         ],
            //         "spokenLanguages": [
            //             "en",
            //             "zh"
            //         ],
            //         "filmingLocations": [
            //             "Donaldsonville, Louisiana, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0002663",
            //                 "name": "Warner Bros."
            //             },
            //             {
            //                 "id": "co1090055",
            //                 "name": "Domain Entertainment (II)"
            //             },
            //             {
            //                 "id": "co0843639",
            //                 "name": "Proximity Media"
            //             }
            //         ],
            //         "budget": 90000000,
            //         "grossWorldwide": 358714237,
            //         "genres": [
            //             "Action",
            //             "Drama",
            //             "Horror"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 137,
            //         "averageRating": 7.8,
            //         "numVotes": 153129,
            //         "metascore": 84
            //     },
            //     {
            //         "id": "tt32550101",
            //         "url": "https://www.imdb.com/title/tt32550101/",
            //         "primaryTitle": "Straw",
            //         "originalTitle": "Straw",
            //         "type": "movie",
            //         "description": "A single mother navigates a series of unfortunate events, leading her down an unforeseen path where she becomes embroiled in a situation she never envisioned, finding herself at the center of suspicion in an indifferent world.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BNmZjOTU5MGQtYTcyMi00ZGJjLTk4NzQtZTcwMmI0MTczNTUwXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNmZjOTU5MGQtYTcyMi00ZGJjLTk4NzQtZTcwMmI0MTczNTUwXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNmZjOTU5MGQtYTcyMi00ZGJjLTk4NzQtZTcwMmI0MTczNTUwXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": null,
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-06-06",
            //         "interests": [
            //             "Drama",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Tyler Perry Studios - 315 Deshler Street SW, Atlanta, Georgia, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0338441",
            //                 "name": "Tyler Perry Studios"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Drama",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 105,
            //         "averageRating": 6.6,
            //         "numVotes": 9720,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt36463894",
            //         "url": "https://www.imdb.com/title/tt36463894/",
            //         "primaryTitle": "Predator: Killer of Killers",
            //         "originalTitle": "Predator: Killer of Killers",
            //         "type": "movie",
            //         "description": "Three of the fiercest warriors in human history become prey to the ultimate killer of killers.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BNjM2MjA4YzQtYjBkNS00YmU3LTllOTgtMDQzMjkzM2Q4MmM5XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNjM2MjA4YzQtYjBkNS00YmU3LTllOTgtMDQzMjkzM2Q4MmM5XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNjM2MjA4YzQtYjBkNS00YmU3LTllOTgtMDQzMjkzM2Q4MmM5XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": "R",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-06-06",
            //         "interests": [
            //             "Action",
            //             "Adventure",
            //             "Animation",
            //             "Sci-Fi",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [],
            //         "externalLinks": [
            //             "https://thewaltdisneycompany.com/predator-killer-of-killers-trailer/",
            //             "https://www.hulu.com/movie/predator-killer-of-killers-5ded19e6-73f5-4c65-a4f8-759bce8d1114"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0781821",
            //                 "name": "20th Century Studios"
            //             },
            //             {
            //                 "id": "co0022730",
            //                 "name": "Davis Entertainment"
            //             },
            //             {
            //                 "id": "co0191253",
            //                 "name": "The Third Floor"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Action",
            //             "Adventure",
            //             "Animation"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 85,
            //         "averageRating": 7.6,
            //         "numVotes": 21049,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt9603208",
            //         "url": "https://www.imdb.com/title/tt9603208/",
            //         "primaryTitle": "Mission: Impossible - The Final Reckoning",
            //         "originalTitle": "Mission: Impossible - The Final Reckoning",
            //         "type": "movie",
            //         "description": "Our lives are the sum of our choices. Tom Cruise is Ethan Hunt in Mission: Impossible - The Final Reckoning.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BZGQ5NGEyYTItMjNiMi00Y2EwLTkzOWItMjc5YjJiMjMyNTI0XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZGQ5NGEyYTItMjNiMi00Y2EwLTkzOWItMjc5YjJiMjMyNTI0XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZGQ5NGEyYTItMjNiMi00Y2EwLTkzOWItMjc5YjJiMjMyNTI0XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=fsQgc9pCyDU",
            //         "contentRating": "PG-13",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-05-23",
            //         "interests": [
            //             "Action Epic",
            //             "Adventure Epic",
            //             "Spy",
            //             "Action",
            //             "Adventure",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US",
            //             "GB"
            //         ],
            //         "externalLinks": [
            //             "http://www.missionimpossible.com/",
            //             "https://x.com/MissionFilm"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Aurland, Vestland, Norway"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0023400",
            //                 "name": "Paramount Pictures"
            //             },
            //             {
            //                 "id": "co0152219",
            //                 "name": "Skydance Media"
            //             },
            //             {
            //                 "id": "co0361287",
            //                 "name": "TC Productions"
            //             }
            //         ],
            //         "budget": 400000000,
            //         "grossWorldwide": 457215621,
            //         "genres": [
            //             "Action",
            //             "Adventure",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 169,
            //         "averageRating": 7.5,
            //         "numVotes": 89854,
            //         "metascore": 67
            //     },
            //     {
            //         "id": "tt11655566",
            //         "url": "https://www.imdb.com/title/tt11655566/",
            //         "primaryTitle": "Lilo & Stitch",
            //         "originalTitle": "Lilo & Stitch",
            //         "type": "movie",
            //         "description": "A lonely Hawaiian girl befriends a runaway alien, helping to mend her fragmented family.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BYmFmZjM1ZTEtYzQ5ZS00MTRmLTkzMDktYWMxNTg2NGE3YjY4XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYmFmZjM1ZTEtYzQ5ZS00MTRmLTkzMDktYWMxNTg2NGE3YjY4XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYmFmZjM1ZTEtYzQ5ZS00MTRmLTkzMDktYWMxNTg2NGE3YjY4XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=VWqJifMMgZE",
            //         "contentRating": "PG",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-05-23",
            //         "interests": [
            //             "Alien Invasion",
            //             "Buddy Comedy",
            //             "Sci-Fi Epic",
            //             "Space Sci-Fi",
            //             "Action",
            //             "Adventure",
            //             "Comedy",
            //             "Drama",
            //             "Family",
            //             "Fantasy"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Kaneohe, Hawaii, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0008970",
            //                 "name": "Walt Disney Pictures"
            //             },
            //             {
            //                 "id": "co0699871",
            //                 "name": "Rideback"
            //             }
            //         ],
            //         "budget": 100000000,
            //         "grossWorldwide": 810471809,
            //         "genres": [
            //             "Action",
            //             "Adventure",
            //             "Comedy"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 108,
            //         "averageRating": 7,
            //         "numVotes": 36215,
            //         "metascore": 53
            //     },
            //     {
            //         "id": "tt30840798",
            //         "url": "https://www.imdb.com/title/tt30840798/",
            //         "primaryTitle": "The Phoenician Scheme",
            //         "originalTitle": "The Phoenician Scheme",
            //         "type": "movie",
            //         "description": "Wealthy businessman Zsa-zsa Korda appoints his only daughter, a nun, as sole heir to his estate. As Korda embarks on a new enterprise, they soon become the target of scheming tycoons, foreign terrorists and determined assassins.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BNTJmODQzYmItNTZlMy00Mjg0LTk1NjctYjM4ZGI0NTM3ZTVjXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNTJmODQzYmItNTZlMy00Mjg0LTk1NjctYjM4ZGI0NTM3ZTVjXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNTJmODQzYmItNTZlMy00Mjg0LTk1NjctYjM4ZGI0NTM3ZTVjXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=GEuMnPl2WI4",
            //         "contentRating": "PG-13",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-06-06",
            //         "interests": [
            //             "Spy",
            //             "Action",
            //             "Comedy",
            //             "Crime",
            //             "Drama",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US",
            //             "DE"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en",
            //             "fr"
            //         ],
            //         "filmingLocations": [
            //             "Babelsberg Studios, Potsdam, Germany"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0108325",
            //                 "name": "American Empirical Pictures"
            //             },
            //             {
            //                 "id": "co0215519",
            //                 "name": "Indian Paintbrush"
            //             },
            //             {
            //                 "id": "co0042399",
            //                 "name": "Focus Features"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": 6856208,
            //         "genres": [
            //             "Action",
            //             "Comedy",
            //             "Crime"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 101,
            //         "averageRating": 6.9,
            //         "numVotes": 13914,
            //         "metascore": 71
            //     },
            //     {
            //         "id": "tt35396529",
            //         "url": "https://www.imdb.com/title/tt35396529/",
            //         "primaryTitle": "Mountainhead",
            //         "originalTitle": "Mountainhead",
            //         "type": "movie",
            //         "description": "Four friends reunite during worldwide economic turmoil.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BNjg1MzljYzAtMDM3Yy00M2EyLTk0YTUtY2JhZjM1ODVmMWE2XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNjg1MzljYzAtMDM3Yy00M2EyLTk0YTUtY2JhZjM1ODVmMWE2XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNjg1MzljYzAtMDM3Yy00M2EyLTk0YTUtY2JhZjM1ODVmMWE2XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": null,
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-05-31",
            //         "interests": [
            //             "Drama"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Park City, Utah, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0005861",
            //                 "name": "HBO Films"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 108,
            //         "averageRating": 5.4,
            //         "numVotes": 10284,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt32246771",
            //         "url": "https://www.imdb.com/title/tt32246771/",
            //         "primaryTitle": "Bring Her Back",
            //         "originalTitle": "Bring Her Back",
            //         "type": "movie",
            //         "description": "A brother and sister uncover a terrifying ritual at the secluded home of their new foster mother.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BZTlhYTk1ZTEtOWY3NC00NWQ5LTlkOTctNjQ3ZDYyZGE5ZWNlXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZTlhYTk1ZTEtOWY3NC00NWQ5LTlkOTctNjQ3ZDYyZGE5ZWNlXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZTlhYTk1ZTEtOWY3NC00NWQ5LTlkOTctNjQ3ZDYyZGE5ZWNlXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=kBskrYZfhw8",
            //         "contentRating": "R",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-05-30",
            //         "interests": [
            //             "Supernatural Horror",
            //             "Horror",
            //             "Mystery"
            //         ],
            //         "countriesOfOrigin": [
            //             "AU",
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Lightsview, South Australia, Australia"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0390816",
            //                 "name": "A24"
            //             },
            //             {
            //                 "id": "co0375200",
            //                 "name": "Causeway Films"
            //             },
            //             {
            //                 "id": "co0759130",
            //                 "name": "Salmira Productions"
            //             }
            //         ],
            //         "budget": 15000000,
            //         "grossWorldwide": 8081501,
            //         "genres": [
            //             "Horror",
            //             "Mystery"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 104,
            //         "averageRating": 7.6,
            //         "numVotes": 8613,
            //         "metascore": 75
            //     },
            //     {
            //         "id": "tt2140479",
            //         "url": "https://www.imdb.com/title/tt2140479/",
            //         "primaryTitle": "The Accountant",
            //         "originalTitle": "The Accountant",
            //         "type": "movie",
            //         "description": "As a math savant uncooks the books for a new client, the Treasury Department closes in on his activities, and the body count starts to rise.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BNDc5Mzg2NTYxNV5BMl5BanBnXkFtZTgwMjQ2ODAwOTE@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNDc5Mzg2NTYxNV5BMl5BanBnXkFtZTgwMjQ2ODAwOTE@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNDc5Mzg2NTYxNV5BMl5BanBnXkFtZTgwMjQ2ODAwOTE@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=0KHOVlEpMyY",
            //         "contentRating": "R",
            //         "startYear": 2016,
            //         "endYear": null,
            //         "releaseDate": "2016-10-14",
            //         "interests": [
            //             "Conspiracy Thriller",
            //             "Martial Arts",
            //             "One-Person Army Action",
            //             "Action",
            //             "Crime",
            //             "Drama",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.facebook.com/AccountantMovie/"
            //         ],
            //         "spokenLanguages": [
            //             "en",
            //             "id",
            //             "fr"
            //         ],
            //         "filmingLocations": [
            //             "Atlanta, Georgia, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0002663",
            //                 "name": "Warner Bros."
            //             },
            //             {
            //                 "id": "co0449458",
            //                 "name": "RatPac-Dune Entertainment"
            //             },
            //             {
            //                 "id": "co0366362",
            //                 "name": "Electric City Entertainment"
            //             }
            //         ],
            //         "budget": 44000000,
            //         "grossWorldwide": 155560045,
            //         "genres": [
            //             "Action",
            //             "Crime",
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 128,
            //         "averageRating": 7.3,
            //         "numVotes": 366926,
            //         "metascore": 51
            //     },
            //     {
            //         "id": "tt26743210",
            //         "url": "https://www.imdb.com/title/tt26743210/",
            //         "primaryTitle": "How to Train Your Dragon",
            //         "originalTitle": "How to Train Your Dragon",
            //         "type": "movie",
            //         "description": "As an ancient threat endangers both Vikings and dragons alike on the isle of Berk, the friendship between Hiccup, an inventive Viking, and Toothless, a Night Fury dragon, becomes the key to both species forging a new future together.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BODA5Y2M0NjctNWQzMy00ODRhLWE0MzUtYmE1YTAzZjYyYmQyXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BODA5Y2M0NjctNWQzMy00ODRhLWE0MzUtYmE1YTAzZjYyYmQyXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BODA5Y2M0NjctNWQzMy00ODRhLWE0MzUtYmE1YTAzZjYyYmQyXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=5lzoxHSn0C0",
            //         "contentRating": "PG",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-06-13",
            //         "interests": [
            //             "Sword & Sorcery",
            //             "Teen Adventure",
            //             "Teen Fantasy",
            //             "Action",
            //             "Adventure",
            //             "Comedy",
            //             "Drama",
            //             "Family",
            //             "Fantasy",
            //             "Sci-Fi"
            //         ],
            //         "countriesOfOrigin": [
            //             "GB",
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.facebook.com/HowToTrainYourDragon",
            //             "https://www.instagram.com/httydragon/"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Belfast, County Antrim, Northern Ireland, UK"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0005073",
            //                 "name": "Universal Pictures"
            //             },
            //             {
            //                 "id": "co0129164",
            //                 "name": "DreamWorks Animation"
            //             },
            //             {
            //                 "id": "co0093810",
            //                 "name": "Marc Platt Productions"
            //             }
            //         ],
            //         "budget": 150000000,
            //         "grossWorldwide": 7006367,
            //         "genres": [
            //             "Action",
            //             "Adventure",
            //             "Comedy"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 125,
            //         "averageRating": 8.1,
            //         "numVotes": 9314,
            //         "metascore": 61
            //     },
            //     {
            //         "id": "tt9619824",
            //         "url": "https://www.imdb.com/title/tt9619824/",
            //         "primaryTitle": "Final Destination: Bloodlines",
            //         "originalTitle": "Final Destination: Bloodlines",
            //         "type": "movie",
            //         "description": "Plagued by a recurring violent nightmare, a college student returns home to find the one person who can break the cycle and save her family from the horrific fate that inevitably awaits them.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMzc3OWFhZWItMTE2Yy00N2NmLTg1YTktNGVlNDY0ODQ5YjNlXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMzc3OWFhZWItMTE2Yy00N2NmLTg1YTktNGVlNDY0ODQ5YjNlXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMzc3OWFhZWItMTE2Yy00N2NmLTg1YTktNGVlNDY0ODQ5YjNlXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=KnWzz0n60pE",
            //         "contentRating": "R",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-05-16",
            //         "interests": [
            //             "Splatter Horror",
            //             "Supernatural Horror",
            //             "Horror"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://amzn.to/3H2Itp0",
            //             "https://www.finaldestinationmovie.com/"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Vancouver, British Columbia, Canada"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0046718",
            //                 "name": "New Line Cinema"
            //             },
            //             {
            //                 "id": "co0172687",
            //                 "name": "Practical Pictures"
            //             },
            //             {
            //                 "id": "co1088989",
            //                 "name": "Freshman Year"
            //             }
            //         ],
            //         "budget": 50000000,
            //         "grossWorldwide": 260647710,
            //         "genres": [
            //             "Horror"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 110,
            //         "averageRating": 7,
            //         "numVotes": 53657,
            //         "metascore": 73
            //     },
            //     {
            //         "id": "tt1674782",
            //         "url": "https://www.imdb.com/title/tt1674782/",
            //         "primaryTitle": "Karate Kid: Legends",
            //         "originalTitle": "Karate Kid: Legends",
            //         "type": "movie",
            //         "description": "After kung fu prodigy Li Fong relocates to New York City, he attracts unwanted attention from a local karate champion and embarks on a journey to enter the ultimate karate competition with the help of Mr. Han and Daniel LaRusso.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BM2MwYTlkY2MtNmUzNy00MTljLThjNDAtZGUzNzMxMzcxNzM5XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BM2MwYTlkY2MtNmUzNy00MTljLThjNDAtZGUzNzMxMzcxNzM5XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BM2MwYTlkY2MtNmUzNy00MTljLThjNDAtZGUzNzMxMzcxNzM5XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=uPzOyzsnmio",
            //         "contentRating": "PG-13",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-05-30",
            //         "interests": [
            //             "Coming-of-Age",
            //             "Martial Arts",
            //             "Teen Drama",
            //             "Action",
            //             "Drama",
            //             "Family",
            //             "Sport"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://karatekid.movie/"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Montreal, Quebec, Canada"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0050868",
            //                 "name": "Columbia Pictures"
            //             },
            //             {
            //                 "id": "co0226011",
            //                 "name": "Sunswept Entertainment"
            //             },
            //             {
            //                 "id": "co0024560",
            //                 "name": "Jerry Weintraub Productions"
            //             }
            //         ],
            //         "budget": 45000000,
            //         "grossWorldwide": 77614558,
            //         "genres": [
            //             "Action",
            //             "Drama",
            //             "Family"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 94,
            //         "averageRating": 6.6,
            //         "numVotes": 10410,
            //         "metascore": 51
            //     },
            //     {
            //         "id": "tt14513804",
            //         "url": "https://www.imdb.com/title/tt14513804/",
            //         "primaryTitle": "Captain America: Brave New World",
            //         "originalTitle": "Captain America: Brave New World",
            //         "type": "movie",
            //         "description": "Sam Wilson, the new Captain America, finds himself in the middle of an international incident and must discover the motive behind a nefarious global plan.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BNDRjY2E0ZmEtN2QwNi00NTEwLWI3MWItODNkMGYwYWFjNGE0XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNDRjY2E0ZmEtN2QwNi00NTEwLWI3MWItODNkMGYwYWFjNGE0XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNDRjY2E0ZmEtN2QwNi00NTEwLWI3MWItODNkMGYwYWFjNGE0XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=1pHDWnXmK7Y",
            //         "contentRating": "PG-13",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-02-14",
            //         "interests": [
            //             "Action Epic",
            //             "Adventure Epic",
            //             "Sci-Fi Epic",
            //             "Superhero",
            //             "Action",
            //             "Adventure",
            //             "Sci-Fi"
            //         ],
            //         "countriesOfOrigin": [
            //             "US",
            //             "CA"
            //         ],
            //         "externalLinks": [
            //             "https://www.marvel.com/movies/captain-america-brave-new-world"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Atlanta, Georgia, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0051941",
            //                 "name": "Marvel Studios"
            //             },
            //             {
            //                 "id": "co0087683",
            //                 "name": "British Columbia Film Commission"
            //             }
            //         ],
            //         "budget": 180000000,
            //         "grossWorldwide": 415101577,
            //         "genres": [
            //             "Action",
            //             "Adventure",
            //             "Sci-Fi"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 118,
            //         "averageRating": 5.7,
            //         "numVotes": 134426,
            //         "metascore": 42
            //     },
            //     {
            //         "id": "tt27075958",
            //         "url": "https://www.imdb.com/title/tt27075958/",
            //         "primaryTitle": "Fountain of Youth",
            //         "originalTitle": "Fountain of Youth",
            //         "type": "movie",
            //         "description": "Two estranged siblings join forces to seek the legendary Fountain of Youth. Using historical clues, they embark on an epic quest filled with adventure. If successful, the mythical fountain could grant them immortality.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BNWRlZmU3ZTItM2JlYi00YTg1LTgxNTItMjMyNzIyZWY5YWJmXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNWRlZmU3ZTItM2JlYi00YTg1LTgxNTItMjMyNzIyZWY5YWJmXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNWRlZmU3ZTItM2JlYi00YTg1LTgxNTItMjMyNzIyZWY5YWJmXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=1gB9h0ELEf0",
            //         "contentRating": "PG-13",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-05-23",
            //         "interests": [
            //             "Action",
            //             "Adventure",
            //             "Fantasy",
            //             "Mystery"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Cairo, Egypt"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0822606",
            //                 "name": "Apple Original Films"
            //             },
            //             {
            //                 "id": "co0189674",
            //                 "name": "Project X Entertainment"
            //             },
            //             {
            //                 "id": "co0800521",
            //                 "name": "Radio Silence Productions"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Action",
            //             "Adventure",
            //             "Fantasy"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 125,
            //         "averageRating": 5.7,
            //         "numVotes": 29525,
            //         "metascore": 41
            //     },
            //     {
            //         "id": "tt21815562",
            //         "url": "https://www.imdb.com/title/tt21815562/",
            //         "primaryTitle": "The Alto Knights",
            //         "originalTitle": "The Alto Knights",
            //         "type": "movie",
            //         "description": "Two of New York City's most notorious organized crime bosses vie for control of the city's streets. Once best friends, petty jealousies and a series of betrayals set them on a deadly collision course.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BNTdlY2ZmNmItMjNjMC00YzVkLWEzZDAtYzBiODJkZDRjYWVhXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNTdlY2ZmNmItMjNjMC00YzVkLWEzZDAtYzBiODJkZDRjYWVhXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNTdlY2ZmNmItMjNjMC00YzVkLWEzZDAtYzBiODJkZDRjYWVhXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=1aayuOp0AnE",
            //         "contentRating": "R",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-03-21",
            //         "interests": [
            //             "Docudrama",
            //             "Gangster",
            //             "Period Drama",
            //             "True Crime",
            //             "Biography",
            //             "Crime",
            //             "Drama",
            //             "History"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.warnerbros.com/movies/alto-knights"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Cincinnati, Ohio, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0002663",
            //                 "name": "Warner Bros."
            //             },
            //             {
            //                 "id": "co0049390",
            //                 "name": "Winkler Films"
            //             }
            //         ],
            //         "budget": 45000000,
            //         "grossWorldwide": 9503664,
            //         "genres": [
            //             "Biography",
            //             "Crime",
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 123,
            //         "averageRating": 5.8,
            //         "numVotes": 11059,
            //         "metascore": 47
            //     },
            //     {
            //         "id": "tt12299608",
            //         "url": "https://www.imdb.com/title/tt12299608/",
            //         "primaryTitle": "Mickey 17",
            //         "originalTitle": "Mickey 17",
            //         "type": "movie",
            //         "description": "During a human expedition to colonize space, Mickey 17, a so-called \"expendable\" employee, is sent to explore an ice planet.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BZGQwYmEzMzktYzBmMy00NmVmLTkyYTUtOTYyZjliZDNhZGVkXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZGQwYmEzMzktYzBmMy00NmVmLTkyYTUtOTYyZjliZDNhZGVkXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZGQwYmEzMzktYzBmMy00NmVmLTkyYTUtOTYyZjliZDNhZGVkXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=osYpGSz_0i4",
            //         "contentRating": "R",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-03-07",
            //         "interests": [
            //             "Alien Invasion",
            //             "Dark Comedy",
            //             "Space Sci-Fi",
            //             "Adventure",
            //             "Comedy",
            //             "Fantasy",
            //             "Sci-Fi"
            //         ],
            //         "countriesOfOrigin": [
            //             "US",
            //             "KR"
            //         ],
            //         "externalLinks": [
            //             "https://www.mickey17movie.com/home/"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Warner Bros. Studios Leavesden, Warner Drive, Leavesden, Watford, Hertfordshire, England, UK"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0002663",
            //                 "name": "Warner Bros."
            //             },
            //             {
            //                 "id": "co0136967",
            //                 "name": "Plan B Entertainment"
            //             },
            //             {
            //                 "id": "co1091406",
            //                 "name": "Offscreen"
            //             }
            //         ],
            //         "budget": 118000000,
            //         "grossWorldwide": 131847147,
            //         "genres": [
            //             "Adventure",
            //             "Comedy",
            //             "Fantasy"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 137,
            //         "averageRating": 6.8,
            //         "numVotes": 152924,
            //         "metascore": 72
            //     },
            //     {
            //         "id": "tt20969586",
            //         "url": "https://www.imdb.com/title/tt20969586/",
            //         "primaryTitle": "Thunderbolts*",
            //         "originalTitle": "Thunderbolts*",
            //         "type": "movie",
            //         "description": "After finding themselves ensnared in a death trap, an unconventional team of antiheroes must go on a dangerous mission that will force them to confront the darkest corners of their pasts.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BNDIzNGUwZmYtODM0Yy00NjA3LTgxOGUtOTY0ZGM5MjBkM2I3XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNDIzNGUwZmYtODM0Yy00NjA3LTgxOGUtOTY0ZGM5MjBkM2I3XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNDIzNGUwZmYtODM0Yy00NjA3LTgxOGUtOTY0ZGM5MjBkM2I3XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=v-94Snw-H4o",
            //         "contentRating": "PG-13",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-05-02",
            //         "interests": [
            //             "Political Drama",
            //             "Psychological Drama",
            //             "Superhero",
            //             "Action",
            //             "Adventure",
            //             "Crime",
            //             "Drama",
            //             "Fantasy",
            //             "Sci-Fi"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://movies.disney.com/thunderbolts"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Merdeka 118, Kuala Lumpur, Malaysia"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0051941",
            //                 "name": "Marvel Studios"
            //             }
            //         ],
            //         "budget": 180000000,
            //         "grossWorldwide": 378145032,
            //         "genres": [
            //             "Action",
            //             "Adventure",
            //             "Crime"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 127,
            //         "averageRating": 7.5,
            //         "numVotes": 110133,
            //         "metascore": 68
            //     },
            //     {
            //         "id": "tt12908150",
            //         "url": "https://www.imdb.com/title/tt12908150/",
            //         "primaryTitle": "The Life of Chuck",
            //         "originalTitle": "The Life of Chuck",
            //         "type": "movie",
            //         "description": "A life-affirming, genre-bending story based on Stephen King's novella about three chapters in the life of an ordinary man named Charles Krantz.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BZDhlMzJhMTgtN2FhZS00OWQ1LTk3Y2ItZGNiNTQ0ZmUzYmIzXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZDhlMzJhMTgtN2FhZS00OWQ1LTk3Y2ItZGNiNTQ0ZmUzYmIzXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZDhlMzJhMTgtN2FhZS00OWQ1LTk3Y2ItZGNiNTQ0ZmUzYmIzXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": "R",
            //         "startYear": 2024,
            //         "endYear": null,
            //         "releaseDate": "2025-06-06",
            //         "interests": [
            //             "Drama",
            //             "Fantasy",
            //             "Sci-Fi"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Mobile, Alabama, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0059753",
            //                 "name": "Intrepid Pictures"
            //             },
            //             {
            //                 "id": "co1066659",
            //                 "name": "Red Room Pictures"
            //             },
            //             {
            //                 "id": "co0759176",
            //                 "name": "QWGmire"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Drama",
            //             "Fantasy",
            //             "Sci-Fi"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 110,
            //         "averageRating": 7.6,
            //         "numVotes": 2902,
            //         "metascore": 63
            //     },
            //     {
            //         "id": "tt10548174",
            //         "url": "https://www.imdb.com/title/tt10548174/",
            //         "primaryTitle": "28 Years Later",
            //         "originalTitle": "28 Years Later",
            //         "type": "movie",
            //         "description": "A group of survivors of the rage virus lives on a small island. When one of the group leaves the island on a mission into the mainland, he discovers secrets, wonders, and horrors that have mutated not only the infected but other survivors.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BNjgwYTI0YjctMWYzNS00MmI1LWI5YTctNmE1YjBkNDFlNWMxXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNjgwYTI0YjctMWYzNS00MmI1LWI5YTctNmE1YjBkNDFlNWMxXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNjgwYTI0YjctMWYzNS00MmI1LWI5YTctNmE1YjBkNDFlNWMxXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=mcvLKldPM08",
            //         "contentRating": "R",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-06-20",
            //         "interests": [
            //             "Zombie Horror",
            //             "Horror",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "GB",
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://28yearslater.movie/"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Cheddar Gorge, Somerset, England, UK"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0050868",
            //                 "name": "Columbia Pictures"
            //             },
            //             {
            //                 "id": "co0037450",
            //                 "name": "British Film Institute (BFI)"
            //             },
            //             {
            //                 "id": "co0333799",
            //                 "name": "Decibel Films"
            //             }
            //         ],
            //         "budget": 75000000,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Horror",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 115,
            //         "averageRating": null,
            //         "numVotes": 0,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt28309594",
            //         "url": "https://www.imdb.com/title/tt28309594/",
            //         "primaryTitle": "Nonnas",
            //         "originalTitle": "Nonnas",
            //         "type": "movie",
            //         "description": "After losing his beloved mother, a man risks everything to honor her by opening an Italian restaurant with actual grandmothers as the chefs.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BODM0M2M4YWQtMzhlNy00NjdkLWFkODktOGNlNTc4OTFiZjZmXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BODM0M2M4YWQtMzhlNy00NjdkLWFkODktOGNlNTc4OTFiZjZmXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BODM0M2M4YWQtMzhlNy00NjdkLWFkODktOGNlNTc4OTFiZjZmXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": "PG",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-05-09",
            //         "interests": [
            //             "Comedy"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Bayonne, New Jersey, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0580964",
            //                 "name": "Fifth Season"
            //             },
            //             {
            //                 "id": "co0113140",
            //                 "name": "Madison Wells"
            //             },
            //             {
            //                 "id": "co0452782",
            //                 "name": "Matador Content"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Comedy"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 111,
            //         "averageRating": 6.9,
            //         "numVotes": 26304,
            //         "metascore": 57
            //     },
            //     {
            //         "id": "tt33474172",
            //         "url": "https://www.imdb.com/title/tt33474172/",
            //         "primaryTitle": "A Widow's Game",
            //         "originalTitle": "La viuda negra",
            //         "type": "movie",
            //         "description": "A murder mystery about a young widow who is the prime suspect in her husband's stabbing death.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTg1NzdiZGMtMWQ1NS00YmRlLWI0OGQtN2QwMTE0MmY1YTEwXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMTg1NzdiZGMtMWQ1NS00YmRlLWI0OGQtN2QwMTE0MmY1YTEwXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMTg1NzdiZGMtMWQ1NS00YmRlLWI0OGQtN2QwMTE0MmY1YTEwXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": null,
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-05-30",
            //         "interests": [
            //             "True Crime",
            //             "Crime",
            //             "Drama",
            //             "Mystery"
            //         ],
            //         "countriesOfOrigin": [
            //             "ES"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "es"
            //         ],
            //         "filmingLocations": [
            //             "València, València, Comunitat Valenciana, Spain"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0249391",
            //                 "name": "Bambú Producciones"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Crime",
            //             "Drama",
            //             "Mystery"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 122,
            //         "averageRating": 6.2,
            //         "numVotes": 3907,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt32299316",
            //         "url": "https://www.imdb.com/title/tt32299316/",
            //         "primaryTitle": "Dangerous Animals",
            //         "originalTitle": "Dangerous Animals",
            //         "type": "movie",
            //         "description": "When Zephyr, a savvy and free-spirited surfer, is abducted by a shark-obsessed serial killer and held captive on his boat, she must figure out how to escape before he carries out a ritualistic feeding to the sharks below.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTg5M2ZjNjItZThiZi00NDFiLTg3NmYtMmFhZTkxZWQ2OWVmXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMTg5M2ZjNjItZThiZi00NDFiLTg3NmYtMmFhZTkxZWQ2OWVmXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMTg5M2ZjNjItZThiZi00NDFiLTg3NmYtMmFhZTkxZWQ2OWVmXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": "R",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-06-06",
            //         "interests": [
            //             "Horror",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "AU"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0192696",
            //                 "name": "LD Entertainment"
            //             },
            //             {
            //                 "id": "co0911185",
            //                 "name": "Brouhaha Entertainment"
            //             },
            //             {
            //                 "id": "co0817344",
            //                 "name": "Range Media Partners"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Horror",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 98,
            //         "averageRating": 6.8,
            //         "numVotes": 2218,
            //         "metascore": 63
            //     },
            //     {
            //         "id": "tt9603212",
            //         "url": "https://www.imdb.com/title/tt9603212/",
            //         "primaryTitle": "Mission: Impossible - Dead Reckoning Part One",
            //         "originalTitle": "Mission: Impossible - Dead Reckoning Part One",
            //         "type": "movie",
            //         "description": "Ethan Hunt and his IMF team must track down a dangerous weapon before it falls into the wrong hands.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BN2U4OTdmM2QtZTkxYy00ZmQyLTg2N2UtMDdmMGJmNDhlZDU1XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BN2U4OTdmM2QtZTkxYy00ZmQyLTg2N2UtMDdmMGJmNDhlZDU1XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BN2U4OTdmM2QtZTkxYy00ZmQyLTg2N2UtMDdmMGJmNDhlZDU1XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=2m1drlOZSDw",
            //         "contentRating": "PG-13",
            //         "startYear": 2023,
            //         "endYear": null,
            //         "releaseDate": "2023-07-12",
            //         "interests": [
            //             "Action Epic",
            //             "Adventure Epic",
            //             "Spy",
            //             "Action",
            //             "Adventure",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.missionimpossible.com/"
            //         ],
            //         "spokenLanguages": [
            //             "en",
            //             "it",
            //             "ru",
            //             "fr"
            //         ],
            //         "filmingLocations": [
            //             "Helsetkopen, Møre og Romsdal, Norway"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0023400",
            //                 "name": "Paramount Pictures"
            //             },
            //             {
            //                 "id": "co0152219",
            //                 "name": "Skydance Media"
            //             },
            //             {
            //                 "id": "co0361287",
            //                 "name": "TC Productions"
            //             }
            //         ],
            //         "budget": 291000000,
            //         "grossWorldwide": 571125435,
            //         "genres": [
            //             "Action",
            //             "Adventure",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 163,
            //         "averageRating": 7.6,
            //         "numVotes": 299242,
            //         "metascore": 81
            //     },
            //     {
            //         "id": "tt1312221",
            //         "url": "https://www.imdb.com/title/tt1312221/",
            //         "primaryTitle": "Frankenstein",
            //         "originalTitle": "Frankenstein",
            //         "type": "movie",
            //         "description": "A brilliant but egotistical scientist brings a creature to life in a monstrous experiment that ultimately leads to the undoing of both the creator and his tragic creation",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMDJkMjJlM2ItNTJiNS00YjJiLWFmNDgtMWViM2MxNjBiOTRmXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMDJkMjJlM2ItNTJiNS00YjJiLWFmNDgtMWViM2MxNjBiOTRmXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMDJkMjJlM2ItNTJiNS00YjJiLWFmNDgtMWViM2MxNjBiOTRmXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": "R",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": null,
            //         "interests": [
            //             "Monster Horror",
            //             "Drama",
            //             "Horror",
            //             "Sci-Fi"
            //         ],
            //         "countriesOfOrigin": [
            //             "MX",
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.netflix.com/title/81507921"
            //         ],
            //         "spokenLanguages": [
            //             "en",
            //             "da"
            //         ],
            //         "filmingLocations": [
            //             "Toronto, Ontario, Canada"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0235528",
            //                 "name": "Bluegrass Films"
            //             },
            //             {
            //                 "id": "co0839619",
            //                 "name": "Double Dare You (DDY)"
            //             },
            //             {
            //                 "id": "co0254521",
            //                 "name": "Transportation Resources"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Drama",
            //             "Horror",
            //             "Sci-Fi"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": null,
            //         "numVotes": 0,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt27813235",
            //         "url": "https://www.imdb.com/title/tt27813235/",
            //         "primaryTitle": "The Surfer",
            //         "originalTitle": "The Surfer",
            //         "type": "movie",
            //         "description": "A man returns to the idyllic beach of his childhood to surf with his son. When he is humiliated by a group of locals, the man is drawn into a conflict that keeps rising and pushes him to his breaking point.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMmNjNTZiNTEtMWQ1NC00YmQ4LWFhYjktMzZhOGM2MDhmMTAxXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMmNjNTZiNTEtMWQ1NC00YmQ4LWFhYjktMzZhOGM2MDhmMTAxXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMmNjNTZiNTEtMWQ1NC00YmQ4LWFhYjktMzZhOGM2MDhmMTAxXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=A7Bo6cyfWho",
            //         "contentRating": "R",
            //         "startYear": 2024,
            //         "endYear": null,
            //         "releaseDate": "2025-05-02",
            //         "interests": [
            //             "Psychological Thriller",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "AU",
            //             "US",
            //             "IE",
            //             "GB"
            //         ],
            //         "externalLinks": [
            //             "https://www.thesurferfilm.com/"
            //         ],
            //         "spokenLanguages": [
            //             "en",
            //             "fr"
            //         ],
            //         "filmingLocations": [
            //             "Margaret River, Western Australia, Australia"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0006881",
            //                 "name": "Lionsgate"
            //             },
            //             {
            //                 "id": "co0017716",
            //                 "name": "Roadside Attractions"
            //             },
            //             {
            //                 "id": "co0068628",
            //                 "name": "ScreenWest"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": 2062761,
            //         "genres": [
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 100,
            //         "averageRating": 6.2,
            //         "numVotes": 6608,
            //         "metascore": 67
            //     },
            //     {
            //         "id": "tt3566834",
            //         "url": "https://www.imdb.com/title/tt3566834/",
            //         "primaryTitle": "A Minecraft Movie",
            //         "originalTitle": "A Minecraft Movie",
            //         "type": "movie",
            //         "description": "Four misfits are suddenly pulled through a mysterious portal into a bizarre cubic wonderland that thrives on imagination. To get back home they'll have to master this world while embarking on a quest with an unexpected expert crafter.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BYzFjMzNjOTktNDBlNy00YWZhLWExYTctZDcxNDA4OWVhOTJjXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYzFjMzNjOTktNDBlNy00YWZhLWExYTctZDcxNDA4OWVhOTJjXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYzFjMzNjOTktNDBlNy00YWZhLWExYTctZDcxNDA4OWVhOTJjXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=wJO_vIDZn-I",
            //         "contentRating": "PG",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-04-04",
            //         "interests": [
            //             "Action Epic",
            //             "Adventure Epic",
            //             "Fantasy Epic",
            //             "High-Concept Comedy",
            //             "Quest",
            //             "Slapstick",
            //             "Survival",
            //             "Action",
            //             "Adventure",
            //             "Comedy"
            //         ],
            //         "countriesOfOrigin": [
            //             "SE",
            //             "US",
            //             "NZ",
            //             "CA"
            //         ],
            //         "externalLinks": [
            //             "https://www.minecraft-movie.com/home/",
            //             "https://www.youtube.com/watch?v=EaOnM8SewHc&ab"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Auckland, New Zealand"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0002663",
            //                 "name": "Warner Bros."
            //             },
            //             {
            //                 "id": "co0159111",
            //                 "name": "Legendary Entertainment"
            //             },
            //             {
            //                 "id": "co0084207",
            //                 "name": "Vertigo Entertainment"
            //             }
            //         ],
            //         "budget": 150000000,
            //         "grossWorldwide": 951514812,
            //         "genres": [
            //             "Action",
            //             "Adventure",
            //             "Comedy"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 101,
            //         "averageRating": 5.7,
            //         "numVotes": 103151,
            //         "metascore": 45
            //     },
            //     {
            //         "id": "tt28015403",
            //         "url": "https://www.imdb.com/title/tt28015403/",
            //         "primaryTitle": "Heretic",
            //         "originalTitle": "Heretic",
            //         "type": "movie",
            //         "description": "Two young religious women are drawn into a game of cat-and-mouse in the house of a strange man.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMzFiMWM4YjAtY2Y3Yi00MDIzLTk0N2MtYTAwNGM3ZmMwODhlXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMzFiMWM4YjAtY2Y3Yi00MDIzLTk0N2MtYTAwNGM3ZmMwODhlXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMzFiMWM4YjAtY2Y3Yi00MDIzLTk0N2MtYTAwNGM3ZmMwODhlXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=O9i2vmFhSSY",
            //         "contentRating": "R",
            //         "startYear": 2024,
            //         "endYear": null,
            //         "releaseDate": "2024-11-08",
            //         "interests": [
            //             "Psychological Horror",
            //             "Psychological Thriller",
            //             "Horror",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US",
            //             "CA"
            //         ],
            //         "externalLinks": [
            //             "https://a24films.com/films/heretic"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Squamish, British Columbia, Canada"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0390816",
            //                 "name": "A24"
            //             },
            //             {
            //                 "id": "co0750354",
            //                 "name": "Beck Woods"
            //             },
            //             {
            //                 "id": "co0528564",
            //                 "name": "Shiny Penny"
            //             }
            //         ],
            //         "budget": 10000000,
            //         "grossWorldwide": 59777970,
            //         "genres": [
            //             "Horror",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 111,
            //         "averageRating": 7,
            //         "numVotes": 156922,
            //         "metascore": 71
            //     },
            //     {
            //         "id": "tt9104736",
            //         "url": "https://www.imdb.com/title/tt9104736/",
            //         "primaryTitle": "Housefull 5 A",
            //         "originalTitle": "Housefull 5",
            //         "type": "movie",
            //         "description": null,
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BNmUxMzJhZWMtNzEyYS00MjgxLTg3YWItOTMwY2U1OGE4ZGUwXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNmUxMzJhZWMtNzEyYS00MjgxLTg3YWItOTMwY2U1OGE4ZGUwXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNmUxMzJhZWMtNzEyYS00MjgxLTg3YWItOTMwY2U1OGE4ZGUwXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": null,
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-06-06",
            //         "interests": [
            //             "Comedy",
            //             "Drama",
            //             "Mystery",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "IN"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "hi"
            //         ],
            //         "filmingLocations": [],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0183118",
            //                 "name": "Nadiadwala Grandson Entertainment"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Comedy",
            //             "Drama",
            //             "Mystery"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 150,
            //         "averageRating": 3.8,
            //         "numVotes": 11048,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt36240772",
            //         "url": "https://www.imdb.com/title/tt36240772/",
            //         "primaryTitle": "K.O.",
            //         "originalTitle": "K.O.",
            //         "type": "movie",
            //         "description": "After accidentally killing his rival in an MMA bout, a man has the chance to make it up to the widow by finding her son.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMzUxZmM3ZmItNGFjMS00MTdiLTk0ZDItYjk5MzBkMTM3ZTAwXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMzUxZmM3ZmItNGFjMS00MTdiLTk0ZDItYjk5MzBkMTM3ZTAwXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMzUxZmM3ZmItNGFjMS00MTdiLTk0ZDItYjk5MzBkMTM3ZTAwXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": null,
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-06-06",
            //         "interests": [
            //             "Action"
            //         ],
            //         "countriesOfOrigin": [
            //             "FR",
            //             "BE"
            //         ],
            //         "externalLinks": [
            //             "https://www.taxshelter.be/index.php/fr/node/94608"
            //         ],
            //         "spokenLanguages": [
            //             "fr"
            //         ],
            //         "filmingLocations": [],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0036163",
            //                 "name": "Artémis Productions"
            //             },
            //             {
            //                 "id": "co0234366",
            //                 "name": "Empreinte Digitale"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Action"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 90,
            //         "averageRating": 5.8,
            //         "numVotes": 1825,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt0289043",
            //         "url": "https://www.imdb.com/title/tt0289043/",
            //         "primaryTitle": "28 Days Later",
            //         "originalTitle": "28 Days Later",
            //         "type": "movie",
            //         "description": "Four weeks after a mysterious, incurable virus spreads throughout the United Kingdom, a handful of survivors try to find sanctuary.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BM2I4NTI0ZGQtNGQ2ZC00ODIxLWI2N2QtMDBkNzI1NDhjYjE5XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BM2I4NTI0ZGQtNGQ2ZC00ODIxLWI2N2QtMDBkNzI1NDhjYjE5XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BM2I4NTI0ZGQtNGQ2ZC00ODIxLWI2N2QtMDBkNzI1NDhjYjE5XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=mWEhfF27O0c",
            //         "contentRating": "R",
            //         "startYear": 2002,
            //         "endYear": null,
            //         "releaseDate": "2003-06-27",
            //         "interests": [
            //             "Disaster",
            //             "Dystopian Sci-Fi",
            //             "Zombie Horror",
            //             "Drama",
            //             "Horror",
            //             "Sci-Fi",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "GB",
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en",
            //             "es"
            //         ],
            //         "filmingLocations": [
            //             "Badminton House, Badminton Estate, Badminton, Gloucestershire, England, UK"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0103974",
            //                 "name": "DNA Films"
            //             },
            //             {
            //                 "id": "co0104387",
            //                 "name": "British Film Council"
            //             }
            //         ],
            //         "budget": 8000000,
            //         "grossWorldwide": 84661434,
            //         "genres": [
            //             "Drama",
            //             "Horror",
            //             "Sci-Fi"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 113,
            //         "averageRating": 7.5,
            //         "numVotes": 481107,
            //         "metascore": 73
            //     },
            //     {
            //         "id": "tt29344903",
            //         "url": "https://www.imdb.com/title/tt29344903/",
            //         "primaryTitle": "The Ugly Stepsister",
            //         "originalTitle": "Den stygge stesøsteren",
            //         "type": "movie",
            //         "description": "Follows Elvira as she battles against her gorgeous stepsister in a realm where beauty reigns supreme. She resorts to extreme measures to captivate the prince, amidst a ruthless competition for physical perfection.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BYzk2MjdkZDMtNmU0ZC00ZTEyLTk0ZTAtZDM1MmFhNDdhMjFiXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYzk2MjdkZDMtNmU0ZC00ZTEyLTk0ZTAtZDM1MmFhNDdhMjFiXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYzk2MjdkZDMtNmU0ZC00ZTEyLTk0ZTAtZDM1MmFhNDdhMjFiXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=5vZ1_Yxjwzs",
            //         "contentRating": "Not Rated",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-03-07",
            //         "interests": [
            //             "Body Horror",
            //             "Psychological Horror",
            //             "Satire",
            //             "Slasher Horror",
            //             "Comedy",
            //             "Drama",
            //             "Horror"
            //         ],
            //         "countriesOfOrigin": [
            //             "NO",
            //             "DK",
            //             "RO",
            //             "PL",
            //             "SE"
            //         ],
            //         "externalLinks": [
            //             "https://amzn.to/3Rw7P0H"
            //         ],
            //         "spokenLanguages": [
            //             "no"
            //         ],
            //         "filmingLocations": [],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0349510",
            //                 "name": "Mer Film"
            //             },
            //             {
            //                 "id": "co0001935",
            //                 "name": "Film i Väst"
            //             },
            //             {
            //                 "id": "co0349562",
            //                 "name": "Lava Films"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": 997554,
            //         "genres": [
            //             "Comedy",
            //             "Drama",
            //             "Horror"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 109,
            //         "averageRating": 7,
            //         "numVotes": 11046,
            //         "metascore": 70
            //     },
            //     {
            //         "id": "tt19847976",
            //         "url": "https://www.imdb.com/title/tt19847976/",
            //         "primaryTitle": "Wicked: For Good",
            //         "originalTitle": "Wicked: For Good",
            //         "type": "movie",
            //         "description": "Follows Elphaba, the future Wicked Witch of the West and her relationship with Glinda, the Good Witch of the North. The second of a two-part feature film adaptation of the Broadway musical.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BNzRhNTE4ZTYtNTM0Mi00MzU3LTk4MTktYWE3MzQ2NTU0MDNlXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNzRhNTE4ZTYtNTM0Mi00MzU3LTk4MTktYWE3MzQ2NTU0MDNlXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNzRhNTE4ZTYtNTM0Mi00MzU3LTk4MTktYWE3MzQ2NTU0MDNlXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": null,
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-11-21",
            //         "interests": [
            //             "Fairy Tale",
            //             "Pop Musical",
            //             "Family",
            //             "Fantasy",
            //             "Musical",
            //             "Romance"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Cairo, Egypt"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0093810",
            //                 "name": "Marc Platt Productions"
            //             },
            //             {
            //                 "id": "co0005073",
            //                 "name": "Universal Pictures"
            //             }
            //         ],
            //         "budget": 150000000,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Family",
            //             "Fantasy",
            //             "Musical"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": null,
            //         "numVotes": 0,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt26927452",
            //         "url": "https://www.imdb.com/title/tt26927452/",
            //         "primaryTitle": "Hurry Up Tomorrow",
            //         "originalTitle": "Hurry Up Tomorrow",
            //         "type": "movie",
            //         "description": "An insomniac musician encounters a mysterious stranger, leading to a journey that challenges everything he knows about himself.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BNDQ2MGIyNDQtYjVhOS00ZjI1LWFmYzctMWI2MGZhZGFhZWM4XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNDQ2MGIyNDQtYjVhOS00ZjI1LWFmYzctMWI2MGZhZGFhZWM4XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNDQ2MGIyNDQtYjVhOS00ZjI1LWFmYzctMWI2MGZhZGFhZWM4XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=hg0oFI2egfo",
            //         "contentRating": "R",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-05-16",
            //         "interests": [
            //             "Psychological Thriller",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://amzn.to/3FlhBjD",
            //             "https://www.hurryuptomorrow.movie/"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Chicago, Illinois, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0006881",
            //                 "name": "Lionsgate"
            //             },
            //             {
            //                 "id": "co1001480",
            //                 "name": "Manic Phase"
            //             },
            //             {
            //                 "id": "co0605792",
            //                 "name": "Live Nation Productions"
            //             }
            //         ],
            //         "budget": 15000000,
            //         "grossWorldwide": 5961275,
            //         "genres": [
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 105,
            //         "averageRating": 4.9,
            //         "numVotes": 9101,
            //         "metascore": 29
            //     },
            //     {
            //         "id": "tt30955489",
            //         "url": "https://www.imdb.com/title/tt30955489/",
            //         "primaryTitle": "Until Dawn",
            //         "originalTitle": "Until Dawn",
            //         "type": "movie",
            //         "description": "A group of friends trapped in a time loop, where mysterious foes chase and kill them in gruesome ways, must survive until dawn to escape it.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BZWU4NDY0ODktOGI3OC00NWE1LWIwYmQtNmJiZWU3NmZlMDhkXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZWU4NDY0ODktOGI3OC00NWE1LWIwYmQtNmJiZWU3NmZlMDhkXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZWU4NDY0ODktOGI3OC00NWE1LWIwYmQtNmJiZWU3NmZlMDhkXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=2b3vBaINZ7w",
            //         "contentRating": "R",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-04-25",
            //         "interests": [
            //             "Psychological Drama",
            //             "Psychological Horror",
            //             "Slasher Horror",
            //             "Splatter Horror",
            //             "Supernatural Horror",
            //             "Zombie Horror",
            //             "Drama",
            //             "Horror"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://amzn.to/3GCEv6d",
            //             "https://untildawn.movie/"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Budapest, Hungary"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0010568",
            //                 "name": "Screen Gems"
            //             },
            //             {
            //                 "id": "co0748575",
            //                 "name": "PlayStation Productions"
            //             },
            //             {
            //                 "id": "co0807181",
            //                 "name": "Mångata Production"
            //             }
            //         ],
            //         "budget": 15000000,
            //         "grossWorldwide": 52794193,
            //         "genres": [
            //             "Drama",
            //             "Horror"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 103,
            //         "averageRating": 5.8,
            //         "numVotes": 28511,
            //         "metascore": 47
            //     },
            //     {
            //         "id": "tt36484077",
            //         "url": "https://www.imdb.com/title/tt36484077/",
            //         "primaryTitle": "The Nice Guys",
            //         "originalTitle": "The Nice Guys",
            //         "type": "short",
            //         "description": null,
            //         "primaryImage": null,
            //         "thumbnails": [],
            //         "trailer": null,
            //         "contentRating": null,
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": null,
            //         "interests": [],
            //         "countriesOfOrigin": [],
            //         "externalLinks": [],
            //         "spokenLanguages": [],
            //         "filmingLocations": [],
            //         "productionCompanies": [],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Comedy",
            //             "Drama",
            //             "Short"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 7.2,
            //         "numVotes": 134,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt5950044",
            //         "url": "https://www.imdb.com/title/tt5950044/",
            //         "primaryTitle": "Superman",
            //         "originalTitle": "Superman",
            //         "type": "movie",
            //         "description": "Superman must reconcile his alien Kryptonian heritage with his human upbringing as reporter Clark Kent. As the embodiment of truth, justice and the human way he soon finds himself in a world that views these as old-fashioned.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMDI0ZjJiNGEtNmRhZS00ODQ4LTk4Y2ItOGNiYjQxMTNlNjNlXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMDI0ZjJiNGEtNmRhZS00ODQ4LTk4Y2ItOGNiYjQxMTNlNjNlXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMDI0ZjJiNGEtNmRhZS00ODQ4LTk4Y2ItOGNiYjQxMTNlNjNlXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=uhUht6vAsMY",
            //         "contentRating": "PG-13",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-07-11",
            //         "interests": [
            //             "Superhero",
            //             "Action",
            //             "Adventure",
            //             "Fantasy",
            //             "Sci-Fi"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.supermanmovie.net/"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Cleveland, Ohio, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co1064049",
            //                 "name": "DC Studios"
            //             },
            //             {
            //                 "id": "co0690814",
            //                 "name": "Troll Court Entertainment"
            //             },
            //             {
            //                 "id": "co0179825",
            //                 "name": "The Safran Company"
            //             }
            //         ],
            //         "budget": 225000000,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Action",
            //             "Adventure",
            //             "Fantasy"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 129,
            //         "averageRating": null,
            //         "numVotes": 0,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt16311594",
            //         "url": "https://www.imdb.com/title/tt16311594/",
            //         "primaryTitle": "F1: The Movie",
            //         "originalTitle": "F1: The Movie",
            //         "type": "movie",
            //         "description": "A Formula One driver comes out of retirement to mentor and team up with a younger driver.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BOWRiOThkM2YtYzI4NS00OWViLTk0ODMtMjNlNDYyZWQ3MzNjXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BOWRiOThkM2YtYzI4NS00OWViLTk0ODMtMjNlNDYyZWQ3MzNjXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BOWRiOThkM2YtYzI4NS00OWViLTk0ODMtMjNlNDYyZWQ3MzNjXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=J-eZpA8DdAg",
            //         "contentRating": "PG-13",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-06-27",
            //         "interests": [
            //             "Motorsport",
            //             "Action",
            //             "Drama",
            //             "Sport"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.f1themovie.com/"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Hungaroring, Budapest, Hungary"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0822606",
            //                 "name": "Apple Original Films"
            //             },
            //             {
            //                 "id": "co0002663",
            //                 "name": "Warner Bros."
            //             },
            //             {
            //                 "id": "co0441953",
            //                 "name": "Monolith Pictures (III)"
            //             }
            //         ],
            //         "budget": 250000000,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Action",
            //             "Drama",
            //             "Sport"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 155,
            //         "averageRating": null,
            //         "numVotes": 0,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt9150192",
            //         "url": "https://www.imdb.com/title/tt9150192/",
            //         "primaryTitle": "A Working Man",
            //         "originalTitle": "A Working Man",
            //         "type": "movie",
            //         "description": "Levon Cade left his profession behind to work construction and be a good dad to his daughter. But when a local girl vanishes, he's asked to return to the skills that made him a mythic figure in the shadowy world of counter-terrorism.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BYmQxZGIxNTYtYTQwMy00ODdkLWI0MmQtM2E0ZmIyNmYzMGMzXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYmQxZGIxNTYtYTQwMy00ODdkLWI0MmQtM2E0ZmIyNmYzMGMzXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYmQxZGIxNTYtYTQwMy00ODdkLWI0MmQtM2E0ZmIyNmYzMGMzXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=zTbgNC42Ops",
            //         "contentRating": "R",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-03-28",
            //         "interests": [
            //             "Conspiracy Thriller",
            //             "One-Person Army Action",
            //             "Action",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "GB",
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://tv.apple.com/movie/levons-trade/umc.cmc.3n73i0putsv1s3jm23i29bdv2?ctx_at=6",
            //             "https://www.instagram.com/balboa_productions/"
            //         ],
            //         "spokenLanguages": [
            //             "en",
            //             "ru",
            //             "es"
            //         ],
            //         "filmingLocations": [
            //             "Chicago, Illinois, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co1025982",
            //                 "name": "Amazon MGM Studios"
            //             },
            //             {
            //                 "id": "co1031934",
            //                 "name": "Black Bear"
            //             },
            //             {
            //                 "id": "co0270864",
            //                 "name": "Eastern Film"
            //             }
            //         ],
            //         "budget": 40000000,
            //         "grossWorldwide": 99068160,
            //         "genres": [
            //             "Action",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 116,
            //         "averageRating": 5.7,
            //         "numVotes": 49245,
            //         "metascore": 52
            //     },
            //     {
            //         "id": "tt31434639",
            //         "url": "https://www.imdb.com/title/tt31434639/",
            //         "primaryTitle": "Warfare",
            //         "originalTitle": "Warfare",
            //         "type": "movie",
            //         "description": "A platoon of Navy SEALs embark on a dangerous mission in Ramadi, Iraq, with the chaos and brotherhood of war retold through their memories of the event.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BYzEyYjE1NmEtOTFmNy00ZmQxLThlYzctOGRjNmQ0N2VjMmNmXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYzEyYjE1NmEtOTFmNy00ZmQxLThlYzctOGRjNmQ0N2VjMmNmXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYzEyYjE1NmEtOTFmNy00ZmQxLThlYzctOGRjNmQ0N2VjMmNmXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=JER0Fkyy3tw",
            //         "contentRating": "R",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-04-11",
            //         "interests": [
            //             "Docudrama",
            //             "War Epic",
            //             "Action",
            //             "Drama",
            //             "War"
            //         ],
            //         "countriesOfOrigin": [
            //             "US",
            //             "GB"
            //         ],
            //         "externalLinks": [
            //             "https://a24films.com/films/warfare"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Iraq"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0390816",
            //                 "name": "A24"
            //             },
            //             {
            //                 "id": "co0103974",
            //                 "name": "DNA Films"
            //             }
            //         ],
            //         "budget": 20000000,
            //         "grossWorldwide": 32894572,
            //         "genres": [
            //             "Action",
            //             "Drama",
            //             "War"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 95,
            //         "averageRating": 7.3,
            //         "numVotes": 47175,
            //         "metascore": 78
            //     },
            //     {
            //         "id": "tt31227572",
            //         "url": "https://www.imdb.com/title/tt31227572/",
            //         "primaryTitle": "Predator: Badlands",
            //         "originalTitle": "Predator: Badlands",
            //         "type": "movie",
            //         "description": "A young Predator outcast from his clan finds an unlikely ally on his journey in search of the ultimate adversary.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BZTgxMzllM2YtZDMyNS00YmJlLWE4MGEtNDNjZTA5YjAwNzgwXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZTgxMzllM2YtZDMyNS00YmJlLWE4MGEtNDNjZTA5YjAwNzgwXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZTgxMzllM2YtZDMyNS00YmJlLWE4MGEtNDNjZTA5YjAwNzgwXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": null,
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-11-07",
            //         "interests": [
            //             "Alien Invasion",
            //             "Monster Horror",
            //             "Horror",
            //             "Sci-Fi"
            //         ],
            //         "countriesOfOrigin": [],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0781821",
            //                 "name": "20th Century Studios"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Horror",
            //             "Sci-Fi"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": null,
            //         "numVotes": 0,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt31036941",
            //         "url": "https://www.imdb.com/title/tt31036941/",
            //         "primaryTitle": "Jurassic World: Rebirth",
            //         "originalTitle": "Jurassic World: Rebirth",
            //         "type": "movie",
            //         "description": "Five years post-Jurassic World: Dominion (2022), an expedition braves isolated equatorial regions to extract DNA from three massive prehistoric creatures for a groundbreaking medical breakthrough.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BNDU2ODUzZWItMGNhMS00YjAxLWE5ZGMtYWU1Nzk1MjMzZjlmXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNDU2ODUzZWItMGNhMS00YjAxLWE5ZGMtYWU1Nzk1MjMzZjlmXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNDU2ODUzZWItMGNhMS00YjAxLWE5ZGMtYWU1Nzk1MjMzZjlmXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=jan5CFWs9ic",
            //         "contentRating": "PG-13",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-07-02",
            //         "interests": [
            //             "Dinosaur Adventure",
            //             "Action",
            //             "Adventure",
            //             "Sci-Fi",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.facebook.com/JurassicWorld/",
            //             "https://www.instagram.com/jurassicworld/"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Sky Studios Elstree, Borehamwood, UK"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0009119",
            //                 "name": "Amblin Entertainment"
            //             },
            //             {
            //                 "id": "co0210547",
            //                 "name": "India Take One Productions"
            //             },
            //             {
            //                 "id": "co0181591",
            //                 "name": "Latina Pictures"
            //             }
            //         ],
            //         "budget": 265000000,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Action",
            //             "Adventure",
            //             "Sci-Fi"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 134,
            //         "averageRating": null,
            //         "numVotes": 0,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt32058735",
            //         "url": "https://www.imdb.com/title/tt32058735/",
            //         "primaryTitle": "Bhool Chuk Maaf",
            //         "originalTitle": "Bhool Chuk Maaf",
            //         "type": "movie",
            //         "description": "Ranjan, a small-town romantic boy from Banaras, lands a government job to marry Titli but forgets his vow to Lord Shiva-only to be trapped until he fulfills his promise. A hilarious tale of love, fate, and redemption unfolds.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BYjlhZTI1YmEtZDMyYi00YTM5LWI4ZGEtMzYwMjYxZjUyNzQzXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYjlhZTI1YmEtZDMyYi00YTM5LWI4ZGEtMzYwMjYxZjUyNzQzXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYjlhZTI1YmEtZDMyYi00YTM5LWI4ZGEtMzYwMjYxZjUyNzQzXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": null,
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-05-23",
            //         "interests": [
            //             "Comedy",
            //             "Fantasy",
            //             "Romance",
            //             "Sci-Fi"
            //         ],
            //         "countriesOfOrigin": [
            //             "IN"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "hi"
            //         ],
            //         "filmingLocations": [],
            //         "productionCompanies": [
            //             {
            //                 "id": "co1025982",
            //                 "name": "Amazon MGM Studios"
            //             },
            //             {
            //                 "id": "co0481480",
            //                 "name": "Maddock Films"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": 274413,
            //         "genres": [
            //             "Comedy",
            //             "Fantasy",
            //             "Romance"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 140,
            //         "averageRating": 6,
            //         "numVotes": 20110,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt30253473",
            //         "url": "https://www.imdb.com/title/tt30253473/",
            //         "primaryTitle": "Materialists",
            //         "originalTitle": "Materialists",
            //         "type": "movie",
            //         "description": "A young, ambitious New York City matchmaker finds herself torn between the perfect match and her imperfect ex.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BNmQxMTI1YmEtOGY3Yi00NzVlLWEzMjAtYTI1NWZkNDFiMDg1XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNmQxMTI1YmEtOGY3Yi00NzVlLWEzMjAtYTI1NWZkNDFiMDg1XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNmQxMTI1YmEtOGY3Yi00NzVlLWEzMjAtYTI1NWZkNDFiMDg1XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=4A_kmjtsJ7c",
            //         "contentRating": "R",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-06-13",
            //         "interests": [
            //             "Feel-Good Romance",
            //             "Romantic Comedy",
            //             "Comedy",
            //             "Romance"
            //         ],
            //         "countriesOfOrigin": [
            //             "FI",
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://a24films.com/films/materialists"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "New York City, New York, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0390816",
            //                 "name": "A24"
            //             },
            //             {
            //                 "id": "co0708111",
            //                 "name": "2AM"
            //             },
            //             {
            //                 "id": "co0030755",
            //                 "name": "Killer Films"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Comedy",
            //             "Romance"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 116,
            //         "averageRating": 7.1,
            //         "numVotes": 1501,
            //         "metascore": 73
            //     },
            //     {
            //         "id": "tt0433383",
            //         "url": "https://www.imdb.com/title/tt0433383/",
            //         "primaryTitle": "Good Night, and Good Luck.",
            //         "originalTitle": "Good Night, and Good Luck.",
            //         "type": "movie",
            //         "description": "Broadcast journalist Edward R. Murrow looks to bring down Senator Joseph McCarthy.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BODBkZGQ2OGEtNjU0MC00YjdlLWFmZGEtNTZjZTRiZjhlNGRmXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BODBkZGQ2OGEtNjU0MC00YjdlLWFmZGEtNTZjZTRiZjhlNGRmXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BODBkZGQ2OGEtNjU0MC00YjdlLWFmZGEtNTZjZTRiZjhlNGRmXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=1Qg9ZahBu8c",
            //         "contentRating": "PG",
            //         "startYear": 2005,
            //         "endYear": null,
            //         "releaseDate": "2005-11-04",
            //         "interests": [
            //             "Period Drama",
            //             "Political Drama",
            //             "Biography",
            //             "Drama",
            //             "History"
            //         ],
            //         "countriesOfOrigin": [
            //             "GB",
            //             "FR",
            //             "JP",
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "CBS Television City - 7800 Beverly Boulevard, Fairfax, Los Angeles, California, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0106448",
            //                 "name": "Warner Independent Pictures (WIP)"
            //             },
            //             {
            //                 "id": "co0005596",
            //                 "name": "2929 Productions"
            //             },
            //             {
            //                 "id": "co0132772",
            //                 "name": "Participant"
            //             }
            //         ],
            //         "budget": 7000000,
            //         "grossWorldwide": 54641191,
            //         "genres": [
            //             "Biography",
            //             "Drama",
            //             "History"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 93,
            //         "averageRating": 7.4,
            //         "numVotes": 103390,
            //         "metascore": 80
            //     },
            //     {
            //         "id": "tt6208148",
            //         "url": "https://www.imdb.com/title/tt6208148/",
            //         "primaryTitle": "Snow White",
            //         "originalTitle": "Snow White",
            //         "type": "movie",
            //         "description": "A princess joins forces with seven dwarfs and a group of rebels to liberate her kingdom from her cruel stepmother the Evil Queen.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BY2UwOGUxMzEtMzEyZi00NjEwLTkxOTMtYTljOWEzYjYyMWNjXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BY2UwOGUxMzEtMzEyZi00NjEwLTkxOTMtYTljOWEzYjYyMWNjXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BY2UwOGUxMzEtMzEyZi00NjEwLTkxOTMtYTljOWEzYjYyMWNjXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=iV46TJKL8cU",
            //         "contentRating": "PG",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-03-21",
            //         "interests": [
            //             "Fairy Tale",
            //             "Feel-Good Romance",
            //             "Adventure",
            //             "Family",
            //             "Fantasy",
            //             "Musical",
            //             "Romance"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.facebook.com/DisneySnowWhite/",
            //             "https://movies.disney.com/snow-white-2025"
            //         ],
            //         "spokenLanguages": [
            //             "en",
            //             "de"
            //         ],
            //         "filmingLocations": [
            //             "Pinewood Studios, Iver Heath, Buckinghamshire, England, UK"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0008970",
            //                 "name": "Walt Disney Pictures"
            //             },
            //             {
            //                 "id": "co0093810",
            //                 "name": "Marc Platt Productions"
            //             }
            //         ],
            //         "budget": 250000000,
            //         "grossWorldwide": 205638736,
            //         "genres": [
            //             "Adventure",
            //             "Family",
            //             "Fantasy"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 109,
            //         "averageRating": 1.8,
            //         "numVotes": 366787,
            //         "metascore": 50
            //     },
            //     {
            //         "id": "tt0117060",
            //         "url": "https://www.imdb.com/title/tt0117060/",
            //         "primaryTitle": "Mission: Impossible",
            //         "originalTitle": "Mission: Impossible",
            //         "type": "movie",
            //         "description": "An American agent, under false suspicion of disloyalty, must discover and expose the real spy without the help of his organization.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BOGZjNDlkMTYtMTJkZi00OTkzLWI4NDEtYTA2ODQyMjcwYTdlXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BOGZjNDlkMTYtMTJkZi00OTkzLWI4NDEtYTA2ODQyMjcwYTdlXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BOGZjNDlkMTYtMTJkZi00OTkzLWI4NDEtYTA2ODQyMjcwYTdlXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=L8Pbjh4EZRk",
            //         "contentRating": "PG-13",
            //         "startYear": 1996,
            //         "endYear": null,
            //         "releaseDate": "1996-05-22",
            //         "interests": [
            //             "Spy",
            //             "Urban Adventure",
            //             "Action",
            //             "Adventure",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en",
            //             "fr",
            //             "cs"
            //         ],
            //         "filmingLocations": [
            //             "Charles Bridge, Old Town, Prague, Czech Republic"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0023400",
            //                 "name": "Paramount Pictures"
            //             },
            //             {
            //                 "id": "co0012382",
            //                 "name": "Cruise/Wagner Productions"
            //             }
            //         ],
            //         "budget": 80000000,
            //         "grossWorldwide": 457696391,
            //         "genres": [
            //             "Action",
            //             "Adventure",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 110,
            //         "averageRating": 7.2,
            //         "numVotes": 498398,
            //         "metascore": 59
            //     },
            //     {
            //         "id": "tt30505698",
            //         "url": "https://www.imdb.com/title/tt30505698/",
            //         "primaryTitle": "Friendship",
            //         "originalTitle": "Friendship",
            //         "type": "movie",
            //         "description": "A suburban dad falls hard for his charismatic new neighbor.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMzljN2M1MWMtYmUwMi00YWM5LTllMGItNzZlMmU1NWM2NTY5XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMzljN2M1MWMtYmUwMi00YWM5LTllMGItNzZlMmU1NWM2NTY5XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMzljN2M1MWMtYmUwMi00YWM5LTllMGItNzZlMmU1NWM2NTY5XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=cmSPwZIZu6Y",
            //         "contentRating": "R",
            //         "startYear": 2024,
            //         "endYear": null,
            //         "releaseDate": "2025-05-23",
            //         "interests": [
            //             "Comedy"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://a24films.com/films/friendship"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0390816",
            //                 "name": "A24"
            //             },
            //             {
            //                 "id": "co0580964",
            //                 "name": "Fifth Season"
            //             },
            //             {
            //                 "id": "co0378412",
            //                 "name": "BoulderLight Pictures"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": 15370426,
            //         "genres": [
            //             "Comedy"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 100,
            //         "averageRating": 7.3,
            //         "numVotes": 7913,
            //         "metascore": 72
            //     },
            //     {
            //         "id": "tt14123284",
            //         "url": "https://www.imdb.com/title/tt14123284/",
            //         "primaryTitle": "Havoc",
            //         "originalTitle": "Havoc",
            //         "type": "movie",
            //         "description": "After a drug deal gone wrong, a bruised detective must fight his way through the criminal underworld to rescue a politician's estranged son, unraveling a deep web of corruption and conspiracy that ensnares his entire city.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BZWJjMjdhNGEtZjEyMi00OTg2LTllMzQtN2JlZWNjYzI4YzFhXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZWJjMjdhNGEtZjEyMi00OTg2LTllMzQtN2JlZWNjYzI4YzFhXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZWJjMjdhNGEtZjEyMi00OTg2LTllMzQtN2JlZWNjYzI4YzFhXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=6txjTWLoSc8",
            //         "contentRating": "16+",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-04-25",
            //         "interests": [
            //             "Conspiracy Thriller",
            //             "Drug Crime",
            //             "Gun Fu",
            //             "Martial Arts",
            //             "One-Person Army Action",
            //             "Suspense Mystery",
            //             "Action",
            //             "Crime",
            //             "Drama",
            //             "Mystery"
            //         ],
            //         "countriesOfOrigin": [
            //             "GB",
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.netflix.com/title/81330790"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "South Wales, UK"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0614405",
            //                 "name": "One More One Productions"
            //             },
            //             {
            //                 "id": "co0354803",
            //                 "name": "Severn Screen"
            //             },
            //             {
            //                 "id": "co0244345",
            //                 "name": "XYZ Films"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Action",
            //             "Crime",
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 107,
            //         "averageRating": 5.7,
            //         "numVotes": 51844,
            //         "metascore": 57
            //     },
            //     {
            //         "id": "tt0111161",
            //         "url": "https://www.imdb.com/title/tt0111161/",
            //         "primaryTitle": "The Shawshank Redemption",
            //         "originalTitle": "The Shawshank Redemption",
            //         "type": "movie",
            //         "description": "A banker convicted of uxoricide forms a friendship over a quarter century with a hardened convict, while maintaining his innocence and trying to remain hopeful through simple compassion.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=xyXX8LXiNJ4",
            //         "contentRating": "R",
            //         "startYear": 1994,
            //         "endYear": null,
            //         "releaseDate": "1994-10-14",
            //         "interests": [
            //             "Epic",
            //             "Period Drama",
            //             "Prison Drama",
            //             "Drama"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.facebook.com/shawshankredemptionfilm/",
            //             "https://www.warnerbros.com/movies/shawshank-redemption"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Mansfield Reformatory - 100 Reformatory Road, Mansfield, Ohio, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0040620",
            //                 "name": "Castle Rock Entertainment"
            //             }
            //         ],
            //         "budget": 25000000,
            //         "grossWorldwide": 29333735,
            //         "genres": [
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 142,
            //         "averageRating": 9.3,
            //         "numVotes": 3056217,
            //         "metascore": 82
            //     },
            //     {
            //         "id": "tt26584495",
            //         "url": "https://www.imdb.com/title/tt26584495/",
            //         "primaryTitle": "Companion",
            //         "originalTitle": "Companion",
            //         "type": "movie",
            //         "description": "A weekend getaway with friends at a remote cabin turns into chaos after it's revealed that one of the guests is not what they seem.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BYjkyZTA5NzAtYWU3Zi00MWM4LTgxNzAtNDQxY2JmNjMwYjk4XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYjkyZTA5NzAtYWU3Zi00MWM4LTgxNzAtNDQxY2JmNjMwYjk4XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYjkyZTA5NzAtYWU3Zi00MWM4LTgxNzAtNDQxY2JmNjMwYjk4XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=PhcLjiVtgco",
            //         "contentRating": "R",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-01-31",
            //         "interests": [
            //             "Artificial Intelligence",
            //             "Dark Comedy",
            //             "Psychological Thriller",
            //             "Sci-Fi",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.findyourcompanion.com/"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Putnam County, New York, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0046718",
            //                 "name": "New Line Cinema"
            //             },
            //             {
            //                 "id": "co0378412",
            //                 "name": "BoulderLight Pictures"
            //             },
            //             {
            //                 "id": "co0084207",
            //                 "name": "Vertigo Entertainment"
            //             }
            //         ],
            //         "budget": 10000000,
            //         "grossWorldwide": 36709101,
            //         "genres": [
            //             "Sci-Fi",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 97,
            //         "averageRating": 6.9,
            //         "numVotes": 115359,
            //         "metascore": 70
            //     },
            //     {
            //         "id": "tt3748528",
            //         "url": "https://www.imdb.com/title/tt3748528/",
            //         "primaryTitle": "Rogue One: A Star Wars Story",
            //         "originalTitle": "Rogue One",
            //         "type": "movie",
            //         "description": "In a time of conflict, a group of unlikely heroes band together on a mission to steal the plans to the Death Star, the Empire's ultimate weapon of destruction.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=frdj1zb9sMY",
            //         "contentRating": "PG-13",
            //         "startYear": 2016,
            //         "endYear": null,
            //         "releaseDate": "2016-12-16",
            //         "interests": [
            //             "Action Epic",
            //             "Adventure Epic",
            //             "Sci-Fi Epic",
            //             "Space Sci-Fi",
            //             "Tragedy",
            //             "Action",
            //             "Adventure",
            //             "Sci-Fi"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "http://www.starwars.com/rogue-one/",
            //             "http://www.rogueone.fr/"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Reynisfjara, Iceland"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0071326",
            //                 "name": "Lucasfilm"
            //             },
            //             {
            //                 "id": "co0446409",
            //                 "name": "Allison Shearmur Productions"
            //             }
            //         ],
            //         "budget": 200000000,
            //         "grossWorldwide": 1058684742,
            //         "genres": [
            //             "Action",
            //             "Adventure",
            //             "Sci-Fi"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 133,
            //         "averageRating": 7.8,
            //         "numVotes": 726490,
            //         "metascore": 65
            //     },
            //     {
            //         "id": "tt0275847",
            //         "url": "https://www.imdb.com/title/tt0275847/",
            //         "primaryTitle": "Lilo & Stitch",
            //         "originalTitle": "Lilo & Stitch",
            //         "type": "movie",
            //         "description": "A young and parentless girl adopts a 'dog' from the local pound, completely unaware that it's supposedly a dangerous scientific experiment that's taken refuge on Earth and is now hiding from its creator and those who see it as a menace.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BYzRiYTA1YTEtMjYwMi00NGVhLThkOGYtZDBlYjNjZDk2NDEwXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYzRiYTA1YTEtMjYwMi00NGVhLThkOGYtZDBlYjNjZDk2NDEwXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYzRiYTA1YTEtMjYwMi00NGVhLThkOGYtZDBlYjNjZDk2NDEwXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=wAtaSKQ4-T0",
            //         "contentRating": "PG",
            //         "startYear": 2002,
            //         "endYear": null,
            //         "releaseDate": "2002-06-21",
            //         "interests": [
            //             "Alien Invasion",
            //             "Hand-Drawn Animation",
            //             "Sci-Fi Epic",
            //             "Space Sci-Fi",
            //             "Adventure",
            //             "Animation",
            //             "Comedy",
            //             "Drama",
            //             "Family",
            //             "Fantasy"
            //         ],
            //         "countriesOfOrigin": [
            //             "US",
            //             "JP"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Walt Disney Feature Animation Florida, Walt Disney World, Lake Buena Vista, Florida, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0008970",
            //                 "name": "Walt Disney Pictures"
            //             },
            //             {
            //                 "id": "co0074039",
            //                 "name": "Walt Disney Animation Studios"
            //             },
            //             {
            //                 "id": "co0647646",
            //                 "name": "Walt Disney Feature Animation Florida"
            //             }
            //         ],
            //         "budget": 80000000,
            //         "grossWorldwide": 273147061,
            //         "genres": [
            //             "Adventure",
            //             "Animation",
            //             "Comedy"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 85,
            //         "averageRating": 7.4,
            //         "numVotes": 231651,
            //         "metascore": 74
            //     },
            //     {
            //         "id": "tt29623480",
            //         "url": "https://www.imdb.com/title/tt29623480/",
            //         "primaryTitle": "The Wild Robot",
            //         "originalTitle": "The Wild Robot",
            //         "type": "movie",
            //         "description": "After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island. To survive the harsh environment, Roz bonds with the island's animals and cares for an orphaned baby goose.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BZWNiZjVlZTUtNGUwYi00MjJmLTg2MDctNWEzYTJiMzY1ODc4XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZWNiZjVlZTUtNGUwYi00MjJmLTg2MDctNWEzYTJiMzY1ODc4XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZWNiZjVlZTUtNGUwYi00MjJmLTg2MDctNWEzYTJiMzY1ODc4XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=67vbA5ZJdKQ",
            //         "contentRating": "PG",
            //         "startYear": 2024,
            //         "endYear": null,
            //         "releaseDate": "2024-09-27",
            //         "interests": [
            //             "Artificial Intelligence",
            //             "Computer Animation",
            //             "Survival",
            //             "Animation",
            //             "Sci-Fi"
            //         ],
            //         "countriesOfOrigin": [
            //             "US",
            //             "JP"
            //         ],
            //         "externalLinks": [
            //             "https://www.facebook.com/dreamworksthewildrobot/",
            //             "https://www.instagram.com/thewildrobot/"
            //         ],
            //         "spokenLanguages": [
            //             "en",
            //             "de",
            //             "fr",
            //             "es",
            //             "sw",
            //             "ja"
            //         ],
            //         "filmingLocations": [],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0169264",
            //                 "name": "Dentsu"
            //             },
            //             {
            //                 "id": "co0129164",
            //                 "name": "DreamWorks Animation"
            //             }
            //         ],
            //         "budget": 78000000,
            //         "grossWorldwide": 333165945,
            //         "genres": [
            //             "Animation",
            //             "Sci-Fi"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 102,
            //         "averageRating": 8.2,
            //         "numVotes": 178302,
            //         "metascore": 85
            //     },
            //     {
            //         "id": "tt9218128",
            //         "url": "https://www.imdb.com/title/tt9218128/",
            //         "primaryTitle": "Gladiator II",
            //         "originalTitle": "Gladiator II",
            //         "type": "movie",
            //         "description": "After his home is conquered by the tyrannical emperors who now lead Rome, Lucius is forced to enter the Colosseum and must look to his past to find strength to return the glory of Rome to its people.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMWYzZTM5ZGQtOGE5My00NmM2LWFlMDEtMGNjYjdmOWM1MzA1XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMWYzZTM5ZGQtOGE5My00NmM2LWFlMDEtMGNjYjdmOWM1MzA1XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMWYzZTM5ZGQtOGE5My00NmM2LWFlMDEtMGNjYjdmOWM1MzA1XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=4rgYUipGJNo",
            //         "contentRating": "R",
            //         "startYear": 2024,
            //         "endYear": null,
            //         "releaseDate": "2024-11-22",
            //         "interests": [
            //             "Action Epic",
            //             "Adventure Epic",
            //             "Epic",
            //             "Period Drama",
            //             "Sword & Sandal",
            //             "Action",
            //             "Adventure",
            //             "Drama"
            //         ],
            //         "countriesOfOrigin": [
            //             "US",
            //             "GB",
            //             "MA",
            //             "CA",
            //             "MT"
            //         ],
            //         "externalLinks": [
            //             "https://www.instagram.com/gladiatormovie/",
            //             "https://www.gladiator.movie/"
            //         ],
            //         "spokenLanguages": [
            //             "en",
            //             "la"
            //         ],
            //         "filmingLocations": [
            //             "Morocco"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0023400",
            //                 "name": "Paramount Pictures"
            //             },
            //             {
            //                 "id": "co0074212",
            //                 "name": "Scott Free Productions"
            //             },
            //             {
            //                 "id": "co0015520",
            //                 "name": "Red Wagon Films"
            //             }
            //         ],
            //         "budget": 250000000,
            //         "grossWorldwide": 462180717,
            //         "genres": [
            //             "Action",
            //             "Adventure",
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 148,
            //         "averageRating": 6.5,
            //         "numVotes": 249180,
            //         "metascore": 64
            //     },
            //     {
            //         "id": "tt28607951",
            //         "url": "https://www.imdb.com/title/tt28607951/",
            //         "primaryTitle": "Anora",
            //         "originalTitle": "Anora",
            //         "type": "movie",
            //         "description": "A young stripper from Brooklyn meets and impulsively marries the son of a Russian oligarch. Once the news reaches Russia, her fairy tale is threatened as his parents set out for New York to get the marriage annulled.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BYThiN2M0NTItODRmNC00NDhlLWFiYTgtMWM2YTEyYzI3ZTY1XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYThiN2M0NTItODRmNC00NDhlLWFiYTgtMWM2YTEyYzI3ZTY1XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYThiN2M0NTItODRmNC00NDhlLWFiYTgtMWM2YTEyYzI3ZTY1XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=vgrXTvL_l_c",
            //         "contentRating": "R",
            //         "startYear": 2024,
            //         "endYear": null,
            //         "releaseDate": "2024-11-08",
            //         "interests": [
            //             "Dark Comedy",
            //             "Raunchy Comedy",
            //             "Steamy Romance",
            //             "Comedy",
            //             "Drama",
            //             "Romance"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.instagram.com/anorafilm/",
            //             "https://neonrated.com/films/anora"
            //         ],
            //         "spokenLanguages": [
            //             "en",
            //             "ru",
            //             "hy"
            //         ],
            //         "filmingLocations": [
            //             "Mill Basin, Brooklyn, New York City, New York, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0118724",
            //                 "name": "Cre Film"
            //             },
            //             {
            //                 "id": "co0251858",
            //                 "name": "FilmNation Entertainment"
            //             }
            //         ],
            //         "budget": 6000000,
            //         "grossWorldwide": 59871720,
            //         "genres": [
            //             "Comedy",
            //             "Drama",
            //             "Romance"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 139,
            //         "averageRating": 7.5,
            //         "numVotes": 200297,
            //         "metascore": 91
            //     },
            //     {
            //         "id": "tt30400277",
            //         "url": "https://www.imdb.com/title/tt30400277/",
            //         "primaryTitle": "Kiss of the Spider Woman",
            //         "originalTitle": "Kiss of the Spider Woman",
            //         "type": "movie",
            //         "description": "Valentín, a political prisoner, shares a cell with Molina, convicted for public indecency. An unlikely bond forms as Molina recounts a Hollywood musical plot starring Ingrid Luna.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BNGU2MDY5MjItZTFkZi00ZTEwLTkwODctYmY4Y2FlNjBmMzEwXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNGU2MDY5MjItZTFkZi00ZTEwLTkwODctYmY4Y2FlNjBmMzEwXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNGU2MDY5MjItZTFkZi00ZTEwLTkwODctYmY4Y2FlNjBmMzEwXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": null,
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-10-10",
            //         "interests": [
            //             "Political Drama",
            //             "Prison Drama",
            //             "Drama",
            //             "Musical"
            //         ],
            //         "countriesOfOrigin": [
            //             "US",
            //             "MX"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en",
            //             "es"
            //         ],
            //         "filmingLocations": [
            //             "Kearny, New Jersey, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co1041783",
            //                 "name": "1000 Eyes"
            //             },
            //             {
            //                 "id": "co0961831",
            //                 "name": "Artists Equity"
            //             },
            //             {
            //                 "id": "co0046572",
            //                 "name": "Josephson Entertainment"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Drama",
            //             "Musical"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 128,
            //         "averageRating": 5.8,
            //         "numVotes": 334,
            //         "metascore": 60
            //     },
            //     {
            //         "id": "tt2911666",
            //         "url": "https://www.imdb.com/title/tt2911666/",
            //         "primaryTitle": "John Wick",
            //         "originalTitle": "John Wick",
            //         "type": "movie",
            //         "description": "John Wick is a former hitman grieving the loss of his true love. When his home is broken into, robbed, and his dog killed, he is forced to return to action to exact revenge.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=2AUmvWm5ZDQ",
            //         "contentRating": "R",
            //         "startYear": 2014,
            //         "endYear": null,
            //         "releaseDate": "2014-10-24",
            //         "interests": [
            //             "Gun Fu",
            //             "One-Person Army Action",
            //             "Action",
            //             "Crime",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "http://www.facebook.com/johnwickmovie",
            //             "http://www.johnwickthemovie.com/"
            //         ],
            //         "spokenLanguages": [
            //             "en",
            //             "ru",
            //             "hu"
            //         ],
            //         "filmingLocations": [
            //             "Calvary Cemetery, Woodside, Queens, New York City, New York, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0046206",
            //                 "name": "Summit Entertainment"
            //             },
            //             {
            //                 "id": "co0172670",
            //                 "name": "Thunder Road Pictures"
            //             },
            //             {
            //                 "id": "co0224994",
            //                 "name": "87Eleven"
            //             }
            //         ],
            //         "budget": 20000000,
            //         "grossWorldwide": 86085139,
            //         "genres": [
            //             "Action",
            //             "Crime",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 101,
            //         "averageRating": 7.5,
            //         "numVotes": 785690,
            //         "metascore": 68
            //     },
            //     {
            //         "id": "tt0463854",
            //         "url": "https://www.imdb.com/title/tt0463854/",
            //         "primaryTitle": "28 Weeks Later",
            //         "originalTitle": "28 Weeks Later",
            //         "type": "movie",
            //         "description": "Six months after the rage virus was inflicted on the population of Great Britain, the US Army helps to secure a small area of London for the survivors to repopulate and start again. But not everything goes according to plan.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTUxMjc2MTcxNV5BMl5BanBnXkFtZTcwMzgzOTY0MQ@@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMTUxMjc2MTcxNV5BMl5BanBnXkFtZTcwMzgzOTY0MQ@@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMTUxMjc2MTcxNV5BMl5BanBnXkFtZTcwMzgzOTY0MQ@@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=cH-9OTWwjxM",
            //         "contentRating": "R",
            //         "startYear": 2007,
            //         "endYear": null,
            //         "releaseDate": "2007-05-11",
            //         "interests": [
            //             "Zombie Horror",
            //             "Horror",
            //             "Sci-Fi"
            //         ],
            //         "countriesOfOrigin": [
            //             "GB",
            //             "ES",
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.foxmovies.com/movies/28-weeks-later"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Shaftesbury Avenue, Westminster, Greater London, England, UK"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co1048083",
            //                 "name": "Fox Atomic"
            //             },
            //             {
            //                 "id": "co0176225",
            //                 "name": "Fox Atomic"
            //             },
            //             {
            //                 "id": "co0103974",
            //                 "name": "DNA Films"
            //             }
            //         ],
            //         "budget": 15000000,
            //         "grossWorldwide": 65048725,
            //         "genres": [
            //             "Horror",
            //             "Sci-Fi"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 99,
            //         "averageRating": 6.9,
            //         "numVotes": 313313,
            //         "metascore": 78
            //     },
            //     {
            //         "id": "tt10366206",
            //         "url": "https://www.imdb.com/title/tt10366206/",
            //         "primaryTitle": "John Wick: Chapter 4",
            //         "originalTitle": "John Wick: Chapter 4",
            //         "type": "movie",
            //         "description": "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BY2Q2ZmI5ZjUtNWVhMC00YzJkLTlmYjMtY2RmZDhkNzEzYjZhXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BY2Q2ZmI5ZjUtNWVhMC00YzJkLTlmYjMtY2RmZDhkNzEzYjZhXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BY2Q2ZmI5ZjUtNWVhMC00YzJkLTlmYjMtY2RmZDhkNzEzYjZhXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=qEVUtrk8_B4",
            //         "contentRating": "R",
            //         "startYear": 2023,
            //         "endYear": null,
            //         "releaseDate": "2023-03-24",
            //         "interests": [
            //             "Action Epic",
            //             "Gun Fu",
            //             "One-Person Army Action",
            //             "Action",
            //             "Crime",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US",
            //             "DE"
            //         ],
            //         "externalLinks": [
            //             "http://johnwick.jp/index.html"
            //         ],
            //         "spokenLanguages": [
            //             "en",
            //             "ja",
            //             "ru",
            //             "fr",
            //             "es",
            //             "de",
            //             "la",
            //             "ar"
            //         ],
            //         "filmingLocations": [
            //             "Wadi Rum Desert, Jordan"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0006881",
            //                 "name": "Lionsgate"
            //             },
            //             {
            //                 "id": "co0172670",
            //                 "name": "Thunder Road Pictures"
            //             },
            //             {
            //                 "id": "co0836036",
            //                 "name": "87Eleven Entertainment"
            //             }
            //         ],
            //         "budget": 100000000,
            //         "grossWorldwide": 440180275,
            //         "genres": [
            //             "Action",
            //             "Crime",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 169,
            //         "averageRating": 7.6,
            //         "numVotes": 381934,
            //         "metascore": 78
            //     },
            //     {
            //         "id": "tt10676052",
            //         "url": "https://www.imdb.com/title/tt10676052/",
            //         "primaryTitle": "The Fantastic Four: First Steps",
            //         "originalTitle": "The Fantastic Four: First Steps",
            //         "type": "movie",
            //         "description": "Forced to balance their roles as heroes with the strength of their family bond, the Fantastic Four must defend Earth from a ravenous space god called Galactus and his enigmatic Herald, Silver Surfer.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BY2U5MjM2MWEtYTU2ZC00YjkyLWE2ZTctYzI1ZDI3Y2IzNGVkXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BY2U5MjM2MWEtYTU2ZC00YjkyLWE2ZTctYzI1ZDI3Y2IzNGVkXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BY2U5MjM2MWEtYTU2ZC00YjkyLWE2ZTctYzI1ZDI3Y2IzNGVkXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": null,
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-07-25",
            //         "interests": [
            //             "Space Sci-Fi",
            //             "Superhero",
            //             "Action",
            //             "Adventure",
            //             "Sci-Fi"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.facebook.com/FantasticFour"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "London, England, UK"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0051941",
            //                 "name": "Marvel Studios"
            //             },
            //             {
            //                 "id": "co0781821",
            //                 "name": "20th Century Studios"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Action",
            //             "Adventure",
            //             "Sci-Fi"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 130,
            //         "averageRating": null,
            //         "numVotes": 0,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt31868189",
            //         "url": "https://www.imdb.com/title/tt31868189/",
            //         "primaryTitle": "Happy Gilmore 2",
            //         "originalTitle": "Happy Gilmore 2",
            //         "type": "movie",
            //         "description": "The plot is unknown at this time.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BYjNiMzM1ZDYtNTljMC00MTMwLTk3MjAtM2RjYzBmMjM5OTU4XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYjNiMzM1ZDYtNTljMC00MTMwLTk3MjAtM2RjYzBmMjM5OTU4XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYjNiMzM1ZDYtNTljMC00MTMwLTk3MjAtM2RjYzBmMjM5OTU4XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=alBuSbDUSig",
            //         "contentRating": "PG-13",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-07-25",
            //         "interests": [
            //             "High-Concept Comedy",
            //             "Slapstick",
            //             "Comedy",
            //             "Sport"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "New Jersey, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0059609",
            //                 "name": "Happy Madison Productions"
            //             },
            //             {
            //                 "id": "co0144901",
            //                 "name": "Netflix"
            //             },
            //             {
            //                 "id": "co1107394",
            //                 "name": "Pro Shop Studios"
            //             }
            //         ],
            //         "budget": 30000000,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Comedy",
            //             "Sport"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": null,
            //         "numVotes": 0,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt0058620",
            //         "url": "https://www.imdb.com/title/tt0058620/",
            //         "primaryTitle": "Strait-Jacket",
            //         "originalTitle": "Strait-Jacket",
            //         "type": "movie",
            //         "description": "After a 20-year asylum stay for a double ax murder, suspicion arises about Lucy Harbin's behavior as she returns to her daughter Carol, who is engaged to marry Michael Fields. Soon, heads begin to roll again. Is Lucy repeating her past?",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BM2MxZDllMDUtMzhkYi00Y2M2LTlhODItZjFiMjdiOTM0MGRjXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BM2MxZDllMDUtMzhkYi00Y2M2LTlhODItZjFiMjdiOTM0MGRjXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BM2MxZDllMDUtMzhkYi00Y2M2LTlhODItZjFiMjdiOTM0MGRjXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=DyHcPCUhQSc",
            //         "contentRating": "Approved",
            //         "startYear": 1964,
            //         "endYear": null,
            //         "releaseDate": "1964-01-08",
            //         "interests": [
            //             "Psychological Thriller",
            //             "Slasher Horror",
            //             "Drama",
            //             "Horror",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.youtube.com/watch?v=HlK96Zq0Okw",
            //             "https://www.youtube.com/watch?v=9n8BnNL03GY"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "4600 Crestmore Road, Riverside, California, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0142268",
            //                 "name": "William Castle Productions"
            //             }
            //         ],
            //         "budget": 550000,
            //         "grossWorldwide": 124,
            //         "genres": [
            //             "Drama",
            //             "Horror",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 93,
            //         "averageRating": 6.8,
            //         "numVotes": 7395,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt32223398",
            //         "url": "https://www.imdb.com/title/tt32223398/",
            //         "primaryTitle": "Jaat",
            //         "originalTitle": "Jaat",
            //         "type": "movie",
            //         "description": "An elite Indian government operative is sent to Sri Lanka to bring down a ruthless terrorist whose activities are financed by crime.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BNDQxYmM2YmUtOGJmYy00YzcyLTkxOTItYmI3ZTZjZmUwZDMxXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNDQxYmM2YmUtOGJmYy00YzcyLTkxOTItYmI3ZTZjZmUwZDMxXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNDQxYmM2YmUtOGJmYy00YzcyLTkxOTItYmI3ZTZjZmUwZDMxXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=7noiElC2MpE",
            //         "contentRating": null,
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-04-10",
            //         "interests": [
            //             "Action Epic",
            //             "One-Person Army Action",
            //             "Action",
            //             "Drama",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "IN"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "hi",
            //             "te"
            //         ],
            //         "filmingLocations": [],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0539469",
            //                 "name": "Mythri Movie Makers"
            //             },
            //             {
            //                 "id": "co0623290",
            //                 "name": "People Media Factory"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": 567075,
            //         "genres": [
            //             "Action",
            //             "Drama",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 158,
            //         "averageRating": 6.2,
            //         "numVotes": 8503,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt30988739",
            //         "url": "https://www.imdb.com/title/tt30988739/",
            //         "primaryTitle": "Black Bag",
            //         "originalTitle": "Black Bag",
            //         "type": "movie",
            //         "description": "When intelligence agent Kathryn Woodhouse is suspected of betraying the nation, her husband - also a legendary agent - faces the ultimate test of whether to be loyal to his marriage, or his country.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BNzA1OWU4NDMtMDUxMC00NWI4LWJhYjUtYWQ0OGQ5MTc2NDRjXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNzA1OWU4NDMtMDUxMC00NWI4LWJhYjUtYWQ0OGQ5MTc2NDRjXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNzA1OWU4NDMtMDUxMC00NWI4LWJhYjUtYWQ0OGQ5MTc2NDRjXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=Du0Xp8WX_7I",
            //         "contentRating": "R",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-03-14",
            //         "interests": [
            //             "Spy",
            //             "Drama",
            //             "Mystery",
            //             "Romance",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://focusfeatures.com/black-bag/",
            //             "https://www.nbc.com/nbc-insider/black-bag-cast-characters-steven-soderbergh-spy-film-focus-features"
            //         ],
            //         "spokenLanguages": [
            //             "en",
            //             "es",
            //             "de",
            //             "fr",
            //             "la"
            //         ],
            //         "filmingLocations": [
            //             "Hotel Storchen, Weinplatz, Zürich, Kanton Zürich, Switzerland"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0042399",
            //                 "name": "Focus Features"
            //             },
            //             {
            //                 "id": "co0058884",
            //                 "name": "Casey Silver Productions"
            //             }
            //         ],
            //         "budget": 50000000,
            //         "grossWorldwide": 42848142,
            //         "genres": [
            //             "Drama",
            //             "Mystery",
            //             "Romance"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 93,
            //         "averageRating": 6.7,
            //         "numVotes": 51297,
            //         "metascore": 85
            //     },
            //     {
            //         "id": "tt8999762",
            //         "url": "https://www.imdb.com/title/tt8999762/",
            //         "primaryTitle": "The Brutalist",
            //         "originalTitle": "The Brutalist",
            //         "type": "movie",
            //         "description": "A visionary architect flees post-war Europe in 1947 for a brighter future in the United States and finds his life forever changed by a wealthy client.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BM2U0MWRjZTMtMDVhNC00MzY4LTgwOTktZGQ2MDdiYTI4OWMxXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BM2U0MWRjZTMtMDVhNC00MzY4LTgwOTktZGQ2MDdiYTI4OWMxXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BM2U0MWRjZTMtMDVhNC00MzY4LTgwOTktZGQ2MDdiYTI4OWMxXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=6d7yU379Ur0",
            //         "contentRating": "R",
            //         "startYear": 2024,
            //         "endYear": null,
            //         "releaseDate": "2025-01-24",
            //         "interests": [
            //             "Epic",
            //             "Drama"
            //         ],
            //         "countriesOfOrigin": [
            //             "US",
            //             "GB",
            //             "CA"
            //         ],
            //         "externalLinks": [
            //             "https://a24films.com/films/the-brutalist",
            //             "https://protagonistpictures.com/film/the-brutalist/"
            //         ],
            //         "spokenLanguages": [
            //             "en",
            //             "hu",
            //             "it",
            //             "he",
            //             "yi",
            //             "ru",
            //             "fr"
            //         ],
            //         "filmingLocations": [
            //             "Budapest, Hungary"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0163323",
            //                 "name": "Brookstreet Pictures"
            //             },
            //             {
            //                 "id": "co1082620",
            //                 "name": "Kaplan Morrison"
            //             },
            //             {
            //                 "id": "co0992998",
            //                 "name": "Intake Films"
            //             }
            //         ],
            //         "budget": 10000000,
            //         "grossWorldwide": 50314940,
            //         "genres": [
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 216,
            //         "averageRating": 7.3,
            //         "numVotes": 90934,
            //         "metascore": 90
            //     },
            //     {
            //         "id": "tt28494851",
            //         "url": "https://www.imdb.com/title/tt28494851/",
            //         "primaryTitle": "Stolen",
            //         "originalTitle": "Stolen",
            //         "type": "movie",
            //         "description": "Two urbane brothers witness a baby being kidnapped from an impoverished mother at a railway station in rural India. One guided by moral duty, convinces the other to help the mother and join a perilous investigation to find the baby.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTZmMzYwMDAtNzQ4Mi00NTEyLTlmZjEtYzg5MjEyNWEyNDM4XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMTZmMzYwMDAtNzQ4Mi00NTEyLTlmZjEtYzg5MjEyNWEyNDM4XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMTZmMzYwMDAtNzQ4Mi00NTEyLTlmZjEtYzg5MjEyNWEyNDM4XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": null,
            //         "startYear": 2023,
            //         "endYear": null,
            //         "releaseDate": "2024-01-07",
            //         "interests": [
            //             "Drama",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "IN"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en",
            //             "hi"
            //         ],
            //         "filmingLocations": [],
            //         "productionCompanies": [
            //             {
            //                 "id": "co1011935",
            //                 "name": "Jungle Book Studio"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": 9842,
            //         "genres": [
            //             "Drama",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 92,
            //         "averageRating": 7.5,
            //         "numVotes": 2306,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt1670345",
            //         "url": "https://www.imdb.com/title/tt1670345/",
            //         "primaryTitle": "Now You See Me",
            //         "originalTitle": "Now You See Me",
            //         "type": "movie",
            //         "description": "An FBI agent and an Interpol detective track a team of illusionists who pull off bank heists during their performances, and reward their audiences with the money.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTY0NDY3MDMxN15BMl5BanBnXkFtZTcwOTM5NzMzOQ@@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMTY0NDY3MDMxN15BMl5BanBnXkFtZTcwOTM5NzMzOQ@@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMTY0NDY3MDMxN15BMl5BanBnXkFtZTcwOTM5NzMzOQ@@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=p-pVxwaFuBs",
            //         "contentRating": "PG-13",
            //         "startYear": 2013,
            //         "endYear": null,
            //         "releaseDate": "2013-05-31",
            //         "interests": [
            //             "Caper",
            //             "Heist",
            //             "Crime",
            //             "Mystery",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US",
            //             "FR"
            //         ],
            //         "externalLinks": [
            //             "https://www.facebook.com/NowYouSeeMeMovie",
            //             "http://www.grandillusion.jp/"
            //         ],
            //         "spokenLanguages": [
            //             "en",
            //             "fr"
            //         ],
            //         "filmingLocations": [
            //             "5 Pointz - 45-46 Davis St, Long Island City, Queens, New York City, New York, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0046206",
            //                 "name": "Summit Entertainment"
            //             },
            //             {
            //                 "id": "co0176022",
            //                 "name": "K/O Paper Products"
            //             },
            //             {
            //                 "id": "co0177709",
            //                 "name": "SOIXAN7E QUIN5E"
            //             }
            //         ],
            //         "budget": 75000000,
            //         "grossWorldwide": 351723989,
            //         "genres": [
            //             "Crime",
            //             "Mystery",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 115,
            //         "averageRating": 7.2,
            //         "numVotes": 740953,
            //         "metascore": 50
            //     },
            //     {
            //         "id": "tt31433402",
            //         "url": "https://www.imdb.com/title/tt31433402/",
            //         "primaryTitle": "Fear Street: Prom Queen",
            //         "originalTitle": "Fear Street: Prom Queen",
            //         "type": "movie",
            //         "description": "When the \"it\" girls competing for prom queen at Shadyside High start to disappear, a gutsy outsider discovers she's in for one hell of a prom night.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BNjJlMDJjZTctNDlkYi00YTNmLWIyZjUtZjdmZTFhNDQwMTQ4XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNjJlMDJjZTctNDlkYi00YTNmLWIyZjUtZjdmZTFhNDQwMTQ4XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNjJlMDJjZTctNDlkYi00YTNmLWIyZjUtZjdmZTFhNDQwMTQ4XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": "R",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-05-23",
            //         "interests": [
            //             "Slasher Horror",
            //             "Supernatural Horror",
            //             "Teen Horror",
            //             "Whodunnit",
            //             "Horror",
            //             "Mystery",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.netflix.com/title/81512194"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Hamilton, Ontario, Canada"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0016350",
            //                 "name": "Canadian Film or Video Production Tax Credit (CPTC)"
            //             },
            //             {
            //                 "id": "co0286257",
            //                 "name": "Chernin Entertainment"
            //             },
            //             {
            //                 "id": "co0719815",
            //                 "name": "Ontario Creates"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Horror",
            //             "Mystery",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 90,
            //         "averageRating": 5.1,
            //         "numVotes": 16721,
            //         "metascore": 41
            //     },
            //     {
            //         "id": "tt0073195",
            //         "url": "https://www.imdb.com/title/tt0073195/",
            //         "primaryTitle": "Jaws",
            //         "originalTitle": "Jaws",
            //         "type": "movie",
            //         "description": "When a massive killer shark unleashes chaos on a beach community off Long Island, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BYjViNDQzNmUtYzkxZi00NTk5LTljMmItYjJlZmZkODIxNjU1XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYjViNDQzNmUtYzkxZi00NTk5LTljMmItYjJlZmZkODIxNjU1XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYjViNDQzNmUtYzkxZi00NTk5LTljMmItYjJlZmZkODIxNjU1XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=YIhxgIZJSbk",
            //         "contentRating": "PG",
            //         "startYear": 1975,
            //         "endYear": null,
            //         "releaseDate": "1975-06-20",
            //         "interests": [
            //             "Monster Horror",
            //             "Sea Adventure",
            //             "Survival",
            //             "Adventure",
            //             "Drama",
            //             "Horror",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.facebook.com/JawsMovie/"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Water Street, Edgartown, Martha's Vineyard, Massachusetts, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0019166",
            //                 "name": "Zanuck/Brown Productions"
            //             },
            //             {
            //                 "id": "co0005073",
            //                 "name": "Universal Pictures"
            //             }
            //         ],
            //         "budget": 7000000,
            //         "grossWorldwide": 477916625,
            //         "genres": [
            //             "Adventure",
            //             "Drama",
            //             "Horror"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 124,
            //         "averageRating": 8.1,
            //         "numVotes": 697195,
            //         "metascore": 87
            //     },
            //     {
            //         "id": "tt11563598",
            //         "url": "https://www.imdb.com/title/tt11563598/",
            //         "primaryTitle": "A Complete Unknown",
            //         "originalTitle": "A Complete Unknown",
            //         "type": "movie",
            //         "description": "In 1961, an unknown 19-year-old Bob Dylan arrives in New York City with his guitar and forges relationships with musical icons on his meteoric rise, culminating in a groundbreaking performance that reverberates around the world.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BYTA2NTA5NDYtMzlkOC00MTQxLWI0NDQtMzk2M2YzMGE4MTkxXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYTA2NTA5NDYtMzlkOC00MTQxLWI0NDQtMzk2M2YzMGE4MTkxXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYTA2NTA5NDYtMzlkOC00MTQxLWI0NDQtMzk2M2YzMGE4MTkxXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=FdV-Cs5o8mc",
            //         "contentRating": "R",
            //         "startYear": 2024,
            //         "endYear": null,
            //         "releaseDate": "2024-12-25",
            //         "interests": [
            //             "Docudrama",
            //             "Period Drama",
            //             "Showbiz Drama",
            //             "Biography",
            //             "Drama",
            //             "Music"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.searchlightpictures.com/a-complete-unknown"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Jersey City, New Jersey, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0028932",
            //                 "name": "Searchlight Pictures"
            //             },
            //             {
            //                 "id": "co0265246",
            //                 "name": "The Picture Company"
            //             },
            //             {
            //                 "id": "co0817344",
            //                 "name": "Range Media Partners"
            //             }
            //         ],
            //         "budget": 70000000,
            //         "grossWorldwide": 140508652,
            //         "genres": [
            //             "Biography",
            //             "Drama",
            //             "Music"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 141,
            //         "averageRating": 7.3,
            //         "numVotes": 89781,
            //         "metascore": 70
            //     },
            //     {
            //         "id": "tt1262426",
            //         "url": "https://www.imdb.com/title/tt1262426/",
            //         "primaryTitle": "Wicked",
            //         "originalTitle": "Wicked: Part I",
            //         "type": "movie",
            //         "description": "Elphaba, a young woman ridiculed for her green skin, and Galinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BOWMwYjYzYmMtMWQ2Ni00NWUwLTg2MzAtYzkzMDBiZDIwOTMwXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BOWMwYjYzYmMtMWQ2Ni00NWUwLTg2MzAtYzkzMDBiZDIwOTMwXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BOWMwYjYzYmMtMWQ2Ni00NWUwLTg2MzAtYzkzMDBiZDIwOTMwXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=6COmYeLsz4c",
            //         "contentRating": "PG",
            //         "startYear": 2024,
            //         "endYear": null,
            //         "releaseDate": "2024-11-22",
            //         "interests": [
            //             "Fairy Tale",
            //             "Pop Musical",
            //             "Fantasy",
            //             "Musical",
            //             "Romance"
            //         ],
            //         "countriesOfOrigin": [
            //             "US",
            //             "JP",
            //             "CA",
            //             "IS",
            //             "GB"
            //         ],
            //         "externalLinks": [
            //             "https://www.facebook.com/wickedmovie",
            //             "https://www.instagram.com/wickedmovie"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Sky Studios Elstree Rowley, Borehamwood, Hertfordshire, England, UK"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0005073",
            //                 "name": "Universal Pictures"
            //             },
            //             {
            //                 "id": "co0093810",
            //                 "name": "Marc Platt Productions"
            //             },
            //             {
            //                 "id": "co0037668",
            //                 "name": "Moving Pictures (I)"
            //             }
            //         ],
            //         "budget": 150000000,
            //         "grossWorldwide": 756143602,
            //         "genres": [
            //             "Fantasy",
            //             "Musical",
            //             "Romance"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 160,
            //         "averageRating": 7.4,
            //         "numVotes": 166474,
            //         "metascore": 73
            //     },
            //     {
            //         "id": "tt29603959",
            //         "url": "https://www.imdb.com/title/tt29603959/",
            //         "primaryTitle": "Novocaine",
            //         "originalTitle": "Novocaine",
            //         "type": "movie",
            //         "description": "When the girl of his dreams is kidnapped, a man incapable of feeling physical pain turns his rare condition into an unexpected advantage in the fight to rescue her.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMWU4MmUxODktMWUwYy00YzM0LTg1ZmItNzVlMTZhOWVlNWFjXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMWU4MmUxODktMWUwYy00YzM0LTg1ZmItNzVlMTZhOWVlNWFjXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMWU4MmUxODktMWUwYy00YzM0LTg1ZmItNzVlMTZhOWVlNWFjXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=-PyOIlJEdqA",
            //         "contentRating": "R",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-03-14",
            //         "interests": [
            //             "Dark Comedy",
            //             "One-Person Army Action",
            //             "Superhero",
            //             "Action",
            //             "Comedy",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US",
            //             "CA",
            //             "ZA"
            //         ],
            //         "externalLinks": [
            //             "https://www.novocainemovie.com/home/"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Cape Town, South Africa"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0023400",
            //                 "name": "Paramount Pictures"
            //             },
            //             {
            //                 "id": "co0156293",
            //                 "name": "Department of Trade and Industry of South Africa"
            //             },
            //             {
            //                 "id": "co0945906",
            //                 "name": "Infrared"
            //             }
            //         ],
            //         "budget": 18000000,
            //         "grossWorldwide": 34208050,
            //         "genres": [
            //             "Action",
            //             "Comedy",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 110,
            //         "averageRating": 6.5,
            //         "numVotes": 50217,
            //         "metascore": 58
            //     },
            //     {
            //         "id": "tt4912910",
            //         "url": "https://www.imdb.com/title/tt4912910/",
            //         "primaryTitle": "Mission: Impossible - Fallout",
            //         "originalTitle": "Mission: Impossible - Fallout",
            //         "type": "movie",
            //         "description": "A group of terrorists plans to detonate three plutonium cores for a simultaneous nuclear attack on different cities. Ethan Hunt, along with his IMF team, sets out to stop the carnage.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTk3NDY5MTU0NV5BMl5BanBnXkFtZTgwNDI3MDE1NTM@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMTk3NDY5MTU0NV5BMl5BanBnXkFtZTgwNDI3MDE1NTM@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMTk3NDY5MTU0NV5BMl5BanBnXkFtZTgwNDI3MDE1NTM@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=wb49-oV0F78",
            //         "contentRating": "PG-13",
            //         "startYear": 2018,
            //         "endYear": null,
            //         "releaseDate": "2018-07-27",
            //         "interests": [
            //             "Action Epic",
            //             "Globetrotting Adventure",
            //             "Spy",
            //             "Action",
            //             "Adventure",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US",
            //             "CN",
            //             "FR",
            //             "NO"
            //         ],
            //         "externalLinks": [
            //             "http://www.facebook.com/MissionImpossibleUK/",
            //             "http://www.instagram.com/MissionImpossible/"
            //         ],
            //         "spokenLanguages": [
            //             "en",
            //             "fr"
            //         ],
            //         "filmingLocations": [
            //             "Pulpit Rock, Strand Municipality in Rogaland, Norway"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0023400",
            //                 "name": "Paramount Pictures"
            //             },
            //             {
            //                 "id": "co0152219",
            //                 "name": "Skydance Media"
            //             },
            //             {
            //                 "id": "co0361287",
            //                 "name": "TC Productions"
            //             }
            //         ],
            //         "budget": 178000000,
            //         "grossWorldwide": 791658205,
            //         "genres": [
            //             "Action",
            //             "Adventure",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 147,
            //         "averageRating": 7.7,
            //         "numVotes": 402233,
            //         "metascore": 87
            //     },
            //     {
            //         "id": "tt13650700",
            //         "url": "https://www.imdb.com/title/tt13650700/",
            //         "primaryTitle": "A Big Bold Beautiful Journey",
            //         "originalTitle": "A Big Bold Beautiful Journey",
            //         "type": "movie",
            //         "description": "An imaginative tale of two strangers and the unbelievable journey that connects them.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BYWI5MjM2MDQtMDI1YS00NWY2LTgzYTQtN2Y3MDc2MDBhZmIxXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYWI5MjM2MDQtMDI1YS00NWY2LTgzYTQtN2Y3MDc2MDBhZmIxXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYWI5MjM2MDQtMDI1YS00NWY2LTgzYTQtN2Y3MDc2MDBhZmIxXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": null,
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-09-19",
            //         "interests": [
            //             "Adventure",
            //             "Drama",
            //             "Fantasy",
            //             "Romance"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [],
            //         "filmingLocations": [
            //             "Los Angeles, California, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0050868",
            //                 "name": "Columbia Pictures"
            //             },
            //             {
            //                 "id": "co0473978",
            //                 "name": "Imperative Entertainment"
            //             },
            //             {
            //                 "id": "co0661865",
            //                 "name": "30WEST"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Adventure",
            //             "Drama",
            //             "Fantasy"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": null,
            //         "numVotes": 0,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt23853982",
            //         "url": "https://www.imdb.com/title/tt23853982/",
            //         "primaryTitle": "Parthenope",
            //         "originalTitle": "Parthenope",
            //         "type": "movie",
            //         "description": "A woman born in the sea of Naples in 1950 searches for happiness over the long summers of her youth, falling in love with her home city and its many memorable characters.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMzE2NGQ1MTYtZWJlYi00ZTgyLWI0ZjMtOWQ2OGQ3NTNlM2QzXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMzE2NGQ1MTYtZWJlYi00ZTgyLWI0ZjMtOWQ2OGQ3NTNlM2QzXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMzE2NGQ1MTYtZWJlYi00ZTgyLWI0ZjMtOWQ2OGQ3NTNlM2QzXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=Fli2VhuPApo",
            //         "contentRating": "R",
            //         "startYear": 2024,
            //         "endYear": null,
            //         "releaseDate": "2025-06-06",
            //         "interests": [
            //             "Coming-of-Age",
            //             "Drama",
            //             "Fantasy"
            //         ],
            //         "countriesOfOrigin": [
            //             "IT",
            //             "FR"
            //         ],
            //         "externalLinks": [
            //             "https://tv.apple.com/movie/parthenope/umc.cmc.2rz8wppk6r4jv119moh9x54o5",
            //             "https://a24films.com/films/parthenope"
            //         ],
            //         "spokenLanguages": [
            //             "it",
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Naples, Campania, Italy"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0779330",
            //                 "name": "The Apartment"
            //             },
            //             {
            //                 "id": "co0022869",
            //                 "name": "Pathé"
            //             },
            //             {
            //                 "id": "co1004675",
            //                 "name": "Numero 10"
            //             }
            //         ],
            //         "budget": 26300000,
            //         "grossWorldwide": 11649334,
            //         "genres": [
            //             "Drama",
            //             "Fantasy"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 137,
            //         "averageRating": 6.6,
            //         "numVotes": 13875,
            //         "metascore": 52
            //     },
            //     {
            //         "id": "tt0195714",
            //         "url": "https://www.imdb.com/title/tt0195714/",
            //         "primaryTitle": "Final Destination",
            //         "originalTitle": "Final Destination",
            //         "type": "movie",
            //         "description": "After getting a premonition about a plane crash on his school trip, Alex, a student, saves a few of his classmates. However, their situation gets complicated when death starts chasing them.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMjE1MjlmOWYtYzdjMS00OTgwLThjMDctZWU4N2FkZjgyNTJiXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMjE1MjlmOWYtYzdjMS00OTgwLThjMDctZWU4N2FkZjgyNTJiXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMjE1MjlmOWYtYzdjMS00OTgwLThjMDctZWU4N2FkZjgyNTJiXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=lP4Psj7d1ZI",
            //         "contentRating": "R",
            //         "startYear": 2000,
            //         "endYear": null,
            //         "releaseDate": "2000-03-17",
            //         "interests": [
            //             "Splatter Horror",
            //             "Supernatural Horror",
            //             "Teen Horror",
            //             "Horror",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US",
            //             "CA"
            //         ],
            //         "externalLinks": [
            //             "https://play.hbomax.com/page/urn:hbo:page:GXd7gCQH2RLPDfgEAAAV4:type:feature",
            //             "https://www.facebook.com/finaldestinationmovie?fref=ts"
            //         ],
            //         "spokenLanguages": [
            //             "en",
            //             "fr"
            //         ],
            //         "filmingLocations": [
            //             "Victoria, British Columbia, Canada"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0046718",
            //                 "name": "New Line Cinema"
            //             },
            //             {
            //                 "id": "co0100462",
            //                 "name": "Zide-Perry Productions"
            //             },
            //             {
            //                 "id": "co0087683",
            //                 "name": "British Columbia Film Commission"
            //             }
            //         ],
            //         "budget": 23000000,
            //         "grossWorldwide": 112880294,
            //         "genres": [
            //             "Horror",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 98,
            //         "averageRating": 6.7,
            //         "numVotes": 311996,
            //         "metascore": 39
            //     },
            //     {
            //         "id": "tt32194932",
            //         "url": "https://www.imdb.com/title/tt32194932/",
            //         "primaryTitle": "The Ritual",
            //         "originalTitle": "The Ritual",
            //         "type": "movie",
            //         "description": "Two priests, one in crisis with his faith and the other confronting a turbulent past, must overcome their differences to perform a risky exorcism.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BYjc5ZTA4ZjUtOTY2ZS00MjA0LTkxNGUtNDc1ZDVlOTU2ZGQ2XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYjc5ZTA4ZjUtOTY2ZS00MjA0LTkxNGUtNDc1ZDVlOTU2ZGQ2XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYjc5ZTA4ZjUtOTY2ZS00MjA0LTkxNGUtNDc1ZDVlOTU2ZGQ2XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=fMcw02hWdbc",
            //         "contentRating": null,
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-06-06",
            //         "interests": [
            //             "Supernatural Horror",
            //             "Drama",
            //             "Horror",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0745258",
            //                 "name": "Cinemachine Shop"
            //             },
            //             {
            //                 "id": "co0142424",
            //                 "name": "Andrew Stevens Entertainment"
            //             },
            //             {
            //                 "id": "co0697877",
            //                 "name": "Buzzfeed Studios"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": 454235,
            //         "genres": [
            //             "Drama",
            //             "Horror",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 98,
            //         "averageRating": 4.7,
            //         "numVotes": 928,
            //         "metascore": 30
            //     },
            //     {
            //         "id": "tt5040012",
            //         "url": "https://www.imdb.com/title/tt5040012/",
            //         "primaryTitle": "Nosferatu",
            //         "originalTitle": "Nosferatu",
            //         "type": "movie",
            //         "description": "A gothic tale of obsession between a haunted young woman and the terrifying vampire infatuated with her, causing untold horror in its wake.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BY2FhZGE3NmEtNWJjOC00NDI1LWFhMTQtMjcxNmQzZmEwNGIzXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BY2FhZGE3NmEtNWJjOC00NDI1LWFhMTQtMjcxNmQzZmEwNGIzXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BY2FhZGE3NmEtNWJjOC00NDI1LWFhMTQtMjcxNmQzZmEwNGIzXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=b59rxDB_JRg",
            //         "contentRating": "R",
            //         "startYear": 2024,
            //         "endYear": null,
            //         "releaseDate": "2024-12-25",
            //         "interests": [
            //             "Dark Fantasy",
            //             "Supernatural Horror",
            //             "Vampire Horror",
            //             "Fantasy",
            //             "Horror",
            //             "Mystery"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://amzn.to/4g55ALC",
            //             "https://www.focusfeatures.com/nosferatu/"
            //         ],
            //         "spokenLanguages": [
            //             "en",
            //             "ro",
            //             "ru",
            //             "la",
            //             "de"
            //         ],
            //         "filmingLocations": [
            //             "Corvin Castle, Transylvania region, Romania"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0042399",
            //                 "name": "Focus Features"
            //             },
            //             {
            //                 "id": "co0442328",
            //                 "name": "Maiden Voyage Pictures"
            //             },
            //             {
            //                 "id": "co0329296",
            //                 "name": "Studio 8"
            //             }
            //         ],
            //         "budget": 50000000,
            //         "grossWorldwide": 181270493,
            //         "genres": [
            //             "Fantasy",
            //             "Horror",
            //             "Mystery"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 132,
            //         "averageRating": 7.2,
            //         "numVotes": 207918,
            //         "metascore": 78
            //     },
            //     {
            //         "id": "tt32149847",
            //         "url": "https://www.imdb.com/title/tt32149847/",
            //         "primaryTitle": "Drop",
            //         "originalTitle": "Drop",
            //         "type": "movie",
            //         "description": "A widowed mother's first date in years takes a terrifying turn when she's bombarded with anonymous threatening messages on her phone during their upscale dinner, leaving her questioning if her charming date is behind the harassment.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BOWUyOTNlMjItNWUyZC00ZGJiLTg3MDMtODJmMGQyMGY3NzU3XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BOWUyOTNlMjItNWUyZC00ZGJiLTg3MDMtODJmMGQyMGY3NzU3XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BOWUyOTNlMjItNWUyZC00ZGJiLTg3MDMtODJmMGQyMGY3NzU3XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=bs_nFwh5eJw",
            //         "contentRating": "PG-13",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-04-11",
            //         "interests": [
            //             "Whodunnit",
            //             "Drama",
            //             "Mystery",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US",
            //             "IE"
            //         ],
            //         "externalLinks": [
            //             "https://amzn.to/42FMOH8",
            //             "https://www.facebook.com/DropTheMovie/"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Ardmore Studios, Bray, County Wicklow, Ireland"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0005073",
            //                 "name": "Universal Pictures"
            //             },
            //             {
            //                 "id": "co0098315",
            //                 "name": "Blumhouse Productions"
            //             },
            //             {
            //                 "id": "co0071240",
            //                 "name": "Platinum Dunes"
            //             }
            //         ],
            //         "budget": 11000000,
            //         "grossWorldwide": 28456990,
            //         "genres": [
            //             "Drama",
            //             "Mystery",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 95,
            //         "averageRating": 6.1,
            //         "numVotes": 26641,
            //         "metascore": 65
            //     },
            //     {
            //         "id": "tt17526714",
            //         "url": "https://www.imdb.com/title/tt17526714/",
            //         "primaryTitle": "The Substance",
            //         "originalTitle": "The Substance",
            //         "type": "movie",
            //         "description": "A fading celebrity takes a black-market drug: a cell-replicating substance that creates a younger, better version of herself.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BZDQ1NGE5MGMtYzdlZC00ODExLWJlMDMtNWU4NjA5OWYwMDEwXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZDQ1NGE5MGMtYzdlZC00ODExLWJlMDMtNWU4NjA5OWYwMDEwXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZDQ1NGE5MGMtYzdlZC00ODExLWJlMDMtNWU4NjA5OWYwMDEwXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=LNlrGhBpYjc",
            //         "contentRating": "R",
            //         "startYear": 2024,
            //         "endYear": null,
            //         "releaseDate": "2024-09-20",
            //         "interests": [
            //             "Body Horror",
            //             "Dark Comedy",
            //             "Monster Horror",
            //             "Psychological Horror",
            //             "Showbiz Drama",
            //             "Drama",
            //             "Horror",
            //             "Sci-Fi"
            //         ],
            //         "countriesOfOrigin": [
            //             "GB",
            //             "FR"
            //         ],
            //         "externalLinks": [
            //             "https://amzn.to/3TBpGEO"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "La Maison du Caviar - 21 Rue Quentin Bauchart, Paris 8, Paris, France"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0379523",
            //                 "name": "MUBI"
            //             },
            //             {
            //                 "id": "co0057311",
            //                 "name": "Working Title Films"
            //             },
            //             {
            //                 "id": "co1085223",
            //                 "name": "Blacksmith"
            //             }
            //         ],
            //         "budget": 17500000,
            //         "grossWorldwide": 77316812,
            //         "genres": [
            //             "Drama",
            //             "Horror",
            //             "Sci-Fi"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 141,
            //         "averageRating": 7.2,
            //         "numVotes": 314827,
            //         "metascore": 78
            //     },
            //     {
            //         "id": "tt0892769",
            //         "url": "https://www.imdb.com/title/tt0892769/",
            //         "primaryTitle": "How to Train Your Dragon",
            //         "originalTitle": "How to Train Your Dragon",
            //         "type": "movie",
            //         "description": "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=1huZhKwhIQc",
            //         "contentRating": "PG",
            //         "startYear": 2010,
            //         "endYear": null,
            //         "releaseDate": "2010-03-26",
            //         "interests": [
            //             "Computer Animation",
            //             "Sword & Sorcery",
            //             "Teen Adventure",
            //             "Teen Fantasy",
            //             "Action",
            //             "Adventure",
            //             "Animation",
            //             "Family",
            //             "Fantasy"
            //         ],
            //         "countriesOfOrigin": [
            //             "US",
            //             "FR",
            //             "GB"
            //         ],
            //         "externalLinks": [
            //             "https://www.dreamworks.com/movies/how-to-train-your-dragon",
            //             "https://www.facebook.com/HowToTrainYourDragon"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0129164",
            //                 "name": "DreamWorks Animation"
            //             },
            //             {
            //                 "id": "co0266260",
            //                 "name": "Mad Hatter Entertainment"
            //             },
            //             {
            //                 "id": "co0084207",
            //                 "name": "Vertigo Entertainment"
            //             }
            //         ],
            //         "budget": 165000000,
            //         "grossWorldwide": 494879860,
            //         "genres": [
            //             "Action",
            //             "Adventure",
            //             "Animation"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 98,
            //         "averageRating": 8.1,
            //         "numVotes": 848629,
            //         "metascore": 75
            //     },
            //     {
            //         "id": "tt0068646",
            //         "url": "https://www.imdb.com/title/tt0068646/",
            //         "primaryTitle": "The Godfather",
            //         "originalTitle": "The Godfather",
            //         "type": "movie",
            //         "description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=8V2k2YQEQJ4",
            //         "contentRating": "R",
            //         "startYear": 1972,
            //         "endYear": null,
            //         "releaseDate": "1972-03-24",
            //         "interests": [
            //             "Epic",
            //             "Gangster",
            //             "Tragedy",
            //             "Crime",
            //             "Drama"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.facebook.com/thegodfather/",
            //             "https://www.instagram.com/thegodfathermovie/"
            //         ],
            //         "spokenLanguages": [
            //             "en",
            //             "it",
            //             "la"
            //         ],
            //         "filmingLocations": [
            //             "Forza d'Agrò, Messina, Sicily, Italy"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0023400",
            //                 "name": "Paramount Pictures"
            //             },
            //             {
            //                 "id": "co0921482",
            //                 "name": "Albert S. Ruddy Productions"
            //             },
            //             {
            //                 "id": "co0255097",
            //                 "name": "Alfran Productions"
            //             }
            //         ],
            //         "budget": 6000000,
            //         "grossWorldwide": 250342198,
            //         "genres": [
            //             "Crime",
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 175,
            //         "averageRating": 9.2,
            //         "numVotes": 2133570,
            //         "metascore": 100
            //     },
            //     {
            //         "id": "tt20215234",
            //         "url": "https://www.imdb.com/title/tt20215234/",
            //         "primaryTitle": "Conclave",
            //         "originalTitle": "Conclave",
            //         "type": "movie",
            //         "description": "When Cardinal Lawrence is tasked with leading one of the world's most secretive and ancient events, selecting a new Pope, he finds himself at the center of a web of conspiracies and intrigue that could shake the very foundation of the Catholic Church.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BYjgxMDI5NmMtNTU3OS00ZDQxLTgxZmEtNzY1ZTBmMDY4NDRkXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYjgxMDI5NmMtNTU3OS00ZDQxLTgxZmEtNzY1ZTBmMDY4NDRkXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYjgxMDI5NmMtNTU3OS00ZDQxLTgxZmEtNzY1ZTBmMDY4NDRkXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=JX9jasdi3ic",
            //         "contentRating": "PG",
            //         "startYear": 2024,
            //         "endYear": null,
            //         "releaseDate": "2024-10-25",
            //         "interests": [
            //             "Conspiracy Thriller",
            //             "Drama",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "GB",
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://cclv-movie.jp/"
            //         ],
            //         "spokenLanguages": [
            //             "en",
            //             "it",
            //             "es",
            //             "la"
            //         ],
            //         "filmingLocations": [
            //             "Cinecittà Studios, Cinecittà, Rome, Lazio, Italy"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0215519",
            //                 "name": "Indian Paintbrush"
            //             },
            //             {
            //                 "id": "co0635417",
            //                 "name": "Access Entertainment"
            //             },
            //             {
            //                 "id": "co0251858",
            //                 "name": "FilmNation Entertainment"
            //             }
            //         ],
            //         "budget": 20000000,
            //         "grossWorldwide": 126623104,
            //         "genres": [
            //             "Drama",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 120,
            //         "averageRating": 7.4,
            //         "numVotes": 198649,
            //         "metascore": 79
            //     },
            //     {
            //         "id": "tt0089218",
            //         "url": "https://www.imdb.com/title/tt0089218/",
            //         "primaryTitle": "The Goonies",
            //         "originalTitle": "The Goonies",
            //         "type": "movie",
            //         "description": "A group of young misfits called The Goonies discover an ancient map and set out on an adventure to find a legendary pirate's long-lost treasure.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMjE1OWU4ODEtZmEzMC00NTcwLWFlMWUtYjhlNzExOTIxYzVlXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMjE1OWU4ODEtZmEzMC00NTcwLWFlMWUtYjhlNzExOTIxYzVlXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMjE1OWU4ODEtZmEzMC00NTcwLWFlMWUtYjhlNzExOTIxYzVlXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=VYbF0VdMGrM",
            //         "contentRating": "PG",
            //         "startYear": 1985,
            //         "endYear": null,
            //         "releaseDate": "1985-06-07",
            //         "interests": [
            //             "Quest",
            //             "Teen Adventure",
            //             "Teen Comedy",
            //             "Adventure",
            //             "Comedy",
            //             "Family"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.facebook.com/#!/thegooniesmovie"
            //         ],
            //         "spokenLanguages": [
            //             "en",
            //             "es",
            //             "it"
            //         ],
            //         "filmingLocations": [
            //             "Cannon Beach, Oregon, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0002663",
            //                 "name": "Warner Bros."
            //             },
            //             {
            //                 "id": "co0009119",
            //                 "name": "Amblin Entertainment"
            //             }
            //         ],
            //         "budget": 19000000,
            //         "grossWorldwide": 64531113,
            //         "genres": [
            //             "Adventure",
            //             "Comedy",
            //             "Family"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 114,
            //         "averageRating": 7.7,
            //         "numVotes": 314113,
            //         "metascore": 62
            //     },
            //     {
            //         "id": "tt15791034",
            //         "url": "https://www.imdb.com/title/tt15791034/",
            //         "primaryTitle": "Barbarian",
            //         "originalTitle": "Barbarian",
            //         "type": "movie",
            //         "description": "A woman staying at an Airbnb discovers that the house she has rented is not what it seems.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BNWQ5MDgwMzMtNWZhMy00Y2Q4LWI5NTAtODA4MDIzYTExOGQzXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNWQ5MDgwMzMtNWZhMy00Y2Q4LWI5NTAtODA4MDIzYTExOGQzXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNWQ5MDgwMzMtNWZhMy00Y2Q4LWI5NTAtODA4MDIzYTExOGQzXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=Dr89pmKrqkI",
            //         "contentRating": "R",
            //         "startYear": 2022,
            //         "endYear": null,
            //         "releaseDate": "2022-09-09",
            //         "interests": [
            //             "Psychological Horror",
            //             "Psychological Thriller",
            //             "Suspense Mystery",
            //             "Horror",
            //             "Mystery",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "BG",
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://amzn.to/3GLL7PN"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Sofia, Bulgaria"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0378412",
            //                 "name": "BoulderLight Pictures"
            //             },
            //             {
            //                 "id": "co0789109",
            //                 "name": "Dare Films"
            //             },
            //             {
            //                 "id": "co0687402",
            //                 "name": "Hammerstone Studios"
            //             }
            //         ],
            //         "budget": 4500000,
            //         "grossWorldwide": 45352337,
            //         "genres": [
            //             "Horror",
            //             "Mystery",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 102,
            //         "averageRating": 7,
            //         "numVotes": 223113,
            //         "metascore": 78
            //     },
            //     {
            //         "id": "tt28249919",
            //         "url": "https://www.imdb.com/title/tt28249919/",
            //         "primaryTitle": "Presence",
            //         "originalTitle": "Presence",
            //         "type": "movie",
            //         "description": "A family becomes convinced they are not alone after moving into their new home in the suburbs.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BZWRmNzM1YjktM2YyMi00M2YwLWE2YjMtNjgwNTQ3MGU3MzczXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZWRmNzM1YjktM2YyMi00M2YwLWE2YjMtNjgwNTQ3MGU3MzczXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZWRmNzM1YjktM2YyMi00M2YwLWE2YjMtNjgwNTQ3MGU3MzczXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=XfSNmYhV8Xc",
            //         "contentRating": "R",
            //         "startYear": 2024,
            //         "endYear": null,
            //         "releaseDate": "2025-01-24",
            //         "interests": [
            //             "Psychological Drama",
            //             "Psychological Horror",
            //             "Psychological Thriller",
            //             "Drama",
            //             "Horror",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://neonrated.com/films/presence"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "405 Springfield Avenue, Cranford, New Jersey, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0265102",
            //                 "name": "Extension 765"
            //             },
            //             {
            //                 "id": "co1045096",
            //                 "name": "The Spectral Spirit Company"
            //             }
            //         ],
            //         "budget": 2000000,
            //         "grossWorldwide": 10553434,
            //         "genres": [
            //             "Drama",
            //             "Horror",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 84,
            //         "averageRating": 6.1,
            //         "numVotes": 27233,
            //         "metascore": 77
            //     },
            //     {
            //         "id": "tt23804696",
            //         "url": "https://www.imdb.com/title/tt23804696/",
            //         "primaryTitle": "HIT: The 3rd Case",
            //         "originalTitle": "HIT: The 3rd Case",
            //         "type": "movie",
            //         "description": "Arjun Sarkaar, a top HIT officer from Visakhapatnam, is sent to Jammu and Kashmir to investigate a series of brutal murders. As he pursues a group of elusive killers, the case tests his skills and mental strength.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BOGJlMTM2OWUtYTQwNy00YmM3LTlkOTctMDBjY2ExN2JjY2UzXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BOGJlMTM2OWUtYTQwNy00YmM3LTlkOTctMDBjY2ExN2JjY2UzXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BOGJlMTM2OWUtYTQwNy00YmM3LTlkOTctMDBjY2ExN2JjY2UzXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": null,
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-05-01",
            //         "interests": [
            //             "One-Person Army Action",
            //             "Serial Killer",
            //             "Action",
            //             "Crime",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "IN"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "te"
            //         ],
            //         "filmingLocations": [],
            //         "productionCompanies": [
            //             {
            //                 "id": "co1100432",
            //                 "name": "Unanimous Productions"
            //             },
            //             {
            //                 "id": "co0679521",
            //                 "name": "Wall Poster Cinema"
            //             }
            //         ],
            //         "budget": 600000000,
            //         "grossWorldwide": 1420344,
            //         "genres": [
            //             "Action",
            //             "Crime",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 154,
            //         "averageRating": 7,
            //         "numVotes": 8351,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt13654226",
            //         "url": "https://www.imdb.com/title/tt13654226/",
            //         "primaryTitle": "The Gorge",
            //         "originalTitle": "The Gorge",
            //         "type": "movie",
            //         "description": "Two operatives are appointed to posts in guard towers on opposite sides of a classified gorge.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BOTQ5Y2QyYTktYmFmZi00NWJlLWE0MzgtYTA4M2I0ZjQwZjcxXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BOTQ5Y2QyYTktYmFmZi00NWJlLWE0MzgtYTA4M2I0ZjQwZjcxXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BOTQ5Y2QyYTktYmFmZi00NWJlLWE0MzgtYTA4M2I0ZjQwZjcxXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=rUSdnuOLebE",
            //         "contentRating": "PG-13",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-02-14",
            //         "interests": [
            //             "Dark Romance",
            //             "Monster Horror",
            //             "Survival",
            //             "Action",
            //             "Adventure",
            //             "Horror",
            //             "Romance",
            //             "Sci-Fi"
            //         ],
            //         "countriesOfOrigin": [
            //             "GB",
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en",
            //             "lt"
            //         ],
            //         "filmingLocations": [
            //             "Rauma, Norway"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0843410",
            //                 "name": "Crooked Highway"
            //             },
            //             {
            //                 "id": "co0730836",
            //                 "name": "Lit Entertainment Group"
            //             },
            //             {
            //                 "id": "co0152219",
            //                 "name": "Skydance Media"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Action",
            //             "Adventure",
            //             "Horror"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 127,
            //         "averageRating": 6.7,
            //         "numVotes": 127321,
            //         "metascore": 57
            //     },
            //     {
            //         "id": "tt1229238",
            //         "url": "https://www.imdb.com/title/tt1229238/",
            //         "primaryTitle": "Mission: Impossible - Ghost Protocol",
            //         "originalTitle": "Mission: Impossible - Ghost Protocol",
            //         "type": "movie",
            //         "description": "The IMF is shut down when it's implicated in the bombing of the Kremlin, causing Ethan Hunt and his new team to go rogue to clear their organization's name.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=7wkih9Yvxq0",
            //         "contentRating": "PG-13",
            //         "startYear": 2011,
            //         "endYear": null,
            //         "releaseDate": "2011-12-21",
            //         "interests": [
            //             "Globetrotting Adventure",
            //             "Action",
            //             "Adventure",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US",
            //             "AE",
            //             "RU",
            //             "CA",
            //             "CZ",
            //             "IN"
            //         ],
            //         "externalLinks": [
            //             "http://www.missionimpossible.com/"
            //         ],
            //         "spokenLanguages": [
            //             "en",
            //             "ru",
            //             "fr",
            //             "ar",
            //             "sv"
            //         ],
            //         "filmingLocations": [
            //             "Burj Khalifa, Dubai, United Arab Emirates"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0023400",
            //                 "name": "Paramount Pictures"
            //             },
            //             {
            //                 "id": "co0152219",
            //                 "name": "Skydance Media"
            //             },
            //             {
            //                 "id": "co0361287",
            //                 "name": "TC Productions"
            //             }
            //         ],
            //         "budget": 145000000,
            //         "grossWorldwide": 694713380,
            //         "genres": [
            //             "Action",
            //             "Adventure",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 132,
            //         "averageRating": 7.4,
            //         "numVotes": 549771,
            //         "metascore": 73
            //     },
            //     {
            //         "id": "tt0120755",
            //         "url": "https://www.imdb.com/title/tt0120755/",
            //         "primaryTitle": "Mission: Impossible II",
            //         "originalTitle": "Mission: Impossible II",
            //         "type": "movie",
            //         "description": "IMF agent Ethan Hunt is sent to Sydney to find and destroy a genetically modified disease called \"Chimera\".",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BYWFjM2NhMTAtNDU1My00ODUxLTkwMzYtODQzNzM0ODM0ZWQ0XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYWFjM2NhMTAtNDU1My00ODUxLTkwMzYtODQzNzM0ODM0ZWQ0XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYWFjM2NhMTAtNDU1My00ODUxLTkwMzYtODQzNzM0ODM0ZWQ0XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=hSPtsCQq52k",
            //         "contentRating": "PG-13",
            //         "startYear": 2000,
            //         "endYear": null,
            //         "releaseDate": "2000-05-24",
            //         "interests": [
            //             "Action",
            //             "Adventure",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US",
            //             "DE",
            //             "AU"
            //         ],
            //         "externalLinks": [
            //             "http://mi2.film.ru/",
            //             "https://www.filmymen.us/2022/11/mission-impossible-ii-movie-mission.html"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Dead Horse Point State Park, Utah, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0023400",
            //                 "name": "Paramount Pictures"
            //             },
            //             {
            //                 "id": "co0012382",
            //                 "name": "Cruise/Wagner Productions"
            //             },
            //             {
            //                 "id": "co0194528",
            //                 "name": "Munich Film Partners & Company (MFP) MI2 Productions"
            //             }
            //         ],
            //         "budget": 125000000,
            //         "grossWorldwide": 546388108,
            //         "genres": [
            //             "Action",
            //             "Adventure",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 123,
            //         "averageRating": 6.1,
            //         "numVotes": 398975,
            //         "metascore": 59
            //     },
            //     {
            //         "id": "tt0816692",
            //         "url": "https://www.imdb.com/title/tt0816692/",
            //         "primaryTitle": "Interstellar",
            //         "originalTitle": "Interstellar",
            //         "type": "movie",
            //         "description": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=827FNDpQWrQ",
            //         "contentRating": "PG-13",
            //         "startYear": 2014,
            //         "endYear": null,
            //         "releaseDate": "2014-11-07",
            //         "interests": [
            //             "Adventure Epic",
            //             "Epic",
            //             "Quest",
            //             "Sci-Fi Epic",
            //             "Space Sci-Fi",
            //             "Time Travel",
            //             "Adventure",
            //             "Drama",
            //             "Sci-Fi"
            //         ],
            //         "countriesOfOrigin": [
            //             "US",
            //             "GB",
            //             "CA"
            //         ],
            //         "externalLinks": [
            //             "https://www.facebook.com/Interstellar",
            //             "https://twitter.com/Interstellar"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Iceland"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0023400",
            //                 "name": "Paramount Pictures"
            //             },
            //             {
            //                 "id": "co0002663",
            //                 "name": "Warner Bros."
            //             },
            //             {
            //                 "id": "co0159111",
            //                 "name": "Legendary Entertainment"
            //             }
            //         ],
            //         "budget": 165000000,
            //         "grossWorldwide": 758614115,
            //         "genres": [
            //             "Adventure",
            //             "Drama",
            //             "Sci-Fi"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 169,
            //         "averageRating": 8.7,
            //         "numVotes": 2356696,
            //         "metascore": 74
            //     },
            //     {
            //         "id": "tt13357520",
            //         "url": "https://www.imdb.com/title/tt13357520/",
            //         "primaryTitle": "Heads of State",
            //         "originalTitle": "Heads of State",
            //         "type": "movie",
            //         "description": "When the UK Prime Minister and US President become the targets of a foreign adversary, they're forced to rely on one another to thwart a global conspiracy.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BYWFmNjg0ZGMtZmI5OC00YTAwLWFiMmMtOWRkNzQ0OTE1YWEwXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYWFmNjg0ZGMtZmI5OC00YTAwLWFiMmMtOWRkNzQ0OTE1YWEwXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYWFmNjg0ZGMtZmI5OC00YTAwLWFiMmMtOWRkNzQ0OTE1YWEwXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": "PG-13",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-07-02",
            //         "interests": [
            //             "Action",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Trieste, Friuli-Venezia Giulia, Italy"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co1025982",
            //                 "name": "Amazon MGM Studios"
            //             },
            //             {
            //                 "id": "co0203259",
            //                 "name": "Big Indie Pictures"
            //             },
            //             {
            //                 "id": "co0179825",
            //                 "name": "The Safran Company"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Action",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": null,
            //         "numVotes": 0,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt16366836",
            //         "url": "https://www.imdb.com/title/tt16366836/",
            //         "primaryTitle": "Venom: The Last Dance",
            //         "originalTitle": "Venom: The Last Dance",
            //         "type": "movie",
            //         "description": "Eddie Brock and Venom must make a devastating decision as they're pursued by a mysterious military man and alien monsters from Venom's home world.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BZDMyYWU4NzItZDY0MC00ODE2LTkyYTMtMzNkNDdmYmFhZDg0XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZDMyYWU4NzItZDY0MC00ODE2LTkyYTMtMzNkNDdmYmFhZDg0XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZDMyYWU4NzItZDY0MC00ODE2LTkyYTMtMzNkNDdmYmFhZDg0XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=__2bjWbetsA",
            //         "contentRating": "PG-13",
            //         "startYear": 2024,
            //         "endYear": null,
            //         "releaseDate": "2024-10-25",
            //         "interests": [
            //             "Alien Invasion",
            //             "Kaiju",
            //             "Road Trip",
            //             "Superhero",
            //             "Action",
            //             "Adventure",
            //             "Sci-Fi",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US",
            //             "GB",
            //             "CA"
            //         ],
            //         "externalLinks": [
            //             "https://venom.movie/"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Cartagena, Murcia, Spain"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0050868",
            //                 "name": "Columbia Pictures"
            //             },
            //             {
            //                 "id": "co0047120",
            //                 "name": "Marvel Entertainment"
            //             },
            //             {
            //                 "id": "co0338101",
            //                 "name": "Arad Productions"
            //             }
            //         ],
            //         "budget": 120000000,
            //         "grossWorldwide": 478937618,
            //         "genres": [
            //             "Action",
            //             "Adventure",
            //             "Sci-Fi"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 110,
            //         "averageRating": 6,
            //         "numVotes": 127729,
            //         "metascore": 41
            //     },
            //     {
            //         "id": "tt27674982",
            //         "url": "https://www.imdb.com/title/tt27674982/",
            //         "primaryTitle": "The Ballad of Wallis Island",
            //         "originalTitle": "The Ballad of Wallis Island",
            //         "type": "movie",
            //         "description": "An eccentric lottery winner who lives alone on a remote island tries to make his fantasies come true by getting his favorite musicians to perform at his home.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BODZlMjExYTAtYmJjNi00NzdjLTg3YzMtYTE1YTNlZDRhMWU2XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BODZlMjExYTAtYmJjNi00NzdjLTg3YzMtYTE1YTNlZDRhMWU2XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BODZlMjExYTAtYmJjNi00NzdjLTg3YzMtYTE1YTNlZDRhMWU2XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=HTi-e20yVNs",
            //         "contentRating": "PG-13",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-04-18",
            //         "interests": [
            //             "Quirky Comedy",
            //             "Comedy",
            //             "Drama",
            //             "Music",
            //             "Romance"
            //         ],
            //         "countriesOfOrigin": [
            //             "GB"
            //         ],
            //         "externalLinks": [
            //             "https://www.focusfeatures.com/the-ballad-of-wallis-island/"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0042399",
            //                 "name": "Focus Features"
            //             },
            //             {
            //                 "id": "co0104255",
            //                 "name": "Baby Cow Productions"
            //             },
            //             {
            //                 "id": "co0119462",
            //                 "name": "Moxie Pictures"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": 2320068,
            //         "genres": [
            //             "Comedy",
            //             "Drama",
            //             "Music"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 99,
            //         "averageRating": 7.4,
            //         "numVotes": 4617,
            //         "metascore": 78
            //     },
            //     {
            //         "id": "tt0317919",
            //         "url": "https://www.imdb.com/title/tt0317919/",
            //         "primaryTitle": "Mission: Impossible III",
            //         "originalTitle": "Mission: Impossible III",
            //         "type": "movie",
            //         "description": "IMF agent Ethan Hunt comes into conflict with a dangerous and sadistic arms dealer who threatens his life and his fiancée in response.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BNzY1MzdjMjYtNDJiZS00N2U4LWI0MWQtZTRiZWYxMzU3ZmI4XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNzY1MzdjMjYtNDJiZS00N2U4LWI0MWQtZTRiZWYxMzU3ZmI4XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNzY1MzdjMjYtNDJiZS00N2U4LWI0MWQtZTRiZWYxMzU3ZmI4XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=4oVva0muTE8",
            //         "contentRating": "PG-13",
            //         "startYear": 2006,
            //         "endYear": null,
            //         "releaseDate": "2006-05-05",
            //         "interests": [
            //             "Action",
            //             "Adventure",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US",
            //             "DE",
            //             "CN",
            //             "IT"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en",
            //             "it",
            //             "de",
            //             "cs"
            //         ],
            //         "filmingLocations": [
            //             "Xitang, China"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0023400",
            //                 "name": "Paramount Pictures"
            //             },
            //             {
            //                 "id": "co0012382",
            //                 "name": "Cruise/Wagner Productions"
            //             },
            //             {
            //                 "id": "co0178758",
            //                 "name": "MI 3 Film"
            //             }
            //         ],
            //         "budget": 150000000,
            //         "grossWorldwide": 398479497,
            //         "genres": [
            //             "Action",
            //             "Adventure",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 126,
            //         "averageRating": 6.9,
            //         "numVotes": 410881,
            //         "metascore": 66
            //     },
            //     {
            //         "id": "tt4712810",
            //         "url": "https://www.imdb.com/title/tt4712810/",
            //         "primaryTitle": "Now You See Me: Now You Don't",
            //         "originalTitle": "Now You See Me: Now You Don't",
            //         "type": "movie",
            //         "description": "A diamond heist reunites retired Horsemen illusionists with new performers Greenblatt, Smith and Sessa as they target dangerous criminals.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BNTZlYzdjMzgtYjU2ZC00MGQ5LWFiMDYtOTIwNzQ0M2MyNmU2XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNTZlYzdjMzgtYjU2ZC00MGQ5LWFiMDYtOTIwNzQ0M2MyNmU2XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNTZlYzdjMzgtYjU2ZC00MGQ5LWFiMDYtOTIwNzQ0M2MyNmU2XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": null,
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-11-14",
            //         "interests": [
            //             "Crime",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Belgium"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0006881",
            //                 "name": "Lionsgate"
            //             },
            //             {
            //                 "id": "co0138330",
            //                 "name": "Reese Wernick Productions"
            //             },
            //             {
            //                 "id": "co0046206",
            //                 "name": "Summit Entertainment"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Crime",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": null,
            //         "numVotes": 0,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt1375666",
            //         "url": "https://www.imdb.com/title/tt1375666/",
            //         "primaryTitle": "Inception",
            //         "originalTitle": "Inception",
            //         "type": "movie",
            //         "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=Jvurpf91omw",
            //         "contentRating": "PG-13",
            //         "startYear": 2010,
            //         "endYear": null,
            //         "releaseDate": "2010-07-16",
            //         "interests": [
            //             "Action Epic",
            //             "Adventure Epic",
            //             "Epic",
            //             "Psychological Thriller",
            //             "Sci-Fi Epic",
            //             "Action",
            //             "Adventure",
            //             "Sci-Fi",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US",
            //             "GB"
            //         ],
            //         "externalLinks": [
            //             "http://wwws.warnerbros.co.jp/inception/",
            //             "http://inceptionmovie.warnerbros.com/"
            //         ],
            //         "spokenLanguages": [
            //             "en",
            //             "ja",
            //             "fr"
            //         ],
            //         "filmingLocations": [
            //             "Fortress Mountain, Kananaskis Country, Alberta, Canada"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0002663",
            //                 "name": "Warner Bros."
            //             },
            //             {
            //                 "id": "co0159111",
            //                 "name": "Legendary Entertainment"
            //             },
            //             {
            //                 "id": "co0147954",
            //                 "name": "Syncopy"
            //             }
            //         ],
            //         "budget": 160000000,
            //         "grossWorldwide": 839381898,
            //         "genres": [
            //             "Action",
            //             "Adventure",
            //             "Sci-Fi"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 148,
            //         "averageRating": 8.8,
            //         "numVotes": 2693764,
            //         "metascore": 74
            //     },
            //     {
            //         "id": "tt30057084",
            //         "url": "https://www.imdb.com/title/tt30057084/",
            //         "primaryTitle": "Babygirl",
            //         "originalTitle": "Babygirl",
            //         "type": "movie",
            //         "description": "A high-powered CEO puts her career and family on the line when she begins a torrid affair with her much-younger intern.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMmUwODYwODAtYWZkZS00YmUwLWFmMWEtOGNjMjE2NDk3OWIwXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMmUwODYwODAtYWZkZS00YmUwLWFmMWEtOGNjMjE2NDk3OWIwXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMmUwODYwODAtYWZkZS00YmUwLWFmMWEtOGNjMjE2NDk3OWIwXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=-8Sx6U6Ou0Q",
            //         "contentRating": "R",
            //         "startYear": 2024,
            //         "endYear": null,
            //         "releaseDate": "2024-12-25",
            //         "interests": [
            //             "Erotic Thriller",
            //             "Workplace Drama",
            //             "Drama",
            //             "Romance",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "NL",
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://a24films.com/films/babygirl"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "New York City, New York, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0708111",
            //                 "name": "2AM"
            //             },
            //             {
            //                 "id": "co0390816",
            //                 "name": "A24"
            //             },
            //             {
            //                 "id": "co0826201",
            //                 "name": "Man Up Film"
            //             }
            //         ],
            //         "budget": 20000000,
            //         "grossWorldwide": 64572596,
            //         "genres": [
            //             "Drama",
            //             "Romance",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": 114,
            //         "averageRating": 5.8,
            //         "numVotes": 62651,
            //         "metascore": 79
            //     }
            // ]
            // console.log(result)
            dispatch(
                ((movie) => {
                    return {
                        type: actions.GET_MOVIES,
                        payload: movie,
                    }
                })(result)
            )
        }
        catch (error) {
            console.log(error)
        }
    }
}

export const getTVseries = () => {
    return async (dispatch) => {
        const url = TVseriesapi;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '67ec1bbea9mshdecdfa2dddd2b6ep1f7e24jsnb9d77efd817e',
                'x-rapidapi-host': 'imdb236.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            // const result = [
            //     {
            //         "id": "tt27995114",
            //         "url": "https://www.imdb.com/title/tt27995114/",
            //         "primaryTitle": "Dept. Q",
            //         "originalTitle": "Dept. Q",
            //         "type": "tvSeries",
            //         "description": "Carl, a former top-rated detective, is wracked with guilt following an attack that left his partner paralyzed and another policeman dead. On his return to work, Carl is assigned to a cold case that will consume his life.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BNWQ3MDQ2MGQtOGM0MC00MzlkLWE0ODQtYzE4Zjc3Mjc1ZWI5XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNWQ3MDQ2MGQtOGM0MC00MzlkLWE0ODQtYzE4Zjc3Mjc1ZWI5XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNWQ3MDQ2MGQtOGM0MC00MzlkLWE0ODQtYzE4Zjc3Mjc1ZWI5XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": "TV-MA",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-05-29",
            //         "interests": [
            //             "Crime",
            //             "Drama",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "GB"
            //         ],
            //         "externalLinks": [
            //             "https://www.netflix.com/title/81487660"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Edinburgh, Scotland, UK"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0826666",
            //                 "name": "Flitcraft"
            //             },
            //             {
            //                 "id": "co0208971",
            //                 "name": "Left Bank Pictures"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Crime",
            //             "Drama",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.3,
            //         "numVotes": 29913,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt3581920",
            //         "url": "https://www.imdb.com/title/tt3581920/",
            //         "primaryTitle": "The Last of Us",
            //         "originalTitle": "The Last of Us",
            //         "type": "tvSeries",
            //         "description": "After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BYWI3ODJlMzktY2U5NC00ZjdlLWE1MGItNWQxZDk3NWNjN2RhXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYWI3ODJlMzktY2U5NC00ZjdlLWE1MGItNWQxZDk3NWNjN2RhXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYWI3ODJlMzktY2U5NC00ZjdlLWE1MGItNWQxZDk3NWNjN2RhXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=uLtkt8BonwM",
            //         "contentRating": "TV-MA",
            //         "startYear": 2023,
            //         "endYear": null,
            //         "releaseDate": "2023-01-15",
            //         "interests": [
            //             "Dystopian Sci-Fi",
            //             "Quest",
            //             "Survival",
            //             "Zombie Horror",
            //             "Action",
            //             "Adventure",
            //             "Drama",
            //             "Horror",
            //             "Sci-Fi",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "CA",
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.hbo.com/the-last-of-us",
            //             "https://www.sky.com/watch/the-last-of-us"
            //         ],
            //         "spokenLanguages": [
            //             "en",
            //             "id"
            //         ],
            //         "filmingLocations": [
            //             "Calgary, Alberta, Canada"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0016350",
            //                 "name": "Canadian Film or Video Production Tax Credit (CPTC)"
            //             },
            //             {
            //                 "id": "co0328593",
            //                 "name": "Government of Alberta"
            //             },
            //             {
            //                 "id": "co0135004",
            //                 "name": "Naughty Dog"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Action",
            //             "Adventure",
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.6,
            //         "numVotes": 674049,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt10813940",
            //         "url": "https://www.imdb.com/title/tt10813940/",
            //         "primaryTitle": "Ginny & Georgia",
            //         "originalTitle": "Ginny & Georgia",
            //         "type": "tvSeries",
            //         "description": "Ginny Miller, an angsty fifteen-year-old, often feels more mature than her thirty-year-old mother, the irresistible and dynamic Georgia Miller.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BM2U2NjA5NmUtNTUzYi00NDdjLWEwZjgtZGFmYjAzNzk3ZjFkXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BM2U2NjA5NmUtNTUzYi00NDdjLWEwZjgtZGFmYjAzNzk3ZjFkXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BM2U2NjA5NmUtNTUzYi00NDdjLWEwZjgtZGFmYjAzNzk3ZjFkXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=OKj4rB2zWv4",
            //         "contentRating": "TV-14",
            //         "startYear": 2021,
            //         "endYear": null,
            //         "releaseDate": "2021-02-24",
            //         "interests": [
            //             "Coming-of-Age",
            //             "Teen Comedy",
            //             "Comedy",
            //             "Drama"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.netflix.com/ru/title/81025696"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Toronto, Ontario, Canada"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0498613",
            //                 "name": "Blue Ice Pictures"
            //             },
            //             {
            //                 "id": "co0577390",
            //                 "name": "Critical Content"
            //             },
            //             {
            //                 "id": "co0466320",
            //                 "name": "Dynamic Television"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Comedy",
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 7.5,
            //         "numVotes": 94035,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt31510819",
            //         "url": "https://www.imdb.com/title/tt31510819/",
            //         "primaryTitle": "MobLand",
            //         "originalTitle": "MobLand",
            //         "type": "tvSeries",
            //         "description": "Power is up for grabs as two warring crime families clash in a battle that threatens to topple empires. In the crossfire stands Harry Da Souza, a street-smart 'fixer' who knows too well where loyalties lie when opposing forces collide.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BZDVmMzJkOWUtMjdjMi00NzA4LTgxMTItYjA4NjVjZDI0ZWU1XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZDVmMzJkOWUtMjdjMi00NzA4LTgxMTItYjA4NjVjZDI0ZWU1XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZDVmMzJkOWUtMjdjMi00NzA4LTgxMTItYjA4NjVjZDI0ZWU1XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=qKGgw7Ob5f4",
            //         "contentRating": "TV-MA",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-03-30",
            //         "interests": [
            //             "Psychological Drama",
            //             "Crime",
            //             "Drama"
            //         ],
            //         "countriesOfOrigin": [
            //             "GB",
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.paramountplus.com/shows/mobland/"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Antwerp, Flanders, Belgium"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0703551",
            //                 "name": "101 Studios"
            //             },
            //             {
            //                 "id": "co0798910",
            //                 "name": "Easter Partisan Films"
            //             },
            //             {
            //                 "id": "co0432343",
            //                 "name": "Hardy, Son & Baker"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Crime",
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.4,
            //         "numVotes": 42559,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt32260680",
            //         "url": "https://www.imdb.com/title/tt32260680/",
            //         "primaryTitle": "The Better Sister",
            //         "originalTitle": "The Better Sister",
            //         "type": "tvSeries",
            //         "description": "Chloe navigates life with husband Adam and son Ethan while her sister Nicky battles addiction. Adam's murder unveils long-hidden family secrets, shaking their world.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BNmFmNTY5NDAtNWE0YS00NDNmLWFhYjItZjY2YjQxY2Y0NmUxXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNmFmNTY5NDAtNWE0YS00NDNmLWFhYjItZjY2YjQxY2Y0NmUxXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNmFmNTY5NDAtNWE0YS00NDNmLWFhYjItZjY2YjQxY2Y0NmUxXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": null,
            //         "startYear": 2025,
            //         "endYear": 2025,
            //         "releaseDate": "2025-05-29",
            //         "interests": [
            //             "Drama",
            //             "Mystery",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "New York City, New York, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0485456",
            //                 "name": "Tomorrow Studios"
            //             },
            //             {
            //                 "id": "co1025982",
            //                 "name": "Amazon MGM Studios"
            //             },
            //             {
            //                 "id": "co1120460",
            //                 "name": "Puny Voice"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Drama",
            //             "Mystery",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 7,
            //         "numVotes": 6307,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt31429675",
            //         "url": "https://www.imdb.com/title/tt31429675/",
            //         "primaryTitle": "Sirens",
            //         "originalTitle": "Sirens",
            //         "type": "tvMiniSeries",
            //         "description": "Devon is concerned about her sister's unhealthy relationship with her new boss.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BNTQ1NzBmOGYtNWVjZC00OWFlLTgwNjMtM2NhM2VjYjdhYzI2XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNTQ1NzBmOGYtNWVjZC00OWFlLTgwNjMtM2NhM2VjYjdhYzI2XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNTQ1NzBmOGYtNWVjZC00OWFlLTgwNjMtM2NhM2VjYjdhYzI2XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": "TV-MA",
            //         "startYear": 2025,
            //         "endYear": 2025,
            //         "releaseDate": "2025-05-22",
            //         "interests": [
            //             "Dark Comedy",
            //             "Comedy",
            //             "Drama"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.netflix.com/title/81589551"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "North Fork, New York, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0542434",
            //                 "name": "LuckyChap"
            //             },
            //             {
            //                 "id": "co0650527",
            //                 "name": "Netflix Studios"
            //             },
            //             {
            //                 "id": "co1049817",
            //                 "name": "Quiet Coyote"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Comedy",
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 6.8,
            //         "numVotes": 19501,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt9253284",
            //         "url": "https://www.imdb.com/title/tt9253284/",
            //         "primaryTitle": "Andor",
            //         "originalTitle": "Andor",
            //         "type": "tvSeries",
            //         "description": "In an era filled with danger, deception, and intrigue, Cassian Andor embarks on a path that is destined to turn him into a Rebel hero.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BNGI2MTJjMjUtMTJhOC00YTY2LTg1NjUtMTdmMjg4YTk2YjM5XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNGI2MTJjMjUtMTJhOC00YTY2LTg1NjUtMTdmMjg4YTk2YjM5XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNGI2MTJjMjUtMTJhOC00YTY2LTg1NjUtMTdmMjg4YTk2YjM5XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=cKOegEuCcfw",
            //         "contentRating": "TV-14",
            //         "startYear": 2022,
            //         "endYear": 2025,
            //         "releaseDate": "2022-09-21",
            //         "interests": [
            //             "Dark Fantasy",
            //             "Dystopian Sci-Fi",
            //             "Epic",
            //             "Political Drama",
            //             "Political Thriller",
            //             "Sci-Fi Epic",
            //             "Space Sci-Fi",
            //             "Spy",
            //             "Action",
            //             "Adventure"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.facebook.com/AndorOfficial"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Cruachan Reservoir, Scotland, UK"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0071326",
            //                 "name": "Lucasfilm"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Action",
            //             "Adventure",
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.5,
            //         "numVotes": 228396,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt31710249",
            //         "url": "https://www.imdb.com/title/tt31710249/",
            //         "primaryTitle": "Stick",
            //         "originalTitle": "Stick",
            //         "type": "tvSeries",
            //         "description": "An over-the-hill ex-golfer, fired from his job, sees hope in coaching a troubled teen prodigy after his wife leaves him, staking his future on the youth's success.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BOTQyYjE2NjgtMTA1OC00YWQwLWE0NDUtMDg2MGFiNGQ0ZDJkXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BOTQyYjE2NjgtMTA1OC00YWQwLWE0NDUtMDg2MGFiNGQ0ZDJkXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BOTQyYjE2NjgtMTA1OC00YWQwLWE0NDUtMDg2MGFiNGQ0ZDJkXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": null,
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-06-04",
            //         "interests": [
            //             "Comedy",
            //             "Sport"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "New Westminster, British Columbia, Canada"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0861654",
            //                 "name": "Apple Studios"
            //             },
            //             {
            //                 "id": "co0092453",
            //                 "name": "Entertainment 360"
            //             },
            //             {
            //                 "id": "co0758256",
            //                 "name": "Piece Of Work Entertainment"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Comedy",
            //             "Sport"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 7.1,
            //         "numVotes": 2129,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt13623632",
            //         "url": "https://www.imdb.com/title/tt13623632/",
            //         "primaryTitle": "Alien: Earth",
            //         "originalTitle": "Alien: Earth",
            //         "type": "tvSeries",
            //         "description": "When a mysterious space vessel crash-lands on Earth, a young woman and a ragtag group of tactical soldiers make a fateful discovery that puts them face-to-face with the planet's greatest threat.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BYjA3NjVmNGYtOWZiZS00N2I1LWIwNDEtNmE4YjAyMTQ4NjQ0XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYjA3NjVmNGYtOWZiZS00N2I1LWIwNDEtNmE4YjAyMTQ4NjQ0XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYjA3NjVmNGYtOWZiZS00N2I1LWIwNDEtNmE4YjAyMTQ4NjQ0XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": "TV-MA",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-08-12",
            //         "interests": [
            //             "Alien Invasion",
            //             "Monster Horror",
            //             "Psychological Horror",
            //             "Psychological Thriller",
            //             "Space Sci-Fi",
            //             "Horror",
            //             "Sci-Fi",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "GB",
            //             "US",
            //             "TH"
            //         ],
            //         "externalLinks": [
            //             "https://www.facebook.com/alienearthfx",
            //             "https://www.fxnetworks.com/shows/alien-earth"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Thailand"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0161074",
            //                 "name": "20th Television"
            //             },
            //             {
            //                 "id": "co0269852",
            //                 "name": "26 Keys Productions"
            //             },
            //             {
            //                 "id": "co0132161",
            //                 "name": "Brandywine Productions"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Horror",
            //             "Sci-Fi",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": null,
            //         "numVotes": 0,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt31491435",
            //         "url": "https://www.imdb.com/title/tt31491435/",
            //         "primaryTitle": "Tires",
            //         "originalTitle": "Tires",
            //         "type": "tvSeries",
            //         "description": "Will, an unqualified heir, attempts to turn his auto repair business around while enduring torment from his now-employee cousin Shane.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BOGQyMDdkYTAtYmQ2OS00N2EyLTgwZjctY2E3YmZjMWE4ZWYzXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BOGQyMDdkYTAtYmQ2OS00N2EyLTgwZjctY2E3YmZjMWE4ZWYzXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BOGQyMDdkYTAtYmQ2OS00N2EyLTgwZjctY2E3YmZjMWE4ZWYzXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": "TV-MA",
            //         "startYear": 2024,
            //         "endYear": 2025,
            //         "releaseDate": "2024-05-23",
            //         "interests": [
            //             "Action",
            //             "Comedy"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "West Chester, Pennsylvania, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co1051246",
            //                 "name": "Dad Sick Productions"
            //             },
            //             {
            //                 "id": "co0507101",
            //                 "name": "AGI Entertainment Media & Management"
            //             },
            //             {
            //                 "id": "co0291982",
            //                 "name": "Rough House Pictures"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Action",
            //             "Comedy"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 7.4,
            //         "numVotes": 13022,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt28703560",
            //         "url": "https://www.imdb.com/title/tt28703560/",
            //         "primaryTitle": "The Survivors",
            //         "originalTitle": "The Survivors",
            //         "type": "tvMiniSeries",
            //         "description": "Fifteen years ago, a storm devastated the coastal town of Evelyn Bay and took three young people: Kieran's older brother, Finn, Mia's best friend, Gabby, and Finn's friend, Toby. Burdened by guilt, Kieran and Mia escaped.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BYjg2YjMxNzctODQ5Yy00MjMyLTk0ZTktOWIxY2JhYjU2OWY5XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYjg2YjMxNzctODQ5Yy00MjMyLTk0ZTktOWIxY2JhYjU2OWY5XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYjg2YjMxNzctODQ5Yy00MjMyLTk0ZTktOWIxY2JhYjU2OWY5XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": null,
            //         "startYear": 2025,
            //         "endYear": 2025,
            //         "releaseDate": "2025-06-06",
            //         "interests": [
            //             "Crime",
            //             "Drama",
            //             "Mystery",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "AU"
            //         ],
            //         "externalLinks": [
            //             "https://www.netflix.com/title/81647727"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Hobart, Tasmania, Australia"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0302822",
            //                 "name": "Matchbox Pictures"
            //             },
            //             {
            //                 "id": "co0709198",
            //                 "name": "Tony Ayres Productions (TAP)"
            //             },
            //             {
            //                 "id": "co0186606",
            //                 "name": "Universal International Studios"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Crime",
            //             "Drama",
            //             "Mystery"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 6.6,
            //         "numVotes": 2235,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt30459041",
            //         "url": "https://www.imdb.com/title/tt30459041/",
            //         "primaryTitle": "Your Friends & Neighbors",
            //         "originalTitle": "Your Friends & Neighbors",
            //         "type": "tvSeries",
            //         "description": "A hedge fund manager resorts to burglary after losing his job, targeting wealthy neighbors to maintain his family's lifestyle, but makes a fateful error breaking into the wrong home.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BZmJkNGYzOGQtMDk5My00MTgzLThiMzMtZGVkZTZmNmYxNzU1XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZmJkNGYzOGQtMDk5My00MTgzLThiMzMtZGVkZTZmNmYxNzU1XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZmJkNGYzOGQtMDk5My00MTgzLThiMzMtZGVkZTZmNmYxNzU1XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=iVRFMd6dEOE",
            //         "contentRating": "TV-MA",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-04-11",
            //         "interests": [
            //             "Drama"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Hudson Valley, New York, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0861654",
            //                 "name": "Apple Studios"
            //             },
            //             {
            //                 "id": "co1097778",
            //                 "name": "Fortunate Jack Productions"
            //             },
            //             {
            //                 "id": "co0741233",
            //                 "name": "Tropper Ink Productions"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 7.7,
            //         "numVotes": 21839,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt4574334",
            //         "url": "https://www.imdb.com/title/tt4574334/",
            //         "primaryTitle": "Stranger Things",
            //         "originalTitle": "Stranger Things",
            //         "type": "tvSeries",
            //         "description": "In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMjg2NmM0MTEtYWY2Yy00NmFlLTllNTMtMjVkZjEwMGVlNzdjXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMjg2NmM0MTEtYWY2Yy00NmFlLTllNTMtMjVkZjEwMGVlNzdjXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMjg2NmM0MTEtYWY2Yy00NmFlLTllNTMtMjVkZjEwMGVlNzdjXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=b9EkMc79ZSU",
            //         "contentRating": "TV-14",
            //         "startYear": 2016,
            //         "endYear": 2025,
            //         "releaseDate": "2016-07-15",
            //         "interests": [
            //             "Dark Fantasy",
            //             "Fantasy Epic",
            //             "Monster Horror",
            //             "Sci-Fi Epic",
            //             "Supernatural Fantasy",
            //             "Supernatural Horror",
            //             "Teen Horror",
            //             "Drama",
            //             "Fantasy",
            //             "Horror"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.netflix.com/title/80057281",
            //             "https://www.facebook.com/StrangerThingsTV"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Vilnius, Lithuania"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0158853",
            //                 "name": "21 Laps Entertainment"
            //             },
            //             {
            //                 "id": "co0598414",
            //                 "name": "Monkey Massacre"
            //             },
            //             {
            //                 "id": "co0144901",
            //                 "name": "Netflix"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Drama",
            //             "Fantasy",
            //             "Horror"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.6,
            //         "numVotes": 1453398,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt0944947",
            //         "url": "https://www.imdb.com/title/tt0944947/",
            //         "primaryTitle": "Game of Thrones",
            //         "originalTitle": "Game of Thrones",
            //         "type": "tvSeries",
            //         "description": "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=BpJYNVhGf1s",
            //         "contentRating": "TV-MA",
            //         "startYear": 2011,
            //         "endYear": 2019,
            //         "releaseDate": "2011-04-17",
            //         "interests": [
            //             "Action Epic",
            //             "Dark Fantasy",
            //             "Epic",
            //             "Fantasy Epic",
            //             "Sword & Sorcery",
            //             "Tragedy",
            //             "Action",
            //             "Adventure",
            //             "Drama",
            //             "Fantasy"
            //         ],
            //         "countriesOfOrigin": [
            //             "US",
            //             "GB"
            //         ],
            //         "externalLinks": [
            //             "http://www.facebook.com/GameOfThrones",
            //             "https://www.instagram.com/gameofthrones/"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Split, Split-Dalmatia County, Croatia"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0284741",
            //                 "name": "HBO Entertainment"
            //             },
            //             {
            //                 "id": "co0335036",
            //                 "name": "Television 360"
            //             },
            //             {
            //                 "id": "co0167350",
            //                 "name": "Grok! Studio"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Action",
            //             "Adventure",
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 9.2,
            //         "numVotes": 2443144,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt13406094",
            //         "url": "https://www.imdb.com/title/tt13406094/",
            //         "primaryTitle": "The White Lotus",
            //         "originalTitle": "The White Lotus",
            //         "type": "tvSeries",
            //         "description": "The exploits of various guests and employees of a luxury resort over the span of a week.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BZmM1MGM0MDQtZTAzNy00ZGJkLWI4MDUtNjBmMzdhYjhlM2QwXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZmM1MGM0MDQtZTAzNy00ZGJkLWI4MDUtNjBmMzdhYjhlM2QwXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZmM1MGM0MDQtZTAzNy00ZGJkLWI4MDUtNjBmMzdhYjhlM2QwXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=TGLq7_MonZ4",
            //         "contentRating": "TV-MA",
            //         "startYear": 2021,
            //         "endYear": null,
            //         "releaseDate": "2021-07-11",
            //         "interests": [
            //             "Dark Comedy",
            //             "Satire",
            //             "Comedy",
            //             "Drama"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Four Seasons Resort Maui at Wailea, Maui, Hawaii, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0193472",
            //                 "name": "Rip Cord Productions"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Comedy",
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8,
            //         "numVotes": 282273,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt5834204",
            //         "url": "https://www.imdb.com/title/tt5834204/",
            //         "primaryTitle": "The Handmaid's Tale",
            //         "originalTitle": "The Handmaid's Tale",
            //         "type": "tvSeries",
            //         "description": "Set in a dystopian future, a woman is forced to live as a concubine under a fundamentalist theocratic dictatorship.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMWIxMzk4NmItZmM1YS00ODUyLWFlNjgtZDQ4MzljZTZmZDQ5XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMWIxMzk4NmItZmM1YS00ODUyLWFlNjgtZDQ4MzljZTZmZDQ5XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMWIxMzk4NmItZmM1YS00ODUyLWFlNjgtZDQ4MzljZTZmZDQ5XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=81PyH5TH-NQ",
            //         "contentRating": "TV-MA",
            //         "startYear": 2017,
            //         "endYear": 2025,
            //         "releaseDate": "2017-04-26",
            //         "interests": [
            //             "Dystopian Sci-Fi",
            //             "Epic",
            //             "Psychological Thriller",
            //             "Tragedy",
            //             "Drama",
            //             "Sci-Fi",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.hulu.com/the-handmaids-tale",
            //             "https://www.facebook.com/handmaidsonhulu/"
            //         ],
            //         "spokenLanguages": [
            //             "en",
            //             "de",
            //             "el"
            //         ],
            //         "filmingLocations": [
            //             "Cambridge, Ontario, Canada"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0035421",
            //                 "name": "Daniel Wilson Productions"
            //             },
            //             {
            //                 "id": "co0080851",
            //                 "name": "The Littlefield Company"
            //             },
            //             {
            //                 "id": "co0698432",
            //                 "name": "White Oak Pictures"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Drama",
            //             "Sci-Fi",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.3,
            //         "numVotes": 282191,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt2085059",
            //         "url": "https://www.imdb.com/title/tt2085059/",
            //         "primaryTitle": "Black Mirror",
            //         "originalTitle": "Black Mirror",
            //         "type": "tvSeries",
            //         "description": "Featuring stand-alone dramas -- sharp, suspenseful, satirical tales that explore techno-paranoia -- \"Black Mirror\" is a contemporary reworking of \"The Twilight Zone\" with stories that tap into the collective unease about the modern world.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BODcxMWI2NDMtYTc3NC00OTZjLWFmNmUtM2NmY2I1ODkxYzczXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BODcxMWI2NDMtYTc3NC00OTZjLWFmNmUtM2NmY2I1ODkxYzczXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BODcxMWI2NDMtYTc3NC00OTZjLWFmNmUtM2NmY2I1ODkxYzczXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=di6emt8_ie8",
            //         "contentRating": "TV-MA",
            //         "startYear": 2011,
            //         "endYear": null,
            //         "releaseDate": "2011-12-04",
            //         "interests": [
            //             "Cyber Thriller",
            //             "Dystopian Sci-Fi",
            //             "Psychological Drama",
            //             "Psychological Thriller",
            //             "Suspense Mystery",
            //             "Tragedy",
            //             "Crime",
            //             "Drama",
            //             "Mystery",
            //             "Sci-Fi"
            //         ],
            //         "countriesOfOrigin": [
            //             "GB"
            //         ],
            //         "externalLinks": [
            //             "https://www.facebook.com/pages/Black-Mirror/303218469698234",
            //             "https://www.netflix.com/title/70264888"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Toronto, Ontario, Canada"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0104481",
            //                 "name": "Zeppotron"
            //             },
            //             {
            //                 "id": "co0103528",
            //                 "name": "Channel 4 Television Corporation"
            //             },
            //             {
            //                 "id": "co0454147",
            //                 "name": "Babieka"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": 320000,
            //         "genres": [
            //             "Crime",
            //             "Drama",
            //             "Mystery"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.7,
            //         "numVotes": 698099,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt30444310",
            //         "url": "https://www.imdb.com/title/tt30444310/",
            //         "primaryTitle": "Murderbot",
            //         "originalTitle": "Murderbot",
            //         "type": "tvSeries",
            //         "description": "A security android struggles with emotions and free will while balancing dangerous missions and desire for isolation, evading detection of its self-hacking as it finds its place.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BYmFjYTc1ZjUtMmFiMi00NjgzLWJiODgtMDc5ZDcwZmRjYzcwXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYmFjYTc1ZjUtMmFiMi00NjgzLWJiODgtMDc5ZDcwZmRjYzcwXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYmFjYTc1ZjUtMmFiMi00NjgzLWJiODgtMDc5ZDcwZmRjYzcwXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": "TV-MA",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-05-16",
            //         "interests": [
            //             "Action",
            //             "Comedy",
            //             "Drama",
            //             "Sci-Fi",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Toronto, Ontario, Canada"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0854529",
            //                 "name": "Apple TV"
            //             },
            //             {
            //                 "id": "co0113177",
            //                 "name": "Depth of Field"
            //             },
            //             {
            //                 "id": "co0781350",
            //                 "name": "Paramount Television Studios"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Action",
            //             "Comedy",
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 7.3,
            //         "numVotes": 8309,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt14269590",
            //         "url": "https://www.imdb.com/title/tt14269590/",
            //         "primaryTitle": "Poker Face",
            //         "originalTitle": "Poker Face",
            //         "type": "tvSeries",
            //         "description": "Charlie has an extraordinary ability to determine when someone is lying. She hits the road with her Plymouth Barracuda and with every stop encounters a new cast of characters and strange crimes she can't help but investigate and solve.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BZmEwZWEyMTktMmVmMy00YjE4LWEzNWEtMjc2Zjk5NWM3MjkxXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZmEwZWEyMTktMmVmMy00YjE4LWEzNWEtMjc2Zjk5NWM3MjkxXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZmEwZWEyMTktMmVmMy00YjE4LWEzNWEtMjc2Zjk5NWM3MjkxXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=4x2NzusLAqk",
            //         "contentRating": "TV-MA",
            //         "startYear": 2023,
            //         "endYear": null,
            //         "releaseDate": "2023-01-26",
            //         "interests": [
            //             "Bumbling Detective",
            //             "Whodunnit",
            //             "Comedy",
            //             "Crime",
            //             "Drama",
            //             "Mystery"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Newburgh, New York, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0804072",
            //                 "name": "Animal Pictures"
            //             },
            //             {
            //                 "id": "co0784951",
            //                 "name": "MRC Television"
            //             },
            //             {
            //                 "id": "co0762940",
            //                 "name": "T-Street"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Comedy",
            //             "Crime",
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 7.8,
            //         "numVotes": 58261,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt7587890",
            //         "url": "https://www.imdb.com/title/tt7587890/",
            //         "primaryTitle": "The Rookie",
            //         "originalTitle": "The Rookie",
            //         "type": "tvSeries",
            //         "description": "Starting over isn't easy, especially for John Nolan who, after a life-altering incident, is pursuing his dream of joining the LAPD. As their oldest rookie, he's met with skepticism from those who see him as just a walking midlife crisis.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMzc2MDdkZDUtZjZlYy00MGMyLWJkNzUtMTMxY2FkZjZjYmEyXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMzc2MDdkZDUtZjZlYy00MGMyLWJkNzUtMTMxY2FkZjZjYmEyXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMzc2MDdkZDUtZjZlYy00MGMyLWJkNzUtMTMxY2FkZjZjYmEyXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=8BPlx6eK1vc",
            //         "contentRating": "TV-14",
            //         "startYear": 2018,
            //         "endYear": null,
            //         "releaseDate": "2018-10-16",
            //         "interests": [
            //             "Cop Drama",
            //             "Police Procedural",
            //             "Action",
            //             "Crime",
            //             "Drama"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://abc.com/shows/the-rookie",
            //             "https://www.facebook.com/TheRookieABC/"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Los Angeles Department of Water and Power -111 N Hope St Los Angeles, California, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0332906",
            //                 "name": "eOne Television"
            //             },
            //             {
            //                 "id": "co0718322",
            //                 "name": "Perfectmon Pictures"
            //             },
            //             {
            //                 "id": "co0209226",
            //                 "name": "ABC Signature"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Action",
            //             "Crime",
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8,
            //         "numVotes": 100874,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt2861424",
            //         "url": "https://www.imdb.com/title/tt2861424/",
            //         "primaryTitle": "Rick and Morty",
            //         "originalTitle": "Rick and Morty",
            //         "type": "tvSeries",
            //         "description": "The fractured domestic lives of a nihilistic mad scientist and his anxious grandson are further complicated by their inter-dimensional misadventures.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BZGQyZjk2MzMtMTcyNC00NGU3LTlmNjItNDExMWM4ZDFhYmQ2XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZGQyZjk2MzMtMTcyNC00NGU3LTlmNjItNDExMWM4ZDFhYmQ2XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZGQyZjk2MzMtMTcyNC00NGU3LTlmNjItNDExMWM4ZDFhYmQ2XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=WNhH00OIPP0",
            //         "contentRating": "TV-MA",
            //         "startYear": 2013,
            //         "endYear": null,
            //         "releaseDate": "2013-12-02",
            //         "interests": [
            //             "Adult Animation",
            //             "Dark Comedy",
            //             "Farce",
            //             "Parody",
            //             "Satire",
            //             "Sitcom",
            //             "Time Travel",
            //             "Adventure",
            //             "Animation",
            //             "Comedy"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.hulu.com/series/rick-and-morty-d76d6361-3fbf-4842-8dd7-e05520557280",
            //             "https://www.facebook.com/RickandMorty"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "New York City, New York, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0008281",
            //                 "name": "Williams Street"
            //             },
            //             {
            //                 "id": "co0295464",
            //                 "name": "Harmonius Claptrap"
            //             },
            //             {
            //                 "id": "co0380976",
            //                 "name": "Starburns Industries"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Adventure",
            //             "Animation",
            //             "Comedy"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 9.1,
            //         "numVotes": 654183,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt33049767",
            //         "url": "https://www.imdb.com/title/tt33049767/",
            //         "primaryTitle": "Adults",
            //         "originalTitle": "Adults",
            //         "type": "tvSeries",
            //         "description": "A twenty-something ensemble comedy centering on codependent housemates navigating adulthood together despite their flaws.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BNzhiMDdmZWMtOGEzMC00NjBjLWE2Y2YtMDJjOTNkOTk4YWEwXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNzhiMDdmZWMtOGEzMC00NjBjLWE2Y2YtMDJjOTNkOTk4YWEwXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNzhiMDdmZWMtOGEzMC00NjBjLWE2Y2YtMDJjOTNkOTk4YWEwXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": "TV-MA",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-05-28",
            //         "interests": [
            //             "Comedy"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Toronto, Ontario, Canada"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co1124033",
            //                 "name": "Cosmic Kid"
            //             },
            //             {
            //                 "id": "co0060381",
            //                 "name": "FX Network"
            //             },
            //             {
            //                 "id": "co0216537",
            //                 "name": "FX Productions"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Comedy"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 7.4,
            //         "numVotes": 3140,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt0903747",
            //         "url": "https://www.imdb.com/title/tt0903747/",
            //         "primaryTitle": "Breaking Bad",
            //         "originalTitle": "Breaking Bad",
            //         "type": "tvSeries",
            //         "description": "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student to secure his family's future.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=XZ8daibM3AE",
            //         "contentRating": "TV-MA",
            //         "startYear": 2008,
            //         "endYear": 2013,
            //         "releaseDate": "2008-01-20",
            //         "interests": [
            //             "Dark Comedy",
            //             "Drug Crime",
            //             "Epic",
            //             "Psychological Drama",
            //             "Psychological Thriller",
            //             "Tragedy",
            //             "Crime",
            //             "Drama",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.facebook.com/BreakingBad",
            //             "https://www.instagram.com/breakingbad/"
            //         ],
            //         "spokenLanguages": [
            //             "en",
            //             "es"
            //         ],
            //         "filmingLocations": [
            //             "3828 Piermont Dr NE, Albuquerque, New Mexico, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0212797",
            //                 "name": "High Bridge Productions"
            //             },
            //             {
            //                 "id": "co0071947",
            //                 "name": "Gran Via Productions"
            //             },
            //             {
            //                 "id": "co0086397",
            //                 "name": "Sony Pictures Television"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Crime",
            //             "Drama",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 9.5,
            //         "numVotes": 2343884,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt29650530",
            //         "url": "https://www.imdb.com/title/tt29650530/",
            //         "primaryTitle": "Mercy for None",
            //         "originalTitle": "Gwang-jang",
            //         "type": "tvSeries",
            //         "description": "After severing ties with his gang, a former gangster returns to uncover the truth behind his brother's death, embarking on a relentless path of revenge.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMmY5MzdmYjEtY2RhMS00ZGNkLTliOGEtY2M4NTBmZmU5NDc1XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMmY5MzdmYjEtY2RhMS00ZGNkLTliOGEtY2M4NTBmZmU5NDc1XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMmY5MzdmYjEtY2RhMS00ZGNkLTliOGEtY2M4NTBmZmU5NDc1XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": null,
            //         "startYear": 2025,
            //         "endYear": 2025,
            //         "releaseDate": "2025-06-06",
            //         "interests": [
            //             "Action",
            //             "Crime",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "KR"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "ko"
            //         ],
            //         "filmingLocations": [
            //             "Seoul, South Korea"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0774982",
            //                 "name": "Studio N"
            //             },
            //             {
            //                 "id": "co0484128",
            //                 "name": "Yong Film"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Action",
            //             "Crime",
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 7.7,
            //         "numVotes": 2283,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt11280740",
            //         "url": "https://www.imdb.com/title/tt11280740/",
            //         "primaryTitle": "Severance",
            //         "originalTitle": "Severance",
            //         "type": "tvSeries",
            //         "description": "Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives. When a mysterious colleague appears outside of work, it begins a journey to discover the truth about their jobs.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BZDI5YzJhODQtMzQyNy00YWNmLWIxMjUtNDBjNjA5YWRjMzExXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZDI5YzJhODQtMzQyNy00YWNmLWIxMjUtNDBjNjA5YWRjMzExXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZDI5YzJhODQtMzQyNy00YWNmLWIxMjUtNDBjNjA5YWRjMzExXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=xEQP4VVuyrY",
            //         "contentRating": "TV-MA",
            //         "startYear": 2022,
            //         "endYear": null,
            //         "releaseDate": "2022-02-18",
            //         "interests": [
            //             "Conspiracy Thriller",
            //             "Dystopian Sci-Fi",
            //             "Psychological Drama",
            //             "Psychological Thriller",
            //             "Workplace Drama",
            //             "Drama",
            //             "Mystery",
            //             "Sci-Fi",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Bell Laboratories - 101 Crawfords Corner Road, Holmdel Township, New Jersey, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0580964",
            //                 "name": "Fifth Season"
            //             },
            //             {
            //                 "id": "co0039303",
            //                 "name": "Red Hour Films"
            //             },
            //             {
            //                 "id": "co0077074",
            //                 "name": "Westward Productions"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Drama",
            //             "Mystery",
            //             "Sci-Fi"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.7,
            //         "numVotes": 323402,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt0452046",
            //         "url": "https://www.imdb.com/title/tt0452046/",
            //         "primaryTitle": "Criminal Minds",
            //         "originalTitle": "Criminal Minds",
            //         "type": "tvSeries",
            //         "description": "A group of criminal profilers who work for the FBI as members of its Behavioral Analysis Unit (BAU) using behavioral analysis and profiling to help investigate crimes and find the suspect known as the unsub.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BZmEyNTAyZDEtMTlhNS00ZTJjLWI1OWEtNWMzNzFhMWNjMDY2XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZmEyNTAyZDEtMTlhNS00ZTJjLWI1OWEtNWMzNzFhMWNjMDY2XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZmEyNTAyZDEtMTlhNS00ZTJjLWI1OWEtNWMzNzFhMWNjMDY2XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=NTYxiJBbEZk",
            //         "contentRating": "TV-14",
            //         "startYear": 2005,
            //         "endYear": null,
            //         "releaseDate": "2005-09-22",
            //         "interests": [
            //             "Cop Drama",
            //             "Police Procedural",
            //             "Psychological Drama",
            //             "Psychological Thriller",
            //             "Serial Killer",
            //             "Suspense Mystery",
            //             "Crime",
            //             "Drama",
            //             "Mystery",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://criminalminds.store/",
            //             "https://www.facebook.com/people/Criminal-Minds-Fan-Club/100080331393385/"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Vancouver, British Columbia, Canada"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0067205",
            //                 "name": "Touchstone Television"
            //             },
            //             {
            //                 "id": "co0066107",
            //                 "name": "Paramount Network Television"
            //             },
            //             {
            //                 "id": "co0085751",
            //                 "name": "The Mark Gordon Company"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Crime",
            //             "Drama",
            //             "Mystery"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.1,
            //         "numVotes": 231470,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt4236770",
            //         "url": "https://www.imdb.com/title/tt4236770/",
            //         "primaryTitle": "Yellowstone",
            //         "originalTitle": "Yellowstone",
            //         "type": "tvSeries",
            //         "description": "A ranching family in Montana faces off against others encroaching on their land.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BYzE2ODQ0NmQtYmMxMS00MGRlLTgwOGEtYjRkN2FkYmZlN2JlXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYzE2ODQ0NmQtYmMxMS00MGRlLTgwOGEtYjRkN2FkYmZlN2JlXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYzE2ODQ0NmQtYmMxMS00MGRlLTgwOGEtYjRkN2FkYmZlN2JlXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=suobrMPBLlo",
            //         "contentRating": "TV-MA",
            //         "startYear": 2018,
            //         "endYear": 2024,
            //         "releaseDate": "2018-06-20",
            //         "interests": [
            //             "Contemporary Western",
            //             "Epic",
            //             "Western Epic",
            //             "Drama",
            //             "Western"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.facebook.com/yellowstoneparamount/",
            //             "https://www.instagram.com/yellowstone/"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Chief Joseph Ranch, 125 Appaloosa Trail, Darby, Montana, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0632516",
            //                 "name": "Paramount Network"
            //             },
            //             {
            //                 "id": "co0703551",
            //                 "name": "101 Studios"
            //             },
            //             {
            //                 "id": "co0292355",
            //                 "name": "Linson Entertainment"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Drama",
            //             "Western"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.6,
            //         "numVotes": 278259,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt8760932",
            //         "url": "https://www.imdb.com/title/tt8760932/",
            //         "primaryTitle": "Nine Perfect Strangers",
            //         "originalTitle": "Nine Perfect Strangers",
            //         "type": "tvSeries",
            //         "description": "Nine stressed city dwellers visit a boutique health-and-wellness resort that promises healing and transformation. The resort's director is a woman on a mission to reinvigorate their tired minds and bodies.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BOTNhMjdiZDEtNTIyMy00NTNkLThlNzktYzM5OWUxOWI5N2Q4XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BOTNhMjdiZDEtNTIyMy00NTNkLThlNzktYzM5OWUxOWI5N2Q4XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BOTNhMjdiZDEtNTIyMy00NTNkLThlNzktYzM5OWUxOWI5N2Q4XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": "TV-MA",
            //         "startYear": 2021,
            //         "endYear": null,
            //         "releaseDate": "2021-08-18",
            //         "interests": [
            //             "Psychological Drama",
            //             "Psychological Thriller",
            //             "Suspense Mystery",
            //             "Drama",
            //             "Mystery",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Ballina, New South Wales, Australia"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0176238",
            //                 "name": "Blossom Films"
            //             },
            //             {
            //                 "id": "co0580964",
            //                 "name": "Fifth Season"
            //             },
            //             {
            //                 "id": "co0634932",
            //                 "name": "Made Up Stories"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Drama",
            //             "Mystery",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 6.9,
            //         "numVotes": 66998,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt8690918",
            //         "url": "https://www.imdb.com/title/tt8690918/",
            //         "primaryTitle": "Resident Alien",
            //         "originalTitle": "Resident Alien",
            //         "type": "tvSeries",
            //         "description": "A crash-landed alien takes on the identity of a small-town Colorado doctor and slowly begins to wrestle with the moral dilemma of his secret mission on Earth.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BYzczMDI5NzQtODdmYS00NTcwLTg1MTYtNmU5NWY1NDA5ZGRkXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYzczMDI5NzQtODdmYS00NTcwLTg1MTYtNmU5NWY1NDA5ZGRkXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYzczMDI5NzQtODdmYS00NTcwLTg1MTYtNmU5NWY1NDA5ZGRkXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=S24017GbcSA",
            //         "contentRating": "TV-14",
            //         "startYear": 2021,
            //         "endYear": null,
            //         "releaseDate": "2021-01-27",
            //         "interests": [
            //             "Comedy",
            //             "Drama",
            //             "Mystery",
            //             "Sci-Fi"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.instagram.com/residentalien/",
            //             "https://www.syfy.com/residentalien"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Ladysmith, British Columbia, Canada"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0282285",
            //                 "name": "Syfy"
            //             },
            //             {
            //                 "id": "co0916367",
            //                 "name": "Jocko Productions"
            //             },
            //             {
            //                 "id": "co0065354",
            //                 "name": "Amblin Television"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Comedy",
            //             "Drama",
            //             "Mystery"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.1,
            //         "numVotes": 75892,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt30826447",
            //         "url": "https://www.imdb.com/title/tt30826447/",
            //         "primaryTitle": "The Four Seasons",
            //         "originalTitle": "The Four Seasons",
            //         "type": "tvSeries",
            //         "description": "Three suburban couples vacation together each season, but tensions arise when one couple splits up and the husband brings a much younger woman on subsequent trips.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BYjljNDUyMDAtOTg5Mi00Njc4LWFhNTgtOGU0NThmMzE0N2JjXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYjljNDUyMDAtOTg5Mi00Njc4LWFhNTgtOGU0NThmMzE0N2JjXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYjljNDUyMDAtOTg5Mi00Njc4LWFhNTgtOGU0NThmMzE0N2JjXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": "TV-MA",
            //         "startYear": 2025,
            //         "endYear": 2026,
            //         "releaseDate": "2025-05-01",
            //         "interests": [
            //             "Feel-Good Romance",
            //             "Romantic Comedy",
            //             "Comedy",
            //             "Romance"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Warwick, New York, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0639991",
            //                 "name": "Big Wig Productions"
            //             },
            //             {
            //                 "id": "co0925192",
            //                 "name": "Envision Casting"
            //             },
            //             {
            //                 "id": "co0199243",
            //                 "name": "Little Stranger"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Comedy",
            //             "Romance"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 7.2,
            //         "numVotes": 25155,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt13819960",
            //         "url": "https://www.imdb.com/title/tt13819960/",
            //         "primaryTitle": "And Just Like That...",
            //         "originalTitle": "And Just Like That...",
            //         "type": "tvSeries",
            //         "description": "The series follows Carrie, Miranda, and Charlotte as they navigate the journey from the complicated reality of life and friendship in their 30s to the even more complicated reality of life and friendship in their 50s.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BZWRjYzM3NDQtZTlhZi00MjFiLWJiODEtMDlhOWMwOTFkOTA4XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZWRjYzM3NDQtZTlhZi00MjFiLWJiODEtMDlhOWMwOTFkOTA4XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZWRjYzM3NDQtZTlhZi00MjFiLWJiODEtMDlhOWMwOTFkOTA4XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=4cIJBe17L4k",
            //         "contentRating": "TV-MA",
            //         "startYear": 2021,
            //         "endYear": null,
            //         "releaseDate": "2021-12-09",
            //         "interests": [
            //             "Feel-Good Romance",
            //             "Raunchy Comedy",
            //             "Comedy",
            //             "Drama",
            //             "Romance"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.sky.com/watch/and-just-like-that"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "New York City, New York, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0284741",
            //                 "name": "HBO Entertainment"
            //             },
            //             {
            //                 "id": "co0008693",
            //                 "name": "Home Box Office (HBO)"
            //             },
            //             {
            //                 "id": "co0368300",
            //                 "name": "Michael Patrick King Productions"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Comedy",
            //             "Drama",
            //             "Romance"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 5.7,
            //         "numVotes": 41855,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt12160826",
            //         "url": "https://www.imdb.com/title/tt12160826/",
            //         "primaryTitle": "Duster",
            //         "originalTitle": "Duster",
            //         "type": "tvSeries",
            //         "description": "Set in the 1970's Southwest, the life of a gutsy getaway driver for a growing crime syndicate goes from awful to wildly, stupidly, dangerously awful.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BYWI3NDVjODctYTM2MS00YzZhLWJjOTItN2JmYTY5ODdkYTY4XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYWI3NDVjODctYTM2MS00YzZhLWJjOTItN2JmYTY5ODdkYTY4XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYWI3NDVjODctYTM2MS00YzZhLWJjOTItN2JmYTY5ODdkYTY4XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": "TV-MA",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-05-15",
            //         "interests": [
            //             "Crime",
            //             "Drama",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Belen, New Mexico, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0021593",
            //                 "name": "Bad Robot"
            //             },
            //             {
            //                 "id": "co0818718",
            //                 "name": "TinkerToy Productions"
            //             },
            //             {
            //                 "id": "co0005035",
            //                 "name": "Warner Bros. Television"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Crime",
            //             "Drama",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 7.1,
            //         "numVotes": 2505,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt31938062",
            //         "url": "https://www.imdb.com/title/tt31938062/",
            //         "primaryTitle": "The Pitt",
            //         "originalTitle": "The Pitt",
            //         "type": "tvSeries",
            //         "description": "The daily lives of healthcare professionals in a Pittsburgh hospital as they juggle personal crises, workplace politics, and the emotional toll of treating critically ill patients, revealing the resilience required in their noble calling.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTU3MDliMGEtMDQxNi00OTk1LTg1NWMtZDM2NmEwZDA1ZDk2XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMTU3MDliMGEtMDQxNi00OTk1LTg1NWMtZDM2NmEwZDA1ZDk2XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMTU3MDliMGEtMDQxNi00OTk1LTg1NWMtZDM2NmEwZDA1ZDk2XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=ufR_08V38sQ",
            //         "contentRating": "TV-MA",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-01-09",
            //         "interests": [
            //             "Medical Drama",
            //             "Drama"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Pittsburgh, Pennsylvania, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0037310",
            //                 "name": "John Wells Productions"
            //             },
            //             {
            //                 "id": "co0095413",
            //                 "name": "Max"
            //             },
            //             {
            //                 "id": "co0609396",
            //                 "name": "R. Scott Gemmill Productions"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.9,
            //         "numVotes": 52300,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt7335184",
            //         "url": "https://www.imdb.com/title/tt7335184/",
            //         "primaryTitle": "You",
            //         "originalTitle": "You",
            //         "type": "tvSeries",
            //         "description": "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTVlYmRhMWQtNmE0Yi00ODM1LWEzMWEtNTQzZGZhODRmZTE0XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMTVlYmRhMWQtNmE0Yi00ODM1LWEzMWEtNTQzZGZhODRmZTE0XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMTVlYmRhMWQtNmE0Yi00ODM1LWEzMWEtNTQzZGZhODRmZTE0XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=7ZtRnIwv_FY",
            //         "contentRating": "TV-MA",
            //         "startYear": 2018,
            //         "endYear": 2025,
            //         "releaseDate": "2018-09-09",
            //         "interests": [
            //             "Dark Romance",
            //             "Psychological Drama",
            //             "Psychological Thriller",
            //             "Crime",
            //             "Drama",
            //             "Romance",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.netflix.com/title/80211991",
            //             "https://www.mylifetime.com/shows/you"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Logos Bookstore - 1575 York Avenue, Yorkville, Upper East Side, New York City, New York, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0330789",
            //                 "name": "Berlanti Productions"
            //             },
            //             {
            //                 "id": "co0741884",
            //                 "name": "Man Sewing Dinosaur"
            //             },
            //             {
            //                 "id": "co0142434",
            //                 "name": "Alloy Entertainment"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Crime",
            //             "Drama",
            //             "Romance"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 7.6,
            //         "numVotes": 341716,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt31433814",
            //         "url": "https://www.imdb.com/title/tt31433814/",
            //         "primaryTitle": "Doctor Who",
            //         "originalTitle": "Doctor Who",
            //         "type": "tvSeries",
            //         "description": "The Time Lord known as the Doctor travels through space and time with his companions, having incredible adventures and facing dangerous enemies.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BN2I4N2I1MjgtNTE1NS00ODExLWEzMjEtZjgyZjU2MWNkYThkXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BN2I4N2I1MjgtNTE1NS00ODExLWEzMjEtZjgyZjU2MWNkYThkXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BN2I4N2I1MjgtNTE1NS00ODExLWEzMjEtZjgyZjU2MWNkYThkXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=QoyV65HoRFA",
            //         "contentRating": "TV-PG",
            //         "startYear": 2023,
            //         "endYear": null,
            //         "releaseDate": "2023-12-25",
            //         "interests": [
            //             "Space Sci-Fi",
            //             "Time Travel",
            //             "Adventure",
            //             "Drama",
            //             "Sci-Fi"
            //         ],
            //         "countriesOfOrigin": [
            //             "GB"
            //         ],
            //         "externalLinks": [
            //             "https://www.bbc.co.uk/programmes/b006q2x0",
            //             "https://www.facebook.com/DoctorWho"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0618997",
            //                 "name": "Bad Wolf"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Adventure",
            //             "Drama",
            //             "Sci-Fi"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 6.2,
            //         "numVotes": 24098,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt0141842",
            //         "url": "https://www.imdb.com/title/tt0141842/",
            //         "primaryTitle": "The Sopranos",
            //         "originalTitle": "The Sopranos",
            //         "type": "tvSeries",
            //         "description": "New Jersey mob boss Tony Soprano deals with personal and professional issues in his home and business life that affect his mental state, leading him to seek professional psychiatric counseling.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMjRmMTNiMTQtMDg1ZS00MGM1LWE1MGUtYjEzMGFjNWUzOWRkXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMjRmMTNiMTQtMDg1ZS00MGM1LWE1MGUtYjEzMGFjNWUzOWRkXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMjRmMTNiMTQtMDg1ZS00MGM1LWE1MGUtYjEzMGFjNWUzOWRkXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=Q8cBFvpqmH0",
            //         "contentRating": "TV-MA",
            //         "startYear": 1999,
            //         "endYear": 2007,
            //         "releaseDate": "1999-01-10",
            //         "interests": [
            //             "Epic",
            //             "Gangster",
            //             "Crime",
            //             "Drama"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.facebook.com/TheSopranos",
            //             "https://play.max.com/show/818c3d9d-1831-48a6-9583-0364a7f98453"
            //         ],
            //         "spokenLanguages": [
            //             "en",
            //             "it",
            //             "ru"
            //         ],
            //         "filmingLocations": [
            //             "Satin Dolls - 230 State Route 17 S., Lodi, New Jersey, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0008693",
            //                 "name": "Home Box Office (HBO)"
            //             },
            //             {
            //                 "id": "co0046803",
            //                 "name": "Brad Grey Television"
            //             },
            //             {
            //                 "id": "co0214340",
            //                 "name": "Brillstein Entertainment Partners"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Crime",
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 9.2,
            //         "numVotes": 528579,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt0773262",
            //         "url": "https://www.imdb.com/title/tt0773262/",
            //         "primaryTitle": "Dexter",
            //         "originalTitle": "Dexter",
            //         "type": "tvSeries",
            //         "description": "He's smart. He's lovable. He's Dexter Morgan, America's favorite serial killer, who spends his days solving crimes and his nights committing them.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTQ3YmQ4YzMtOTkyZC00YmM5LThhZjEtM2E0MjFkNTc0OGJhXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMTQ3YmQ4YzMtOTkyZC00YmM5LThhZjEtM2E0MjFkNTc0OGJhXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMTQ3YmQ4YzMtOTkyZC00YmM5LThhZjEtM2E0MjFkNTc0OGJhXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=YQeUmSD1c3g",
            //         "contentRating": "TV-MA",
            //         "startYear": 2006,
            //         "endYear": 2013,
            //         "releaseDate": "2006-10-01",
            //         "interests": [
            //             "Psychological Drama",
            //             "Psychological Thriller",
            //             "Serial Killer",
            //             "Suspense Mystery",
            //             "Crime",
            //             "Drama",
            //             "Mystery",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "http://www.facebook.com/dexter",
            //             "http://www.sho.com/dexter"
            //         ],
            //         "spokenLanguages": [
            //             "en",
            //             "es"
            //         ],
            //         "filmingLocations": [
            //             "1155 103rd St, Bay Harbor Islands, Florida, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0052980",
            //                 "name": "Showtime Networks"
            //             },
            //             {
            //                 "id": "co0177677",
            //                 "name": "John Goldwyn Productions"
            //             },
            //             {
            //                 "id": "co0176685",
            //                 "name": "The Colleton Company"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Crime",
            //             "Drama",
            //             "Mystery"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.6,
            //         "numVotes": 848998,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt5574490",
            //         "url": "https://www.imdb.com/title/tt5574490/",
            //         "primaryTitle": "Animal Kingdom",
            //         "originalTitle": "Animal Kingdom",
            //         "type": "tvSeries",
            //         "description": "Centers on a Southern California family, whose excessive lifestyle is fueled by their criminal activities.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BNjFjOGU5NTUtZTYwNy00NDhmLTk2NjgtOTc2MTUwMTgzNTY3XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNjFjOGU5NTUtZTYwNy00NDhmLTk2NjgtOTc2MTUwMTgzNTY3XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNjFjOGU5NTUtZTYwNy00NDhmLTk2NjgtOTc2MTUwMTgzNTY3XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=gTZwd0f92YE",
            //         "contentRating": "TV-MA",
            //         "startYear": 2016,
            //         "endYear": 2022,
            //         "releaseDate": "2016-06-14",
            //         "interests": [
            //             "Crime",
            //             "Drama"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.facebook.com/AnimalKingdomTNT/"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Oceanside, California, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0037310",
            //                 "name": "John Wells Productions"
            //             },
            //             {
            //                 "id": "co0183230",
            //                 "name": "Warner Horizon Television"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Crime",
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.2,
            //         "numVotes": 46809,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt1520211",
            //         "url": "https://www.imdb.com/title/tt1520211/",
            //         "primaryTitle": "The Walking Dead",
            //         "originalTitle": "The Walking Dead",
            //         "type": "tvSeries",
            //         "description": "Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins and must lead a group of survivors to stay alive.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BYWQwMGRhNGEtZTNhMy00MzVjLWJhMjItYjcwMDljMTkyNTg2XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYWQwMGRhNGEtZTNhMy00MzVjLWJhMjItYjcwMDljMTkyNTg2XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYWQwMGRhNGEtZTNhMy00MzVjLWJhMjItYjcwMDljMTkyNTg2XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": "TV-MA",
            //         "startYear": 2010,
            //         "endYear": 2022,
            //         "releaseDate": "2010-10-31",
            //         "interests": [
            //             "Zombie Horror",
            //             "Drama",
            //             "Horror",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.facebook.com/TheWalkingDeadAMC",
            //             "https://www.instagram.com/amcthewalkingdead/"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Senoia, Georgia, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0019701",
            //                 "name": "American Movie Classics (AMC)"
            //             },
            //             {
            //                 "id": "co0090153",
            //                 "name": "Circle Management + Production"
            //             },
            //             {
            //                 "id": "co0092570",
            //                 "name": "Valhalla Motion Pictures"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": 151441,
            //         "genres": [
            //             "Drama",
            //             "Horror",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.1,
            //         "numVotes": 1146056,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt11815682",
            //         "url": "https://www.imdb.com/title/tt11815682/",
            //         "primaryTitle": "Hacks",
            //         "originalTitle": "Hacks",
            //         "type": "tvSeries",
            //         "description": "Explores a dark mentorship that forms between Deborah Vance, a legendary Las Vegas comedian, and an entitled, outcast 25-year-old.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMGI5NTE0ODMtOTdlYS00MjY1LWE0ZWUtZTg2M2FmZmUwZGMwXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMGI5NTE0ODMtOTdlYS00MjY1LWE0ZWUtZTg2M2FmZmUwZGMwXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMGI5NTE0ODMtOTdlYS00MjY1LWE0ZWUtZTg2M2FmZmUwZGMwXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=pJcfoJCCJ50",
            //         "contentRating": "TV-MA",
            //         "startYear": 2021,
            //         "endYear": null,
            //         "releaseDate": "2021-05-13",
            //         "interests": [
            //             "High-Concept Comedy",
            //             "Showbiz Drama",
            //             "Sitcom",
            //             "Workplace Drama",
            //             "Comedy",
            //             "Drama"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Las Vegas, Nevada, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0070636",
            //                 "name": "3 Arts Entertainment"
            //             },
            //             {
            //                 "id": "co0847555",
            //                 "name": "First Thought Productions"
            //             },
            //             {
            //                 "id": "co0447669",
            //                 "name": "Fremulon"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Comedy",
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.2,
            //         "numVotes": 54536,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt10541088",
            //         "url": "https://www.imdb.com/title/tt10541088/",
            //         "primaryTitle": "Clarkson's Farm",
            //         "originalTitle": "Clarkson's Farm",
            //         "type": "tvSeries",
            //         "description": "Follow Jeremy Clarkson as he attempts to run a farm in the countryside.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BYmIzMmQ1ZmMtYmNiNS00Nzc4LTljYmMtNjJjYTBjNTdiMGFjXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYmIzMmQ1ZmMtYmNiNS00Nzc4LTljYmMtNjJjYTBjNTdiMGFjXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYmIzMmQ1ZmMtYmNiNS00Nzc4LTljYmMtNjJjYTBjNTdiMGFjXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=pW-iVG0_D34",
            //         "contentRating": "TV-PG",
            //         "startYear": 2021,
            //         "endYear": null,
            //         "releaseDate": "2021-06-10",
            //         "interests": [
            //             "Docuseries",
            //             "Comedy",
            //             "Documentary",
            //             "Reality TV"
            //         ],
            //         "countriesOfOrigin": [
            //             "GB"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0865394",
            //                 "name": "Con Dao Productions"
            //             },
            //             {
            //                 "id": "co0730788",
            //                 "name": "Expectation"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Comedy",
            //             "Documentary",
            //             "Reality-TV"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 9,
            //         "numVotes": 74442,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt23649128",
            //         "url": "https://www.imdb.com/title/tt23649128/",
            //         "primaryTitle": "The Studio",
            //         "originalTitle": "The Studio",
            //         "type": "tvSeries",
            //         "description": "Follows a legacy Hollywood movie studio striving to survive in a world where it is increasingly difficult for art and business to live together.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMDQxMWI5OTMtNGRkMC00NTVlLWI5ZjAtZmFiMjMwM2M0N2E0XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMDQxMWI5OTMtNGRkMC00NTVlLWI5ZjAtZmFiMjMwM2M0N2E0XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMDQxMWI5OTMtNGRkMC00NTVlLWI5ZjAtZmFiMjMwM2M0N2E0XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=EIQuE7JGXU8",
            //         "contentRating": "TV-MA",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-03-26",
            //         "interests": [
            //             "Comedy",
            //             "Drama"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Warner Bros. Television - Bldg. 140 - 4000 Warner Boulevard, Burbank, California, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0026995",
            //                 "name": "Lionsgate Television"
            //             },
            //             {
            //                 "id": "co0006881",
            //                 "name": "Lionsgate"
            //             },
            //             {
            //                 "id": "co1104726",
            //                 "name": "Perfectly Pleasant Productions"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Comedy",
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.1,
            //         "numVotes": 25431,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt0436992",
            //         "url": "https://www.imdb.com/title/tt0436992/",
            //         "primaryTitle": "Doctor Who",
            //         "originalTitle": "Doctor Who",
            //         "type": "tvSeries",
            //         "description": "The further adventures in time and space of the alien adventurer known as the Doctor and his companions from planet Earth.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BZGVmY2RkZjAtZDAwMC00MmZhLThhMGItZmVlNzE4MTgyMWRkXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZGVmY2RkZjAtZDAwMC00MmZhLThhMGItZmVlNzE4MTgyMWRkXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZGVmY2RkZjAtZDAwMC00MmZhLThhMGItZmVlNzE4MTgyMWRkXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=RYIu7Qlqh4M",
            //         "contentRating": "TV-PG",
            //         "startYear": 2005,
            //         "endYear": 2022,
            //         "releaseDate": "2006-03-17",
            //         "interests": [
            //             "Sci-Fi Epic",
            //             "Space Sci-Fi",
            //             "Time Travel",
            //             "Adventure",
            //             "Drama",
            //             "Sci-Fi"
            //         ],
            //         "countriesOfOrigin": [
            //             "GB"
            //         ],
            //         "externalLinks": [
            //             "https://www.bbc.co.uk/doctorwho",
            //             "http://www.bbc.co.uk/programmes/b006q2x0"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Cardiff, Wales, UK"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0592426",
            //                 "name": "BBC Studios"
            //             },
            //             {
            //                 "id": "co0103752",
            //                 "name": "BBC Wales"
            //             },
            //             {
            //                 "id": "co0618997",
            //                 "name": "Bad Wolf"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": 76205,
            //         "genres": [
            //             "Adventure",
            //             "Drama",
            //             "Sci-Fi"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.5,
            //         "numVotes": 257986,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt0413573",
            //         "url": "https://www.imdb.com/title/tt0413573/",
            //         "primaryTitle": "Grey's Anatomy",
            //         "originalTitle": "Grey's Anatomy",
            //         "type": "tvSeries",
            //         "description": "A drama centered on the personal and professional lives of five surgical interns and their supervisors.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BYTVjNWVhYTctMGJkMS00NWFjLWE2N2QtNmQ1Y2FhZDFkNzUwXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYTVjNWVhYTctMGJkMS00NWFjLWE2N2QtNmQ1Y2FhZDFkNzUwXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYTVjNWVhYTctMGJkMS00NWFjLWE2N2QtNmQ1Y2FhZDFkNzUwXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": "TV-14",
            //         "startYear": 2005,
            //         "endYear": null,
            //         "releaseDate": "2005-03-27",
            //         "interests": [
            //             "Feel-Good Romance",
            //             "Medical Drama",
            //             "Soap Opera",
            //             "Drama",
            //             "Romance"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "http://abc.go.com/shows/greys-anatomy",
            //             "https://www.channel5.com/show/grey-s-anatomy"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Veterans Hospital - 1611 Plummer Street, North Hills, Los Angeles, California, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0170849",
            //                 "name": "Shondaland"
            //             },
            //             {
            //                 "id": "co0085751",
            //                 "name": "The Mark Gordon Company"
            //             },
            //             {
            //                 "id": "co0852654",
            //                 "name": "ABC Studios"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Drama",
            //             "Romance"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 7.6,
            //         "numVotes": 360865,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt23488694",
            //         "url": "https://www.imdb.com/title/tt23488694/",
            //         "primaryTitle": "Overcompensating",
            //         "originalTitle": "Overcompensating",
            //         "type": "tvSeries",
            //         "description": "Follows Benny, a football player, as he struggles to accept his sexuality in college, finding himself overcompensating as he tries to appear as something he's not.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMzdjMWMxNDEtODQwYi00ZTdmLTk5NDQtYjBlZjgyY2I4NTM5XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMzdjMWMxNDEtODQwYi00ZTdmLTk5NDQtYjBlZjgyY2I4NTM5XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMzdjMWMxNDEtODQwYi00ZTdmLTk5NDQtYjBlZjgyY2I4NTM5XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": null,
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-05-15",
            //         "interests": [
            //             "Raunchy Comedy",
            //             "Teen Comedy",
            //             "Comedy"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Toronto, Ontario, Canada"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0390816",
            //                 "name": "A24"
            //             },
            //             {
            //                 "id": "co1025982",
            //                 "name": "Amazon MGM Studios"
            //             },
            //             {
            //                 "id": "co1117895",
            //                 "name": "Benny Drama"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Comedy"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 7.8,
            //         "numVotes": 8333,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt2560140",
            //         "url": "https://www.imdb.com/title/tt2560140/",
            //         "primaryTitle": "Attack on Titan",
            //         "originalTitle": "Shingeki no Kyojin",
            //         "type": "tvSeries",
            //         "description": "After his hometown is destroyed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BZjliODY5MzQtMmViZC00MTZmLWFhMWMtMjMwM2I3OGY1MTRiXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZjliODY5MzQtMmViZC00MTZmLWFhMWMtMjMwM2I3OGY1MTRiXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZjliODY5MzQtMmViZC00MTZmLWFhMWMtMjMwM2I3OGY1MTRiXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=luYOt2-c2TI",
            //         "contentRating": "TV-MA",
            //         "startYear": 2013,
            //         "endYear": 2023,
            //         "releaseDate": "2013-09-28",
            //         "interests": [
            //             "Action Epic",
            //             "Adult Animation",
            //             "Anime",
            //             "Body Horror",
            //             "Monster Horror",
            //             "Shōnen",
            //             "Survival",
            //             "Tragedy",
            //             "Action",
            //             "Adventure"
            //         ],
            //         "countriesOfOrigin": [
            //             "JP"
            //         ],
            //         "externalLinks": [
            //             "http://www.funimation.com/shows/attack-on-titan",
            //             "http://www.shingeki.tv/"
            //         ],
            //         "spokenLanguages": [
            //             "ja",
            //             "en"
            //         ],
            //         "filmingLocations": [],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0403036",
            //                 "name": "Wit Studio"
            //             },
            //             {
            //                 "id": "co0002212",
            //                 "name": "Production I.G."
            //             },
            //             {
            //                 "id": "co0376600",
            //                 "name": "Mappa"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Action",
            //             "Adventure",
            //             "Animation"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 9.1,
            //         "numVotes": 617143,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt28243363",
            //         "url": "https://www.imdb.com/title/tt28243363/",
            //         "primaryTitle": "Sara: Woman in the Shadows",
            //         "originalTitle": "Sara: La donna nell'ombra",
            //         "type": "tvSeries",
            //         "description": "A retired intelligence operative haunted by her son's premature death returns to spycraft and allies to unravel the mystery. While navigating old ghosts and dangers, she must balance justice for her son with learning who he really was.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BODM3MjQ3ZTEtMzJlNy00OTU4LTkyNDctZjJkMzllMWUyYmJhXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BODM3MjQ3ZTEtMzJlNy00OTU4LTkyNDctZjJkMzllMWUyYmJhXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BODM3MjQ3ZTEtMzJlNy00OTU4LTkyNDctZjJkMzllMWUyYmJhXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": "TV-MA",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-06-03",
            //         "interests": [
            //             "Crime",
            //             "Drama"
            //         ],
            //         "countriesOfOrigin": [
            //             "IT"
            //         ],
            //         "externalLinks": [
            //             "https://www.netflix.com/title/81515638"
            //         ],
            //         "spokenLanguages": [
            //             "it"
            //         ],
            //         "filmingLocations": [
            //             "Rome, Lazio, Italy"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0108293",
            //                 "name": "Palomar"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Crime",
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 6.3,
            //         "numVotes": 766,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt2356777",
            //         "url": "https://www.imdb.com/title/tt2356777/",
            //         "primaryTitle": "True Detective",
            //         "originalTitle": "True Detective",
            //         "type": "tvSeries",
            //         "description": "Anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BYjgwYzA1NWMtNDYyZi00ZGQyLWI5NTktMDYwZjE2OTIwZWEwXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYjgwYzA1NWMtNDYyZi00ZGQyLWI5NTktMDYwZjE2OTIwZWEwXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYjgwYzA1NWMtNDYyZi00ZGQyLWI5NTktMDYwZjE2OTIwZWEwXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=fVQUcaO4AvE",
            //         "contentRating": "TV-MA",
            //         "startYear": 2014,
            //         "endYear": null,
            //         "releaseDate": "2014-01-12",
            //         "interests": [
            //             "Cop Drama",
            //             "Epic",
            //             "Hard-boiled Detective",
            //             "Police Procedural",
            //             "Psychological Drama",
            //             "Psychological Thriller",
            //             "Serial Killer",
            //             "Suspense Mystery",
            //             "Whodunnit",
            //             "Crime"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.facebook.com/TrueDetective",
            //             "https://instagram.com/truedetective/"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Arkansas, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0017525",
            //                 "name": "Anonymous Content"
            //             },
            //             {
            //                 "id": "co0284741",
            //                 "name": "HBO Entertainment"
            //             },
            //             {
            //                 "id": "co0176737",
            //                 "name": "Passenger"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Crime",
            //             "Drama",
            //             "Mystery"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.9,
            //         "numVotes": 706434,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt9561862",
            //         "url": "https://www.imdb.com/title/tt9561862/",
            //         "primaryTitle": "Love, Death & Robots",
            //         "originalTitle": "Love, Death & Robots",
            //         "type": "tvSeries",
            //         "description": "A collection of animated short stories that span various genres including science fiction, fantasy, horror and comedy.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BOTNkMmVkNzEtOGJlMi00YjlkLWFlMTQtYTRmZTllOGJhYWU4XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BOTNkMmVkNzEtOGJlMi00YjlkLWFlMTQtYTRmZTllOGJhYWU4XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BOTNkMmVkNzEtOGJlMi00YjlkLWFlMTQtYTRmZTllOGJhYWU4XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=wUFwunMKa4E",
            //         "contentRating": "TV-MA",
            //         "startYear": 2019,
            //         "endYear": null,
            //         "releaseDate": "2019-03-15",
            //         "interests": [
            //             "Adult Animation",
            //             "Computer Animation",
            //             "Satire",
            //             "Action",
            //             "Adventure",
            //             "Animation",
            //             "Comedy",
            //             "Drama",
            //             "Fantasy",
            //             "Horror"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.netflix.com/title/80174608"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0064973",
            //                 "name": "Blur Studio"
            //             },
            //             {
            //                 "id": "co0650527",
            //                 "name": "Netflix Studios"
            //             },
            //             {
            //                 "id": "co0144901",
            //                 "name": "Netflix"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Action",
            //             "Adventure",
            //             "Animation"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.4,
            //         "numVotes": 218710,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt0412142",
            //         "url": "https://www.imdb.com/title/tt0412142/",
            //         "primaryTitle": "House",
            //         "originalTitle": "House M.D.",
            //         "type": "tvSeries",
            //         "description": "Using a crack team of doctors and his wits, an antisocial maverick doctor specializing in diagnostic medicine does whatever it takes to solve puzzling cases that come his way.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMjgxYjAwNmMtYTAwZC00YmQxLWJlOTMtMWM0NGJmNDE0YmI2XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMjgxYjAwNmMtYTAwZC00YmQxLWJlOTMtMWM0NGJmNDE0YmI2XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMjgxYjAwNmMtYTAwZC00YmQxLWJlOTMtMWM0NGJmNDE0YmI2XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=MczMB8nU1sY",
            //         "contentRating": "TV-14",
            //         "startYear": 2004,
            //         "endYear": 2012,
            //         "releaseDate": "2004-11-16",
            //         "interests": [
            //             "Dark Comedy",
            //             "Medical Drama",
            //             "Drama",
            //             "Mystery"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "http://www.facebook.com/House",
            //             "https://twitter.com/HOUSEonFOX"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Princeton, New Jersey, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0022072",
            //                 "name": "Heel & Toe Films"
            //             },
            //             {
            //                 "id": "co0146945",
            //                 "name": "Shore Z Productions"
            //             },
            //             {
            //                 "id": "co0057712",
            //                 "name": "Bad Hat Harry Productions"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Drama",
            //             "Mystery"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.7,
            //         "numVotes": 561951,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt0852863",
            //         "url": "https://www.imdb.com/title/tt0852863/",
            //         "primaryTitle": "Phineas and Ferb",
            //         "originalTitle": "Phineas and Ferb",
            //         "type": "tvSeries",
            //         "description": "Phineas and Ferb invent, scheme, and stay one step ahead of their bratty sister. Meanwhile, their pet platypus plots against evil Dr. Doofenshmirtz.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTc1NjcxNzg4MF5BMl5BanBnXkFtZTgwOTMzNzgyMDE@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMTc1NjcxNzg4MF5BMl5BanBnXkFtZTgwOTMzNzgyMDE@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMTc1NjcxNzg4MF5BMl5BanBnXkFtZTgwOTMzNzgyMDE@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=th9hxCGH_ms",
            //         "contentRating": "TV-G",
            //         "startYear": 2007,
            //         "endYear": null,
            //         "releaseDate": "2007-08-17",
            //         "interests": [
            //             "Buddy Comedy",
            //             "Slapstick",
            //             "Action",
            //             "Adventure",
            //             "Animation",
            //             "Comedy",
            //             "Family",
            //             "Musical",
            //             "Sci-Fi",
            //             "Short"
            //         ],
            //         "countriesOfOrigin": [
            //             "US",
            //             "CN",
            //             "TW",
            //             "KR"
            //         ],
            //         "externalLinks": [
            //             "http://disneyxd.disney.com/phineas-and-ferb",
            //             "https://www.facebook.com/#!/PhineasandFerb"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0858960",
            //                 "name": "Disney Branded Television"
            //             },
            //             {
            //                 "id": "co0030830",
            //                 "name": "Disney Television Animation"
            //             },
            //             {
            //                 "id": "co0928755",
            //                 "name": "Dwampy Verse"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Action",
            //             "Adventure",
            //             "Animation"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.1,
            //         "numVotes": 62980,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt0460681",
            //         "url": "https://www.imdb.com/title/tt0460681/",
            //         "primaryTitle": "Supernatural",
            //         "originalTitle": "Supernatural",
            //         "type": "tvSeries",
            //         "description": "Two brothers follow their father's footsteps as hunters, fighting evil supernatural beings of many kinds, including monsters, demons, and gods that roam the earth.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMDFmMGZmMGItNGRjNC00NjVjLWI5ODEtNzhjMTE5MmJhN2FkXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMDFmMGZmMGItNGRjNC00NjVjLWI5ODEtNzhjMTE5MmJhN2FkXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMDFmMGZmMGItNGRjNC00NjVjLWI5ODEtNzhjMTE5MmJhN2FkXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=yy96yJjkvjo",
            //         "contentRating": "TV-14",
            //         "startYear": 2005,
            //         "endYear": 2020,
            //         "releaseDate": "2005-09-13",
            //         "interests": [
            //             "Dark Fantasy",
            //             "Monster Horror",
            //             "Supernatural Fantasy",
            //             "Supernatural Horror",
            //             "Drama",
            //             "Fantasy",
            //             "Horror",
            //             "Mystery",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://ew.com/tv/supernatural-stars-cover-ew-to-reflect-on-the-shows-undying-legacy/?fbclid=IwAR24q_IXimm-a3-G7kxnvUW0cAq7B8oipPsbR6RBIFI0t-lllTagLiAtsJ8",
            //             "https://www.facebook.com/Supernatural"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Buntzen Lake, Anmore, British Columbia, Canada"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0157257",
            //                 "name": "Kripke Enterprises"
            //             },
            //             {
            //                 "id": "co0005035",
            //                 "name": "Warner Bros. Television"
            //             },
            //             {
            //                 "id": "co0080859",
            //                 "name": "Wonderland Sound and Vision"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Drama",
            //             "Fantasy",
            //             "Horror"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.4,
            //         "numVotes": 513783,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt8634332",
            //         "url": "https://www.imdb.com/title/tt8634332/",
            //         "primaryTitle": "The Righteous Gemstones",
            //         "originalTitle": "The Righteous Gemstones",
            //         "type": "tvSeries",
            //         "description": "Follows a world-famous televangelist family with a long tradition of deviance, greed, and charitable work.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMjM3ZWQ1YWQtNGRiZi00ZDQ0LWJhMzgtNTNlMjFjYzU4NWQwXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMjM3ZWQ1YWQtNGRiZi00ZDQ0LWJhMzgtNTNlMjFjYzU4NWQwXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMjM3ZWQ1YWQtNGRiZi00ZDQ0LWJhMzgtNTNlMjFjYzU4NWQwXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=D2m9sP3VqB0",
            //         "contentRating": "TV-MA",
            //         "startYear": 2019,
            //         "endYear": 2025,
            //         "releaseDate": "2019-08-18",
            //         "interests": [
            //             "Dark Comedy",
            //             "Comedy",
            //             "Drama",
            //             "Financial Drama"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Charleston, South Carolina, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0008693",
            //                 "name": "Home Box Office (HBO)"
            //             },
            //             {
            //                 "id": "co0291982",
            //                 "name": "Rough House Pictures"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Comedy",
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.1,
            //         "numVotes": 58795,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt14186672",
            //         "url": "https://www.imdb.com/title/tt14186672/",
            //         "primaryTitle": "Landman",
            //         "originalTitle": "Landman",
            //         "type": "tvSeries",
            //         "description": "A modern-day tale of fortune seeking in the world of West Texas oil rigs.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BNTRkY2ZkNzUtMzBlNC00NTc0LWE0ZDQtMWZiNGU5OWEyZGU4XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNTRkY2ZkNzUtMzBlNC00NTc0LWE0ZDQtMWZiNGU5OWEyZGU4XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNTRkY2ZkNzUtMzBlNC00NTc0LWE0ZDQtMWZiNGU5OWEyZGU4XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=7zxh49-bsIk",
            //         "contentRating": "TV-MA",
            //         "startYear": 2024,
            //         "endYear": null,
            //         "releaseDate": "2024-11-17",
            //         "interests": [
            //             "Contemporary Western",
            //             "Drama"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.youtube.com/watch?v=LQ29mZ-0nWQ"
            //         ],
            //         "spokenLanguages": [
            //             "en",
            //             "es"
            //         ],
            //         "filmingLocations": [
            //             "Fort Worth, Texas, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0849655",
            //                 "name": "MTV Entertainment Studios"
            //             },
            //             {
            //                 "id": "co0703551",
            //                 "name": "101 Studios"
            //             },
            //             {
            //                 "id": "co0703552",
            //                 "name": "Bosque Ranch Productions"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.2,
            //         "numVotes": 57939,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt14452776",
            //         "url": "https://www.imdb.com/title/tt14452776/",
            //         "primaryTitle": "The Bear",
            //         "originalTitle": "The Bear",
            //         "type": "tvSeries",
            //         "description": "A young chef from the fine dining world returns to Chicago to run his family's sandwich shop.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BYWZhNDZiMzAtZmZlYS00MWFmLWE2MWEtNDAxZTZiN2U4Y2U2XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYWZhNDZiMzAtZmZlYS00MWFmLWE2MWEtNDAxZTZiN2U4Y2U2XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYWZhNDZiMzAtZmZlYS00MWFmLWE2MWEtNDAxZTZiN2U4Y2U2XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=WBlIUsFEnsw",
            //         "contentRating": "TV-MA",
            //         "startYear": 2022,
            //         "endYear": null,
            //         "releaseDate": "2022-06-23",
            //         "interests": [
            //             "Psychological Drama",
            //             "Workplace Drama",
            //             "Comedy",
            //             "Drama"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.instagram.com/thebearfx",
            //             "https://twitter.com/TheBearFX"
            //         ],
            //         "spokenLanguages": [
            //             "en",
            //             "es"
            //         ],
            //         "filmingLocations": [
            //             "666 North Orleans Street, Chicago, Illinois, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0216537",
            //                 "name": "FX Productions"
            //             },
            //             {
            //                 "id": "co0856237",
            //                 "name": "Super Frog"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Comedy",
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.5,
            //         "numVotes": 272085,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt33496221",
            //         "url": "https://www.imdb.com/title/tt33496221/",
            //         "primaryTitle": "Secrets We Keep",
            //         "originalTitle": "Reservatet",
            //         "type": "tvMiniSeries",
            //         "description": "When her neighbor's au pair goes missing, Cecilie is compelled to personally investigate but as she uncovers the truth, her perfect world falls apart.",
            //         "primaryImage": null,
            //         "thumbnails": [],
            //         "trailer": null,
            //         "contentRating": null,
            //         "startYear": 2025,
            //         "endYear": 2025,
            //         "releaseDate": "2025-05-15",
            //         "interests": [
            //             "Crime",
            //             "Drama",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "DK"
            //         ],
            //         "externalLinks": [
            //             "https://www.netflix.com/title/81697668"
            //         ],
            //         "spokenLanguages": [
            //             "da",
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Copenhagen, Denmark"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0876717",
            //                 "name": "Uma Film"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Crime",
            //             "Drama",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 7,
            //         "numVotes": 9363,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt0411008",
            //         "url": "https://www.imdb.com/title/tt0411008/",
            //         "primaryTitle": "Lost",
            //         "originalTitle": "Lost",
            //         "type": "tvSeries",
            //         "description": "The survivors of a plane crash are forced to work together in order to survive on a seemingly deserted tropical island.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BZmZhY2ViYzYtMTQ0NS00NDcyLWIxZTYtMGUyODE0NDA0NmNkXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZmZhY2ViYzYtMTQ0NS00NDcyLWIxZTYtMGUyODE0NDA0NmNkXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZmZhY2ViYzYtMTQ0NS00NDcyLWIxZTYtMGUyODE0NDA0NmNkXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=72kQIIDBIUU",
            //         "contentRating": "TV-14",
            //         "startYear": 2004,
            //         "endYear": 2010,
            //         "releaseDate": "2004-09-22",
            //         "interests": [
            //             "Adventure Epic",
            //             "Psychological Drama",
            //             "Survival",
            //             "Suspense Mystery",
            //             "Adventure",
            //             "Drama",
            //             "Fantasy",
            //             "Mystery",
            //             "Sci-Fi",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.hulu.com/series/lost-466b3994-b574-44f1-88bc-63707507a6cb",
            //             "https://www.facebook.com/LOST"
            //         ],
            //         "spokenLanguages": [
            //             "en",
            //             "pt",
            //             "es",
            //             "ar",
            //             "fr",
            //             "ko",
            //             "de",
            //             "la",
            //             "ru",
            //             "ja"
            //         ],
            //         "filmingLocations": [
            //             "Waimea Bay, Waimea Bay Beach Park, O'ahu, Hawaii, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0021593",
            //                 "name": "Bad Robot"
            //             },
            //             {
            //                 "id": "co0067205",
            //                 "name": "Touchstone Television"
            //             },
            //             {
            //                 "id": "co0209226",
            //                 "name": "ABC Signature"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Adventure",
            //             "Drama",
            //             "Fantasy"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.3,
            //         "numVotes": 644070,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt0203259",
            //         "url": "https://www.imdb.com/title/tt0203259/",
            //         "primaryTitle": "Law & Order: Special Victims Unit",
            //         "originalTitle": "Law & Order: Special Victims Unit",
            //         "type": "tvSeries",
            //         "description": "Follows the New York City Police Department's (NYPD) Special Victims Unit (SVU), a specially trained squad of detectives who investigates sex crimes including rape, child sexual abuse, human trafficking and domestic violence.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BZmI0MDdiZGQtNGZlOC00NGE1LTg3MDItOGZkMGVjZDM3NGE0XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZmI0MDdiZGQtNGZlOC00NGE1LTg3MDItOGZkMGVjZDM3NGE0XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZmI0MDdiZGQtNGZlOC00NGE1LTg3MDItOGZkMGVjZDM3NGE0XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": "TV-14",
            //         "startYear": 1999,
            //         "endYear": null,
            //         "releaseDate": "1999-09-20",
            //         "interests": [
            //             "Cop Drama",
            //             "Police Procedural",
            //             "Psychological Thriller",
            //             "Serial Killer",
            //             "Suspense Mystery",
            //             "Crime",
            //             "Drama",
            //             "Mystery",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.channel5.com/show/law-order-special-victims-unit",
            //             "https://www.nbc.com/law-and-order-special-victims-unit"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Pier 59 Studios, Chelsea Piers, Pier 59 - West 18th Street & West Side Highway, Chelsea, Manhattan, New York City, New York, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0019598",
            //                 "name": "Wolf Films"
            //             },
            //             {
            //                 "id": "co0069685",
            //                 "name": "Studios USA Television"
            //             },
            //             {
            //                 "id": "co0080319",
            //                 "name": "Universal Network Television"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Crime",
            //             "Drama",
            //             "Mystery"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.1,
            //         "numVotes": 137209,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt1190634",
            //         "url": "https://www.imdb.com/title/tt1190634/",
            //         "primaryTitle": "The Boys",
            //         "originalTitle": "The Boys",
            //         "type": "tvSeries",
            //         "description": "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMWJlN2U5MzItNjU4My00NTM2LWFjOWUtOWFiNjg3ZTMxZDY1XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMWJlN2U5MzItNjU4My00NTM2LWFjOWUtOWFiNjg3ZTMxZDY1XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMWJlN2U5MzItNjU4My00NTM2LWFjOWUtOWFiNjg3ZTMxZDY1XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=EzFXDvC-EwM",
            //         "contentRating": "TV-MA",
            //         "startYear": 2019,
            //         "endYear": null,
            //         "releaseDate": "2019-07-26",
            //         "interests": [
            //             "Dark Comedy",
            //             "Raunchy Comedy",
            //             "Satire",
            //             "Superhero",
            //             "Action",
            //             "Comedy",
            //             "Crime",
            //             "Drama",
            //             "Sci-Fi"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.facebook.com/TheBoysTV/",
            //             "https://www.instagram.com/theboystv"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Hamilton, Ontario, Canada"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0319272",
            //                 "name": "Amazon Studios"
            //             },
            //             {
            //                 "id": "co0244439",
            //                 "name": "Kickstart Entertainment"
            //             },
            //             {
            //                 "id": "co0157257",
            //                 "name": "Kripke Enterprises"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Action",
            //             "Comedy",
            //             "Crime"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.6,
            //         "numVotes": 782137,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt3032476",
            //         "url": "https://www.imdb.com/title/tt3032476/",
            //         "primaryTitle": "Better Call Saul",
            //         "originalTitle": "Better Call Saul",
            //         "type": "tvSeries",
            //         "description": "The trials and tribulations of criminal lawyer Jimmy McGill in the years leading up to his fateful run-in with Walter White and Jesse Pinkman.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BNDdjNTEzMjMtYjM3Mi00NzQ3LWFlNWMtZjdmYWU3ZDkzMjk1XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNDdjNTEzMjMtYjM3Mi00NzQ3LWFlNWMtZjdmYWU3ZDkzMjk1XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNDdjNTEzMjMtYjM3Mi00NzQ3LWFlNWMtZjdmYWU3ZDkzMjk1XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=l1xIGfVFb-U",
            //         "contentRating": "TV-MA",
            //         "startYear": 2015,
            //         "endYear": 2022,
            //         "releaseDate": "2015-02-08",
            //         "interests": [
            //             "Drug Crime",
            //             "Epic",
            //             "Legal Drama",
            //             "Psychological Drama",
            //             "Tragedy",
            //             "Crime",
            //             "Drama"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.facebook.com/BetterCallSaulAMC",
            //             "https://www.instagram.com/bettercallsaulamc/"
            //         ],
            //         "spokenLanguages": [
            //             "en",
            //             "es",
            //             "vi"
            //         ],
            //         "filmingLocations": [
            //             "Albuquerque, New Mexico, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0212797",
            //                 "name": "High Bridge Productions"
            //             },
            //             {
            //                 "id": "co0520966",
            //                 "name": "Crystal Diner Productions"
            //             },
            //             {
            //                 "id": "co0071947",
            //                 "name": "Gran Via Productions"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Crime",
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 9,
            //         "numVotes": 737563,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt8740614",
            //         "url": "https://www.imdb.com/title/tt8740614/",
            //         "primaryTitle": "The Residence",
            //         "originalTitle": "The Residence",
            //         "type": "tvMiniSeries",
            //         "description": "Inside the White House's staff residence and the lives workers share with the First Family.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BNmJlOWFiNGEtZGYyMy00ZWY5LWJlMjMtYjgzZTViNDI3NzUxXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNmJlOWFiNGEtZGYyMy00ZWY5LWJlMjMtYjgzZTViNDI3NzUxXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNmJlOWFiNGEtZGYyMy00ZWY5LWJlMjMtYjgzZTViNDI3NzUxXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=aYC2zCdcKW0",
            //         "contentRating": "TV-MA",
            //         "startYear": 2025,
            //         "endYear": 2025,
            //         "releaseDate": "2025-03-20",
            //         "interests": [
            //             "Screwball Comedy",
            //             "Whodunnit",
            //             "Comedy",
            //             "Crime",
            //             "Drama",
            //             "Mystery"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.netflix.com/title/81005297/"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Los Angeles, California, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0690533",
            //                 "name": "Davies Heavy Industries"
            //             },
            //             {
            //                 "id": "co0170849",
            //                 "name": "Shondaland"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Comedy",
            //             "Crime",
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 7.7,
            //         "numVotes": 39522,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt10802170",
            //         "url": "https://www.imdb.com/title/tt10802170/",
            //         "primaryTitle": "The Rehearsal",
            //         "originalTitle": "The Rehearsal",
            //         "type": "tvSeries",
            //         "description": "Nathan Fielder gives people a chance to rehearse for their own lives in a world where nothing ever works out as expected.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BY2IxZDU5YmQtNGRjYi00ZDA1LTljYmYtYzkwYjExZGQ0Yjc2XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BY2IxZDU5YmQtNGRjYi00ZDA1LTljYmYtYzkwYjExZGQ0Yjc2XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BY2IxZDU5YmQtNGRjYi00ZDA1LTljYmYtYzkwYjExZGQ0Yjc2XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=2fjPFt8cpic",
            //         "contentRating": "TV-MA",
            //         "startYear": 2022,
            //         "endYear": null,
            //         "releaseDate": "2022-07-15",
            //         "interests": [
            //             "Docuseries",
            //             "Quirky Comedy",
            //             "Comedy",
            //             "Documentary"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.hbo.com/the-rehearsal"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0555318",
            //                 "name": "Rise Management"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Comedy",
            //             "Documentary"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.5,
            //         "numVotes": 31866,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt10919420",
            //         "url": "https://www.imdb.com/title/tt10919420/",
            //         "primaryTitle": "Squid Game",
            //         "originalTitle": "Ojing-eo geim",
            //         "type": "tvSeries",
            //         "description": "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes: a survival game that has a whopping 45.6 billion-won prize at stake.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BYTU3ZDVhNmMtMDVlNC00MDc0LTgwNDMtYWE5MTI2ZGI4YWIwXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYTU3ZDVhNmMtMDVlNC00MDc0LTgwNDMtYWE5MTI2ZGI4YWIwXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYTU3ZDVhNmMtMDVlNC00MDc0LTgwNDMtYWE5MTI2ZGI4YWIwXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=oqxAJKy0ii4",
            //         "contentRating": "TV-MA",
            //         "startYear": 2021,
            //         "endYear": 2025,
            //         "releaseDate": "2021-09-17",
            //         "interests": [
            //             "Conspiracy Thriller",
            //             "Dark Comedy",
            //             "Korean Drama",
            //             "Psychological Drama",
            //             "Suspense Mystery",
            //             "Action",
            //             "Drama",
            //             "Mystery",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "KR"
            //         ],
            //         "externalLinks": [
            //             "https://www.netflix.com/title/81040344/"
            //         ],
            //         "spokenLanguages": [
            //             "ko",
            //             "en",
            //             "ur"
            //         ],
            //         "filmingLocations": [
            //             "Daejeon, South Korea"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co1086504",
            //                 "name": "Firstman Studio"
            //             },
            //             {
            //                 "id": "co0717024",
            //                 "name": "Siren Pictures"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Action",
            //             "Drama",
            //             "Mystery"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8,
            //         "numVotes": 667295,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt0364845",
            //         "url": "https://www.imdb.com/title/tt0364845/",
            //         "primaryTitle": "NCIS",
            //         "originalTitle": "NCIS: Naval Criminal Investigative Service",
            //         "type": "tvSeries",
            //         "description": "Follows the Major Case Response Team (MCRT) from the Naval Criminal Investigative Service (NCIS), as they get to the bottom of criminal cases connected to Navy and Marine Corps personnel.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BZGExNmI3NDMtMjYxYS00Y2ZmLTlkNmItMGNkNTQ1MzA1ZGM1XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZGExNmI3NDMtMjYxYS00Y2ZmLTlkNmItMGNkNTQ1MzA1ZGM1XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZGExNmI3NDMtMjYxYS00Y2ZmLTlkNmItMGNkNTQ1MzA1ZGM1XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=BhtDgn31XZo",
            //         "contentRating": "TV-14",
            //         "startYear": 2003,
            //         "endYear": null,
            //         "releaseDate": "2003-09-23",
            //         "interests": [
            //             "Cop Drama",
            //             "Police Procedural",
            //             "Action",
            //             "Crime",
            //             "Drama",
            //             "Mystery",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.cbs.com/shows/ncis/",
            //             "https://www.channel5.com/show/ncis/"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Valencia Studios - 26030 Avenue Hall, Valencia, California, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0114905",
            //                 "name": "Belisarius Productions"
            //             },
            //             {
            //                 "id": "co0066107",
            //                 "name": "Paramount Network Television"
            //             },
            //             {
            //                 "id": "co0183875",
            //                 "name": "CBS Paramount Network Television"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Action",
            //             "Crime",
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 7.8,
            //         "numVotes": 171374,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt9288030",
            //         "url": "https://www.imdb.com/title/tt9288030/",
            //         "primaryTitle": "Reacher",
            //         "originalTitle": "Reacher",
            //         "type": "tvSeries",
            //         "description": "Itinerant former military policeman Jack Reacher solves crimes and metes out his own brand of street justice. Based on the novels by Lee Child.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMzdjYWZlMDQtYzdhNi00NmRlLTg2NzUtMTI3MWFhZDliNjBiXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMzdjYWZlMDQtYzdhNi00NmRlLTg2NzUtMTI3MWFhZDliNjBiXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMzdjYWZlMDQtYzdhNi00NmRlLTg2NzUtMTI3MWFhZDliNjBiXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=GSycMV-_Csw",
            //         "contentRating": "TV-MA",
            //         "startYear": 2022,
            //         "endYear": null,
            //         "releaseDate": "2022-02-04",
            //         "interests": [
            //             "One-Person Army Action",
            //             "Action",
            //             "Crime",
            //             "Drama",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Kingston Penitentiary, Kingston, Ontario, Canada"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0319272",
            //                 "name": "Amazon Studios"
            //             },
            //             {
            //                 "id": "co0122065",
            //                 "name": "Blackjack Films Inc."
            //             },
            //             {
            //                 "id": "co0053559",
            //                 "name": "Paramount Television"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Action",
            //             "Crime",
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8,
            //         "numVotes": 267874,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt10986410",
            //         "url": "https://www.imdb.com/title/tt10986410/",
            //         "primaryTitle": "Ted Lasso",
            //         "originalTitle": "Ted Lasso",
            //         "type": "tvSeries",
            //         "description": "American college football coach Ted Lasso heads to London to manage AFC Richmond, a struggling English Premier League soccer team.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BZmI3YWVhM2UtNDZjMC00YTIzLWI2NGUtZWIxODZkZjVmYTg1XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZmI3YWVhM2UtNDZjMC00YTIzLWI2NGUtZWIxODZkZjVmYTg1XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZmI3YWVhM2UtNDZjMC00YTIzLWI2NGUtZWIxODZkZjVmYTg1XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=3u7EIiohs6U",
            //         "contentRating": "TV-MA",
            //         "startYear": 2020,
            //         "endYear": null,
            //         "releaseDate": "2020-08-14",
            //         "interests": [
            //             "Soccer",
            //             "Workplace Drama",
            //             "Comedy",
            //             "Drama",
            //             "Sport"
            //         ],
            //         "countriesOfOrigin": [
            //             "US",
            //             "GB"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Crystal Palace Football Club, Selhurst Park Stadium, Holmesdale Road, Selhurst, London, Greater London, England, UK"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0816719",
            //                 "name": "Ruby's Tuna"
            //             },
            //             {
            //                 "id": "co0046592",
            //                 "name": "Universal Television"
            //             },
            //             {
            //                 "id": "co0007700",
            //                 "name": "Doozer"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Comedy",
            //             "Drama",
            //             "Sport"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.8,
            //         "numVotes": 404091,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt32514856",
            //         "url": "https://www.imdb.com/title/tt32514856/",
            //         "primaryTitle": "Legend of Zang Hai",
            //         "originalTitle": "Zang Hai Zhuan",
            //         "type": "tvSeries",
            //         "description": "Set in a legendary ancient time China, a man works in ruling government dedicates to civilian lives",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMWVlODM4YmYtMThjZC00YjkxLThjZjYtOTYxNzgzM2YwNGM3XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMWVlODM4YmYtMThjZC00YjkxLThjZjYtOTYxNzgzM2YwNGM3XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMWVlODM4YmYtMThjZC00YjkxLThjZjYtOTYxNzgzM2YwNGM3XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": null,
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-05-18",
            //         "interests": [
            //             "Costume Drama",
            //             "Period Drama",
            //             "Adventure",
            //             "Drama",
            //             "Fantasy",
            //             "History",
            //             "Mystery"
            //         ],
            //         "countriesOfOrigin": [
            //             "CN"
            //         ],
            //         "externalLinks": [
            //             "https://baike.baidu.com/item/%E8%97%8F%E6%B5%B7%E4%BC%A0/63901894"
            //         ],
            //         "spokenLanguages": [
            //             "zh"
            //         ],
            //         "filmingLocations": [],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0001524",
            //                 "name": "China Central Television (CCTV)"
            //             },
            //             {
            //                 "id": "co0839221",
            //                 "name": "Youku Information Technology (beijing) Co."
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Adventure",
            //             "Drama",
            //             "Fantasy"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.9,
            //         "numVotes": 21396,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt0185906",
            //         "url": "https://www.imdb.com/title/tt0185906/",
            //         "primaryTitle": "Band of Brothers",
            //         "originalTitle": "Band of Brothers",
            //         "type": "tvMiniSeries",
            //         "description": "The story of Easy Company of the U.S. Army 101st Airborne Division and their mission in World War II Europe, from Operation Overlord to V-J Day.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTQ3NTdmOTEtZTRmMi00NTg5LWI5NmUtYTNiOTc0ZmNkODU0XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMTQ3NTdmOTEtZTRmMi00NTg5LWI5NmUtYTNiOTc0ZmNkODU0XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMTQ3NTdmOTEtZTRmMi00NTg5LWI5NmUtYTNiOTc0ZmNkODU0XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=aH06LWZs-Ys",
            //         "contentRating": "TV-MA",
            //         "startYear": 2001,
            //         "endYear": 2001,
            //         "releaseDate": "2001-09-09",
            //         "interests": [
            //             "Historical Epic",
            //             "Tragedy",
            //             "War Epic",
            //             "Action",
            //             "Drama",
            //             "History",
            //             "War"
            //         ],
            //         "countriesOfOrigin": [
            //             "GB",
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.facebook.com/bandofbrothers",
            //             "https://www.hbo.com/band-of-brothers"
            //         ],
            //         "spokenLanguages": [
            //             "en",
            //             "de",
            //             "fr",
            //             "nl",
            //             "la",
            //             "pl",
            //             "es"
            //         ],
            //         "filmingLocations": [
            //             "Ashdown Forest, East Sussex, England, UK"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0040938",
            //                 "name": "DreamWorks"
            //             },
            //             {
            //                 "id": "co0003158",
            //                 "name": "DreamWorks Television"
            //             },
            //             {
            //                 "id": "co0005861",
            //                 "name": "HBO Films"
            //             }
            //         ],
            //         "budget": 125000000,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Action",
            //             "Drama",
            //             "History"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 9.4,
            //         "numVotes": 564425,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt13443470",
            //         "url": "https://www.imdb.com/title/tt13443470/",
            //         "primaryTitle": "Wednesday",
            //         "originalTitle": "Wednesday",
            //         "type": "tvSeries",
            //         "description": "Follows Wednesday Addams' years as a student, when she attempts to master her emerging psychic ability, thwart a killing spree, and solve the mystery that embroiled her parents.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BZGQxYWFlNzgtODZjMS00YmM5LWEzZWMtOGVmODMzYjIyODZiXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZGQxYWFlNzgtODZjMS00YmM5LWEzZWMtOGVmODMzYjIyODZiXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZGQxYWFlNzgtODZjMS00YmM5LWEzZWMtOGVmODMzYjIyODZiXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=Qa5kFRxBkNw",
            //         "contentRating": "TV-14",
            //         "startYear": 2022,
            //         "endYear": null,
            //         "releaseDate": "2022-11-23",
            //         "interests": [
            //             "Coming-of-Age",
            //             "Dark Fantasy",
            //             "Teen Comedy",
            //             "Comedy",
            //             "Crime",
            //             "Fantasy",
            //             "Mystery"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.netflix.com/tudum/wednesday",
            //             "https://www.netflix.com/title/81231974/"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Romania"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0071026",
            //                 "name": "MGM Television"
            //             },
            //             {
            //                 "id": "co0188223",
            //                 "name": "Millar Gough Ink"
            //             },
            //             {
            //                 "id": "co0081851",
            //                 "name": "Tim Burton Productions"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Comedy",
            //             "Crime",
            //             "Fantasy"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8,
            //         "numVotes": 420929,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt0386676",
            //         "url": "https://www.imdb.com/title/tt0386676/",
            //         "primaryTitle": "The Office",
            //         "originalTitle": "The Office",
            //         "type": "tvSeries",
            //         "description": "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, tedium and romance.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BZjQwYzBlYzUtZjhhOS00ZDQ0LWE0NzAtYTk4MjgzZTNkZWEzXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZjQwYzBlYzUtZjhhOS00ZDQ0LWE0NzAtYTk4MjgzZTNkZWEzXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZjQwYzBlYzUtZjhhOS00ZDQ0LWE0NzAtYTk4MjgzZTNkZWEzXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": "TV-14",
            //         "startYear": 2005,
            //         "endYear": 2013,
            //         "releaseDate": "2005-03-24",
            //         "interests": [
            //             "Mockumentary",
            //             "Sitcom",
            //             "Comedy"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en",
            //             "es",
            //             "de",
            //             "fr"
            //         ],
            //         "filmingLocations": [
            //             "Scranton, Pennsylvania, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0082215",
            //                 "name": "Reveille Productions"
            //             },
            //             {
            //                 "id": "co0129175",
            //                 "name": "NBC Universal Television"
            //             },
            //             {
            //                 "id": "co0070636",
            //                 "name": "3 Arts Entertainment"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Comedy"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 9,
            //         "numVotes": 779242,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt32063523",
            //         "url": "https://www.imdb.com/title/tt32063523/",
            //         "primaryTitle": "Bet",
            //         "originalTitle": "Bet",
            //         "type": "tvSeries",
            //         "description": "A transfer student from Japan disrupts a boarding school's power structure with her gambling skills, challenging the Student Council while pursuing revenge that could overturn the entire system.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BZWFkNjVkMTAtNjAwZS00YmZmLWEzY2ItMjc0MGEwNmFhMzk3XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZWFkNjVkMTAtNjAwZS00YmZmLWEzY2ItMjc0MGEwNmFhMzk3XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZWFkNjVkMTAtNjAwZS00YmZmLWEzY2ItMjc0MGEwNmFhMzk3XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": "TV-MA",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-05-15",
            //         "interests": [
            //             "Psychological Drama",
            //             "Psychological Thriller",
            //             "Crime",
            //             "Drama",
            //             "Mystery",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "CA"
            //         ],
            //         "externalLinks": [
            //             "https://www.netflix.com/title/81713952"
            //         ],
            //         "spokenLanguages": [
            //             "fr",
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Toronto, Ontario, Canada"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0485996",
            //                 "name": "Boat Rocker Studios"
            //             },
            //             {
            //                 "id": "co1023366",
            //                 "name": "MAPPA Tokyo Studio"
            //             },
            //             {
            //                 "id": "co0719815",
            //                 "name": "Ontario Creates"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Crime",
            //             "Drama",
            //             "Mystery"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 6.3,
            //         "numVotes": 4333,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt13723084",
            //         "url": "https://www.imdb.com/title/tt13723084/",
            //         "primaryTitle": "Motorheads",
            //         "originalTitle": "Motorheads",
            //         "type": "tvSeries",
            //         "description": "A group of outsiders in a once-thriving Rust Belt town form an unlikely friendship over a mutual love of automobiles.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BOGM2MGU1N2MtOTdmYi00NjFhLWIyOGUtYmFlOWQxZmFlOWMwXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BOGM2MGU1N2MtOTdmYi00NjFhLWIyOGUtYmFlOWQxZmFlOWMwXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BOGM2MGU1N2MtOTdmYi00NjFhLWIyOGUtYmFlOWQxZmFlOWMwXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": null,
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-05-20",
            //         "interests": [
            //             "Coming-of-Age",
            //             "Drama"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "London, Ontario, Canada"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co1025982",
            //                 "name": "Amazon MGM Studios"
            //             },
            //             {
            //                 "id": "co0476953",
            //                 "name": "Amazon Prime Video"
            //             },
            //             {
            //                 "id": "co0352965",
            //                 "name": "Jax Media"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 7.5,
            //         "numVotes": 3306,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt31806037",
            //         "url": "https://www.imdb.com/title/tt31806037/",
            //         "primaryTitle": "Adolescence",
            //         "originalTitle": "Adolescence",
            //         "type": "tvMiniSeries",
            //         "description": "When a 13-year-old is accused of the murder of a classmate, his family, therapist and the detective in charge are all left asking what really happened.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BNGY1YjBiNzMtYWZhNC00OWViLWE0MzItNjc4YzczOGNiM2I0XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNGY1YjBiNzMtYWZhNC00OWViLWE0MzItNjc4YzczOGNiM2I0XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNGY1YjBiNzMtYWZhNC00OWViLWE0MzItNjc4YzczOGNiM2I0XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=Wk5OxqtpBR4",
            //         "contentRating": "TV-MA",
            //         "startYear": 2025,
            //         "endYear": 2025,
            //         "releaseDate": "2025-03-13",
            //         "interests": [
            //             "Psychological Drama",
            //             "Crime",
            //             "Drama",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "GB"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "South Elmsall, West Yorkshire, England, UK"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0952579",
            //                 "name": "It's All Made Up Productions"
            //             },
            //             {
            //                 "id": "co0781559",
            //                 "name": "Matriarch Productions"
            //             },
            //             {
            //                 "id": "co0136967",
            //                 "name": "Plan B Entertainment"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Crime",
            //             "Drama",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.2,
            //         "numVotes": 205377,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt4474344",
            //         "url": "https://www.imdb.com/title/tt4474344/",
            //         "primaryTitle": "Blindspot",
            //         "originalTitle": "Blindspot",
            //         "type": "tvSeries",
            //         "description": "Jane Doe is found in Times Square with no memory and mysterious tattoos on her body.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BNDdhZDA2MTYtN2EyYi00ODk4LWI3NmUtMjM4Nzk5ODY1NzVmXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNDdhZDA2MTYtN2EyYi00ODk4LWI3NmUtMjM4Nzk5ODY1NzVmXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNDdhZDA2MTYtN2EyYi00ODk4LWI3NmUtMjM4Nzk5ODY1NzVmXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=biSRZM1NLDs",
            //         "contentRating": "TV-14",
            //         "startYear": 2015,
            //         "endYear": 2020,
            //         "releaseDate": "2015-09-21",
            //         "interests": [
            //             "Cop Drama",
            //             "Police Procedural",
            //             "Psychological Drama",
            //             "Action",
            //             "Crime",
            //             "Drama",
            //             "Mystery",
            //             "Sci-Fi",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "http://www.nbc.com/blindspot",
            //             "http://www.warnerbros.com/tv/blindspot"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "New York City, New York, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0540475",
            //                 "name": "Quinn's House"
            //             },
            //             {
            //                 "id": "co0330789",
            //                 "name": "Berlanti Productions"
            //             },
            //             {
            //                 "id": "co0005035",
            //                 "name": "Warner Bros. Television"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Action",
            //             "Crime",
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 7.3,
            //         "numVotes": 81720,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt11198330",
            //         "url": "https://www.imdb.com/title/tt11198330/",
            //         "primaryTitle": "House of the Dragon",
            //         "originalTitle": "House of the Dragon",
            //         "type": "tvSeries",
            //         "description": "An internal succession war within House Targaryen at the height of its power, 172 years before the birth of Daenerys Targaryen.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BM2QzMGVkNjUtN2Y4Yi00ODMwLTg3YzktYzUxYjJlNjFjNDY1XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BM2QzMGVkNjUtN2Y4Yi00ODMwLTg3YzktYzUxYjJlNjFjNDY1XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BM2QzMGVkNjUtN2Y4Yi00ODMwLTg3YzktYzUxYjJlNjFjNDY1XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=Wg86eQkdudI",
            //         "contentRating": "TV-MA",
            //         "startYear": 2022,
            //         "endYear": null,
            //         "releaseDate": "2022-08-21",
            //         "interests": [
            //             "Fantasy Epic",
            //             "Political Drama",
            //             "Sword & Sorcery",
            //             "Action",
            //             "Adventure",
            //             "Drama",
            //             "Fantasy",
            //             "Romance"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "http://www.instagram.com/houseofthedragonhbo",
            //             "https://www.hbo.com/house-of-the-dragon"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Monsanto, Castelo Branco, Portugal"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0777554",
            //                 "name": "1:26 Pictures"
            //             },
            //             {
            //                 "id": "co0008693",
            //                 "name": "Home Box Office (HBO)"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Action",
            //             "Adventure",
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.3,
            //         "numVotes": 478915,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt18335752",
            //         "url": "https://www.imdb.com/title/tt18335752/",
            //         "primaryTitle": "1923",
            //         "originalTitle": "1923: A Yellowstone Origin Story",
            //         "type": "tvSeries",
            //         "description": "The Duttons face a new set of challenges in the early 20th century, including the rise of Western expansion, Prohibition, and the Great Depression.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTU3MGViZTItMmI5NS00MzMwLWFkNjctOGFlNWVmNDM0N2QyXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMTU3MGViZTItMmI5NS00MzMwLWFkNjctOGFlNWVmNDM0N2QyXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMTU3MGViZTItMmI5NS00MzMwLWFkNjctOGFlNWVmNDM0N2QyXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=7SIXEy4cwiw",
            //         "contentRating": "TV-MA",
            //         "startYear": 2022,
            //         "endYear": 2025,
            //         "releaseDate": "2022-12-18",
            //         "interests": [
            //             "Period Drama",
            //             "Western Epic",
            //             "Drama",
            //             "Western"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "South Africa"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0703551",
            //                 "name": "101 Studios"
            //             },
            //             {
            //                 "id": "co0703552",
            //                 "name": "Bosque Ranch Productions"
            //             },
            //             {
            //                 "id": "co0849655",
            //                 "name": "MTV Entertainment Studios"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Drama",
            //             "Western"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.3,
            //         "numVotes": 84270,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt7660850",
            //         "url": "https://www.imdb.com/title/tt7660850/",
            //         "primaryTitle": "Succession",
            //         "originalTitle": "Succession",
            //         "type": "tvSeries",
            //         "description": "The Roy family is known for controlling the biggest media and entertainment company in the world. However, their world changes when their father steps down from the company.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BNTEwNTFkZTktMzI1OC00YmRjLWE5NTUtYmZhMmJlNGUxMWU1XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNTEwNTFkZTktMzI1OC00YmRjLWE5NTUtYmZhMmJlNGUxMWU1XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNTEwNTFkZTktMzI1OC00YmRjLWE5NTUtYmZhMmJlNGUxMWU1XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=OzYxJV_rmE8",
            //         "contentRating": "TV-MA",
            //         "startYear": 2018,
            //         "endYear": 2023,
            //         "releaseDate": "2018-06-03",
            //         "interests": [
            //             "Dark Comedy",
            //             "Epic",
            //             "Satire",
            //             "Tragedy",
            //             "Workplace Drama",
            //             "Comedy",
            //             "Drama",
            //             "Financial Drama"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.facebook.com/SuccessionHBO",
            //             "https://www.sky.com/watch/succession"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Dundee, Scotland, UK"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0186190",
            //                 "name": "Gary Sanchez Productions"
            //             },
            //             {
            //                 "id": "co0702468",
            //                 "name": "Project Zeus"
            //             },
            //             {
            //                 "id": "co0770923",
            //                 "name": "Hyperobject Industries"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Comedy",
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.8,
            //         "numVotes": 319905,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt1586680",
            //         "url": "https://www.imdb.com/title/tt1586680/",
            //         "primaryTitle": "Shameless",
            //         "originalTitle": "Shameless",
            //         "type": "tvSeries",
            //         "description": "A scrappy, feisty, fiercely loyal Chicago family makes no apologies.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMWUwZjJmYjctYTY3MC00ZTVlLWI1ZGEtNWQzMTFlMTcwMTY2XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMWUwZjJmYjctYTY3MC00ZTVlLWI1ZGEtNWQzMTFlMTcwMTY2XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMWUwZjJmYjctYTY3MC00ZTVlLWI1ZGEtNWQzMTFlMTcwMTY2XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=9tvkYS5cA58",
            //         "contentRating": "TV-MA",
            //         "startYear": 2011,
            //         "endYear": 2021,
            //         "releaseDate": "2011-01-09",
            //         "interests": [
            //             "Dark Comedy",
            //             "Comedy",
            //             "Drama"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.facebook.com/ShamelessOnShowtime",
            //             "https://www.instagram.com/shameless/"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "2119 S Homan Ave, Chicago, Illinois, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0265986",
            //                 "name": "Bonanza Productions"
            //             },
            //             {
            //                 "id": "co0037310",
            //                 "name": "John Wells Productions"
            //             },
            //             {
            //                 "id": "co0005035",
            //                 "name": "Warner Bros. Television"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Comedy",
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.5,
            //         "numVotes": 312747,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt0306414",
            //         "url": "https://www.imdb.com/title/tt0306414/",
            //         "primaryTitle": "The Wire",
            //         "originalTitle": "The Wire",
            //         "type": "tvSeries",
            //         "description": "The Baltimore drug scene, as seen through the eyes of drug dealers and law enforcement.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BZWYyNmRhYjktNjBhNC00M2NhLWEzYmMtZDYwNmIyZTRiZWMzXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZWYyNmRhYjktNjBhNC00M2NhLWEzYmMtZDYwNmIyZTRiZWMzXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZWYyNmRhYjktNjBhNC00M2NhLWEzYmMtZDYwNmIyZTRiZWMzXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=uDcQbk78CSw",
            //         "contentRating": "TV-MA",
            //         "startYear": 2002,
            //         "endYear": 2008,
            //         "releaseDate": "2002-06-02",
            //         "interests": [
            //             "Cop Drama",
            //             "Drug Crime",
            //             "Epic",
            //             "Police Procedural",
            //             "Crime",
            //             "Drama",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.facebook.com/TheWire",
            //             "https://www.hbo.com/the-wire"
            //         ],
            //         "spokenLanguages": [
            //             "en",
            //             "el",
            //             "es"
            //         ],
            //         "filmingLocations": [
            //             "Baltimore, Maryland, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0019588",
            //                 "name": "Blown Deadline Productions"
            //             },
            //             {
            //                 "id": "co0008693",
            //                 "name": "Home Box Office (HBO)"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Crime",
            //             "Drama",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 9.3,
            //         "numVotes": 405089,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt32409123",
            //         "url": "https://www.imdb.com/title/tt32409123/",
            //         "primaryTitle": "Death Valley",
            //         "originalTitle": "Death Valley",
            //         "type": "tvSeries",
            //         "description": "Retired actor John Chapel and detective sergeant Janie Mallowan team up to investigate murders each week in Wales.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BYzMzZjNjMmItMzlkZC00NjQ0LWJmNzMtMzQzMWNkOTdkNmI3XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYzMzZjNjMmItMzlkZC00NjQ0LWJmNzMtMzQzMWNkOTdkNmI3XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYzMzZjNjMmItMzlkZC00NjQ0LWJmNzMtMzQzMWNkOTdkNmI3XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": null,
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-05-25",
            //         "interests": [
            //             "Comedy"
            //         ],
            //         "countriesOfOrigin": [
            //             "GB"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en",
            //             "cy"
            //         ],
            //         "filmingLocations": [
            //             "Bannau Brycheiniog National Park, Wales, UK"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co1131576",
            //                 "name": "BBC Comedy Productions"
            //             },
            //             {
            //                 "id": "co1065241",
            //                 "name": "Creative Wales"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Comedy"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 6.8,
            //         "numVotes": 1261,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt0118375",
            //         "url": "https://www.imdb.com/title/tt0118375/",
            //         "primaryTitle": "King of the Hill",
            //         "originalTitle": "King of the Hill",
            //         "type": "tvSeries",
            //         "description": "A straight-laced propane salesman in Arlen, Texas tries to deal with the wacky antics of his family and friends, while also trying to keep his son in line.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BNTY2MmVmN2MtMTBjYi00MzBiLWJlZTgtM2M4M2QxNWIyZTU1XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNTY2MmVmN2MtMTBjYi00MzBiLWJlZTgtM2M4M2QxNWIyZTU1XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNTY2MmVmN2MtMTBjYi00MzBiLWJlZTgtM2M4M2QxNWIyZTU1XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": "TV-14",
            //         "startYear": 1997,
            //         "endYear": null,
            //         "releaseDate": "1997-01-12",
            //         "interests": [
            //             "Adult Animation",
            //             "Hand-Drawn Animation",
            //             "Satire",
            //             "Sitcom",
            //             "Animation",
            //             "Comedy",
            //             "Drama"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.hulu.com/series/king-of-the-hill-52b8dd8a-eff2-4ed2-9b8d-7c0039df1c53"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0093771",
            //                 "name": "Deedle-Dee Productions"
            //             },
            //             {
            //                 "id": "co0093772",
            //                 "name": "Judgmental Films"
            //             },
            //             {
            //                 "id": "co0070636",
            //                 "name": "3 Arts Entertainment"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Animation",
            //             "Comedy",
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 7.5,
            //         "numVotes": 61708,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt5875444",
            //         "url": "https://www.imdb.com/title/tt5875444/",
            //         "primaryTitle": "Slow Horses",
            //         "originalTitle": "Slow Horses",
            //         "type": "tvSeries",
            //         "description": "A dysfunctional team of MI5 agents navigate the espionage world's smoke and mirrors to defend England from sinister forces.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BOTdiZDlkYTYtMTMwOC00YzczLWI1ZGEtNWU1ZWZkMDAxNGMxXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BOTdiZDlkYTYtMTMwOC00YzczLWI1ZGEtNWU1ZWZkMDAxNGMxXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BOTdiZDlkYTYtMTMwOC00YzczLWI1ZGEtNWU1ZWZkMDAxNGMxXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=O9ZJChzPn0U",
            //         "contentRating": "TV-MA",
            //         "startYear": 2022,
            //         "endYear": null,
            //         "releaseDate": "2022-04-01",
            //         "interests": [
            //             "Dark Comedy",
            //             "Spy",
            //             "Drama",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "GB",
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://youtu.be/xo27sE2fdvs"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Mews, Old Royal Naval College, Greenwich, London, England, UK"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0230132",
            //                 "name": "See-Saw Films"
            //             },
            //             {
            //                 "id": "co0546168",
            //                 "name": "Apple TV+"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Drama",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.3,
            //         "numVotes": 114441,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt2442560",
            //         "url": "https://www.imdb.com/title/tt2442560/",
            //         "primaryTitle": "Peaky Blinders",
            //         "originalTitle": "Peaky Blinders",
            //         "type": "tvSeries",
            //         "description": "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BOGM0NGY3ZmItOGE2ZC00OWIxLTk0N2EtZWY4Yzg3ZDlhNGI3XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BOGM0NGY3ZmItOGE2ZC00OWIxLTk0N2EtZWY4Yzg3ZDlhNGI3XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BOGM0NGY3ZmItOGE2ZC00OWIxLTk0N2EtZWY4Yzg3ZDlhNGI3XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=EM12mcTEI88",
            //         "contentRating": "TV-MA",
            //         "startYear": 2013,
            //         "endYear": 2022,
            //         "releaseDate": "2014-09-30",
            //         "interests": [
            //             "Gangster",
            //             "Period Drama",
            //             "Crime",
            //             "Drama"
            //         ],
            //         "countriesOfOrigin": [
            //             "GB"
            //         ],
            //         "externalLinks": [
            //             "https://www.facebook.com/PeakyBlinders/",
            //             "https://www.instagram.com/peakyblindersofficial/"
            //         ],
            //         "spokenLanguages": [
            //             "en",
            //             "ro",
            //             "ga",
            //             "it",
            //             "yi",
            //             "fr"
            //         ],
            //         "filmingLocations": [
            //             "Port Sunlight, Wirral, Merseyside, England, UK"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0275656",
            //                 "name": "Caryn Mandabach Productions"
            //             },
            //             {
            //                 "id": "co0103644",
            //                 "name": "Tiger Aspect Productions"
            //             },
            //             {
            //                 "id": "co0043107",
            //                 "name": "British Broadcasting Corporation (BBC)"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Crime",
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.7,
            //         "numVotes": 715678,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt31322085",
            //         "url": "https://www.imdb.com/title/tt31322085/",
            //         "primaryTitle": "Sherlock & Daughter",
            //         "originalTitle": "Sherlock & Daughter",
            //         "type": "tvSeries",
            //         "description": "Sherlock Holmes faces a sinister case risking friends' lives. American Amelia joins, seeking her father after her mother's murder. Despite differences, they solve a conspiracy and her mother's case.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BNTJiZmRjOWUtNTEzNC00MWVkLWFlNjctOWI1N2I4NDhmOWQ5XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNTJiZmRjOWUtNTEzNC00MWVkLWFlNjctOWI1N2I4NDhmOWQ5XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNTJiZmRjOWUtNTEzNC00MWVkLWFlNjctOWI1N2I4NDhmOWQ5XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=XPlCMiMEd1Y",
            //         "contentRating": "TV-PG",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-04-16",
            //         "interests": [
            //             "Drama",
            //             "Mystery",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Cabinteely House, The Park, Dublin 18, D18 YY28, Ireland"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co1048808",
            //                 "name": "Albion Television"
            //             },
            //             {
            //                 "id": "co0765922",
            //                 "name": "Starlings Television"
            //             },
            //             {
            //                 "id": "co0527040",
            //                 "name": "StoryFirst"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Drama",
            //             "Mystery",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 6.9,
            //         "numVotes": 1999,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt0108778",
            //         "url": "https://www.imdb.com/title/tt0108778/",
            //         "primaryTitle": "Friends",
            //         "originalTitle": "Friends",
            //         "type": "tvSeries",
            //         "description": "Follows the personal and professional lives of six twenty to thirty year-old friends living in the Manhattan borough of New York City.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BOTU2YmM5ZjctOGVlMC00YTczLTljM2MtYjhlNGI5YWMyZjFkXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BOTU2YmM5ZjctOGVlMC00YTczLTljM2MtYjhlNGI5YWMyZjFkXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BOTU2YmM5ZjctOGVlMC00YTczLTljM2MtYjhlNGI5YWMyZjFkXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=H29XSxoKp80",
            //         "contentRating": "TV-14",
            //         "startYear": 1994,
            //         "endYear": 2004,
            //         "releaseDate": "1994-09-22",
            //         "interests": [
            //             "Feel-Good Romance",
            //             "Parody",
            //             "Romantic Comedy",
            //             "Sitcom",
            //             "Comedy",
            //             "Romance"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.channel5.com/show/friends/",
            //             "http://www.facebook.com/friends.tv"
            //         ],
            //         "spokenLanguages": [
            //             "en",
            //             "es",
            //             "it",
            //             "fr",
            //             "nl",
            //             "he"
            //         ],
            //         "filmingLocations": [
            //             "New York City, New York, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0074685",
            //                 "name": "Bright/Kauffman/Crane Productions"
            //             },
            //             {
            //                 "id": "co0005035",
            //                 "name": "Warner Bros. Television"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": 89007,
            //         "genres": [
            //             "Comedy",
            //             "Romance"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.9,
            //         "numVotes": 1147918,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt6524350",
            //         "url": "https://www.imdb.com/title/tt6524350/",
            //         "primaryTitle": "Big Mouth",
            //         "originalTitle": "Big Mouth",
            //         "type": "tvSeries",
            //         "description": "Teenage friends find their lives upended by the wonders and horrors of puberty.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMzljZmY0MTctOGNmMS00ZmYyLTg4MTQtODVlYmUxZDAxMDIyXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMzljZmY0MTctOGNmMS00ZmYyLTg4MTQtODVlYmUxZDAxMDIyXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMzljZmY0MTctOGNmMS00ZmYyLTg4MTQtODVlYmUxZDAxMDIyXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=hk_BoK0OwZs",
            //         "contentRating": "TV-MA",
            //         "startYear": 2017,
            //         "endYear": 2025,
            //         "releaseDate": "2017-09-29",
            //         "interests": [
            //             "Adult Animation",
            //             "Raunchy Comedy",
            //             "Sitcom",
            //             "Teen Comedy",
            //             "Animation",
            //             "Comedy",
            //             "Romance"
            //         ],
            //         "countriesOfOrigin": [
            //             "US",
            //             "CA",
            //             "KR"
            //         ],
            //         "externalLinks": [
            //             "https://www.instagram.com/bigmouthnetflix",
            //             "https://www.netflix.com/title/80117038/"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0665900",
            //                 "name": "Danger Goldberg Productions"
            //             },
            //             {
            //                 "id": "co0624232",
            //                 "name": "Fathouse Industries"
            //             },
            //             {
            //                 "id": "co0186051",
            //                 "name": "Titmouse"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Animation",
            //             "Comedy",
            //             "Romance"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 7.8,
            //         "numVotes": 94513,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt32361930",
            //         "url": "https://www.imdb.com/title/tt32361930/",
            //         "primaryTitle": "Good Boy",
            //         "originalTitle": "Good Boy",
            //         "type": "tvSeries",
            //         "description": "Olympic medalists join the police force through a special recruitment program, trading medals for badges as they tackle violent crimes and injustices with their athletic skills.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BNjIyMTZkYTItMDMzYy00OTgwLWE1Y2MtNDdlZGZmOTZkMGMzXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNjIyMTZkYTItMDMzYy00OTgwLWE1Y2MtNDdlZGZmOTZkMGMzXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNjIyMTZkYTItMDMzYy00OTgwLWE1Y2MtNDdlZGZmOTZkMGMzXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": null,
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-05-31",
            //         "interests": [
            //             "Action",
            //             "Comedy",
            //             "Romance"
            //         ],
            //         "countriesOfOrigin": [
            //             "KR"
            //         ],
            //         "externalLinks": [
            //             "https://tv.jtbc.co.kr/goodboy"
            //         ],
            //         "spokenLanguages": [
            //             "ko"
            //         ],
            //         "filmingLocations": [],
            //         "productionCompanies": [],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Action",
            //             "Comedy",
            //             "Romance"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 7.9,
            //         "numVotes": 688,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt33043892",
            //         "url": "https://www.imdb.com/title/tt33043892/",
            //         "primaryTitle": "Dexter: Resurrection",
            //         "originalTitle": "Dexter: Resurrection",
            //         "type": "tvSeries",
            //         "description": "Dexter Morgan awakens from a coma and sets out for New York City, determined to find Harrison and make things right. But when Miami Metro's Angel Batista arrives with questions, Dexter realizes his past is catching up to him fast.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMzgxNzUwZTctMzliNi00MDUwLWE4YzctNjgwMDE2OWQwNzMxXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMzgxNzUwZTctMzliNi00MDUwLWE4YzctNjgwMDE2OWQwNzMxXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMzgxNzUwZTctMzliNi00MDUwLWE4YzctNjgwMDE2OWQwNzMxXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": null,
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-07-11",
            //         "interests": [],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Yonkers, New York, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co1071757",
            //                 "name": "Counterpart Studios"
            //             },
            //             {
            //                 "id": "co1021044",
            //                 "name": "Showtime Studios"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": null,
            //         "numVotes": 0,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt0472954",
            //         "url": "https://www.imdb.com/title/tt0472954/",
            //         "primaryTitle": "It's Always Sunny in Philadelphia",
            //         "originalTitle": "It's Always Sunny in Philadelphia",
            //         "type": "tvSeries",
            //         "description": "Five friends with big egos and small brains are the proprietors of an Irish pub in Philadelphia.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BZTEyY2Q1MmYtNDZmOS00NDM2LWFjZDAtMTU5MmU1MWU3YzNhXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZTEyY2Q1MmYtNDZmOS00NDM2LWFjZDAtMTU5MmU1MWU3YzNhXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZTEyY2Q1MmYtNDZmOS00NDM2LWFjZDAtMTU5MmU1MWU3YzNhXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=blLAdGYPhiQ",
            //         "contentRating": "TV-MA",
            //         "startYear": 2005,
            //         "endYear": null,
            //         "releaseDate": "2005-08-04",
            //         "interests": [
            //             "Dark Comedy",
            //             "Satire",
            //             "Sitcom",
            //             "Comedy"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.fxnetworks.com/shows/its-always-sunny-in-philadelphia"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Philadelphia, Pennsylvania, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0206017",
            //                 "name": "Bluebush Productions"
            //             },
            //             {
            //                 "id": "co0070636",
            //                 "name": "3 Arts Entertainment"
            //             },
            //             {
            //                 "id": "co0216537",
            //                 "name": "FX Productions"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Comedy"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.8,
            //         "numVotes": 267042,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt0898266",
            //         "url": "https://www.imdb.com/title/tt0898266/",
            //         "primaryTitle": "The Big Bang Theory",
            //         "originalTitle": "The Big Bang Theory",
            //         "type": "tvSeries",
            //         "description": "Aspiring film actress Penny moves into a Pasadena apartment across the hall from brilliant, but socially awkward, physicists Sheldon Cooper and Leonard Hofstadter and shows them how little they know about life outside of the lab.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BZjgzY2QyNzItNDhhYi00ZWIwLWFjN2UtZDJkN2MxYWNjMmJjXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZjgzY2QyNzItNDhhYi00ZWIwLWFjN2UtZDJkN2MxYWNjMmJjXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZjgzY2QyNzItNDhhYi00ZWIwLWFjN2UtZDJkN2MxYWNjMmJjXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": "TV-PG",
            //         "startYear": 2007,
            //         "endYear": 2019,
            //         "releaseDate": "2007-09-24",
            //         "interests": [
            //             "Sitcom",
            //             "Comedy",
            //             "Romance"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "http://www.facebook.com/TheBigBangTheory",
            //             "https://www.instagram.com/bigbangtheory/"
            //         ],
            //         "spokenLanguages": [
            //             "en",
            //             "hi",
            //             "it",
            //             "ru"
            //         ],
            //         "filmingLocations": [
            //             "Stage 25, Warner Brothers Burbank Studios - 4000 Warner Boulevard, Burbank, California, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0004981",
            //                 "name": "Chuck Lorre Productions"
            //             },
            //             {
            //                 "id": "co0005035",
            //                 "name": "Warner Bros. Television"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Comedy",
            //             "Romance"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.1,
            //         "numVotes": 910209,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt0108757",
            //         "url": "https://www.imdb.com/title/tt0108757/",
            //         "primaryTitle": "ER",
            //         "originalTitle": "ER",
            //         "type": "tvSeries",
            //         "description": "The doctors who work in the ER at the County General Hospital in Chicago grapple with ups and downs in their personal and professional lives while trying to give apt medical care to their patients.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMzM5NjQ4M2QtNWQyMy00OWUxLWIyZjktNmY2ZjMyZjA2NWE0XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMzM5NjQ4M2QtNWQyMy00OWUxLWIyZjktNmY2ZjMyZjA2NWE0XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMzM5NjQ4M2QtNWQyMy00OWUxLWIyZjktNmY2ZjMyZjA2NWE0XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=q6Qgrb8lP4k",
            //         "contentRating": "TV-14",
            //         "startYear": 1994,
            //         "endYear": 2009,
            //         "releaseDate": "1994-09-19",
            //         "interests": [
            //             "Medical Drama",
            //             "Drama",
            //             "Romance"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.hulu.com/series/er-c2493d31-6185-447b-a9a7-de1c891e8bc6"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Chicago, Illinois, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0093758",
            //                 "name": "Constant c Productions"
            //             },
            //             {
            //                 "id": "co0037310",
            //                 "name": "John Wells Productions"
            //             },
            //             {
            //                 "id": "co0009119",
            //                 "name": "Amblin Entertainment"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Drama",
            //             "Romance"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 7.9,
            //         "numVotes": 73234,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt14688458",
            //         "url": "https://www.imdb.com/title/tt14688458/",
            //         "primaryTitle": "Silo",
            //         "originalTitle": "Silo",
            //         "type": "tvSeries",
            //         "description": "Men and women live in a giant silo underground with several regulations which they believe are in place to protect them from the toxic and ruined world on the surface.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BNjA5ODM4YTEtNDcxZi00N2ViLTg0MTgtNGQxNjBjZWY5YTk3XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNjA5ODM4YTEtNDcxZi00N2ViLTg0MTgtNGQxNjBjZWY5YTk3XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BNjA5ODM4YTEtNDcxZi00N2ViLTg0MTgtNGQxNjBjZWY5YTk3XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=8ZYhuvIv1pA",
            //         "contentRating": "TV-MA",
            //         "startYear": 2023,
            //         "endYear": null,
            //         "releaseDate": "2023-05-05",
            //         "interests": [
            //             "Dystopian Sci-Fi",
            //             "Psychological Drama",
            //             "Drama",
            //             "Mystery",
            //             "Sci-Fi"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "London, England, UK"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0318834",
            //                 "name": "AMC Studios"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Drama",
            //             "Mystery",
            //             "Sci-Fi"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.1,
            //         "numVotes": 187485,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt9813792",
            //         "url": "https://www.imdb.com/title/tt9813792/",
            //         "primaryTitle": "From",
            //         "originalTitle": "From",
            //         "type": "tvSeries",
            //         "description": "Unravel the mystery of a city in middle U.S.A. that imprisons everyone who enters. As the residents struggle to maintain a sense of normality and seek a way out, they must also survive the threats of the surrounding forest.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BYzM5ZWMxOGEtZjEyMC00YjQ0LThiYjEtZjVkZGEzN2NlOGEwXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYzM5ZWMxOGEtZjEyMC00YjQ0LThiYjEtZjVkZGEzN2NlOGEwXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYzM5ZWMxOGEtZjEyMC00YjQ0LThiYjEtZjVkZGEzN2NlOGEwXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=pDHqAj4eJcM",
            //         "contentRating": "TV-MA",
            //         "startYear": 2022,
            //         "endYear": null,
            //         "releaseDate": "2022-02-20",
            //         "interests": [
            //             "Psychological Horror",
            //             "Supernatural Horror",
            //             "Drama",
            //             "Horror",
            //             "Mystery",
            //             "Sci-Fi",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Halifax, Nova Scotia, Canada"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0295628",
            //                 "name": "AGBO"
            //             },
            //             {
            //                 "id": "co0351819",
            //                 "name": "Epix Studios"
            //             },
            //             {
            //                 "id": "co0118337",
            //                 "name": "MGM International TV Productions"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Drama",
            //             "Horror",
            //             "Mystery"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 7.8,
            //         "numVotes": 144556,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt18923754",
            //         "url": "https://www.imdb.com/title/tt18923754/",
            //         "primaryTitle": "Daredevil: Born Again",
            //         "originalTitle": "Daredevil: Born Again",
            //         "type": "tvSeries",
            //         "description": "Matt Murdock finds himself on a collision course with Wilson Fisk when their past identities begin to emerge.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMDRiNTBlY2EtZmRiZC00Mzc4LTljZDctNWQ5ZGY2NjUwNjE4XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMDRiNTBlY2EtZmRiZC00Mzc4LTljZDctNWQ5ZGY2NjUwNjE4XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMDRiNTBlY2EtZmRiZC00Mzc4LTljZDctNWQ5ZGY2NjUwNjE4XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=7xALolZzhSM",
            //         "contentRating": "TV-MA",
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-03-04",
            //         "interests": [
            //             "Gangster",
            //             "Legal Drama",
            //             "Legal Thriller",
            //             "Martial Arts",
            //             "Psychological Drama",
            //             "Psychological Thriller",
            //             "Superhero",
            //             "Action",
            //             "Crime",
            //             "Drama"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.hotstar.com/in/shows/daredevil-born-again/1271337449"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "New York City, New York, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0161074",
            //                 "name": "20th Television"
            //             },
            //             {
            //                 "id": "co0343439",
            //                 "name": "Corman & Ord"
            //             },
            //             {
            //                 "id": "co0051941",
            //                 "name": "Marvel Studios"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Action",
            //             "Crime",
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.1,
            //         "numVotes": 66197,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt13592494",
            //         "url": "https://www.imdb.com/title/tt13592494/",
            //         "primaryTitle": "The Bombing of Pan Am 103",
            //         "originalTitle": "The Bombing of Pan Am 103",
            //         "type": "tvMiniSeries",
            //         "description": "Based on the events surrounding the 1988 Lockerbie bombing. Lockerbie will focus on the investigation into the crash on both sides of the Atlantic and the devastating effect it had on the small town and the families who lost loved ones.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BZWQ3OWI3MTAtNGE0MC00Mjg4LTljY2EtZWVkNmEwN2Y3ZGM0XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZWQ3OWI3MTAtNGE0MC00Mjg4LTljY2EtZWVkNmEwN2Y3ZGM0XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZWQ3OWI3MTAtNGE0MC00Mjg4LTljY2EtZWVkNmEwN2Y3ZGM0XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": null,
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-05-18",
            //         "interests": [
            //             "Docudrama",
            //             "Tragedy",
            //             "Action",
            //             "Drama",
            //             "History",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US",
            //             "GB",
            //             "DE",
            //             "DK"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Lockerbie, Dumfries and Galloway, Scotland, UK"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co1075114",
            //                 "name": "BBC"
            //             },
            //             {
            //                 "id": "co0269801",
            //                 "name": "ITV Studios"
            //             },
            //             {
            //                 "id": "co0071026",
            //                 "name": "MGM Television"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Action",
            //             "Drama",
            //             "History"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 7.4,
            //         "numVotes": 809,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt2802850",
            //         "url": "https://www.imdb.com/title/tt2802850/",
            //         "primaryTitle": "Fargo",
            //         "originalTitle": "Fargo",
            //         "type": "tvSeries",
            //         "description": "Various chronicles of deception, intrigue, and murder in and around frozen Minnesota. All of these tales mysteriously lead back one way or another to Fargo, North Dakota.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMjMzMTIzMTUwN15BMl5BanBnXkFtZTgwNjE0NTg0MTE@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMjMzMTIzMTUwN15BMl5BanBnXkFtZTgwNjE0NTg0MTE@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMjMzMTIzMTUwN15BMl5BanBnXkFtZTgwNjE0NTg0MTE@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=FXIeYKlMA_0",
            //         "contentRating": "TV-MA",
            //         "startYear": 2014,
            //         "endYear": 2024,
            //         "releaseDate": "2014-04-15",
            //         "interests": [
            //             "Dark Comedy",
            //             "Psychological Drama",
            //             "Psychological Thriller",
            //             "Crime",
            //             "Drama",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.facebook.com/FargoFX",
            //             "https://www.instagram.com/fargo/"
            //         ],
            //         "spokenLanguages": [
            //             "en",
            //             "de",
            //             "ko",
            //             "es",
            //             "fr",
            //             "uk",
            //             "he",
            //             "ru"
            //         ],
            //         "filmingLocations": [
            //             "Calgary, Alberta, Canada"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0071026",
            //                 "name": "MGM Television"
            //             },
            //             {
            //                 "id": "co0216537",
            //                 "name": "FX Productions"
            //             },
            //             {
            //                 "id": "co0269852",
            //                 "name": "26 Keys Productions"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Crime",
            //             "Drama",
            //             "Thriller"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.8,
            //         "numVotes": 446147,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt0388629",
            //         "url": "https://www.imdb.com/title/tt0388629/",
            //         "primaryTitle": "One Piece",
            //         "originalTitle": "One Piece: Wan pîsu",
            //         "type": "tvSeries",
            //         "description": "Rubber-bodied dreamer Monkey D. Luffy gathers an eclectic pirate crew and braves the perilous Grand Line, battling tyrants and monsters to claim the legendary \"One Piece\" and become King of the Pirates.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=1KMcoJBMWE4",
            //         "contentRating": "TV-14",
            //         "startYear": 1999,
            //         "endYear": null,
            //         "releaseDate": "1999-10-20",
            //         "interests": [
            //             "Action Epic",
            //             "Adult Animation",
            //             "Adventure Epic",
            //             "Anime",
            //             "Fantasy Epic",
            //             "Globetrotting Adventure",
            //             "Martial Arts",
            //             "Quest",
            //             "Sea Adventure",
            //             "Shōnen"
            //         ],
            //         "countriesOfOrigin": [
            //             "JP"
            //         ],
            //         "externalLinks": [
            //             "http://onepieceofficial.com/"
            //         ],
            //         "spokenLanguages": [
            //             "ja"
            //         ],
            //         "filmingLocations": [],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0062107",
            //                 "name": "Toei Animation"
            //             }
            //         ],
            //         "budget": 10000000,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Action",
            //             "Adventure",
            //             "Animation"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 9,
            //         "numVotes": 300262,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt3914054",
            //         "url": "https://www.imdb.com/title/tt3914054/",
            //         "primaryTitle": "We Were Liars",
            //         "originalTitle": "We Were Liars",
            //         "type": "tvSeries",
            //         "description": "The story of a 17 year old girl from a wealthy family. Cady Sinclair spends her summers on a private island. After suffering a terrible accident she struggles to remember events that happened in her past.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BZDQ1NWI4YTktMjYyYi00NTExLTkwZjItYzAzNDUyZTIzMDA3XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZDQ1NWI4YTktMjYyYi00NTExLTkwZjItYzAzNDUyZTIzMDA3XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BZDQ1NWI4YTktMjYyYi00NTExLTkwZjItYzAzNDUyZTIzMDA3XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": null,
            //         "contentRating": null,
            //         "startYear": 2025,
            //         "endYear": null,
            //         "releaseDate": "2025-06-18",
            //         "interests": [
            //             "Psychological Thriller",
            //             "Drama",
            //             "Mystery",
            //             "Romance",
            //             "Thriller"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "Dartmouth, Nova Scotia, Canada"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0319272",
            //                 "name": "Amazon Studios"
            //             },
            //             {
            //                 "id": "co0429120",
            //                 "name": "My So-Called Company"
            //             },
            //             {
            //                 "id": "co0046592",
            //                 "name": "Universal Television"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Drama",
            //             "Mystery",
            //             "Romance"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 6.9,
            //         "numVotes": 19,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt1442437",
            //         "url": "https://www.imdb.com/title/tt1442437/",
            //         "primaryTitle": "Modern Family",
            //         "originalTitle": "Modern Family",
            //         "type": "tvSeries",
            //         "description": "Three different, but related, families face trials and tribulations in their own uniquely comedic ways.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BYzFlOWFjNzQtODViNC00NzgzLThhZmItZTc1N2VlZDgwODUwXkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYzFlOWFjNzQtODViNC00NzgzLThhZmItZTc1N2VlZDgwODUwXkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYzFlOWFjNzQtODViNC00NzgzLThhZmItZTc1N2VlZDgwODUwXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=rbpTUPisA78",
            //         "contentRating": "TV-PG",
            //         "startYear": 2009,
            //         "endYear": 2020,
            //         "releaseDate": "2009-09-23",
            //         "interests": [
            //             "Mockumentary",
            //             "Sitcom",
            //             "Comedy",
            //             "Drama",
            //             "Romance"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "http://abc.go.com/shows/modern-family"
            //         ],
            //         "spokenLanguages": [
            //             "en",
            //             "es",
            //             "zh",
            //             "it"
            //         ],
            //         "filmingLocations": [
            //             "Los Angeles County, California, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0226603",
            //                 "name": "Levitan / Lloyd"
            //             },
            //             {
            //                 "id": "co0056447",
            //                 "name": "20th Century Fox Television"
            //             },
            //             {
            //                 "id": "co0051053",
            //                 "name": "Steven Levitan Productions"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Comedy",
            //             "Drama",
            //             "Romance"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.5,
            //         "numVotes": 518057,
            //         "metascore": null
            //     },
            //     {
            //         "id": "tt0804503",
            //         "url": "https://www.imdb.com/title/tt0804503/",
            //         "primaryTitle": "Mad Men",
            //         "originalTitle": "Mad Men",
            //         "type": "tvSeries",
            //         "description": "A drama about one of New York's most prestigious ad agencies at the beginning of the 1960s, focusing on one of the firm's most mysterious but extremely talented ad executives, Donald Draper.",
            //         "primaryImage": "https://m.media-amazon.com/images/M/MV5BYTNjNjc5OWQtYjMxNC00MzEwLWIxM2UtNjU3NzhkNjZmNGI3XkEyXkFqcGc@.jpg",
            //         "thumbnails": [
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYTNjNjc5OWQtYjMxNC00MzEwLWIxM2UtNjU3NzhkNjZmNGI3XkEyXkFqcGc@._V1_QL75_UX100_CR0,0,100,148_.jpg",
            //                 "width": 100,
            //                 "height": 148
            //             },
            //             {
            //                 "url": "https://m.media-amazon.com/images/M/MV5BYTNjNjc5OWQtYjMxNC00MzEwLWIxM2UtNjU3NzhkNjZmNGI3XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            //                 "width": 280,
            //                 "height": 414
            //             }
            //         ],
            //         "trailer": "https://www.youtube.com/watch?v=m7NChV93LBw",
            //         "contentRating": "TV-MA",
            //         "startYear": 2007,
            //         "endYear": 2015,
            //         "releaseDate": "2007-07-19",
            //         "interests": [
            //             "Epic",
            //             "Period Drama",
            //             "Workplace Drama",
            //             "Drama"
            //         ],
            //         "countriesOfOrigin": [
            //             "US"
            //         ],
            //         "externalLinks": [
            //             "https://www.facebook.com/MadMen",
            //             "https://twitter.com/madmen_amc"
            //         ],
            //         "spokenLanguages": [
            //             "en"
            //         ],
            //         "filmingLocations": [
            //             "New York City, New York, USA"
            //         ],
            //         "productionCompanies": [
            //             {
            //                 "id": "co0026995",
            //                 "name": "Lionsgate Television"
            //             },
            //             {
            //                 "id": "co0247554",
            //                 "name": "Weiner Bros."
            //             },
            //             {
            //                 "id": "co0019701",
            //                 "name": "American Movie Classics (AMC)"
            //             }
            //         ],
            //         "budget": null,
            //         "grossWorldwide": null,
            //         "genres": [
            //             "Drama"
            //         ],
            //         "isAdult": false,
            //         "runtimeMinutes": null,
            //         "averageRating": 8.7,
            //         "numVotes": 276272,
            //         "metascore": null
            //     }
            // ]
            // console.log(result)
            dispatch(
                ((tvseries) => {
                    return {
                        type: actions.GET_TVSERIES,
                        payload: tvseries,
                    }
                })(result)
            )
        }
        catch (error) {
            console.log(error)
        }
    }
}

