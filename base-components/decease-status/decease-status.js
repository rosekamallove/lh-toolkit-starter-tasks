import { LitElement, html } from "lit";
import "../period/period.js";
import "@material/mwc-formfield/mwc-formfield.js";
import "@material/mwc-checkbox/mwc-checkbox.js";

class DeceaseStatus extends LitElement {
  static get properties() {
    return {
      deceaseStatus: { type: String },
      periodField: { type: String },
      url: { type: String },
      value: { type: Boolean, reflect: true },
    };
  }

  constructor() {
    super();
    this.deceaseStatus = "true";
    this.value = false;
    this.periodField = "false";
  }

  render() {
    return html`
      <div id="div">
        ${this.deceaseStatus !== "false"
          ? html`<mwc-formfield
              class="deceaseStatus"
              alignEnd
              label="Deceased Status:"
            >
              <mwc-checkbox
                class="decease"
                ?checked="${this.value}"
                @click="${(e) => (this.value = !e.target.checked)}"
              ></mwc-checkbox>
            </mwc-formfield>`
          : ""}
        ${this.periodField !== "false"
          ? html`<fhir-period class="periodField"></fhir-period>`
          : ""}
      </div>
    `;
  }
}

window.customElements.define("decease-status", DeceaseStatus);
