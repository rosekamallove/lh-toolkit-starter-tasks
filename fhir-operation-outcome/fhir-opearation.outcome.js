import { LitElement, html } from "lit";

class FhirOperationOutcome extends LitElement {
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
      FhirOperationOutcome <span class="color">${this.test}</span>!
    `;
  }
}

window.customElements.define("fhir-operation-outcome", FhirOperationOutcome);
