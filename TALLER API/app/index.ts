import "./components/index.js";
import MyCard, {AttributeCard} from "./components/Card/Card.js";

class AppContainer extends HTMLElement{
    cards: MyCard[] = [];

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    async connectedCallback(){
        const url = 'https://hp-api.herokuapp.com/api/characters';
        let response = await fetch(url);
        let character = await response.json();

        character.slice(0, 3).forEach((e: {name: string; house: string; species: any; actor: any; gender: string; image: string;}) => {
            const card = this.ownerDocument.createElement("my-card") as MyCard;
            card.setAttribute(AttributeCard.name, e.name);
            card.setAttribute(AttributeCard.house, e.house);
            card.setAttribute(AttributeCard.gender, e.gender);
            card.setAttribute(AttributeCard.species, e.species);
            card.setAttribute(AttributeCard.actor, e.actor);
            card.setAttribute(AttributeCard.image, e.image);
            this.cards.push(card);
        });
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = ``;
            for (let i = 0; i < this.cards.length; i++) {
                const element = this.cards[i];
                this.shadowRoot?.appendChild(element);
            }
        }
    }
}

customElements.define("app-container", AppContainer);

function ObtenerApi() {
    throw new Error("Function not implemented.");
}
