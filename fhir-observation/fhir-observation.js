import { LitElement, html } from "lit";

class FhirObservation extends LitElement {
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
      FhirObservation <span class="color">${this.test}</span>!
    `;
  }
}

window.customElements.define("fhir-observation", FhirObservation);
