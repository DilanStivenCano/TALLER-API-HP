var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import "./components/index.js";
import { AttributeCard } from "./components/Card/Card.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.cards = [];
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = 'https://hp-api.herokuapp.com/api/characters';
            let response = yield fetch(url);
            let character = yield response.json();
            character.slice(0, 3).forEach((e) => {
                const card = this.ownerDocument.createElement("my-card");
                card.setAttribute(AttributeCard.name, e.name);
                card.setAttribute(AttributeCard.house, e.house);
                card.setAttribute(AttributeCard.gender, e.gender);
                card.setAttribute(AttributeCard.species, e.species);
                card.setAttribute(AttributeCard.actor, e.actor);
                card.setAttribute(AttributeCard.image, e.image);
                this.cards.push(card);
            });
            this.render();
        });
    }
    render() {
        var _a;
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;
            for (let i = 0; i < this.cards.length; i++) {
                const element = this.cards[i];
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(element);
            }
        }
    }
}
customElements.define("app-container", AppContainer);
function ObtenerApi() {
    throw new Error("Function not implemented.");
}
