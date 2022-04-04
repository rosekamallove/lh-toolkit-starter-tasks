import { LitElement, html } from "lit";
import "@material/mwc-formfield/mwc-formfield.js";
import "@material/mwc-checkbox/mwc-checkbox.js";

class ActiveStatus extends LitElement {
  static get properties() {
    return {
      activeStatus: { type: String },
      url: { type: String },
      value: { type: Boolean, reflect: true },
    };
  }

  constructor() {
    super();
    this.activeStatus = "true";
    this.value = false;
  }

  render() {
    console.log(this.activeStatus);
    return html`
      <div id="activeDiv">
        ${this.activeStatus !== "false"
          ? html`<mwc-formfield
              class="activeStatus"
              alignEnd
              label="Active-Status:"
            >
              <mwc-checkbox
                id="active"
                ?checked="${this.value}"
                class="activeState"
                @click="${(e) => (this.value = !e.target.checked)}"
              ></mwc-checkbox>
            </mwc-formfield>`
          : ""}
      </div>
    `;
  }
}

window.customElements.define("active-status", ActiveStatus);
