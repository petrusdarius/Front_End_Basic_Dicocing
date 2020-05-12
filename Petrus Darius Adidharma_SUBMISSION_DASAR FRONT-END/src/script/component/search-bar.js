class searchBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode:"open"})
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#searchElements").value
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        .search-container {
            margin-top: 10px;
            margin-left: 500px;
            width: 500px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            padding: 16px;
            border-radius: 5px;
            display: flex;
            top: 10px;
            background-color: black;
        }

        .search-container > input {
            width: 75%;
            padding: 16px;
            border: 0;
            border-bottom: 1px solid black;
            font-weight: bold;
        }

        .search-container > input:focus {
            outline: 0;
            border-bottom: 2px solid red;
        }

        .search-container > input::placeholder {
            font-weight: bold;
        }

        .search-container > button {
            width: 23%;
            cursor: pointer;
            margin-left: auto;
            padding: 16px;
            background-color: transparent;
            outline: none;
            color: red;
            border: 0;
            text-transform: uppercase;
            border-radius: 5px;
        }

        #searchButtonElement {
            border: 2px solid red;
            transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
            
        }

        #searchButtonElement:hover {
            background: red;
            color: white;
            font-weight: bold;
            box-shadow: 0 0 40px 40px red inset;
        }


        @media screen and (max-width: 920px) {
            .search-container {
                flex-direction: column;
                position: static;
                margin-left: auto;
                margin-right: auto;
            }

            .search-container > input {
                width: 100%;
                margin-bottom: 12px;
            }

            .search-container > button {
                width: 100%
            }
        }
        </style>
        <div id="search-container" class="search-container">
        <input placeholder="Search Movie" id="searchElements" type="search">
         <button id="searchButtonElement" type="submit">Search</button>
     </div>`
        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", searchBar);