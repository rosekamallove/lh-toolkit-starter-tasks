import { LitElement, html } from "lit";

class FhirPatient extends LitElement {
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
      FhirGetPatient <span class="color">${this.test}</span>!
    `;
  }
}

window.customElements.define("fhir-get-patient", FhirPatient);
