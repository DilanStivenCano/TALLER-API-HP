export enum AttributeCard {
    "name" = "name",
    "house" = "house",
    "species" = "species",
    "actor" = "actor",
    "gender" = "gender",
    "image" = "image"
}

class MyCard extends HTMLElement{
    name?: string;
    house?: string;
    species?: string;
    actor?: string;
    gender?: string;
    image?: string;

    static get observedAttributes(){
        const attrs: Record<AttributeCard,null> = {
            name: null,
            house: null,
            species: null,
            actor: null,
            gender: null,
            image: null
        };
        return Object.keys(attrs);
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: AttributeCard, 
        oldValue: string | undefined, 
        newValue: any | undefined){
            switch (propName) {
                default:
                    this[propName] = newValue;
                    break;
                }
            this.render();
        }

    render(){
        if(this.shadowRoot){
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
            `
        }
    }

}

customElements.define("my-card", MyCard);
export default MyCard;