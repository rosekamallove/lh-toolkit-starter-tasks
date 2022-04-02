import { PolymerElement } from "@polymer/polymer";
import { html } from "@polymer/polymer";

class FhirOperationOutcome extends PolymerElement {
  static get properties() {
    return { test: String };
  }

  static get template() {
    return html`
      <style>
        .color {
          color: #2ecc71;
        }
      </style>
      FhirOperationOutcome <span class="color">[[test]]</span>!
    `;
  }
}

customElements.define("fhir-operation-outcome", FhirOperationOutcome);
