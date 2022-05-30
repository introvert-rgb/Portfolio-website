import Template from "./Template.js";

export default class Navbar extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = Template.render();
    }
}
if (!customElements.get('navbar-app')) {
    customElements.define('navbar-app', Navbar);
}