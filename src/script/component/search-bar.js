class SearchBar extends HTMLElement {
 
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    connectedCallback(){
        this.render();
    }
   
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
  
    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>         
            .search-container {
                display: flex;
                position: sticky;
                max-width: 950px;
                height: 100%;
                text-align: center;
                padding: 7px;
                border-radius: 10px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.7);
                top: 10px;
                background: linear-gradient(to left, rgb(28, 10, 0), rgb(54, 21, 0));
                z-index: 1;
            }

            .search-container > input {
                background: linear-gradient(to right, rgb(32, 50, 57), rgb(20, 30, 39));
                border: 1px solid rgb(117, 54, 9);
                border-radius: 5px 0 0 5px;
                box-shadow: 0 2px 0 rgba(0, 0, 0, 0.7);
                color: rgb(253, 246, 236);
                display: block;
                font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
                font-size: 20px;
                font-weight: bold;
                height: 50px;
                width: 95%;
                padding: 20px;
            }

            .search-container > input:focus {
                animation: shine 850ms ease-out infinite alternate;
                background: linear-gradient(to right, rgb(32, 50, 57), rgb(20, 30, 39));
                color: rgb(253, 246, 236);
                outline: none;
            }
            
            .search-container > input:focus::placeholder {
                font-weight: bold;
            }
            
            .search-container > input::placeholder {
                color: rgb(128, 128, 128);
                font-weight: normal;
            }
            
            input[type=search]:hover{
                border:2px solid rgb(117, 54, 9);
                box-shadow: 0 0 5px rgb(117, 54, 9), inset 0 0 5px rgb(117, 54, 9), 0 2px 0 rgb(0, 0, 0);
            }
            
            .search-container > button {
                background: linear-gradient(to left, rgb(32, 50, 57), rgb(20, 30, 39));
                border: 1px solid rgb(117, 54, 9);
                border-left-color: rgb(0, 0, 0);
                border-radius: 0 5px 5px 0;
                box-shadow: 0 2px 0 rgba(0, 0, 0, 0.7);
                color: rgb(128, 128, 128);
                display: block;
                font-size: 18px;
                font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
                height: 50px;
                width: 20%;
                cursor: pointer;
            }	
            
            .search-container > button:hover,
            .search-container > button:focus {
                background: linear-gradient(to top left, rgb(50, 50, 50), rgb(4, 41, 58));
                color: rgb(247, 110, 17);
                box-shadow: 0 0 5px rgb(141, 59, 12);
                outline: none;
            }
            
            .search-container > button:active {
                background: linear-gradient(to top left, rgb(50, 50, 50), rgb(4, 41, 58));
                box-shadow: 0 1px 0 rgb(141, 59, 12);
                transform: scale(1.03);
            }

            @keyframes shine {
                0% {
                    border-color: rgb(92, 42, 13);
                    box-shadow: 0 0 5px rgb(141, 59, 12), inset 0 0 5px rgb(141, 59, 11), 0 2px 0 rgb(0, 0, 0);
                }

                100% {
                    border-color: rgb(247, 110, 17);
                    box-shadow: 0 0 20px rgb(247, 110, 17), inset 0 0 10px rgb(247, 110, 15), 0 2px 0 rgb(0, 0, 0);
                }
            }

            @media screen and (max-width: 550px){
                .search-container {
                    flex-direction: column;
                    position: static;
                }
            
                .search-container > input {
                    width: 100%;
                    margin-bottom: 12px;
                    background: linear-gradient(to top, rgb(50, 50, 50), rgb(4, 41, 58));
                }
            
                .search-container > button {
                    width: 100%;
                    background: linear-gradient(to bottom, rgb(50, 50, 50), rgb(4, 41, 58));
                }
            }
        </style>
        <div id="search-container" class="search-container">
            <input placeholder="Search Meals..." id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Search</button>
        </div>`;
  
        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}
  
customElements.define("search-bar", SearchBar);