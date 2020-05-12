class movieItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode:"open"});
    }

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            :host {
                display: block;
                box-shadow: 0 0 8px 0 rgba(100, 97, 97, 0.685);
                margin-bottom: 20px;
                margin-top: 20px;
                margin-left: 20px;
                width: 100%;
                max-height: 100%;
                background-color: black;
                border: 2px solid white;
            }
            .box {
                width: 100%;
                height: 200px;
                background: rgb(34, 34, 34);
                margin-left: 5px;
                margin-top: 20px;
                margin-bottom: 5px;
                border: 2px solid white;
                border-radius: 5px;
                overflow: auto;
                color: white;
            }

            .box-title {
                width: 100%;
                height: 80px;
                background: transparent;
                margin-left: 5px;
                margin-top: 20px;
                margin-bottom: 5px;
                color: white;
            }
            
            .center-btn {
                text-align: center;
                margin-bottom: 20px;
            }

            .btn {
                box-sizing: content-box;
                background: rgb(14, 220, 235);
                border-radius: 5px;
                cursor: pointer;
                color: white;
                line-height: 2;
                padding: 5px;
                text-decoration: none;
                text-align: center;
                width: 250px;
            }

            .details {
                border-color: #3498db;
                color: #fff;
                box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
                transition: all 150ms ease-in-out;
            }
            .details:hover {
                box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
            }

            .movie-poster {
                height: 500px;
                padding-left: 10px;
                padding-top: 10px;
                padding-right: 10px;     
            }
            .movie-info {
                padding: 20px;
                width: 100%;
            }
            .movie-info > h2 {
                font-weight: Bold;
                color: white;
                text-transform: uppercase;
                text-align: center;
            }

            .movie-info > p {
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 10;
                color: white;
                text-align: justify;
            }

            #rating {
                margin-top: 20px;
                font-weight: 300px;
                font-family: 'Fugaz One';
            }

            

            
     </style>
     <div class ="item-container">
        <img onerror="this.onerror=null;this.src='https://image.freepik.com/free-vector/coming-soon-message-illuminated-with-light-projector_1284-3622.jpg';" class = "movie-poster" src="https://image.tmdb.org/t/p/w500${this._movie.poster_path}" alt="Movie Poster">
        <div class = "movie-info">
            <h2 class="box-title">${this._movie.title}</h2>
            <div class="movie-info box">
                <p>Sinopsis: ${this._movie.overview}</p>
                <p id="rating">Rating: ${this._movie.vote_average}</p>
            </div>
        </div>
    </div>
        <div class="center-btn">
            <a onclick class= "btn details" href="https://www.themoviedb.org/movie/${this._movie.id}-${this._movie.title}">Movie Details from TMDB</a>
        </div>
    </div>
        `;
        
    } 
}

customElements.define("movie-item", movieItem);