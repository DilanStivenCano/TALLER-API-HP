export var AttributeCard;
(function (AttributeCard) {
    AttributeCard["name"] = "name";
    AttributeCard["house"] = "house";
    AttributeCard["species"] = "species";
    AttributeCard["actor"] = "actor";
    AttributeCard["gender"] = "gender";
    AttributeCard["image"] = "image";
})(AttributeCard || (AttributeCard = {}));
class MyCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            name: null,
            house: null,
            species: null,
            actor: null,
            gender: null,
            image: null
        };
        return Object.keys(attrs);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./components/Card/Card.css">
            <section class="container">
                <img src="${this.image}">
                <div class="info">    
                    <h2>${this.name}</h2>
                    <p class="statusInfo">${this.house} - ${this.species}</p>
                    <p class="tittles">Gender :</p>
                    <p class="genderInfo">${this.gender}</p>
                    <p class="tittles">Actor:</p>
                    <p class="genderInfo">${this.actor}</p>
                </div>
            </section>
            `;
        }
    }
}
customElements.define("my-card", MyCard);
export default MyCard;
