import Template from "../card/Template.js";

export default class CardApp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = Template.render()
        this.shadowRoot.querySelector('.card-title').innerHTML = this.getAttribute('head');

        this.shadowRoot.querySelector('.card-detail').innerHTML = this.getAttribute('detail');

        this.shadowRoot.querySelector('.card-container').style.backgroundImage = this.getAttribute('bgPic');
        this.shadowRoot.querySelector('.git-link').href = this.getAttribute('pageLink');
    }
}
if (!customElements.get('project-card')) {
    customElements.define('project-card', CardApp);
}