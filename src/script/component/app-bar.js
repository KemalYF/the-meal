class AppBar extends HTMLElement {
 
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    connectedCallback(){
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
                width: 100%;
                background: linear-gradient(to left, rgb(28, 10, 0), rgb(54, 21, 0));
                color: white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.7);
                display: flex;
                align-items: center;
                justify-content: center;
            }

            h2 {
                padding: 10px;
                font-size: 40px;
                font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
                color: rgb(247, 110, 17);
            }
        </style>
        <h2>The Meal</h2>`;
    }
}
  
customElements.define("app-bar", AppBar);