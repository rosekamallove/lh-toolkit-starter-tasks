import { html, LitElement } from "lit";

class GetPatient extends LitElement {
  static get properties() {
    return { test: String };
  }

  render() {
    return html`
      <style>
        .color {
          color: #2ecc71;
        }
      </style>
      GetPatient <span class="color">${this.test}</span>!
    `;
  }
}

window.customElements.define("get-patient", GetPatient);
