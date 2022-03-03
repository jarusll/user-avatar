class UserAvatar extends HTMLElement {

    constructor() {
        super()
        this.root = this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.name = this.getAttribute('name') || ""
        this.image = this.getAttribute('image') || ""
        this.title = this.getAttribute('title') || ""
        this.root.innerHTML = `
            <style>
                @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap');

                #container {
                    text-align: center;
                    font-family: 'IBM Plex Sans', sans-serif;
                }
                #name {
                    font-weight: 700;
                    padding: 0.5rem;
                    margin-bottom: 0.2rem;
                }
                #image {
                    border-radius: 100%;
                    height: 200px;
                }
                #title {
                    margin-top: 0.2rem;
                    font-weight: 200;
                }
            </style>
            <div id="container">
                <h2 id="name">${this.name}</h2>
                <img id="image" src="${this.image}" />
                <h4 id="title">${this.title}</h4>
            </div>
        `
    }
}

customElements.define("user-avatar", UserAvatar)