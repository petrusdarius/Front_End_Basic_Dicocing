import movies from './movies.js';

class DataSource extends HTMLElement {
    static searchMovie(keyword) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=87d6a8474dd327830f72c2ae6fff5253&query=${keyword}`)
        .then(response => {
            return response.json()
        })

        .then(responseJson =>{
            if(responseJson.results) {
                return Promise.resolve(responseJson.results)
            } else {
                return Promise.reject(`${keyword} is not found`);
            }
        }) 
    }
}

export default DataSource;