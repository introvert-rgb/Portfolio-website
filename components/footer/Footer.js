import Template from "./Template.js";

export default class Footer extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = Template.render();
    }
}
if (!customElements.get('footer-app')) {
    customElements.define('footer-app', Footer);
}