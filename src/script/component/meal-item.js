class MealItem extends HTMLElement {
 
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    set meal(meal) {
        this._meal = meal;
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
                display: flex;
                flex: 0 1 calc(33.3% - 1em);
                flex-direction: column;
                margin-bottom: 40px;
            }

            .card {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                margin-left: 10px;
                background: rgb(253, 246, 236);
                box-shadow: 5px 3px 10px 5px rgba(0,0,0,0.6);
                transition: 0.3s;
            }

            .card-image {
                display: block;
                overflow: hidden;
                border-bottom: 3px solid rgb(54, 21, 0);
            }

            .card-image > img {
                object-fit: cover;
                object-position: center;
                display: block;
                width: 100%;
                transition: all 1.5s ease;
            }

            .card-image > img:hover { 
                transform: scale(1.2); 
            }

            .card-title {
                padding: 0 10px;
                font-size: 21px;
                font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
                color: rgb(54, 21, 0);
            }

            .card-category {
                width: 50%;
                background: linear-gradient(to bottom, rgb(28, 10, 0), rgb(54, 21, 0));
                color:  rgb(253, 246, 236);
                font-size: 11.5px;
                margin: 0 0 10px;
                padding: 5px 9px; 
                align-self: flex-end;
                text-align: center;
            }

            .card-description {
                text-align: justify;
                font-size: 14px;
                line-height: 25px;
                padding: 0 10px;
                margin-top: 10px;
                overflow: scroll;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 7;
            }

            .card:hover {
                transform: scale(1.03);
                box-shadow: 0 0 40px -10px rgba(0, 0, 0, 0.25);
            }

            @media screen and (min-width: 630px) and (max-width: 1039px) {
                :host {
                    flex: 0 1 calc(46% - 1em);
                }
            }

            @media screen and (max-width: 600px) {
                :host {
                    flex: 0 1 calc(100% - 2em); 
                }

                .card-image > img:hover { 
                    transform: none; 
                }
            }
        </style>
        <div class="card">
            <a class="card-image">
                <img src="${this._meal.strMealThumb}" alt="Meal Thumbnail">
            </a>
                
            <div class="card-category">
                <h3>${this._meal.strCategory}</h3>
            </div>
            
            <h2 class="card-title">${this._meal.strMeal}</h2>

            <div class="card-description">
                <p>${this._meal.strInstructions}</p>
            </div>
        </div>`;
    }
}
  
customElements.define("meal-item", MealItem);