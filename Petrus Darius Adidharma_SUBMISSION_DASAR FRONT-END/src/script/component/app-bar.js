class appBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode:"open"})
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML =`
        <style>
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                padding: 20px;
                display: block;
                width: 100%;
                height: 70px;   
                background-color: orange;
                color: black;
                font-family: 'Sigmar One';
                text-align: center;
            }
        </style>
        <h1>Welcome to Movie List</h1>`
    }
}

customElements.define("app-bar", appBar);