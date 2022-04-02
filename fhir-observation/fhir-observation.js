import { PolymerElement } from "@polymer/polymer";
import { html } from "@polymer/polymer";

class FhirObservation extends PolymerElement {
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
      FhirObservation <span class="color">[[test]]</span>!
    `;
  }
}

customElements.define("fhir-observation", FhirObservation);
